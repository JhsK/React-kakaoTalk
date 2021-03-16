import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { BsFillPersonFill, BsFillChatFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdInsertEmoticon } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";

const StyledSideBar = styled.div`
  background: ${palette.gray[0]};
  width: 65px;
  height: 520px;
  display: flex;
  flex-direction: column;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  .icons-person {
    font-size: 1.7rem;
    opacity: 0.4;
  }
  .icons-chat {
    font-size: 1.7rem;
    opacity: 0.2;
    margin-top: 1.7rem;

    &:hover {
      opacity: 0.3;
    }
  }
  .icons-more {
    font-size: 1.7rem;
    opacity: 0.2;
    margin-top: 1.7rem;

    &:hover {
      opacity: 0.3;
    }
  }
`;

const StyledSubMenu = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 2rem;

  .icons-sub {
    font-size: 1.6rem;
    opacity: 0.3;
    margin-bottom: 1.3rem;
  }
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledMenu>
        <BsFillPersonFill className="icons-person" />
        <BsFillChatFill className="icons-chat" />
        <FiMoreHorizontal className="icons-more" />
      </StyledMenu>
      <StyledSubMenu>
        <MdInsertEmoticon className="icons-sub" />
        <AiOutlineBell className="icons-sub" />
        <RiSettings3Line className="icons-sub" />
      </StyledSubMenu>
    </StyledSideBar>
  );
};

export default SideBar;
