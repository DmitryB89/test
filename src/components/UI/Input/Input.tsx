import {InputHTMLAttributes} from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
}

export const Input = ({className, ...props}: InputProps) => {
    return (
        <input className={className} {...props} />
    );
};

