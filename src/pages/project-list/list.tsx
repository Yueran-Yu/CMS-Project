import React, { FC } from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";
import dayjs from "dayjs";

export interface ListProps extends TableProps<Project> {
  users: UserProps[];
}

export const List: FC<ListProps> = ({ users, ...props }) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "unknown"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, pro) {
            return (
              <span>
                {pro.created && dayjs(pro.created).format("YYYY-MM-DD")}
              </span>
            );
          },
        },
      ]}
      rowKey="id"
      {...props}
    />
  );
};
