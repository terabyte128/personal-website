import { FC } from 'react';
import ExternalLink from '../shared-components/ExternalLink';
import samPicture from '../img/sam.jpeg';
import { Link } from 'react-router-dom';

const Home: FC = () => {
    document.title = 'Sam Wolfson';
    return (
        <div className="flex-container-wrapping">
            <div>
                <h1>hi there!</h1>
                <p>My name is Sam Wolfson.</p>
                <p>
                    In summer 2020, I graduated with a master's degree in{' '}
                    <ExternalLink href="https://www.cs.washington.edu">
                        computer science
                    </ExternalLink>{' '}
                    at the{' '}
                    <ExternalLink href="http://www.washington.edu">
                        University of Washington
                    </ExternalLink>
                    .
                </p>
                <p>
                    I currently live and work in Seattle. I'm a software
                    engineer at{' '}
                    <ExternalLink href="https://www.extrahop.com">
                        ExtraHop
                    </ExternalLink>
                    , designing and building cloud software and infrastructure.
                </p>
                <p>
                    On this site, you may find interesting things about me, an
                    overview of my{' '}
                    <Link to="/academics">academic interests</Link>, my various{' '}
                    <Link to="/projects">projects</Link>, and what I like to do{' '}
                    <Link to="/hobbies">in my spare time</Link>.
                </p>
                <p>I also teach computer science at UW part-time.</p>
                <p>
                    You may also view my{' '}
                    <ExternalLink
                        href={`${process.env.PUBLIC_URL}/Samuel_Wolfson_Resume.pdf`}
                    >
                        resume
                    </ExternalLink>
                    , if you're into that sort of thing.
                </p>
            </div>
            <div className="flex-photo-right">
                <img
                    className="home-image rounded-image"
                    src={samPicture}
                    alt="Sam"
                />
            </div>
        </div>
    );
};

export default Home;
