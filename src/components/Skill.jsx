import React from 'react'
import useMedia from 'use-media'
import LinuxImg from '../images/Linux.png'
import AWSImg from '../images/AWS.jpg'
import DockerImg from '../images/Docker.png'
import JavaScriptImg from '../images/JavaScript.png'
import ReactImg from '../images/React.png'
import PythonImg from '../images/Python.png'
import TerraformImg from '../images/Terraform.png'
import AnsibleImg from '../images/Ansible.png'
import GrafanaImg from '../images/Grafana.png'
import PrometheusImg from '../images/Prometheus.png'
import FluentdImg from '../images/Fluentd.png'
import OpenSearchImg from '../images/OpenSearch.png'
import PostgreSQLImg from '../images/PostgreSQL.png'
import MongoDBImg from '../images/MongoDB.png'

const Skill = () => {
    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '40%' : '90%'
    return (
        <div style={{ margin: "0 auto", textAlign: "center", overflowWrap: "normal", width: width }}>
            <h1>Skill</h1>
            <p>業務で扱ったことのある技術スキルです。特に得意なスキルは太文字にしています。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={LinuxImg} height="100px" />
                    <p><b>Linux</b></p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={AWSImg} height="100px" />
                    <p><b>AWS</b></p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={JavaScriptImg} height="100px" />
                    <p>JavaScript</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={ReactImg} height="100px" />
                    <p>React</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={PythonImg} height="100px" />
                    <p>Pyhton</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={DockerImg} height="100px" />
                    <p>Docker</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={TerraformImg} height="100px" />
                    <p><b>Terraform</b></p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={AnsibleImg} height="100px" />
                    <p>Ansible</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={GrafanaImg} height="100px" />
                    <p><b>Grafana</b></p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={PrometheusImg} height="100px" />
                    <p><b>Prometheus</b></p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={FluentdImg} height="100px" />
                    <p>Fluentd</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={OpenSearchImg} height="100px" />
                    <p>OpenSearch</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={PostgreSQLImg} height="100px" />
                    <p>PostgreSQL</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                    <img src={MongoDBImg} height="100px" />
                    <p>MongoDB</p>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                </div>
                <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
                </div>
            </div>
        </div>
    )
}

export default Skill