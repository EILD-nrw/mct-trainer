import React from 'react'
import { Link } from 'react-router-dom'

export default function TitleLinker() {
  return (
    <div className="bg-white p-4">
      <Link
        className="no-underline text-black text-4xl font-semibold font-mono"
        to="/"
      >
        MCT-Trainer
      </Link>
    </div>
  )
}
