import React from "react";
import styled from "styled-components";
import imgProfile from "../../image/profile.jpg";
import StyledHr from "../../lib/styles/StyledHr";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineCaretRight,
} from "react-icons/ai";
import palette from "../../lib/styles/palette";

const ProfileNav = styled.div`
  .header-title {
    font-weight: bold;
  }
  .header-icon {
    opacity: 0.4;
    cursor: pointer;

    .header-icon-search {
      margin-right: 0.8rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem 1.3rem;
  margin-top: 1.5rem;
`;

export const StyledMyProfile = styled.div`
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
  padding: 1rem 1.3rem;
  &:hover {
    background: ${palette.gray[0]};
  }
`;

const Profile = () => {
  return (
    <>
      <ProfileNav>
        <div className="header-title">친구</div>
        <div className="header-icon">
          <AiOutlineSearch className="header-icon-search" />
          <AiOutlineUserAdd />
        </div>
      </ProfileNav>
      <StyledMyProfile>
        <div className="profile-section">
          <figure className="profile-img"></figure>
          <span className="profile-name">임성규</span>
        </div>
        <div className="profile-music">
          <span className="music-title">입김 - 10CM</span>
          <AiOutlineCaretRight className="music-icon" />
        </div>
      </StyledMyProfile>
      <StyledHr>
        <hr />
      </StyledHr>
    </>
  );
};

export default Profile;
