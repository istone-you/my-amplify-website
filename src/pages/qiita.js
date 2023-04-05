import React from 'react'
import Qiita from '../components/pages/Qiita'
import Seo from "../components/seo"

const qiita = () => {
  return (
    <div style={{margin: "20px 0"}}>
        <Qiita />
    </div>
  )
}

export const Head = () => <Seo title="Qiita" />

export default qiita