import './styles/global.sass'
import {DevList} from "./components/Developers/DevList.tsx";
import cn from "./components/Developers/styles.module.sass";
import {Form} from "./components/UI/Form/Form.tsx";
import sensei from '/public/sensei.jpg'
import {useEffect} from "react";
import {PostDataType, PostResponseType, postsApi} from "./api/posts-api.ts";
import {AxiosResponse} from "axios";
import ky from "ky";

function App() {


    useEffect(() => {
        postsApi.getPosts().then((res: AxiosResponse<PostResponseType[]>) => {
            console.log('Posts:', res.data);
        })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка получения списка постов:', error);
            });

        postsApi.createPost('axios-post',
            'пост, созданный с помощью AXIOS').then((res: AxiosResponse<PostDataType>) => {
            console.log('Создан новый пост:', res.data);
        })
            .catch(error => {
                console.error('Ошибка создания поста:', error);
            });


    }, [])

    useEffect(() => {
        addPost('https://jsonplaceholder.typicode.com/posts', { title: 'fetch-post', body: 'пост, созданный с помощью FETCH' }).then((data) => {
            console.log(data);
        });

    }, [])

    useEffect(() => {
        (async () => {
            try {
                const response = await ky.post('https://jsonplaceholder.typicode.com/posts', {
                    json: { title: 'ky-post', body: 'пост, созданный с помощью KY' }
                });
                const data = await response.json();
                console.log('KY',data);
            } catch (error) {
                console.error(error);
            }
        })()

    }, [])


    async function addPost(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }



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
