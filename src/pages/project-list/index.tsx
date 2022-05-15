import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useMount, CleanUpObject, useDebounce } from "../../utils";
import { useHttp } from "../../utils/http";

export const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: CleanUpObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};
