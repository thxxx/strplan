import React from 'react'
import style from './custom.module.css'

type ListTableProps = {
    title:string,
    el?:any[]
}

const ListTable = ({title, el}:ListTableProps) => {
  return (
    <div className={style.listTable}>
        <div>
            <p>{title}</p>
        </div>
        <div className={style.listInner}>
            {
                el?.map(item => {
                    return(
                        <div className={style.tableElement}>{item}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ListTable