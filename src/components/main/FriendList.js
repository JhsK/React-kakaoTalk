import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import imgProfile from "../../image/profile.jpg";
import palette from "../../lib/styles/palette";

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

const StyledMyProfile = styled.div`
  .profile-section {
    display: flex;
    align-items: center;
    flex-basis: 60%;

    .profile-img {
      border-radius: 20px;
      width: 50px;
      height: 50px;
      margin: 0;
      outline: none;
      background-image: url(${imgProfile});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
    .profile-name {
      font-weight: bold;
      font-size: 0.9rem;
      margin-left: 0.7rem;
    }
  }
  .profile-music {
    border: 1px solid green;
    border-radius: 15px;
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-basis: 30%;

    .music-icon {
      font-size: 0.8rem;
      margin-left: 0.2rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.4rem 1.3rem;
  margin-bottom: 0.5rem;
  &:hover {
    background: ${palette.gray[0]};
  }
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
