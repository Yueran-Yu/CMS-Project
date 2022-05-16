import React, { useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useGeneral } from "../../utils/use-general";

export const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const debouncedParam = useDebounce(param, 200);
  const {
    isLoading,
    error,
    data: projects,
  } = useGeneral<ProjectProps>("projects", debouncedParam);
  const { data: users } = useGeneral<UserProps>("users");
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error && (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      )}
      <List
        loading={isLoading}
        dataSource={projects || []}
        users={users || []}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
