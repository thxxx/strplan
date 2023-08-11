import React from 'react'
import style from './custom.module.css'

type TitleProps = {
    title:string,
    buttonText:string,
    onClick:() => void
}

const TitleContainer = ({title="", buttonText="생성", onClick}:TitleProps) => {
  return (
    <div className={style.titleContainer}>
      <p>{title}</p>
      <button className={style.reset_button} onClick={() => onClick()}>{buttonText}</button>
    </div>
  )
}

export default React.memo(TitleContainer)