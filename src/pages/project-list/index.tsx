import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useMount, CleanUpObject, useDebounce } from "../../utils";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

export const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const debouncedParam = useDebounce(param, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: CleanUpObject(debouncedParam) }).then(
      setProjects
    );
  }, [debouncedParam]); // eslint-disable-line react-hooks/exhaustive-deps

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List projects={projects} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
