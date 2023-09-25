import { styled } from "styled-components";
import { Link } from "react-scroll";

// Components
import HoverGlowText from "./HoverGlowText";
import BorderBox from "./BorderBox";

//img
import graph from "../img/graph.png";
import jcon from "../img/Jcon.png";
import tetris from "../img/tetris.png";

// SVG
import { ReactComponent as Javascript } from "../svg/javascript.svg";
import { ReactComponent as Typescript } from "../svg/typescript.svg";
import { ReactComponent as React } from "../svg/react.svg";
import { ReactComponent as Recoil } from "../svg/recoil.svg";
import { ReactComponent as Redux } from "../svg/redux.svg";
import { ReactComponent as Express } from "../svg/express.svg";
import { ReactComponent as Mysql } from "../svg/mysql.svg";

const StyledProjects = styled.section`
    width: 100%;
    height: max-content;
    padding-bottom: 10vh;
    .hover-glow {
        font-weight: 300;
    }
    .projects__p {
        margin-top: 2rem;
        text-decoration: none;
        a {
            position: relative;
            color: var(--color-neon-default);
            text-decoration: none;
        }
        a::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: var(--color-neon-default);
            transition: all .5s;
        }
        a:hover::before {
            width: 100%;
        }
    }
    /* container */
    .projects__container {
        margin-top: 5rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a {
            color: var(--color-text-p);
        }
        .projects__container__subject {
            display: flex;
            flex-direction: column;
            width: 25vw;
            height: 300px;
            padding: 1rem;
            
            .projects__container__subject__header {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                
                img {
                    width: 60px;
                    height: 60px;
                    margin-right: 1rem;
                }
                h3 {
                    height: max-content;
                    line-height: 1;
                    font-size: 1.3rem;
                }
            }
            .projects__container__subject__description {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;

                .description-p {
                    line-height: 1.2;
                }
            }
            .projects__container__subject__badges {
                display: flex;
                flex-direction: row;
                margin-top: 20px;
                svg {
                    margin-right: 20px;
                }
            }
        }
    }
    
    .tetris {
        transform: rotate(90deg);
    }

    /* current part */
    .current-project {
        margin: 1rem 0;
        p { font-size: medium; }
        a { 
            color: white;
            font-size: 16px;
            text-decoration: underline;
            &:hover {
                color: var(--color-neon-default);
            }
        }
    }
`;

const Projects = () => {
    return (
        <StyledProjects id="Projects">
            <HoverGlowText text="Projects" isSubTitle={true} />
            <p className="projects__p">
                For more details, visit my Repositories{" "}
                <a href="https://github.com/lofi-J?tab=repositories"
                    rel="noopener noreferrer"
                    target="_blank">
                    lofi-J GitHub
                </a>
            </p>
            <div className="projects__container">
                {/* JSJ */}
                <Link to="About" smooth={true} duration={500} offset={-100}>
                    <BorderBox>
                        <div className="projects__container__subject portfolio">
                            <div className="projects__container__subject__header">
                                <img src={jcon} alt="J logo" />
                                <h3>JoSeongJun</h3>
                            </div>
                            <div className="projects__container__subject__description">
                                <p className="description-p">
                                    저의 개인 웹 사이트를 가지기 위해 React, TypeScript를 이용해 제작하였으며 주기적으로 갱신되고 있습니다.
                                </p>
                            </div>
                            <div className="projects__container__subject__badges">
                                <React style={{ fill: "#61DAFB" }} />
                                <Typescript style={{ fill: "#3178C6" }} />
                            </div>
                        </div> 
                    </BorderBox>
                </Link>
                {/* SORT VISUALIZER */}
                <a href="https://sort-algorithms-visualization.netlify.app" target="_blank" rel="noreferrer">
                    <BorderBox>
                        <div className="projects__container__subject">
                            <div className="projects__container__subject__header">
                                <img src={graph} alt="sort logo" />
                                <h3 className="sav">Visualization</h3>
                            </div>
                            <div className="projects__container__subject__description">
                                <p className="description-p">
                                    HTML Canvas와 Web Audio API를 이용해 정렬 알고리즘 시각화한 개인 프로젝트입니다.
                                </p>
                                <p className="description-p">
                                    다크모드 구현 및 비동기 처리에 대한 이해를 높일 수 있었습니다.
                                </p>
                            </div>
                            <div className="projects__container__subject__badges">
                                <React style={{ fill: "#61DAFB" }} />
                                <Typescript style={{ fill: "#3178C6" }} />
                                <Recoil style={{ fill: "#3578E5" }} />
                            </div>
                        </div>
                    </BorderBox>
                </a>
                {/* WEB TETRIS */}
                <a href="https://react-js-tetris.up.railway.app/" target="_blank" rel="noreferrer">
                    <BorderBox>
                        <div className="projects__container__subject">
                            <div className="projects__container__subject__header">
                                <img src={tetris} alt="J logo" className="tetris" />
                                <h3>TETRIS</h3>
                            </div>
                            <div className="projects__container__subject__description">
                                <p className="description-p">
                                    React Hook과 상태관리에 좀 더 깊게 이해하기 위해 진행한 2인 프로젝트입니다.
                                </p>
                                <p className="description-p">
                                    Tetris 게임 로직 및 컴포넌트 설계 그리고 백엔드 부분을 담당했습니다.
                                </p>
                            </div>
                            <div className="projects__container__subject__badges">
                                <React style={{ fill: "#61DAFB" }} />
                                <Javascript style={{ fill: "#F7DF1E" }} />
                                <Redux style={{ fill: "#764ABC" }} />
                                <Express />
                                <Mysql style={{ fill: "#3e95cb" }} />
                            </div>
                        </div>
                    </BorderBox>
                </a>
            </div>
            <div className="current-project">
                <p>현재 협업경험을위해 5인 팀프로젝트를 진행중에 있습니다.</p>
                <a href="https://github.com/Fitness-Commerce/frontend" target="_blank" rel="noreferrer">Fitness-Commerce</a>
            </div>
        </StyledProjects>
    );
}

export default Projects;