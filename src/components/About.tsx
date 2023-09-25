import { styled } from "styled-components";

import HoverGlowText from "./HoverGlowText";
import { Link } from "react-scroll";

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .hover-glow {
        font-family: 'Abril Fatface', cursive;
        margin-bottom: 1rem;
    }
    .about__frontend-text {
        font-family: 'Roboto', sans-serif;
        color: var(--color-neon-darkYellow);
        font-size: 25px;
        letter-spacing: 5px;
        margin-bottom: 1.5rem;
    }
    .about__description {
        margin-bottom: .5rem;
    }
    .about__button-contact {
        background-color: transparent;
        color: var(--color-neon-yellow);
        font-size: 1rem;
        max-width: 200px;
        min-height: 50px;
        margin-top: 3rem;
        padding: 0 1rem;
        border: 1.5px solid var(--color-neon-yellow);
        border-radius: 10px;
        transition: .5s;
        &:hover {
            background-color: var(--color-neon-yellow);
            color: black;
            box-shadow: 0 0 30px var(--color-neon-yellow);
        }
    }
`;

const About = () => {
    return(
        <StyledAbout id="About">
            <HoverGlowText text="Jo Seong jun" isSubTitle={false} />
            <h2 className="about__frontend-text">FRONT-END DEVELOPER</h2>
            <p className="about__description">지적 호기심이 많아 지속적으로 성장하며</p>
            <p className="about__description">문제해결을 위해 탐구하는 프론트엔드 개발자입니다.</p>     
            <Link to="Contact" smooth={true} duration={500} offset={-130}><button className="about__button-contact">CONTACT ME</button></Link>
        </StyledAbout>
    );
}

export default About;