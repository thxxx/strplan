import React from 'react'
import style from './custom.module.css'

const ReWriteInput = () => {
  return (
    <div style={{ position: 'relative' }}>
      <textarea className={style.rewrite_area} />
      <button className={style.rewrite_button}>반영하기</button>
    </div>
  )
}

export default ReWriteInput
