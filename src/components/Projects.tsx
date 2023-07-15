import { styled } from "styled-components";
import HoverGlowText from "./HoverGlowText";

const StyledProjects = styled.section`
    width: 100%;
    height: 90vh;
`;

const Projects = () => {
    return (
        <StyledProjects id="Projects">
            <HoverGlowText text="Projects" isSubTitle={true} />
            
        </StyledProjects>
    );
}

export default Projects;