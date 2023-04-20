import React from 'react'
import Layout from '../components/layout';
import Github from '../components/data/GitHub'
import Seo from "../components/seo"

const github = () => {
  return (
    <Layout>
      <div style={{ margin: "20px 0" }}>
        <Github />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="GitHub" />

export default github