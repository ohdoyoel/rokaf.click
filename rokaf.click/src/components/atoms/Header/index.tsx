export const Header = () => {
    return (
        <div className='relative flex flex-col items-center scale-90'>
        <p className='font-thin text-xs absolute left-0 -top-5'>공군 병사가 사지방에서 만든</p>
        <p className='font-black text-6xl'>
            rokaf.click
        </p>
        <p className='font-medium text-base absolute right-0 -bottom-7'>공군 부대 간 클릭 수로 경쟁합니다.</p>
        <p className='font-thin font-black text-xs absolute -bottom-14'>
            클릭 수는 새로고침 시 자동으로 제출됩니다.
        </p>
        </div>
    )
}
