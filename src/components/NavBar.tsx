import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps, Row } from "antd";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/usedTypedSelected";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useActions } from "../hooks/useActions";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const loginClickHandler: MenuProps["onClick"] = (e): void => {
    navigate(RouteNames.LOGIN);
  };
  const logoutClickHandler: MenuProps["onClick"] = (e): void => {
    console.log(`---> logout`);
    logout();
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div className="user-info">{user.username}</div>
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
