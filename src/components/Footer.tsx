import { styled } from "styled-components";

import { ReactComponent as Github } from "../svg/_github.svg";
import { ReactComponent as Email } from "../svg/_email.svg";
import { ReactComponent as Velog } from "../svg/_velog.svg";


const StyledFooter = styled.footer`
    aside {
        position: fixed;
        display: flex;
        flex-direction: column;
        padding: 25px;
        svg {
        fill: transparent;
        stroke: gray;
        width: 45px;
        height: 45px;
        margin-bottom: 10px;
        }
    }
    .aside-left {
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .vertical-line {
        width: 45px;
        height: 100px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .line {
            width: 2px;
            height: 100%;
            background-color: gray;
        }
    }

    .aside-right {
        position: fixed;
        right: 0;
        bottom: 0;
        color: gray;
        
        .aside-right__div {
            width: 45px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        span {
            writing-mode: vertical-rl;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }
        img {
            height: 40px;
        }
    }
`;

const Footer = () => {
    return(
        <StyledFooter>
            <aside className="aside-left">
                <a href="https://github.com/lofi-J?tab=repositories" target="_blank" rel="noreferrer"><Github /></a>
                <a href="https://velog.io/@lofi-j" target="_blank" rel="noreferrer"><Velog /></a>
                <a href="mailto:jsj2505@gmail.com"><Email /></a>
                <div className="vertical-line"><div className="line"></div></div>
            </aside>
            <aside className="aside-right">
                <div className="aside-right__div">
                    <span>scroll</span>
                    <img src="https://myphz.github.io/Myphz/icons/arrow.svg" alt="arrow.svg" />
                </div>
            </aside>
        </StyledFooter>
    );
}

export default Footer;