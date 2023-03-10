import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 10px;

  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
  }
`;

export const ListItem = styled.li`
  @media screen and (max-width: 479px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid black;
  overflow: hidden;
  height: max-content;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  height: 445px;
  width: 300px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms;
  :hover,
  :focus {
    box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.12),
      0px 5px 5px rgba(255, 255, 255, 0.06),
      2px 5px 7px rgba(255, 255, 255, 0.16);
    scale: 103%;
  }
`;

export const MovieInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 22px;
  background-color: rgba(232, 232, 232, 0.15);
  backdrop-filter: blur(2.5px);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 10%;
  right: 0;
  bottom: 0;
  color: white;

  svg {
    width: 20px;
    fill: gold;
    margin-right: 10px;
  }
`;
