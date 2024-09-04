import { styled } from "styled-components";
import HoverGlowText from "./HoverGlowText";
import KakaoMap from "./KakaoMap";

const StyledContact = styled.section`
    width: 100%;
    height: 90vh;
    .hover-glow {
        font-weight: 300;
        margin-bottom: 2rem;
    }
    .contact-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
    }
    
    .contact-content__left {
        display: flex;
        flex-direction: column;
        a {
            width: max-content;
            color: var(--color-neon-green);
            margin-top: 50px;
            border: 1.3px solid var(--color-neon-green);
            border-radius: 10px;
            padding: 10px;
            transition: .5s;
            &:hover {
                background-color: var(--color-neon-green);
                color: black;
                box-shadow: 0 0 30px var(--color-neon-green);
            }
        }
    }
`;

const Contact = () => {
    return (
        <StyledContact id="Contact">
            <HoverGlowText text="Contact" isSubTitle={true} />
            <div className="contact-content">
                <div className="contact-content__left">
                    <p>현재 새로운 경험과 도전을 찾고 있으며 항상 이메일을 열어두고 있습니다.</p>
                    <p>저에 대해 궁금한 점이나 인사를 전하고 싶다면 메일을 보내보세요.</p>
                    <a href="mailto:jsj2505@gmail.com">Send Message</a>
                </div>
                <div className="contact-content__right">
                    <KakaoMap />
                </div>
            </div>
        </StyledContact>
    );
}

export default Contact;
