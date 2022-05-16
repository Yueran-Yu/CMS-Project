import styled from "@emotion/styled";
import { Spin, Typography } from "antd";
import React from "react";
import { DevTools } from "jira-dev-tool";

interface RowProps {
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ between }) => between && "space-between"};
  margin-bottom: ${({ marginBottom }) => marginBottom + "rem"};

  //设置该 component的 子元素 margin 为0
  > * {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    margin-right: ${({ gap }) =>
      typeof gap === "number" ? gap + "rem" : gap && "2rem"};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalPageLoading = () => (
  <FullPage>
    <Spin size={"large"} />
  </FullPage>
);

export const GlobalPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />
    <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  </FullPage>
);
