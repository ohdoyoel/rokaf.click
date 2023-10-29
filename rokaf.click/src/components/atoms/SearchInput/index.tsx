interface SearchInputProps {
    onKeyUp: () => void
}

export const SearchInput = ({onKeyUp}: SearchInputProps) => {
    return (
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input id="searchInput" type="text" onKeyUp={onKeyUp} className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="부대 이름"/>
            </div>
    )
}