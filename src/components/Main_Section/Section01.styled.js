import styled from 'styled-components';

export const MainWrap = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Section01Wrap = styled.section`
  background-color: #111;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 0;
`;

export const Section01Content = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p {
    font-size: clamp(1rem, 5.46875vw, 5rem);
    color: #fff;
    margin: 10px;
  }
`;

export const ImageDiv = styled.img`
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.Img01 {
    width: 440px;
  }

  &.Img02 {
    width: 600px;
  }

  &.Img03 {
    width: 275px;
  }

  &.Img04 {
    width: 620px;
  }
`;
