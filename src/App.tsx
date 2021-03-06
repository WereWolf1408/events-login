import { Layout } from "antd";
import React, { FC } from "react";
import { AppRouter } from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./App.css";

const App: FC = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;
