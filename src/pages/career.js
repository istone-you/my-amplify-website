import React from 'react'
import Seo from "../components/seo"
import Layout from '../components/layout';
import History from '../components/data/History';
import DownloadFileS3 from '../components/function/DownloadFileS3';
import '../components/styles/fade.css'

const career = () => {
  const color = "#eb6100"
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
        <div className="Icon">
          <b style={{ fontSize: "50px" }}>Career</b>
        </div>
        <br />
        <div className="Comment">
          <DownloadFileS3 />
          <History color={color} />
        </div>
        <br />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Career" />

export default career