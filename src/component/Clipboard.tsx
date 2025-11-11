import React, { useState } from 'react'
import ClipboardHeader from './ClipboardHeader'
import ClipboardFooter from './ClipboardFooter'

const Clipboard = () => {
    const [summary, setSummary] = useState(
        `<div style="background-color: red; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      글 내용입니다.
    </div>`
    )

    return (
        <div className='w-[300px] min-h-[500px] flex flex-col justify-between border-[1px] border-black rounded-md p-2'>
            <ClipboardHeader summary={summary} />

            <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className='w-full h-[150px] border rounded-md p-2 text-sm font-mono mt-2 resize-none'
                placeholder='여기에 HTML 작성...'
            />

            <div
                className='mt-[10px] border-t pt-2'
                dangerouslySetInnerHTML={{ __html: summary }}
            />

            <ClipboardFooter summary={summary} />
        </div>
    )
}

export default Clipboard
