import {ButtonHTMLAttributes, ReactNode} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
}

export const Button = ({className, children, ...props}: ButtonProps) => {

    return (
        <button {...props} className={className} {...props}>
            {children}
        </button>
    );
};
