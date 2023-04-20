import React from 'react'
import Github from '../components/data/GitHub'
import Seo from "../components/seo"

const github = () => {
  return (
    <div style={{margin: "20px 0"}}>
        <Github />
    </div>
  )
}

export const Head = () => <Seo title="GitHub" />

export default github