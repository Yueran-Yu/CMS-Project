import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      <h1>Project Page</h1>
      <Link to={"tasksboard"}>看板</Link> <br />
      <Link to={"epic"}>任务组</Link>
      {/*<Route  path={`/*`} element={<Navigate to="/tasksboard" replace />} />*/}
    </div>
  );
};
