import React from 'react'
import Qiita from '../components/data/Qiita'
import Layout from '../components/layout';
import Seo from "../components/seo"

const qiita = () => {
  return (
    <Layout>
      <div style={{ margin: "20px 0" }}>
        <Qiita />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Qiita" />

export default qiita