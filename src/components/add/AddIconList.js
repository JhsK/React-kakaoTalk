import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { ImDrawer2 } from "react-icons/im";
import { MdInsertEmoticon } from "react-icons/md";
import { RiKakaoTalkLine } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { SiStorybook } from "react-icons/si";
import { GrTest } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineNotification, AiOutlineQuestionCircle } from "react-icons/ai";

const IconArray = [
  { id: 1, tag: <FiMail className="icons" /> },
  { id: 2, tag: <FaRegCalendarCheck className="icons" /> },
  { id: 3, tag: <ImDrawer2 className="icons" /> },
  { id: 4, tag: <MdInsertEmoticon className="icons" /> },
  { id: 5, tag: <RiKakaoTalkLine className="icons" /> },
  { id: 6, tag: <GoGift className="icons" /> },
  { id: 7, tag: <SiStorybook className="icons" /> },
  { id: 8, tag: <GrTest className="icons" /> },
  { id: 9, tag: <IoMdInformationCircleOutline className="icons" /> },
  { id: 10, tag: <AiOutlineNotification className="icons" /> },
  { id: 11, tag: <AiOutlineQuestionCircle className="icons" /> },
];

const TitleArray = [
  <span>메일</span>,
  <span>캘린더</span>,
  <span>서랍</span>,
  <span>이모티콘</span>,
  <span>카카오TV</span>,
  <span>선물하기</span>,
  <span>스토리</span>,
  <span>실험실</span>,
  <span>정보</span>,
  <span>공지사항</span>,
  <span>도움말</span>,
];

const FilterTitle = (i) => {
  return TitleArray.find((e, index) => index === i);
};

const StyledIconList = styled.div`
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 30%;
    margin-bottom: 1.2rem;
    margin-right: -1rem;

    .icons {
      font-size: 1.8rem;
      opacity: 0.8;
      margin-bottom: 0.5rem;
    }
    span {
      font-size: 0.8rem;
      opacity: 0.6;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 1rem;
`;

const AddIconList = () => {
  return (
    <StyledIconList>
      {IconArray.map((v, i) => (
        <div key={v.id} className="icon-container">
          {v.tag}
          {FilterTitle(i)}
        </div>
      ))}
    </StyledIconList>
  );
};

export default AddIconList;
