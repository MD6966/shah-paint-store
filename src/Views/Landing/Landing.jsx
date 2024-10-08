import React from "react";
import Content from "./components/Content/Content";
import Page from "../../components/page";
import Collections from "./Collections/Collections";
import Products from "./Products/Products";
import Projects from "./Projects/Projects";
const Landing = () => {
  return (
    <Page title="Welcome">
      <Content />
      <Collections />
      <Products />
      <Projects />
    </Page>
  );
};

export default Landing;
