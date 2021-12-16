import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Academics from './pages/Academics';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Random from './pages/Random';

interface Page {
    title: string;
    href: string;
    content: ReactNode;
}

const pages: readonly Page[] = [
    {
        title: 'academics',
        href: '/academics',
        content: <Academics />,
    },
    {
        title: 'projects',
        href: '/projects',
        content: <Projects />,
    },
    {
        title: 'hobbies',
        href: '/hobbies',
        content: <Hobbies />,
    },
    {
        title: 'random',
        href: '/random',
        content: <Random />,
    },
    {
        title: 'contact me',
        href: '/contact',
        content: <Contact />,
    },
] as const;

function App() {
    return (
        <Router>
            <div className="bordered-gradient">
                <div className="container">
                    <header
                        className="flex-space-between top-nav"
                        style={{ alignItems: 'baseline' }}
                    >
                        <Link to="/" className="clickable top-link">
                            <h1>Sam Wolfson</h1>
                        </Link>
                        {pages.map(({ title, href }) => (
                            <Link
                                to={href}
                                className="clickable top-link top-link-small"
                                key={title}
                            >
                                <h2>{title}</h2>
                            </Link>
                        ))}
                    </header>
                </div>
            </div>
            <div className="container main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {pages.map(({ title, href, content }) => (
                        <Route
                            key={title}
                            path={`/${href}`}
                            element={
                                <PageWithTitle title={title}>
                                    {content}
                                </PageWithTitle>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

interface PageWithTitleProps {
    title: string;
    children: ReactNode;
}

const PageWithTitle: FC<PageWithTitleProps> = props => {
    document.title = `${props.title} | Sam Wolfson`;
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    );
};

export default App;
