import React, { FC } from "react";

export const List: FC<ListProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "unknown"}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
