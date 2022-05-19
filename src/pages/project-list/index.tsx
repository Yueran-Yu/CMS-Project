import React, { useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useGeneral } from "../../utils/use-general";
import { useURLQueryParam } from "../../utils/use-urlQueryParam";

export const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [, setParam] = useState({ name: "", personId: "" });
  // param每次都是一个新对象，被创建出来
  const [param, setSearchParams] = useURLQueryParam(["name", "personId"]);
  const debouncedParam = useDebounce(param, 200);
  const {
    isLoading,
    error,
    data: projects,
  } = useGeneral<ProjectProps>("projects", debouncedParam);
  const { data: users } = useGeneral<UserProps>("users");
  useDocumentTitle("Projects List", false);

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

ProjectListPage.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
