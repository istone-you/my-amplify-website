import React from 'react'

import Layout from '../layout.js';
import History from '../layout/History';
import '../styles/fade.css'

const Career = () => {
    const color = "#eb6100"


    return (
        <Layout>
            <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
                <div className="Icon">
                    <b style={{ fontSize: "50px" }}>Career</b>
                </div>
                <br />
                <div className="Comment">
                    <History color={color} />
                </div>
                <br />
            </div>
        </Layout>
    )
}

export default Career