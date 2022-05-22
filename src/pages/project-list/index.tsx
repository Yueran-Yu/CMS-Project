import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useGeneral } from "../../utils/use-general";
import { useProjectsSearchParams } from "../../utils/use-projectsSearchParams";

export const apiUrl = process.env.REACT_APP_API_URL;

// 基本类型可以放到依赖里，组件状态可以放到依赖里，非组件对象绝对不可以放到依赖里
export const ProjectListPage = () => {
  useDocumentTitle("Projects List", false);
  const [param, setParam] = useProjectsSearchParams();
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

ProjectListPage.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
