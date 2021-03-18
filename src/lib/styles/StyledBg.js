import styled from "styled-components";
import palette from "./palette";

const StyledTemplate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${palette.gray[2]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledTemplate;
