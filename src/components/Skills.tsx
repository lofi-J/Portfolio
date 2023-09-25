import { styled } from "styled-components";

// Components
import HoverGlowText from "./HoverGlowText";
import BorderBox from "./BorderBox";

// SVG
import { ReactComponent as Html5 } from "../svg/html5.svg";
import { ReactComponent as Css3 } from "../svg/css3.svg";
import { ReactComponent as Javascript } from "../svg/javascript.svg";
import { ReactComponent as Typescript } from "../svg/typescript.svg";
import { ReactComponent as React } from "../svg/react.svg";
import { ReactComponent as Styled } from "../svg/styledcomponents.svg";
import { ReactComponent as Recoil } from "../svg/recoil.svg";
import { ReactComponent as Redux } from "../svg/redux.svg";
import { ReactComponent as Netlify } from "../svg/netlify.svg";
import { ReactComponent as Heroku } from "../svg/heroku.svg";
import { ReactComponent as Railway } from "../svg/railway.svg";
import { ReactComponent as Git } from "../svg/git.svg";
import { ReactComponent as Github } from "../svg/github.svg";

const StyledSkills = styled.section`
    width: 100%;
    height: max-content;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
    .hover-glow { 
        font-weight: 300;
        margin-bottom: 1rem;
    }
    .skills__introduce__javascript {
        color: var(--color-neon-default);
    }
    .skills__introduce-p {
        line-height: 1.5;
    }
    .skills__box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 3rem;
        
        .skills__box__wrapper {
            display: flex;
            flex-direction: column;
            align-items: start;
            
            .hover-glow {
                margin-bottom: .5rem;
                font-weight: 100;
            }
            .border-box {
                display: flex;
                width: max-content;
                padding: .5rem;
                .border-box__div {
                    display: flex;
                    flex-direction: column;
                }
                .border-box__div-left {
                    margin-right: 100px;
                }
            }
        }
        .border-box__div__skill {
            padding: .5rem;
        }
        .item-text {
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 100;
            font-size: 20px;
            padding-left: .5rem;
        }
    }
`;

const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <HoverGlowText text="Skills" isSubTitle={true} />
            <p className="skills__introduce-p">
                개발공부를 해오며 만들어보고 싶었던 웹 사이트들을 제작하는 과정에서 필요에 의해 자연스럽게 익힌 기술 스택들입니다.
            </p>
            <p className="skills__introduce-p">
                여러 기술 스택들을 익히며 특히 <span className="skills__introduce__javascript">Javascript</span>를 깊게 이해하기 위해 노력하고 있습니다.
            </p>
            <div className="skills__box">
                <div className="skills__box__wrapper">
                    <HoverGlowText text="Frontend" isSubTitle={true} />
                    <BorderBox>
                        <div className="border-box__div border-box__div-left">
                            <span className="border-box__div__skill"><Html5 style={{ fill: "#E34F26" }} /><span className="item-text">HTML5</span></span>
                            <span className="border-box__div__skill"><Css3 style={{ fill: "#1572B6" }} /><span className="item-text">CSS3</span></span>
                            <span className="border-box__div__skill"><Javascript style={{ fill: "#F7DF1E" }} /><span className="item-text">Javascript</span></span>
                            <span className="border-box__div__skill"><Typescript style={{ fill: "#3178C6" }} /><span className="item-text">Typescript</span></span>
                        </div>
                        <div className="border-box__div">
                            <span className="border-box__div__skill"><React style={{ fill: "#61DAFB" }} /><span className="item-text">React</span></span>
                            <span className="border-box__div__skill"><Styled style={{ fill: "#DB7093" }} /><span className="item-text">Styled components</span></span>
                            <span className="border-box__div__skill"><Recoil style={{ fill: "#3578E5" }} /><span className="item-text">Recoil</span></span>
                            <span className="border-box__div__skill"><Redux style={{ fill: "#764ABC" }} /><span className="item-text">Redux</span></span>
                        </div>
                    </BorderBox>
                </div>
                <div className="skills__box__wrapper">
                    <div className="skills__box__wrapper">
                        <HoverGlowText text="Deployment" isSubTitle={true} />
                        <BorderBox>
                            <span className="border-box__div__skill"><Netlify style={{ fill: "#00C7B7" }} /><span className="item-text">Redux</span></span>
                            <span className="border-box__div__skill"><Heroku style={{ fill: "#430098" }} /><span className="item-text">Heroku</span></span>
                            <span className="border-box__div__skill"><Railway style={{ fill: "#ffffff" }} /><span className="item-text">Railway</span></span>
                        </BorderBox>
                    </div>
                    <div className="skills__box__wrapper version-control">
                        <HoverGlowText text="Version Control" isSubTitle={true} />
                        <BorderBox>
                            <span className="border-box__div__skill"><Git style={{ fill: "#F05032" }} /><span className="item-text">Git</span></span>
                            <span className="border-box__div__skill"><Github style={{ fill: "#ffffff" }} /><span className="item-text">Github</span></span>
                        </BorderBox>
                    </div>
                </div>
            </div>
        </StyledSkills>
    );
}

export default Skills;