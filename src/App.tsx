import { styled } from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const StyledApp = styled.div`
	main {
		/* header fixed(header height: 5vh) */
		padding-top: 10vh;
		margin: 0 10vw;
	}
`;

function App() {
	return (
		<StyledApp className="App">
			<Header />
			<main>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</StyledApp>
	);
}

export default App;
