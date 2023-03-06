import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
`;
const LogoBox = styled.div``;
const ContentBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  text-align: center;
  .buttons {
    margin-top: 40px;
  }
  .box {
    margin-top: 20px;
    .text {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      color: #f9fafb;
    }
    .sub-text {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #6b7280;
    }
  }
`;
export { Wrapper, LogoBox, ContentBox };
