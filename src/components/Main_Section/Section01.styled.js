import styled from 'styled-components';

export const MainWrap = styled.section`
  width: 100%;
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section01Wrap = styled.div`
  background-color: #111;
  width: 80%;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 10%;
`;

export const Section01Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ImageDiv = styled.img`
  flex: 1; /* 이미지가 남은 공간을 차지 */
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`;
