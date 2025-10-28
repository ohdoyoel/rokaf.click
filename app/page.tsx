"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/src/components/atoms/Header";
import { CharacterButtonWithScore } from "@/src/components/organisms/CharacterButtonWithScore";
import { LocationBar } from "@/src/components/organisms/LocationBar";
import { CharacterBar } from "@/src/components/organisms/CharacterBar";
import { RankingBar } from "@/src/components/organisms/RankingBar";
import { Card } from "@/src/components/atoms/Card";
import { Statistics } from "@/src/components/atoms/Statistics";
import { supabase } from "./lib/initSupabase";

export default function Home() {
  const [imageId, setImageId] = useState(1);
  const [imageIdLimit, setImageIdLimit] = useState(1);
  const [locationId, setLocationId] = useState(0);
  const locationIdRef = useRef(0);
  const [score, setScore] = useState(0);
  const [currentMiliseconds, setCurrentMiliseconds] = useState(0);
  const [recentClickedMiliseconds, setRecentClickedMiliseconds] = useState(0);
  const [needToUpdate, setNeedToUpdate] = useState(false);
  const scoreRef = useRef(0);
  const clickStep = [
    10,
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1200,
    1400,
    1600,
    1800,
    2000,
    2200,
    2400,
    2600,
    2800,
    3000,
    3300,
    3600,
    3900,
    4200,
    4500,
    4800,
    5100,
    5400,
    5700,
    6000,
    6400,
    6800,
    7200,
    7600,
    8000,
    8400,
    8800,
    9200,
    9600,
    10000,
    10500,
    11000,
    11500,
    12000,
    12500,
    13000,
    13500,
    14000, // 50
    15000,
    16000,
    18000,
    20000,
  ];
  // const clickStep = [
  //                     1,2,3,4,5,6,7,8,9,10,
  //                     11,12,13,14,15,16,17,18,19,20,
  //                     21,22,23,24,25,26,27,28,29,30,
  //                     31,32,33,34,35,36,37,38,39,40,
  //                     41,42,43,44,45,46,47,48,49,50,
  //                     51,52,53,54
  //                   ]

  //** input : click count -> output : image index (1~54) */
  const imageIndexFromClickCount = (clickCount: number) => {
    for (let i = 0; i < clickStep.length; ++i)
      if (clickCount < clickStep[i]) return i + 1;
    return 54;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const curDate = new Date();
      setCurrentMiliseconds(curDate.getTime());
    }, 10);
    return () => clearInterval(timer);
  }, []);

  // 0.5초 디바운스: 클릭을 멈춘 후 0.5초가 지나면 점수를 서버에 전송
  useEffect(() => {
    if (currentMiliseconds - recentClickedMiliseconds >= 500 && needToUpdate) {
      if (locationIdRef.current !== 0 && scoreRef.current > 0) {
        const scoreToSend = scoreRef.current; // 전송할 점수 스냅샷
        postLocationScore(locationIdRef.current, scoreToSend);
        console.log(`0.5초 후 점수 전송: ${scoreToSend}점`);
      }
      scoreRef.current = 0; // 전송 후 클릭 카운터 리셋
      setNeedToUpdate(false);
    }
  }, [currentMiliseconds]);

  // 점수가 변경될 때마다 이미지 제한 업데이트 및 디바운스 타이머 리셋
  useEffect(() => {
    const _limit = imageIndexFromClickCount(score);
    console.log(_limit);
    imageIdLimit < _limit && setImageIdLimit(_limit);

    // 클릭이 발생했을 때 디바운스 타이머 리셋
    if (scoreRef.current > 0) {
      setRecentClickedMiliseconds(currentMiliseconds);
      setNeedToUpdate(true);
    }
  }, [scoreRef.current]);

  // 점수가 증가할 때마다 클릭 카운터 증가 (디바운스용)
  useEffect(() => {
    scoreRef.current++;
  }, [score]);

  useEffect(() => {
    setImageId(imageIdLimit);
  }, [imageIdLimit]);

  // 부대가 변경될 때 클릭 카운터 리셋 및 현재 부대 ID 저장
  useEffect(() => {
    scoreRef.current = 0; // 새로운 부대 선택 시 클릭 카운터 리셋
    locationIdRef.current = locationId; // 현재 선택된 부대 ID 저장
  }, [locationId]);

  // post location score
  const postLocationScore = async (_id: number, amount: number) => {
    try {
      // clicks 테이블에 클릭 기록 저장
      const { error: clickError } = await supabase.from("clicks").insert({
        location_id: _id,
        click: amount,
        created_at: new Date().toISOString(),
      });

      if (clickError) throw clickError;

      // location_scores 테이블에서 현재 점수 조회
      const { data: currentScore, error: fetchError } = await supabase
        .from("location_scores")
        .select("score")
        .eq("location_id", _id)
        .maybeSingle(); // 행이 없을 경우 null 반환

      if (fetchError) throw fetchError;

      // 현재 점수에 새로 클릭한 점수 추가
      const newTotalScore = (currentScore?.score || 0) + amount;

      // location_scores 테이블에 누적 점수 업데이트 또는 삽입
      const { error: scoreError } = await supabase
        .from("location_scores")
        .upsert(
          {
            location_id: _id,
            score: newTotalScore,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "location_id",
          }
        );

      if (scoreError) throw scoreError;

      console.log(`부대 ${_id}에 ${amount}점 추가, 총점: ${newTotalScore}`);
    } catch (e) {
      console.log("점수 저장 중 오류:", e);
    }
  };

  return (
    <main
      id="root"
      className="flex flex-col items-center justify-between w-screen h-screen pt-16 pb-24"
    >
      <Header />
      <CharacterButtonWithScore
        nextScore={imageIdLimit <= 53 ? clickStep[imageIdLimit - 1] : -1}
        id={imageId <= 54 ? imageId : 54}
        locationId={locationId}
        _setScore={setScore}
      />
      <LocationBar locationId={locationId} setLocationId={setLocationId} />
      <CharacterBar limit={imageIdLimit} setImageId={setImageId} />
      <RankingBar locationId={locationId} score={score} />
      <Card />
      <Statistics />
      <div />
    </main>
  );
}
