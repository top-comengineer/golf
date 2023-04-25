import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import FunctionList from "./sections/FunctionLisst";
import Why from "./sections/Why";
import Download from "./sections/Download";
import Contact from "./sections/Contact";

//Section component
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <FunctionList />
        <Why />
        <Download />
        <Contact />
        <div className="main"></div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
