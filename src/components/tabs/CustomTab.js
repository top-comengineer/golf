import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

// core components
import CustomTable from "components/tables/CustomTable";
import RoundTable from "components/tables/RoundTable";

function CustomTab() {
  const [iconPills, setIconPills] = useState("4");
  const [renderData, setRenderData] = useState([]);
  const [type, setType] = useState("teams");
  const [sheetData, setSheetData] = useState([]);
  const [rOrder, setROrder] = useState();

  //scarpping data from live golf
  useEffect(() => {
    async function fetchTempData(order) {
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
        setSheetData(jsonSheetData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTempData();
  }, []);
  // useEffect(() => {
  async function fetchData(order) {
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
      setSheetData(jsonSheetData);
    } catch (error) {
      console.log(error);
    }
  }
  // }, []);
  return (
    <div className="section section-tabs">
      <h1 className="category" style={{ paddingLeft: "20px" }}>
        Live Scoring
      </h1>
      <Card style={{ backgroundColor: "#01080e" }}>
        <CardHeader>
          <Nav className="justify-content-center" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={iconPills === "1" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconPills("1");
                  fetchData(4);
                }}>
                Round 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconPills === "2" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconPills("2");
                  fetchData(5);
                }}>
                Round 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconPills === "3" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconPills("3");
                  fetchData(6);
                }}>
                Round 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconPills === "4" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconPills("4");
                  fetchData(7);
                }}>
                All Rounds
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={"iconPills" + iconPills}>
            <TabPane tabId="iconPills1">
              <RoundTable data={sheetData} type={type} order={rOrder} />
            </TabPane>
            <TabPane tabId="iconPills2">
              <RoundTable data={sheetData} type={type} order={rOrder} />
            </TabPane>
            <TabPane tabId="iconPills3">
              <RoundTable data={sheetData} type={type} order={rOrder} />
            </TabPane>
            <TabPane tabId="iconPills4">
              <CustomTable type={type} />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
}

export default CustomTab;
