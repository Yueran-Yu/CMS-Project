import React from "react"

export const List = ({ list, users }) => {

  return (
    <table>
      List
      <thead>
      <tr>
        <th>Name</th>
        <th>Manager</th>
      </tr>
      </thead>
      <tbody>
      {
        list.map(project => <tr>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || "unknown"}</td>
        </tr>)
      }
      </tbody>
    </table>
  )
}
