// Java script file for interactive map on our home page.
import React, { Component } from 'react';
import PDFFile from "../home/PDFFile";
import { PDFDownloadLink } from '@react-pdf/renderer';


export default class home extends Component {
  render() {
    return (
      <div>
        home
        <PDFDownloadLink document={<PDFFile />} fileName="home">
          {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
        <PDFFile />
      </div>
    )
  }
}
