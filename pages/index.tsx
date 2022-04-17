import type { NextPage } from "next";
import Head from "next/head";
import { Container, Title } from "../styles/Core";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>nextjs tutorial</title>
				<meta name="description" content="Let's start nextjs tutorial" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<Title>home</Title>
			</Container>
		</>
	);
};

export default Home;
