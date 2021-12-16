import { FC } from 'react';
import ExternalLink from '../shared-components/ExternalLink';

const Random: FC = () => (
    <p>
        Other things that don't quite fit elsewhere.
        <ul>
            <li>
                <ExternalLink href="http://milesianmedia.net/">
                    <b>Milesian Media</b>
                </ExternalLink>{' '}
                is my friend’s website, with cool games, programmer-y stuff and
                other interesting media. You should probably check it out, I
                hear he’s a pretty cool guy.
            </li>
        </ul>
    </p>
);

export default Random;
