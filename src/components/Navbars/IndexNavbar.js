import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

//assets
import logo from "../../assets/img/garuda-logo.png";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        style={{ fontSize: "20px", backgroundColor: "#0b2334" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#" target="_blank" id="navbar-brand">
              <img src={logo} width="60px" height="60px" alt="garuda-logo" />{" "}
              <span style={{ fontSize: "13px" }}>GARUDA META INDONESIA</span>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              GARUDA META INDONESIA
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>EXPLORER</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="#" tag={Link}>
                    &nbsp; CREATE TOKEN
                  </DropdownItem>
                  <DropdownItem href="#" tag={Link}>
                    &nbsp; CREATE NFT
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>POOL SERVICE</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="#" tag={Link}>
                    &nbsp; TOKENNOMICS
                  </DropdownItem>
                  <DropdownItem href="#" tag={Link}>
                    &nbsp; POOL
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <p>SUPPORT</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <p>APP</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <p>ECOSYSTEM</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" target="_blank" id="login">
                  <i className="now-ui-icons users_single-02"></i>
                  <p className="d-lg-none d-xl-none">LOGIN</p>
                </NavLink>
                <UncontrolledTooltip target="#login">LOGIN</UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink href="#" target="_blank" id="languge">
                  <i className="now-ui-icons objects_globe"></i>
                  <p className="d-lg-none d-xl-none">LANGUAGE</p>
                </NavLink>
                <UncontrolledTooltip target="#languge">
                  LANGUAGE
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
