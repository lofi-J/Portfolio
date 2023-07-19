import { styled } from "styled-components";
import { Link } from "react-scroll";

const StyledHeader = styled.header`
    /* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Makasar&display=swap'); */
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

    .header__my-name {
        font-family: 'Noto Serif Makasar', serif;
    }
    .header__navigator {
        ol {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            li {
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
            <span className="header__my-name">Jo Seong Jun</span>
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
                    <li><span>4. </span>CONTACT</li>
                </ol>
            </nav>
        </StyledHeader>
    );
}
export default Header;

// FIXME Link 태그를 사용하기 위해 to='id value'를 지정하고 원하는 html 요소에 id 를 부여해 맵핑해준다.