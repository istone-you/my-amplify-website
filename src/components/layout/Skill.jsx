import React from 'react'
import useMedia from 'use-media'
import { Link } from 'gatsby'
import LinuxImg from '../../images/Linux.png'
import AWSImg from '../../images/AWS.jpg'
import DockerImg from '../../images/Docker.png'
import JavaScriptImg from '../../images/JavaScript.png'
import ReactImg from '../../images/React.png'
import PythonImg from '../../images/Python.png'
import TerraformImg from '../../images/Terraform.png'
import AnsibleImg from '../../images/Ansible.png'
import GrafanaImg from '../../images/Grafana.png'
import PrometheusImg from '../../images/Prometheus.png'
import FluentdImg from '../../images/Fluentd.png'
import OpenTelemetryImg from '../../images/OpenTelemetry.png'
import OpenSearchImg from '../../images/OpenSearch.png'
import FalcoImg from '../../images/Falco.png'
import PostgreSQLImg from '../../images/PostgreSQL.png'
import MongoDBImg from '../../images/MongoDB.png'
import KubernetesImg from '../../images/Kubernetes.png'

const Skill = () => {
    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '40%' : '90%'
    const iconStyle = { flex: '1 0 25%', textAlign: 'center' }
    return (
        <div style={{ margin: "0 auto", overflowWrap: "normal", width: width }}>
            <h1>Skill</h1>
            <p>業務で扱ったことのある主な技術スキルです。特に得意なスキルは星マークを付けています。<br/>AWSのサービスについては<Link to="/aws">こちら</Link></p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <div style={iconStyle}>
                    <img src={LinuxImg} height="100px" />
                    <p><b>Linux☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={AWSImg} height="100px" />
                    <p><b>AWS☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={JavaScriptImg} height="100px" />
                    <p>JavaScript</p>
                </div>
                <div style={iconStyle}>
                    <img src={ReactImg} height="100px" />
                    <p>React</p>
                </div>
                <div style={iconStyle}>
                    <img src={PythonImg} height="100px" />
                    <p>Pyhton</p>
                </div>
                <div style={iconStyle}>
                    <img src={DockerImg} height="100px" />
                    <p>Docker</p>
                </div>
                <div style={iconStyle}>
                    <img src={TerraformImg} height="100px" />
                    <p><b>Terraform☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={AnsibleImg} height="100px" />
                    <p>Ansible</p>
                </div>
                <div style={iconStyle}>
                    <img src={GrafanaImg} height="100px" />
                    <p><b>Grafana☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={PrometheusImg} height="100px" />
                    <p><b>Prometheus☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={FluentdImg} height="100px" />
                    <p><b>Fluentd☆</b></p>
                </div>
                <div style={iconStyle}>
                    <img src={OpenTelemetryImg} height="100px" />
                    <p>OpenTelemetry</p>
                </div>
                <div style={iconStyle}>
                    <img src={OpenSearchImg} height="100px" />
                    <p>OpenSearch</p>
                </div>
                <div style={iconStyle}>
                    <img src={FalcoImg} height="100px" />
                    <p>Falco</p>
                </div>
                <div style={iconStyle}>
                    <img src={PostgreSQLImg} height="100px" />
                    <p>PostgreSQL</p>
                </div>
                <div style={iconStyle}>
                    <img src={MongoDBImg} height="100px" />
                    <p>MongoDB</p>
                </div>
            </div>
            <p style={{ paddingTop: "50px" }}>業務外で扱ったことのある主な技術スキルです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <div style={iconStyle}>
                    <img src={KubernetesImg} height="100px" />
                    <p>Kubernetes</p>
                </div>
            </div>
        </div>
    )
}

export default Skill