import { useEffect, useRef, useState } from 'react';

export default function useOutsideClick(initialIsVisible: boolean) {
    const [isOpen, setIsOpen] = useState(initialIsVisible);
    const ref = useRef(null);
    /* eslint-disable */

    const handleClickOutside = (event: any) => {
        // @ts-ignore
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    /* eslint-enable */

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isOpen, setIsOpen };
}
