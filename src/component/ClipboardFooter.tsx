import React from 'react'

interface Props{
    summary: string
}
const ClipboardFooter = ({summary}: Props) => {
    return (
        <div className='flex flex-col  border-t-[1px] border-black'>
            <span>글 내용:</span>
            <div>
                <span>{summary}</span>
            </div>
        </div>
    )
}

export default ClipboardFooter
