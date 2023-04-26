import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Table } from "reactstrap";
import "./table.scss";
export default function CustomTable({ type }) {
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
        const worksheetName = workbook.SheetNames[7];
        const sheet = workbook.Sheets[worksheetName];
        const jsonSheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
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
      }}>
      {tempData.map((item, index) => (
        <thead key={index}>
          <tr>
            <th>{item[0]}</th>
            <th>{item[1]}</th>
            <th>{item[2]}</th>
            <th>{item[3]}</th>
            <th>{item[4]}</th>
            <th>{item[5]}</th>
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
