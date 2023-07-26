import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	font-family: 'IBM Plex Sans KR', sans-serif;
	box-sizing: border-box;
}
:root {
  font-size: 16px;
  color: var(--color-text-p);
  background-color: black;
  --color-neon-default: #14FFEC;
  --color-neon-green: #16FF00;
  --color-neon-yellow: #F2FF5B;
  --color-neon-darkYellow:#f2ff5b99;
  --color-neon-purple: #892CDC; 
  --color-gray: #aaaaaa;
  --color-text-p: #c5c5c5;
  --color-bg-darkGray: #0E0E0E;
}
h3 { font-family: 'Noto Sans KR', sans-serif; }
p {
	font-family: 'IBM Plex Sans KR', sans-serif;
	color: var(--color-text-p);
	margin-bottom: .5rem;
}
button {
	
}
svg {
        fill: white;
}
a {
	text-decoration: none;
	/* color: #c5c5c5; */
}

// 큰 PC 모니터에 대한 스타일
@media screen and (min-width: 1200px) {
	:root {
		font-size: 24px;
		header {
			font-size: 18px;
		}

		/* Skill */
		svg {
			width: 25px;
			height: 25px;
			fill: white;
		}
		.skills__box {
			.hover-glow {
				font-size: 1.5rem;
			}
			.version-control {
				margin-top: 2rem;
			}
		}

		/* Project */
		.description-p {
			font-size: 14pt;
		}
	}
}

// 작은 PC 모니터에 대한 스타일
@media screen and (max-width: 1199px) {
	:root {
		font-size: 20px;
		header {
			font-size: 16px;
		}
		svg {
			width: 22px;
			height: 22px;
			fill: white;
		}
		/* Skill */
		.skills__box {
			flex-direction: column;
			.hover-glow {
				font-size: 1.4rem;
			}
			.item-text {
				font-size: 18px;
			}
			.border-box {
				margin-bottom: 4rem;
			}
		}
		/* Project */
		#Projects {
			margin-top: 400px;
		}
		.projects__container {
			display: flex;
			flex-direction: column;
			.border-box {
				margin-bottom: 2rem;
			}
			.projects__container__subject {
				width: 80vw;
				height: max-content;
				.projects__container__subject__header {
					img {
						width: 6vw;
						height: 6vw;
					}
					h3 { font-size: 1.5rem; }
				}
			}
			.description-p {
				font-size: 14pt;
			}
		}
		/* Contact */
		#Contact {
			margin-top: 400px;
		}
		.contact-content {
			flex-direction: column;
			#map {
				margin-top: 100px;
				width: 100%;
			}
		}
		/* Footer */
		footer {
			display: none;
		}
	}
}

// 태블릿에 대한 스타일
@media screen and (max-width: 992px) {
	:root {
		font-size: 16px;
		header {
			font-size: 16px;
		}
		svg {
			width: 20px;
			height: 20px;
			fill: white;
		}
		/* Projects */
		#Projects {
			margin-top: 200px;
		}
		.projects__container__subject {
			.projects__container__subject__header {
				img {
					width: 8vw;
					height: 8vw;
					margin-right: 1rem;
				}
				h3 { 
					font-size: 25px;
				}
			}
		}
		/* Contact */
		#Contact {
			margin-top: 200px;
		}
	}
}

// 스마트폰에 대한 스타일
@media only screen and (max-width: 767px) {
	:root {
		font-size: 16px;
		header {
			font-size: 12px;
		}
		svg {
			width: 12px;
			height: 12px;
			fill: white;
		}
		.skills__box {
			.item-text {
				font-size: 12px;
			}
		}
		/* Projects */
		#Projects {
			margin-top: 100px;
		}
		.projects__container__subject {
			.projects__container__subject__header {
				img {
					width: 8vw;
					height: 8vw;
					margin-right: 1rem;
				}
				h3 { 
					font-size: 1rem;
				}
			}
		}
		/* Contact */
		#Contact {
			margin-top: 100px;
		}
	}
}
`;

root.render(
	<>
		<GlobalStyle />
		<App />
	</>
);
