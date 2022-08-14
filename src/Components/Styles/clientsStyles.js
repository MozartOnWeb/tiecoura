import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ClientsWrapper = styled.div`
  width: 80%;
  padding: 50px 10px;
  margin: 0px auto 40px auto;
  position: relative;
`;

export const ClientsHeadline = styled.h1`
  font-size: 30px;
  margin-bottom: 70px;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: ${(props) => props.theme.linkFont};
  ${down("md")} {
    font-size: 22px;
    margin-bottom: 30px;
  }
`;

export const SingleClient = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2px;
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  .image-container {
    margin-bottom: 10px;
    height: 70px;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  span {
    text-transform: uppercase;
    font-size: 14;
    font-weight: 500;
    opacity: 0.15;
  }
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll 13s linear infinite;
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
`;

export const ClientContainer = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);

  :hover ${MarqueeContent} {
    animation-play-state: paused;
  }
`;
