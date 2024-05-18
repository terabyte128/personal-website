import { FC, ReactNode, useState } from 'react';

interface CollapsingSectionProps {
    title: string;
    children?: ReactNode;
}

const CollapsingSection: FC<CollapsingSectionProps> = props => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div>
            <h2 className="clickable" onClick={() => setIsCollapsed(c => !c)}>
                {props.title}
                {isCollapsed ? (
                    <i className="arrow up" />
                ) : (
                    <i className="arrow down" />
                )}
            </h2>
            <div
                className="collapsible-section"
                style={{
                    display: isCollapsed ? 'none' : 'block',
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default CollapsingSection;
