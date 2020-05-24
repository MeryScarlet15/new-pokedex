import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 64px;

  .home-title-section {
    width: calc(50% - 64px);
    height: calc(100vh - 128px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 24px;
  }

  .home-title-wrapper {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    left: 32px;
    bottom: 32px;
    height: 100%;
    border-radius: 24px;
    padding: 24px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-title {
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .home-subtitle {
    color: ${colors.white};
  }

  .home-form {
    width: calc(50% - 64px);
    height: calc(100vh - 128px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default HomeContainer;
