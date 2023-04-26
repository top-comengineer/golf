import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Table } from "reactstrap";
import "./table.scss";
export default function RoundTable({ data, type, order }) {
  const [players, setPlayers] = useState([]);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/excel/test.xlsx",
          { responseType: "arraybuffer" }
        );
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheetName = workbook.SheetNames[order];
        const sheet = workbook.Sheets[worksheetName];
        const jsonSheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log(jsonSheetData);
        setTempData(jsonSheetData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Table
      responsive
      style={{
        backgroundColor: "rgb(8,10,20)",
        color: "white",
        marginBottom: 0,
        fontSize: "12px",
      }}>
      {data.map((item, index) => (
        <thead key={index}>
          <tr>
            <th>{item[0]}</th>
            <th>{item[1]}</th>
            <th>{item[2]}</th>
            <th>{item[3]}</th>
            <th>{item[4]}</th>
            <th>{item[5]}</th>
            <th>{item[6]}</th>
            <th>{item[7]}</th>
            <th>{item[8]}</th>
            <th>{item[9]}</th>
            <th>{item[10]}</th>
            <th>{item[11]}</th>
            <th>{item[12]}</th>
            <th>{item[13]}</th>
            <th>{item[14]}</th>
            <th>{item[15]}</th>
            <th>{item[16]}</th>
            <th>{item[17]}</th>
            <th>{item[18]}</th>
            <th>{item[19]}</th>
            <th>{item[20]}</th>
            <th>{item[21]}</th>
            <th>{item[22]}</th>
            <th>{item[23]}</th>
          </tr>
        </thead>
      ))}
      {
        <tbody>
          <tr></tr>
        </tbody>
      }
    </Table>
  );
}
