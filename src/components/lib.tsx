import styled from "@emotion/styled";

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
