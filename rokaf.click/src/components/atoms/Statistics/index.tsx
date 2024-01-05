import { supabase } from "@/app/lib/initSupabase"
import React, { useEffect, useState } from "react"

export const Statistics = () => {
    const [todayClick, setTodayClick] = useState<{click:any}[]>([])
    const [totalClick, setTotalClick] = useState<{click:any}[]>([])
    const [todayClicked, setTodayClicked] = useState<number>(-1)
    const [totalClicked, setTotalClicked] = useState<number>(-1)

    useEffect(() => {
        let total = 0;
        totalClick && totalClick.forEach((c) => {
            total += c.click;
        })
        totalClick && setTotalClicked(total)
    }, [totalClick])

    useEffect(() => {
        let today = 0;
        todayClick && todayClick.forEach((c) => {
            today += c.click;
        })
        todayClick && setTodayClicked(today)
    }, [todayClick])

    const fetchStat = async () => {
        let { data: fetchedTotalClick } = await supabase
            .from('clicks')
            .select('click')
        fetchedTotalClick && setTotalClick(fetchedTotalClick)
        
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        let { data: fetchedTodayClick } = await supabase
            .from('clicks')
            .select('click')
            .gte('created_at', now.toISOString())
        fetchedTodayClick && setTodayClick(fetchedTodayClick)
    }

    // get statistics
    useEffect(() => {
        fetchStat()
    }, [])

    return (
        <div className='absolute bottom-4 right-4
                        transition-all ease-in-out duration-0 hover:w-52 hover:h-auto
                        w-8 h-8 bg-zinc-800/80 rounded-lg p-2
                        group'>
        
            <div className="group-hover:hidden w-full h-full grid place-content-center">
                <svg className="w-6 h-6 group-hover:absolute group-hover:top-2 group-hover:left-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 459.75 459.75">
                    <g>
                        <path d="M447.652,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098v-95.805C459.75,309.546,454.334,304.13,447.652,304.13z"/>
                        <path d="M348.798,258.13H308.66c-6.681,0-12.098,5.416-12.098,12.097v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.097-5.416,12.097-12.098V270.228C360.896,263.546,355.48,258.13,348.798,258.13z"/>
                        <path d="M151.09,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098v-95.805C163.188,309.546,157.771,304.13,151.09,304.13z"/>
                        <path d="M52.236,258.13H12.098C5.416,258.13,0,263.546,0,270.228v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.097-5.416,12.097-12.098V270.228C64.333,263.546,58.917,258.13,52.236,258.13z"/>
                        <path d="M249.944,196.968h-40.138c-6.681,0-12.098,5.416-12.098,12.098v202.967c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098V209.066C262.042,202.384,256.625,196.968,249.944,196.968z"/>
                        <path d="M436.869,244.62c8.14,0,15-6.633,15-15v-48.479c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v12.119L269.52,40.044   c-3.148-3.165-7.536-4.767-11.989-4.362c-4.446,0.403-8.482,2.765-11.011,6.445L131.745,209.185L30.942,144.969   c-6.987-4.451-16.26-2.396-20.71,4.592c-4.451,6.987-2.396,16.259,4.592,20.71l113.021,72c2.495,1.589,5.286,2.351,8.046,2.351   c4.783,0,9.475-2.285,12.376-6.507L261.003,74.025L400.8,214.62h-12.41c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15   c6.71,0,41.649,0,48.443,0H436.869z"/>
                    </g>
                </svg>
            </div>
            
            <div className="hidden group-hover:block overflow-hidden">
                <div className="flex flex-row justify-center w-full h-4">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 459.75 459.75">
                        <g>
                            <path d="M447.652,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098v-95.805C459.75,309.546,454.334,304.13,447.652,304.13z"/>
                            <path d="M348.798,258.13H308.66c-6.681,0-12.098,5.416-12.098,12.097v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.097-5.416,12.097-12.098V270.228C360.896,263.546,355.48,258.13,348.798,258.13z"/>
                            <path d="M151.09,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098v-95.805C163.188,309.546,157.771,304.13,151.09,304.13z"/>
                            <path d="M52.236,258.13H12.098C5.416,258.13,0,263.546,0,270.228v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.097-5.416,12.097-12.098V270.228C64.333,263.546,58.917,258.13,52.236,258.13z"/>
                            <path d="M249.944,196.968h-40.138c-6.681,0-12.098,5.416-12.098,12.098v202.967c0,6.681,5.416,12.098,12.098,12.098h40.138   c6.681,0,12.098-5.416,12.098-12.098V209.066C262.042,202.384,256.625,196.968,249.944,196.968z"/>
                            <path d="M436.869,244.62c8.14,0,15-6.633,15-15v-48.479c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v12.119L269.52,40.044   c-3.148-3.165-7.536-4.767-11.989-4.362c-4.446,0.403-8.482,2.765-11.011,6.445L131.745,209.185L30.942,144.969   c-6.987-4.451-16.26-2.396-20.71,4.592c-4.451,6.987-2.396,16.259,4.592,20.71l113.021,72c2.495,1.589,5.286,2.351,8.046,2.351   c4.783,0,9.475-2.285,12.376-6.507L261.003,74.025L400.8,214.62h-12.41c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15   c6.71,0,41.649,0,48.443,0H436.869z"/>
                        </g>
                    </svg>
                    <a className="grow h-full text-sm text-slate-50 pl-2">클릭 통계</a>
                </div>
                <ul className="w-full list-inside list-disc py-2">
                    <li className="text-xs font-thin text-slate-50 break-all">Today: {todayClicked.toLocaleString()}</li>
                    <li className="text-xs font-thin text-slate-50 break-all">Total: {totalClicked.toLocaleString()}</li>
                </ul>
            </div>
        </div>
    )
}
