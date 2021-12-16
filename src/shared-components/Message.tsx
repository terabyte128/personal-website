import { FC, ReactNode } from 'react';

interface MessageProps {
    title?: string;
    children: ReactNode;
}

const Message: FC<MessageProps> = props => (
    <div className="message">
        {props.title && (
            <p
                style={{
                    fontWeight: 'bold',
                    margin: 0,
                    fontSize: '18px',
                    marginBottom: '6px',
                }}
            >
                {props.title}
            </p>
        )}
        {props.children}
    </div>
);

export default Message;
