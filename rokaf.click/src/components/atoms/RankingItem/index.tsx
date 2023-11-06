import { Fragment, useEffect, useState } from "react";
import { useTimeoutFn } from "react-use";
import { LogoImage } from "../LogoImage";
import { Transition } from '@headlessui/react'

interface RankingItemProps {
    rank: number
    id: number
    name: string
    score: number
    logoSrc: string
}

export const RankingItem = ({rank, name, score, logoSrc}:RankingItemProps) => {
    const [isShowing, setIsShowing] = useState(true)
    const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 50)

    useEffect(() => {
        setIsShowing(false)
        resetIsShowing()
    }, [score])

    return (
            <div className="relative
                            items-center w-full h-10 pl-2 rounded hover:bg-gray-100
                            transition ease-in-out duration-150
                            hover:scale-[1.06] active:scale-[1.03]
                            flex">
                <p className="text-sm px-8 w-12">
                                {(rank == 1) ? '🥇' : ((rank == 2) ? '🥈' : (rank == 3) ? '🥉' : rank)}
                </p>
                <LogoImage logoSrc={logoSrc} size={30}/>
                <div className="grid grid-cols-3 place-items-center w-full">
                    <p className="place-self-start col-span-2 text-sm px-4">{name}</p>
                    <Transition
                    as={Fragment}
                    show={isShowing}
                    enter="transform transition duration-[100ms] ease-in-out"
                    enterFrom="opacity-100 scale-125"
                    enterTo="opacity-100 scale-100"
                    leave="transform transition duration-[100ms] ease-in-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-100 scale-125"
                    >
                        <p className="place-self-end text-sm text-right px-8">{score}</p>
                    </Transition>
                </div>
            </div>
    )
}