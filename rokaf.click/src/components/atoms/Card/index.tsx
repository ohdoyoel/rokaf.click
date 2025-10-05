import React from "react"

export const Card = () => {
    return (
        <div className='absolute bottom-4 left-4
                        transition-all ease-in-out duration-0 hover:w-52 hover:h-auto
                        w-8 h-8 bg-zinc-800/80 rounded-lg p-2
                        group'>
        
            <div className="group-hover:hidden w-full h-full grid place-content-center">
                <svg className="w-6 h-6 group-hover:absolute group-hover:top-2 group-hover:left-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </div>
            
            <div className="hidden group-hover:block overflow-hidden">
                <div className="flex flex-row justify-center w-full h-4">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <a href="https://github.com/ohdoyoel/" className="grow h-full text-sm text-slate-50 pl-2">ohdoyoel</a>
                </div>
                <ul className="w-full list-inside list-disc py-2">
                    <li className="text-xs font-thin text-slate-50 text-justify break-all">본 저작물은 &lsquo;공군이 내놓은 디자인&rsquo;에서 &lsquo;2023년&rsquo; 작성하여 공공누리 2유형으로 개방한 &lsquo;뚠뚠이 의복캐릭터 (작성자: 병장 이성선)&rsquo;을 이용하였으며 해당 저작물은 &lsquo;공군이 내놓은 디자인, https://afplay2.tistory.com/131&rsquo;에서 무료로 다운받으실 수 있습니다.</li>
                    <li className="text-xs font-thin text-slate-50 text-justify break-all">본 저작물은 &lsquo;공군이 내놓은 디자인&rsquo;에서 &lsquo;2023년&rsquo; 작성하여 공공누리 2유형으로 개방한 &lsquo;대한민국공군 전용서체 (작성자: 대한민국공군)&rsquo;을 이용하였으며 해당 저작물은 &lsquo;공군이 내놓은 디자인, https://afplay2.tistory.com/115&rsquo;에서 무료로 다운받으실 수 있습니다.</li>
                    <li className="text-xs font-thin text-slate-50 text-justify break-all">이 서비스의 부대 정보는 &lsquo;나무위키 공군 편제 (https://namu.wiki/w/대한민국%20공군/편제)&rsquo;와 &lsquo;위키백과 대한민국 공군의 부대 및 편성 목록 (https://ko.wikipedia.org/wiki/대한민국_공군의_부대_및_편성_목록)&rsquo; 문서에 공개되어 있는 정보를 참고하여 작성했습니다.</li>
                    {/* <li className="text-xs font-thin text-slate-50 text-justify break-all">클릭 수는 서버에 자동으로 (실시간으로) 반영되지 않습니다. &lsquo;새로고침&rsquo;, &lsquo;창닫기&rsquo; 또는 &lsquo;부대 바꾸기&rsquo;를 하셔야 서버에 점수가 반영됩니다. 서비스 이용에 주의를 바랍니다.</li> */}
                </ul>
            </div>
        </div>
    )
}
