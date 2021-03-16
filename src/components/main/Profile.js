import React from "react";
import styled from "styled-components";

const ProfileNav = styled.div`
  .header {
    font-size: 1.2rem;
    font-weight: bold;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = () => {
  return (
    <ProfileNav>
      <div className="header">친구</div>
    </ProfileNav>
  );
};

export default Profile;
