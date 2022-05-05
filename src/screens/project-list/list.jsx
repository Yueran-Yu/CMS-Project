import React from "react"

export const List = ({ list }) => {

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
        list.map(project=> <tr>
          <td>{project.name}</td>
          <td>{project.personId}</td>
        </tr> )
      }
      </tbody>
    </table>
  )
}
