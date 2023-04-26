import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

const serviceMenu = [
  {
    name: "Company Purpose",
    subMenu: [
      "Purpose",
      "How to mine free coin",
      "How to use coin",
      "Coin liquidity",
      "How to make wallet",
      "Wallet features",
      "RPC connection for wallet",
      "Emporium and exchanges",
    ],
  },
  {
    name: "Blockchain",
    subMenu: [
      "What is Garuda Flexi Blockchain",
      "Spesification of blockchain",
      "API document",
      "Smart contract",
      "Developer tool and discord of Virtual tenants",
    ],
  },
  {
    name: "Aset Multi function",
    subMenu: ["E-Collateral", "Asset Guarantee", "Asset bartering"],
  },
  {
    name: "Ecosystem",
    subMenu: [
      "Ecosystem chain",
      "Dapps, DAO, Dex, Airdrop, Nft, Tokenomic etc",
      "Chat",
      "Security",
    ],
  },
  {
    name: "Web4garmein",
    subMenu: [
      "Learning e-sport",
      "Implementing e-sport",
      "Testing and audit e-sport",
      "E-tournament",
      "Hobbies",
      "E-proffession",
      "Reward and nomination",
    ],
  },
];
export default function ServiceMenu() {
  return (
    <Navbar style={{ width: "100%" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Nav>
          {serviceMenu.map((item, index) => (
            <UncontrolledDropdown key={index}>
              <DropdownToggle
                caret
                color="default"
                href="#pablo"
                nav
                onClick={e => e.preventDefault()}
                key={index}>
                <p>{item.name}</p>
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "unset!important" }}>
                {item.subMenu.map((each, index1) => (
                  <DropdownItem
                    to="#"
                    tag={Link}
                    key={index1}
                    style={{ backgroundColor: "unset!important" }}>
                    &nbsp;
                    {Array.isArray(each) === false ? (
                      each
                    ) : (
                      <DropdownMenu>
                        {each.map((i, index2) => (
                          <DropdownItem to="#" tag={Link}>
                            &nbsp; {i}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    )}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
