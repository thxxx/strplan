import ReWriteInput from '@/components/ReWriteInput'
import TextInput from '@/components/TextInput';
import { useContentStore } from '@/utils/store';
import React, { useState } from 'react'
import style from './engine.module.css'
import TitleContainer from '@/components/TitleContainer';
import { SERVER_IP } from '@/utils/store';
import axios from 'axios';

const Synopsis = () => {
  const {synopsis, setSynopsis} = useContentStore();
  const [prompt, setPrompt] = useState<string>('');
  const [degree, setDegree] = useState<number>(0.5);

  const reGenerate = async () => {
    if(!prompt) return;

    const body = {
      prompt:prompt,
      synopsis:synopsis,
      degree:degree,
      info:""
    }

    const response = await axios.post(SERVER_IP + '/synopsis', body)

    setSynopsis(response['data']['data'])
  }

  const genereate = async () => {

  }

  return (
    <div className={style.questionContainer}>
        <TitleContainer title="시놉시스를 작성하세요" buttonText='작성한 내용을 기반으로 생성하기' onClick={genereate} />
        <div style={{ display:'flex', flexDirection:'row' }}>
          <p>현재 작성하신 내용을 얼마나 유지할까요?</p>
          <input type="number" value={degree} onChange={e => setDegree(parseFloat(e.currentTarget.value))} step={0.1} min={0} max={1} defaultValue={0} />
        </div>
        <TextInput value={synopsis} onChange={e => setSynopsis(e.currentTarget.value)} placeholder='시놉시스를 작성하세요.' />
        <ReWriteInput  value={prompt} onChange={(e) => setPrompt(e.currentTarget.value)} placeholder='시놉시스를 수정하고 싶나요? 원하는 내용을 입력하세요. 예시) 좀 더 자극적인 주제로 보여줘, 현실적인 내용으로 해줘 등' onClick={reGenerate}  />
    </div>
  )
}

export default Synopsis