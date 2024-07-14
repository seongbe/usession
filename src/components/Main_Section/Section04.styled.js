import styled from 'styled-components';


export const Section04Wrap = styled.section`
  height: 600px;
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > h3 {
    text-align: center;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 20px;

    em {
      color: #fff;
    }
  }

  > div {
    display: flex;

    > div {
      margin: 0 20px;
      width: 330px;
      height: 330px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h3 {
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 20px;
      }

      p {
        font-size: 20px;
        margin-bottom: 5px;
      }

      .orange {
        color: #ff7710;
      }
    }
  }
`;
