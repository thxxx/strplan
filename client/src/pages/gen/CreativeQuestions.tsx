import React from 'react'
import { questions } from '@/utils/questions'
import style from './engine.module.css'
import TitleContainer from '@/components/TitleContainer'

const CreativeQuestions = () => {
  return (
    <div className={style.questionContainer}>
      <TitleContainer title="사고를 위한 질문" buttonText="다른 질문 보기" onClick={() => {}} />
      <div className={style.questionWrapper}>
        {questions.slice(0, 3).map((item) => {
          return <div className={style.question}>{item}</div>
        })}
      </div>
      {/* <div className={style.questionWrapper}>
        {questions.slice(3, 6).map((item) => {
          return <div className={style.question}>{item}</div>
        })}
      </div> */}
    </div>
  )
}

export default CreativeQuestions
