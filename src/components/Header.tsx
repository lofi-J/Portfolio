import { styled } from "styled-components";
import { Link } from "react-scroll";

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: gray;
    min-height: 10vh;
    min-width: 100vw;
    padding: 0 10%;
    background-color: black;
    z-index: 999;
    a {
        text-decoration: none;
        color: gray;
    }

    .header__my-name {
        font-family: 'Noto Serif Makasar', serif;
    }
    .header__navigator {
        ol {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            li {
                display: flex;
                flex-wrap: nowrap;
                font-size: 0.8rem;
                margin-left: 1rem;
                &:hover {
                    cursor: pointer;
                    color: var(--color-neon-default);
                }
            }
        }
        span {
            color: var(--color-neon-default);
        }
    }
`;

const Header = () => {
    return(
        <StyledHeader>
            <span className="header__my-name">J<span className="header__name">o Seong Jun</span></span>
            <nav className="header__navigator">
                <ol>
                    <Link to="About" smooth={true} duration={500} offset={-100}>
                        <li><span>1. </span>ABOUT</li>
                    </Link>
                    <Link to="Skills" smooth={true} duration={500} offset={-130}>
                        <li><span>2. </span>SKILL</li>
                    </Link>
                    
                    <Link to="Projects" smooth={true} duration={500} offset={-130}>
                        <li><span>3. </span>PROJECT</li>
                    </Link>
                    <Link to="Contact" smooth={true} duration={500} offset={-130}>
                        <li><span>4. </span>CONTACT</li>
                    </Link>
                    <a href="https://career.programmers.co.kr/job_profiles/edit" target="_blank" rel="noreferrer"><li><span>5. </span>RESUME</li></a>
                </ol>
            </nav>
        </StyledHeader>
    );
}
export default Header;