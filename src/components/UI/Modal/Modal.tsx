import { ReactNode } from 'react';
import cn from './Modal.module.sass'

type ModalProps = {
    children: ReactNode;
};


const Modal = ({ children }: ModalProps) => {
    return (
        <div className={cn.modal}>
            {children}
        </div>
    );
};

export default Modal;
