import { ReactNode } from "react";
import styled from "styled-components";

const StyledBorderBox = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: none;
    max-width: max-content;
    background-color: var(--color-bg-darkGray);
    
    &::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 0px;

        transition: width .5s ease 0s, height .5s ease 0s;
    }
 
    &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 0px;
        height: 0px;
        
        transition: width .5s ease 0s, height .5s ease 0s;
    }
    
    &:hover {
        transition-delay: .5s;
        
        box-shadow: 0 0 20px var(--color-neon-default);
        &::after {
            width: 100%;
            height: 100%;
            border-top: 2px solid var(--color-neon-default);
            border-left: 2px solid var(--color-neon-default);
        }
        &::before {
            width: 100%;
            height: 100%;
            border-bottom: 2px solid var(--color-neon-default);
            border-right: 2px solid var(--color-neon-default);
        }
    }
`
const BorderBox = <T extends IBorderBox>({children}: T) => {
    return (
        <StyledBorderBox className="border-box">
            {children}
        </StyledBorderBox>
    );
}

export default BorderBox;

interface IBorderBox {
    children: ReactNode;    
}