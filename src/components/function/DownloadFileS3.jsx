import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import awsconfig from '../../aws-exports';
import '../styles/fade.css';
import * as styles from "../index.module.css"

Amplify.configure(awsconfig);

const DOWNLOAD_FILE_FROM_S3 = `query DownloadFileFromS3 {
    downloadFileFromS3 {
      file
    }
  }`;

  function downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  }


const DownloadFileS3 = () => {
    const handleDownload = async () => {
        try {
          const response = await API.graphql(graphqlOperation(DOWNLOAD_FILE_FROM_S3));
          const arrayBuffer = Uint8Array.from(atob(response.data.downloadFileFromS3.file), c => c.charCodeAt(0));
          const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
          downloadFile(blob, '石井湧_職務経歴書.pdf');
        } catch (err) {
          console.log(err);
        }
      };

      return (
        <div>
          <button onClick={handleDownload} className={styles.downloadButton}><b>職務経歴書のダウンロード(PDF)</b></button>
        </div>
      );
}

export default DownloadFileS3