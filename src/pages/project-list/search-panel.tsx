import { Form, Input } from "antd";
import React, { ChangeEvent, FC } from "react";
import { UserSelect } from "../../components/user-select";

export const SearchPanel: FC<SearchPanelProps> = ({ param, setParam }) => {
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setParam({
      ...param,
      [name]: value,
    });
  };
  return (
    <Form layout={"inline"} css={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          placeholder={"项目名"}
          type="text"
          name="name"
          value={param.name}
          onChange={(e) => handleOnChange(e)}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={param.personId}
          defaultOptionName="负责人"
          onChange={(value) => setParam({ ...param, personId: value })}
        />
      </Form.Item>
    </Form>
  );
};
