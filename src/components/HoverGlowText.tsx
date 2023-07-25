import styled from "styled-components";


const StyledHoverGlowText = styled.span<IStyledHoverGlowText>`
    font-family: 'Noto Sans KR', sans-serif;
    font-style: ${props => props.is_sub_title ? 'none' : 'italic'};
    padding: 20px 0;
    max-width: max-content;
    color: var(--color-neon-yellow);
    transition: .5s;
    font-size: ${props => props.is_sub_title ? '2.5rem' : '3.5rem'};

    &:hover {
        color: var(--color-neon-yellow);
        text-shadow:
            5px 0 20px var(--color-neon-darkYellow),
            -5px 0 20px var(--color-neon-darkYellow),
            0 5px 20px var(--color-neon-darkYellow),
            0 -5px 20px var(--color-neon-darkYellow);
    }
`;


const HoverGlowText = ({text, isSubTitle = false}: IHoverGlowText) => {
    return(
        <StyledHoverGlowText is_sub_title={isSubTitle ? 'true' : undefined} className="hover-glow">{text}</StyledHoverGlowText>
    );
}

export default HoverGlowText;

interface IHoverGlowText {
    text: string;
    isSubTitle?: boolean;
}
interface IStyledHoverGlowText {
    is_sub_title: string | undefined;
}