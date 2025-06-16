import React from 'react'
import ClipboardHeader from './ClipboardHeader';
import ClipboardFooter from './ClipboardFooter';

const summary = '<div style="background-color: red; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">글 내용입니다.</div>';

const Clipboard = () => {
    return (
        <div className='w-[300px] min-h-[500px] flex flex-col justify-between border-[1px] border-black rounded-md p-2'>
            <ClipboardHeader summary={summary}/>
            <div className='mt-[10px]' dangerouslySetInnerHTML={{ __html: summary }} />
            <ClipboardFooter summary={summary} />
        </div>
    )
}

export default Clipboard
