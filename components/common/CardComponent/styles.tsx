import styled, { css } from "styled-components";
interface ContainerProps {
  $topPosition?: string;
}

export const Container = styled.div<ContainerProps>(({ $topPosition }) => {
  return css`
    display: block;
    max-width: 288px;
    width: 100%;
    background: #fff;
    box-shadow: 0 8px 24px rgb(26 26 26 / 6%), 0 4px 4px rgb(26 26 26 / 2%);
    position: relative;
    top: ${$topPosition ? `${$topPosition}px` : "24px"} 24px;

    h4 {
      color: #282828;
      font-weight: 500;
    }
    span {
      color: #282828;
      font-size: 12px;
    }
    span.quoteDescription {
      position: relative;
      bottom: 5px;
    }

    a {
      color: #fff;
      text-transform: uppercase;
    }
  `;
});

export const CardWrapper = styled.div`
  margin: auto;
  position: relative;
  padding: 10px 25px;
  text-align: center;
`;

export const StyledContainer = styled(Container)`
  max-width: 100%;
  border: 0.5px solid rgba(0,0,0,0.1);
  border-radius: 5px;
`;

