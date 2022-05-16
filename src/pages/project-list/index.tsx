import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useMount, CleanUpObject, useDebounce } from "../../utils";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";

export const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const debouncedParam = useDebounce(param, 200);
  const client = useHttp();

  useEffect(() => {
    setIsLoading(true);
    client("projects", { data: CleanUpObject(debouncedParam) })
      .then(setProjects)
      .catch((error) => {
        setProjects([]);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      {error && (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      )}
      <List loading={isLoading} dataSource={projects} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
