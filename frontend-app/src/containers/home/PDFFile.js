// Java script file for interactive map on our home page.
import React from 'react';

import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
//   svg: {
//     overflow: visible;
//     display: block;
//     width: 100%;
//   }
  
//   root: {
//     display: flex;
//     flex-direction: column;
//     align-items: stretch;
//     justify-content: center;
//     height: 100vh;
//     padding: 0 50px 150px;
//     text-align: center;
//     box-sizing: border-box;
//   }
  
//   button: {
//     width: 100px;
//     border: 1px solid black;
//     margin: 0 auto 5px;
//   }
});

// Create Document Component
const PDFFile = () => {
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <View style={styles.section}>
        <Text></Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
};

// ReactPDF.render(<PDFile />, `../home.pdf`);

export default PDFFile;