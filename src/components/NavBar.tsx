import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps, Row } from "antd";
import { RouteNames } from "../routes";

const NavBar = () => {
  const navigate = useNavigate();
  const loginClickHandler: MenuProps["onClick"] = (e): void => {
    navigate(RouteNames.LOGIN);
  };
  const logoutClickHandler: MenuProps["onClick"] = (e): void => {
    console.log(`---> logout`);
  };

  const auth = true;

  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div className="user-info">User Name</div>
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={logoutClickHandler}
              items={new Array(2).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `Logout`,
                };
              })}
            />
          </>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={loginClickHandler}
            items={new Array(2).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `Login`,
              };
            })}
          />
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
