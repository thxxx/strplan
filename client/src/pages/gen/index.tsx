import React, { useState } from 'react'
import axios from 'axios'
import style from './engine.module.css'
import TextInput from '@/components/TextInput'
import Brain from './Brain'
import CreativeQuestions from './CreativeQuestions'
import TopicsRec from './TopicsRec'

const SERVER_IP = 'http://127.0.0.1:5000'

const gen = () => {
  return (
    <main className={style.main}>
      <h2>스토리 기획 도우미</h2>
      {/* 좋은 질문을 던져주기 */}
      <CreativeQuestions />
      <Brain />
      {/* 주제 추천 */}
      <TopicsRec />
      {/* 시놉시스 */}
      {/* 캐릭터 */}
      {/* 전체 스토리 라인 */}
      {/* 1화의 4섹션 */}
    </main>
  )
}

export default gen
