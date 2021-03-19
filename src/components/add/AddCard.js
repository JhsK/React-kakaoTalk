import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import safeIcon from "../../image/insurance.png";
import { IoIosArrowForward } from "react-icons/io";

const StyledTitle = styled.div`
  font-weight: bold;
  padding: 1rem 1.3rem;
  font-size: 1.3rem;
  margin-top: 1rem;
`;
const StyledCard = styled.div`
  .user-card {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 0.8rem 1.2rem 0.8rem;

    .add-user {
      display: flex;
      flex-direction: column;
      /* line-height: 15px; */

      .user-name {
        font-size: 1rem;
      }
      .user-email {
        font-size: 0.9rem;
        opacity: 0.6;
      }
    }
  }
  .subscribe-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    cursor: pointer;

    span {
      font-size: 0.8rem;
    }
    .subscribe-icon {
      font-size: 0.9rem;
      opacity: 0.5;
    }

    &:hover {
      background: ${palette.gray[1]};
    }
  }

  /* padding: 1rem 1.3rem; */
  margin: 0.5rem 1.3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(241, 241, 241, 0.4);
  border-radius: 10px;
`;
const AddCard = () => {
  return (
    <>
      <StyledTitle>더보기</StyledTitle>
      <StyledCard>
        <div className="user-card">
          <div className="add-user">
            <span className="user-name">임성규</span>
            <span className="user-email">qwe6293@naver.com</span>
          </div>
          <div className="add-icon">
            <img src={safeIcon} alt="인증된 사용자 입니다." />
          </div>
        </div>
        <div className="subscribe-card">
          <span>My구독</span>
          <IoIosArrowForward className="subscribe-icon" />
        </div>
      </StyledCard>
    </>
  );
};

export default AddCard;
