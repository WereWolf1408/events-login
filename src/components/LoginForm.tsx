import { Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/usedTypedSelected";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { isLoading } = useTypedSelector((state) => state.auth);
  const { login } = useActions();

  const submit = () => {
    console.log("---> form submit");
    login({ username: "Enot", password: "123" });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={submit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
