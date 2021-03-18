import React from "react";
import styled from "styled-components";
import { StyledMyProfile } from "./Profile";
import { IoIosArrowUp } from "react-icons/io";

const friendsName = [
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
  "가영",
  "ㄱ윤진",
  "강동욱",
  "강병관",
  "강창대",
];

const FriendHeader = styled.div`
  .header-title {
    font-size: 0.7rem;
  }
  .header-icon {
    padding-right: 0.5rem;
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
  opacity: 0.6;
  margin-bottom: 1.2rem;
`;

const FriendList = () => {
  return (
    <>
      <FriendHeader>
        <div className="header-title">친구 438</div>
        <IoIosArrowUp className="header-icon" />
      </FriendHeader>

      {friendsName.map((v, i) => (
        <StyledMyProfile>
          <div key={i} className="profile-section">
            <figure className="profile-img"></figure>
            <span className="profile-name">{v}</span>
          </div>
        </StyledMyProfile>
      ))}
    </>
  );
};

export default FriendList;
