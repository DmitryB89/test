import './styles/global.sass'
import {DevList} from "./components/Developers/DevList.tsx";
import cn from "./components/Developers/styles.module.sass";
import {Form} from "./components/UI/Form/Form.tsx";
import sensei from './assets/sensei.jpg'

function App() {

    return (
        <div>
            <div className={cn.header}>
                <div className={cn.headingWrapper}>
                    <img src={sensei} className={cn.sensei}></img>
                    <h1 className={cn.h1}>Список разработчиков</h1>
                </div>
                <div className={cn.formWrapper}>
                    <Form/>
                </div>
            </div>
            <DevList/>
        </div>
    )
}

export default App
