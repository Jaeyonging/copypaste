import React from 'react'

interface Props{
    summary: string
}
const ClipboardHeader = ({summary}: Props) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(summary)
        alert('복사됨')
    }
    return (
        <div className='flex justify-between items-center border-b-[1px] border-black pb-[10px]'>
            <span>글 내용</span>
            <button className='bg-[blue] px-3 py-1 text-white rounded-md cursor-pointer' onClick={handleCopy}>
                <span>복사</span>
            </button>
        </div>
    )
}

export default ClipboardHeader
