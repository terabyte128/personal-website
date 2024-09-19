import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Academics from './pages/Academics';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Random from './pages/Random';
import { Bread } from './pages/Bread';
import { Privacy } from './pages/Privacy';

interface Page {
    title: string;
    href: string;
    content: ReactNode;
    visible?: boolean;
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
        title: 'sourdough',
        href: '/sourdough',
        content: <Bread />,
    },
    {
        title: 'etc',
        href: '/random',
        content: <Random />,
    },
    {
        title: 'contact',
        href: '/contact',
        content: <Contact />,
    },
    {
        title: 'Privacy Policy',
        href: '/privacy',
        content: <Privacy />,
    },
] as const;

function App() {
    return (
        <Router>
            <div className="bordered-gradient">
                <div className="container">
                    <header
                        className="flex-container-wrapping flex-space-between top-nav"
                        style={{ alignItems: 'baseline' }}
                    >
                        <Link to="/" className="clickable top-link">
                            <h1>Sam Wolfson</h1>
                        </Link>
                        {pages
                            .filter(p => p.visible)
                            .map(({ title, href }) => (
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
    document.title = `${
        props.title.charAt(0).toUpperCase() + props.title.slice(1)
    } | Sam Wolfson`;
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    );
};

export default App;
