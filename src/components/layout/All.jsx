import React from 'react'
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

const SkillIcon = ({ imgSrc, alt, text, isStar }) => {
    const iconStyle = { flex: '1 0 25%', textAlign: 'center' }
    return (
        <div style={iconStyle}>
            <img src={imgSrc} height="100px" alt={alt} />
            {isStar ? <p><b>{text}☆</b></p> : <p>{text}</p>}
        </div>
    )
}

const All = () => {
    return (
        <div>
            <p>業務で扱ったことのある主な技術スキルです。特に得意なスキルは星マークを付けています。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={LinuxImg} alt="Linux" text="Linux" isStar />
                <SkillIcon imgSrc={AWSImg} alt="AWS" text="AWS" isStar />
                <SkillIcon imgSrc={JavaScriptImg} alt="JavaScript" text="JavaScript" />
                <SkillIcon imgSrc={ReactImg} alt="React" text="React" />
                <SkillIcon imgSrc={PythonImg} alt="Python" text="Python" />
                <SkillIcon imgSrc={DockerImg} alt="Docker" text="Docker" />
                <SkillIcon imgSrc={TerraformImg} alt="Terraform" text="Terraform" isStar />
                <SkillIcon imgSrc={AnsibleImg} alt="Ansible" text="Ansible" />
                <SkillIcon imgSrc={GrafanaImg} alt="Grafana" text="Grafana" isStar />
                <SkillIcon imgSrc={PrometheusImg} alt="Prometheus" text="Prometheus" isStar />
                <SkillIcon imgSrc={FluentdImg} alt="Fluentd" text="Fluentd" isStar />
                <SkillIcon imgSrc={OpenTelemetryImg} alt="OpenTelemetry" text="OpenTelemetry" />
                <SkillIcon imgSrc={OpenSearchImg} alt="OpenSearch" text="OpenSearch" />
                <SkillIcon imgSrc={FalcoImg} alt="Falco" text="Falco" />
                <SkillIcon imgSrc={PostgreSQLImg} alt="PostgreSQL" text="PostgreSQL" />
                <SkillIcon imgSrc={MongoDBImg} alt="MongoDB" text="MongoDB" />
            </div>
            <p style={{ paddingTop: "50px" }}>業務外で扱ったことのある主な技術スキルです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={KubernetesImg} alt="Kubernetes" text="Kubernetes" />
            </div>
        </div>
    )
}

export default All