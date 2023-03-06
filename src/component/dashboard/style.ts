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
      margin-bottom: 16px;
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
const Cards = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    flex-direction: column;
  }
  .resume {
    background: ${({ theme }) => theme.colors.resumeColor};
  }
`;
const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.cardColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;
  .text {
    font-weight: 700;
    padding-top: 9px;
    font-size: ${({ theme }) => theme.fontSize.x20};
    line-height: 25px;
    color: ${({ theme }) => theme.colors.black};
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x18};
    }
  }
`;

export { Wrapper, Box, Card, Cards };
