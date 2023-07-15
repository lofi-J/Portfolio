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
	box-sizing: border-box;
	font-family: 'Source ', monospace;
}
:root {
  font-size: 16px;
  color: white;
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
p {
	font-family: 'Source Code Pro', monospace;
	color: var(--color-text-p);
	margin-bottom: .5rem;
}
button {
	font-family: 'Source Code Pro', monospace;
}

// 큰 PC 모니터에 대한 스타일
@media screen and (min-width: 1200px) {
	:root {
		font-size: 24px;
		header {
			font-size: 18px;
		}
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
		#Projects {
			margin-top: 30vh;
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
		.skills__box {
			.item-text {
				font-size: 16px;
			}
		}
	}
}

// 스마트폰에 대한 스타일
@media only screen and (max-width: 767px) {
	:root {
		font-size: 14px;
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
	}
}
`;

root.render(
	<>
		<GlobalStyle />
		<App />
	</>
);
