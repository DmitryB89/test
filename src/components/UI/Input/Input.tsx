import React, {InputHTMLAttributes, LegacyRef} from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
}

export const Input = React.forwardRef(({className, ...props}: InputProps, ref: LegacyRef<HTMLInputElement> | null) => {
    return (
        <input className={className} ref={ref} {...props}  />
    );
});

