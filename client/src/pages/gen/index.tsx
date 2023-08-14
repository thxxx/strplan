import React, { useState } from 'react'
import style from './engine.module.css'
import Brain from './Brain'
import TopicsRec from './TopicsRec'
import Synopsis from './Synopsis'
import Character from '@/pages/gen/Character'
import FirstChapter from './FirstChapter'
import PMselect from './PMselect'
import OrganizedList from './OrganizedList'
import TitleContainer from '@/components/TitleContainer'
import { questions } from '@/utils/questions'
import ReWriteInput from '@/components/ReWriteInput'

const gen = () => {
  const [prompt, setPrompt] = useState<string>('')

  const generate = async () => {}

  return (
    <main className={style.main}>
      <div className={style.innerMain} style={{ position: 'relative' }}>
        <h2>스토리 기획 도우미</h2>
        {/* 좋은 질문을 던져주기 */}
        <div
          className={style.questionContainer}
          style={{ padding: '0px 16px' }}
        >
          <TitleContainer
            title='사고를 위한 질문'
            buttonText='다른 질문 보기'
            onClick={() => {}}
          />
        </div>
        <div
          className={style.questionWrapper}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            background: 'rgba(245,245,245,1)',
          }}
        >
          {questions.slice(0, 3).map((item) => {
            return <div className={style.question}>{item}</div>
          })}
        </div>
        <br />
        <div
          className={style.questionContainer}
          style={{ padding: '0px 16px' }}
        >
          <ReWriteInput
            row={2}
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            onClick={generate}
            placeholder='어떤 종류의 질문이 필요하신가요? 예시) 판타지 세계관을 작성하려고 해, 좀 더 로맨스에 관련된 질문해줘'
          />
        </div>
        <Brain />
        {/* 주제 추천 */}
        <TopicsRec />
        {/* 기획서 구성 선택 및 생성 : 위에서 작성한 내용으로, 이것들을 만들어주세요 */}
        <PMselect />
        {/* 선택한 목록을 기반으로 생성된 기획서 */}
        <OrganizedList />
        {/* 캐릭터 */}
        <Character />
        {/* 시놉시스 */}
        <Synopsis />
        {/* 전체 스토리 라인 */}
        {/* <StoryLine /> */}
        {/* 1화의 4섹션 */}
        <FirstChapter />
      </div>
    </main>
  )
}

export default gen
