import { FC } from 'react';

const ExternalLink: FC<React.HTMLProps<HTMLAnchorElement>> = props => (
    <a {...props} target="_blank" rel="noreferrer">
        {props.children}
    </a>
);

export default ExternalLink;
