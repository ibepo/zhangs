"use client"

import React, { useState } from "react"

export default function Page() {
  const [label, setLabel] = useState(0)
  const [label2, setLabel2] = useState("hello")

  return (
    <div className="">
      <h1>{label}</h1>
      <h1>{label2}</h1>
      <button
        onClick={() => {
          setLabel(label + 1)
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setLabel2("world")
        }}
      >
        Click me
      </button>
    </div>
  )
}
