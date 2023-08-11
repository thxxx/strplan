import React, { useState } from 'react'
import style from './engine.module.css'
import ReWriteInput from '@/components/ReWriteInput'

const TopicsRec = () => {
  const [isTopicRec, setIsTopicRec] = useState<boolean>(false)

  return (
    <div className={style.questionContainer}>
      {!isTopicRec ? (
        <div className={style.rec_button} onClick={() => setIsTopicRec(true)}>
          위의 내용으로 가능한 소설 주제를 추천받을게요
        </div>
      ) : (
        <div>
          <div>
            <p>주제 추천</p>
          </div>
          <div>
            <div>주제1</div>
            <div>주제2</div>
            <div>주제3</div>
            <div>주제4</div>
          </div>
          <div>
            <ReWriteInput />
          </div>
        </div>
      )}
    </div>
  )
}

export default TopicsRec
