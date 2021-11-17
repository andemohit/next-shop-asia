import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../assets/styles/Home.module.scss";
import CategoryCarousel from "./components/category-carousel/categoryCarousel";
import Topnav from "./components/top-nav/topNav";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <html lang="en" />
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <body className="fixed-bottom-padding" />
            </Head>

            <Topnav />

            <main className="py-4">
                <Container>
                    <Row>
                        <Col>
                            <CategoryCarousel />
                        </Col>
                    </Row>
                </Container>
                {/* Categories list */}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </>
    );
};

export default Home;
