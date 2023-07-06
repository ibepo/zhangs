"use client"

import React, { useState } from "react"

export default function Page() {
  const [label, setLabel] = useState(0)
  const [label2, setLabel2] = useState("hello")
  const [list, setList] = useState(["apple", "banana", "watermelons"])
  const [myArray, updateMyArray] = useState([])
  const addMyArray = () => {
    updateMyArray((oldArr) => [...oldArr, `${oldArr.length}`])
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{label}</div>
      <button
        className="btn"
        onClick={() => {
          setLabel(label + 1)
        }}
      >
        改变数字
      </button>
      <div className="divider">分割线</div>
      <div>{label2}</div>
      <button
        className="btn"
        onClick={() => {
          setLabel2("world")
        }}
      >
        改变字符
      </button>
      <div className="divider">分割线</div>
      <ul>
        {myArray.map((e) => (
          <li>{e}</li>
        ))}
      </ul>

      <ul>
        {myArray.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <button className="btn" onClick={addMyArray}>
        改变数组
      </button>
    </div>
  )
}
