import {ChangeEvent, useEffect, useRef, useState} from 'react';
import cn from "../../Developers/styles.module.sass";
import {Input} from "../Input/Input.tsx";
import {Button} from "../Button/Button.tsx";
import plus from "/public/plus.svg";
import {useDevStore} from "../../../store/store.ts";


export const Form = () => {

    const {addDeveloper} = useDevStore();
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Фокусируемся на поле ввода при загрузке компонента
        }
    }, []);

    const [dev, setDev] = useState({name: '', rank: '', branch: ''})
    const onClickHandler = () => {
        const newDeveloper = {
            ...dev,
            id: Date.now(),
                    }
        addDeveloper(newDeveloper)
        setDev({name: '', rank: '', branch: ''})
    }

    return (
        <form action="" className={cn.form}>
            <Input type="text" placeholder={'Введите имя'} onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDev({...dev, name: e.target.value})
            } className={cn.nameInput}
                   value={dev.name}/>
            <div className={cn.buttonsWrapper}>
                <select onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setDev({...dev, rank: e.target.value})
                }>
                    <option value="junior">junior</option>
                    <option value="middle">middle</option>
                    <option value="senior">senior</option>
                </select>
                <select onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setDev({...dev, branch: e.target.value})
                }>
                    <option value="frontend">frontend</option>
                    <option value="backend">backend</option>
                </select>
                <Button type={"button"} className={cn.addBtn} onClick={onClickHandler}><img src={plus}
                                                                                            className={cn.plus}></img> Добавить</Button>
            </div>
        </form>
    );
};

