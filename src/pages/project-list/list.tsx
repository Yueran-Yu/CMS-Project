import React, { FC } from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";
import dayjs from "dayjs";
// the relationship between react-router and react-router-dom, seems like react and react-dom or react-native-dom
import { Link } from "react-router-dom";

export interface ListProps extends TableProps<ProjectProps> {
  users: UserProps[];
}

export const List: FC<ListProps> = ({ users, ...props }) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
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
      rowKey={"id"}
      {...props}
    />
  );
};
