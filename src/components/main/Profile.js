import React from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineCaretRight,
} from "react-icons/ai";

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

const StyledMyProfile = styled.div`
  .profile-section {
    display: flex;
    align-items: center;

    .profile-img {
      border: 1px solid #000;
      border-radius: 23px;
      width: 50px;
      height: 50px;
      margin: 0;
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
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    display: flex;
    align-items: center;

    .music-icon {
      font-size: 1rem;
      margin-left: 0.2rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1.3rem;
`;

export const StyledHr = styled.div`
  padding: 0.7rem 1.3rem;
  opacity: 0.2;
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
