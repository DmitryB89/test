import './styles/global.sass'
import {DevList} from "./components/Developers/DevList.tsx";
import cn from "./components/Developers/styles.module.sass";
import {Form} from "./components/UI/Form/Form.tsx";
import {useEffect} from "react";

import {DevProvider} from "./context/DevContext.tsx";
import {useFetching} from "./hooks/useFetching.ts";
import {Loader} from "./components/UI/Loader/Loader.tsx";
import {Button} from "./components/UI/Button/Button.tsx";
import useOutsideClick from "./hooks/useOutsideClick.ts";
import Modal from "./components/UI/Modal/Modal.tsx";

function App() {
    const [fetchData, isLoading] = useFetching('https://jsonplaceholder.typicode.com/posts')
    const { ref, setIsOpen, isOpen } = useOutsideClick(false);

    // const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        fetchData()
    },[])
    const onClickHandler = () => {
        setIsOpen(true)
    }

       return (
        <div>
            <div></div>
            <DevProvider>
                {isLoading && <div><Loader/></div>}
                <div className={cn.header}>
                    <h1 className={cn.h1}>Список разработчиков</h1>
                    <Button type={"button"} className={cn.addBtn} onClick={onClickHandler}>Модальное окно</Button>
                <div className={cn.formWrapper}>
                    <Form/>
                </div>
            </div>
            <DevList/>
            </DevProvider>
            {isOpen && <div ref={ref} >
                <Modal ><h2 style={{display:"flex", justifyContent:'center', alignContent:'center', paddingTop:'20px', color: 'white'}}>Модальное окно</h2></Modal></div>}

        </div>
    )
}

export default App
