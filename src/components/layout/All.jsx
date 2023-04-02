import React from 'react'
import LinuxImg from '../../images/ALL/Linux.png'
import WindowsImg from '../../images/ALL/Windows.png'
import ApacheImg from '../../images/ALL/Apache.png'
import AWSImg from '../../images/ALL/AWS.jpg'
import JavaScriptImg from '../../images/ALL/JavaScript.png'
import ReactImg from '../../images/ALL/React.png'
import PythonImg from '../../images/ALL/Python.png'
import DockerImg from '../../images/ALL/Docker.png'
import TerraformImg from '../../images/ALL/Terraform.png'
import AnsibleImg from '../../images/ALL/Ansible.png'
import GrafanaImg from '../../images/ALL/Grafana.png'
import PrometheusImg from '../../images/ALL/Prometheus.png'
import FluentdImg from '../../images/ALL/Fluentd.png'
import OpenTelemetryImg from '../../images/ALL/OpenTelemetry.png'
import OpenSearchImg from '../../images/ALL/OpenSearch.png'
import FalcoImg from '../../images/ALL/Falco.png'
import PostgreSQLImg from '../../images/ALL/PostgreSQL.png'
import MongoDBImg from '../../images/ALL/MongoDB.png'
import KubernetesImg from '../../images/ALL/Kubernetes.png'

const SkillIcon = ({ imgSrc, text, isStar, padding }) => {
    const iconStyle = { flex: '1 0 25%', textAlign: 'center' }
    return (
        <div style={iconStyle}>
            <img src={imgSrc} height="100px" alt={text} style={{ padding: padding ? "15px" : "10px" }} />
            {isStar ? <p><b>{text}☆</b></p> : <p>{text}</p>}
        </div>
    )
}

const All = () => {
    return (
        <div>
            <p>業務で扱ったことのある主な技術スキルです。特に得意なスキルは星マークを付けています。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={LinuxImg} text="Linux" isStar />
                <SkillIcon imgSrc={WindowsImg} text="Windows" />
                <SkillIcon imgSrc={ApacheImg} text="Apache" isStar />
                <SkillIcon imgSrc={AWSImg} text="AWS" isStar />
                <SkillIcon imgSrc={JavaScriptImg} text="JavaScript" />
                <SkillIcon imgSrc={ReactImg} text="React" />
                <SkillIcon imgSrc={PythonImg} text="Python" />
                <SkillIcon imgSrc={DockerImg} text="Docker" />
                <SkillIcon imgSrc={TerraformImg} text="Terraform" isStar />
                <SkillIcon imgSrc={AnsibleImg} text="Ansible" />
                <SkillIcon imgSrc={GrafanaImg} text="Grafana" isStar />
                <SkillIcon imgSrc={PrometheusImg} text="Prometheus" isStar />
                <SkillIcon imgSrc={FluentdImg} text="Fluentd" isStar padding="5px" />
                <SkillIcon imgSrc={OpenTelemetryImg} text="OpenTelemetry" />
                <SkillIcon imgSrc={OpenSearchImg} text="OpenSearch" />
                <SkillIcon imgSrc={FalcoImg} text="Falco" />
                <SkillIcon imgSrc={PostgreSQLImg} text="PostgreSQL" />
                <SkillIcon imgSrc={MongoDBImg} text="MongoDB" />
            </div>
            <p style={{ paddingTop: "50px" }}>業務外で扱ったことのある主な技術スキルです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={KubernetesImg} text="Kubernetes" />
            </div>
        </div>
    )
}

export default All