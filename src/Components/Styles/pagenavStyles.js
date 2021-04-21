import styled from "styled-components";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";


export const PageNavLinks = styled(motion.div)`
  width: 400px;
  margin: 40px auto 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
  ${down("md")} {
    margin: 80px auto 0px auto;
  }
  ${down("sm")} {
    flex-direction: column;
    margin: 80px auto 0px auto;
    width: 280px;
    height: 80px;
  }
  ${down("s")} {
    width: 230px;
  }

  a {
    ${down("md")} {
      font-size: 18px;
    }
    ${down("sm")} {
      font-size: 14px;
    }
    &.active {
      -webkit-text-stroke: 1px ${(props) => props.theme.red};
      -webkit-text-fill-color: transparent;
    }
    .menu-link-arrow {
      display: none;
      width: 0px;
    }

    &:hover {
      .menu-link-arrow {
        display: block;
        width: 15px;
        ${down("md")} {
          display: none;
        }
      }
    }
  }
`;
