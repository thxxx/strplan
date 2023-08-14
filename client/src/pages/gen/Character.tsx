import { useContentStore } from '@/utils/store'
import React, { useState } from 'react'
import TitleContainer from '@/components/TitleContainer'
import style from './engine.module.css'
import cstyle from '@/components/custom.module.css'
import { SERVER_IP } from '@/utils/store'
import TextInput from '@/components/TextInput'
import ReWriteInput from '@/components/ReWriteInput'

const Character = () => {
  const { characters, setCharacters } = useContentStore()
  const [prompt, setPrompt] = useState<string>('')

  const generate = async () => {}
  const reGenerate = async () => {}

  return (
    <div className={style.questionContainer}>
      <TitleContainer
        title='캐릭터를 구성하세요'
        buttonText='작성한 내용을 기반으로 생성하기'
        onClick={generate}
      />
      <TextInput
        row={12}
        value={characters}
        onChange={(e) => setCharacters(e.currentTarget.value)}
        placeholder='캐릭터 설명을 작성하세요.'
      />
      <ReWriteInput
        value={prompt}
        onChange={(e) => setPrompt(e.currentTarget.value)}
        placeholder='시놉시스를 수정하고 싶나요? 원하는 내용을 입력하세요. 예시) 좀 더 자극적인 주제로 보여줘, 현실적인 내용으로 해줘 등'
        onClick={reGenerate}
      />
    </div>
  )
}

export default Character
