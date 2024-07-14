import styled from 'styled-components';

export const MainWrap = styled.section`
  width: 100%;
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const Section01Wrap = styled.div`
  background-color: #111;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 0;
`;

export const Section01Content = styled.div`
  width: 100%;
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
  width: auto;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.Img01 {
    max-width: 440px;
    width: 100%;
  }

  &.Img02 {
    max-width: 600px;
    width: 100%;
  }

  &.Img03 {
    max-width: 275px;
    width: 100%;
  }

  &.Img04 {
    max-width: 620px;
    width: 100%;
  }
`;
