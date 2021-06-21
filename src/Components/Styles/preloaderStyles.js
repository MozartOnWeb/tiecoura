import styled from "styled-components";

export const PreloaderWrapper = styled.div`
  --primary-color: #4285f4;
  --scale: 3;
  --squareSize: 50px;
  --cornerSize: ceil(var(--squareSize) / var(--scale));
  --cornerPosition: ceil(var(--cornerSize) / var(--scale));
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  .dl__square {
    display: block;
    width: var(--squareSize);
    height: var(--squareSize);
    background: var(--primary-color);
  }
  .dl__container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    transform-origin: 50% 50% 0;
    animation: dyinglight 1s ease infinite;
    backface-visibility: hidden;
  }

  .dl__corner--top:before,
  .dl__corner--top:after,
  .dl__corner--bottom:before,
  .dl__corner--bottom:after {
    position: absolute;
    width: $cornerSize;
    height: $cornerSize;
    color: $primary-color;
    content: "";
  }

  .dl__corner--top::before {
    border-left: 1px solid;
    border-top: 1px solid;
    top: -var(--cornerPosition);
    left: -var(--cornerPosition);
  }

  .dl__corner--top::after {
    border-right: 1px solid;
    border-top: 1px solid;
    top: -var(--cornerPosition);
    right: -var(--cornerPosition);
  }

  .dl__corner--bottom::before {
    border-left: 1px solid;
    border-bottom: 1px solid;
    bottom: -var(--cornerPosition);
    left: -var(--cornerPosition);
  }

  .dl__corner--bottom::after {
    border-right: 1px solid;
    border-bottom: 1px solid;
    bottom: -var(--cornerPosition);
    right: -var(--cornerPosition);
  }

  @keyframes dyinglight {
    15% {
      transform: scale(1.6);
    }
    50% {
      transform: rotate(-89deg);
    }
    100% {
      transform: rotate(-90deg);
    }
  }
`;
