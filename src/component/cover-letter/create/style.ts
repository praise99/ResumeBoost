import styled from "styled-components";
const Wrapper = styled.div`
  padding: 65px 250px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 65px 16px;
  }
  a {
    text-decoration: none;
    width: 48%;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      width: 100%;
    }
  }
`;
const Box = styled.div`
  .heading {
    font-family: "Athletics";
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.x24};
    line-height: 30px;
    color: ${({ theme }) => theme.colors.grey6};
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x20};
    }
  }
  .sub-text {
    font-family: "Athletics";
    font-style: normal;
    font-weight: 400;
    padding-top: 8px;
    font-size: ${({ theme }) => theme.fontSize.x16};
    line-height: 20px;
    color: ${({ theme }) => theme.colors.grey3};
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x14};
    }
  }
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    flex-direction: column;
  }
`;
const ButtonBox = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;
const ButtonSecondBox = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    flex-direction: column;
  }
`;
const FirstWrapper = styled.div``;
const SecondWrapper = styled.div`
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "ss01" on;
    color: #ffffff;
    margin-bottom: 12px;
  }
`;
const GeneratedBox = styled.div`
  height: 503px;
  padding: 28px;
  background: #202020;
  border: 1px solid #6b7280;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "ss01" on;
  color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    height: 807px;
    padding: 16px;
  }
`;
const BottomBox = styled.div`
  border-top: 1px solid rgba(107, 114, 128, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 25px;
`;
const ImageBox = styled.div`
  img {
    cursor: pointer;
  }
`;
const Pagination = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 25px;
  .text {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    font-feature-settings: "ss01" on;
    color: #6b7280;
    margin-bottom: 0px;
  }
  img {
    cursor: pointer;
  }
`;
export {
  Wrapper,
  Box,
  InputBox,
  ButtonBox,
  FirstWrapper,
  SecondWrapper,
  GeneratedBox,
  BottomBox,
  Pagination,
  ImageBox,
  ButtonSecondBox,
};
