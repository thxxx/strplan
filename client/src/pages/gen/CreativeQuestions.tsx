import React from 'react'
import { questions } from '@/utils/questions'
import style from './engine.module.css'

const CreativeQuestions = () => {
  return (
    <div className={style.questionContainer}>
      <div className={style.title}>
        <p>사고를 위한 질문</p>
        <div className={style.reset_button}>리셋</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        {questions.slice(0, 3).map((item) => {
          return <div className={style.question}>{item}</div>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        {questions.slice(3, 6).map((item) => {
          return <div className={style.question}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default CreativeQuestions
