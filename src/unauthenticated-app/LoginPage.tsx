import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (values: LoginRegisterProps) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please enter user name." }]}
      >
        <Input placeholder={"User Name"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter password." }]}
      >
        <Input placeholder={"Password"} type="text" id={"password"} />
      </Form.Item>
      <Form.Item>
        {/*type means the style of antd*/}
        <LongButton htmlType={"submit"} type={"primary"}>
          Login
        </LongButton>
      </Form.Item>
    </Form>
  );
};
