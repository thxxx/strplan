import { useContentStore } from '@/utils/store';
import React from 'react'
import TitleContainer from '@/components/TitleContainer';
import style from './engine.module.css'

const Character = () => {
  const {characters, setCharacters} = useContentStore();
  
  const genereate = async () => {

  }

  return (
    <div className={style.questionContainer}>
        <TitleContainer title="캐릭터를 구성하세요" buttonText='작성한 내용을 기반으로 생성하기' onClick={genereate} />
        <div>
            <div>+</div>
        </div>
    </div>
  )
}

export default Character