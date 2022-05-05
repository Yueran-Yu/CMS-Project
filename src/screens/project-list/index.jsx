import React, { useEffect, useState } from "react"
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import qs from "qs"
import { CleanUpObject } from "../../utils"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: "", personId: "" })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    // fetch return a Promise, then use the async function inside the 'then'
    fetch(`${apiUrl}/projects?${qs.stringify(CleanUpObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  )
}
