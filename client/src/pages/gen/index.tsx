import React, { useState } from 'react'
import axios from 'axios'
import style from './engine.module.css'
import TextInput from '@/components/TextInput'
import Brain from './Brain'
import CreativeQuestions from './CreativeQuestions'
import TopicsRec from './TopicsRec'
import Synopsis from './Synopsis'
import Character from '@/pages/gen/Character'

const gen = () => {
  return (
    <main className={style.main}>
      <div className={style.innerMain}>
      <h2>스토리 기획 도우미</h2>
      {/* 좋은 질문을 던져주기 */}
      <CreativeQuestions />
      <Brain />
      {/* 주제 추천 */}
      <TopicsRec />
      {/* 시놉시스 */}
      <Synopsis />
      {/* 캐릭터 */}
      <Character />
      {/* 전체 스토리 라인 */}
      {/* 1화의 4섹션 */}
      {/* <FirstChapter /> */}
      </div>
    </main>
  )
}

export default gen
