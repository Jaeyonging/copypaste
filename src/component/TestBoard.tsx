import React from 'react'

const TestBoard = () => {
  return (
    <div className='w-[300px] min-h-[500px] border-[1px] border-black rounded-md p-2'>
      <span>입력해보세요</span>
      <div>
        <textarea className='w-full min-h-[300px] border-[1px] border-black rounded-md p-2' />
      </div>
    </div>
  )
}

export default TestBoard
