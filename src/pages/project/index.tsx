import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { TasksBoardPage } from "pages/task-board";
import { EpicPage } from "pages/epic";

export const ProjectPage = () => {
  return (
    <div>
      <h1>Project Page</h1>
      <Link to={"tasksboard"}>看板</Link>
      <br />
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path="tasksboard" element={<TasksBoardPage />} />
        <Route path="epic" element={<EpicPage />} />
        <Route path="*" element={<Navigate replace to="tasksboard" />} />
      </Routes>
    </div>
  );
};
