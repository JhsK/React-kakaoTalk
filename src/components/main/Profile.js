import React from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";

const ProfileNav = styled.div`
  .header-title {
    font-weight: bold;
  }
  .header-icon {
    opacity: 0.4;
    cursor: pointer;
  }
  .header-icon-search {
    margin-right: 0.8rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem 1.3rem;
  margin-top: 1.5rem;
`;

const Profile = () => {
  return (
    <ProfileNav>
      <div className="header-title">친구</div>
      <div className="header-icon">
        <AiOutlineSearch className="header-icon-search" />
        <AiOutlineUserAdd />
      </div>
    </ProfileNav>
  );
};

export default Profile;
