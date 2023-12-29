// Style your elements here
import styled from 'styled-components'

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
export const HooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100vw;
  padding: 20px;
  box-shadow: 0px 0px 5px 5px whitesmoke;
  font-family: 'Roboto';
  background-color: #fefef4;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 80vw;
  }
`
export const HooksHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  color: #1e293b;
  margin-bottom: 10px;
  margin-top: 0;
`
export const HooksCaption = styled.p`
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: #334155;
`
export const HooksImage = styled.img`
  height: 40vh;
  width: 50%;
`
export const HooksDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const HooksDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #334155;
  line-height: 150%;
`
export const ReadMoreButton = styled.button`
  font-size: 13px;
  font-family: 'Roboto';
  background-color: #1f81ff;
  color: #ffffff;
  border-style: none;
  height: 40px;
  width: 100px;
  border-radius: 5px;
`
