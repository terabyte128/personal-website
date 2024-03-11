import { FC } from 'react';
import ExternalLink from '../shared-components/ExternalLink';

const Contact: FC = () => (
    <>
        <p>
            You can email me at: me[at]samwolfson.com.
            <br />
            I'm on GitHub as{' '}
            <ExternalLink href="http://github.com/terabyte128/">
                terabyte128
            </ExternalLink>
            .
            <br />
            Oh, and I guess I'm also on{' '}
            <ExternalLink href="https://www.linkedin.com/in/sam-wolfson-91721b133/">
                LinkedIn
            </ExternalLink>
            , though I don't check it often.
        </p>
        <p>Currently I live in Seattle, WA.</p>
    </>
);

export default Contact;
