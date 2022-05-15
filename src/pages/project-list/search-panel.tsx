import { Input, Select } from "antd";
import React, { ChangeEvent, FC } from "react";

export const SearchPanel: FC<SearchPanelProps> = ({
  users,
  param,
  setParam,
}) => {
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
    <form action="">
      <div>
        <Input
          type="text"
          name="name"
          value={param.name}
          onChange={(e) => handleOnChange(e)}
        />
        <Select
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
