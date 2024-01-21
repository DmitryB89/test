import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    params: {userId: 1}
})

export const postsApi = {
    getPosts() {
        return instance.get<PostResponseType[]>('posts',
        );
    },
    createPost(title: string, body: string) {
        return instance.post<PostDataType>('posts', {title, body}
        );
    },
}

export type PostResponseType = [
    userId: string,
    id: number,
    title: string,
    body: string
]


export type PostDataType = [
    title: string,
    body: string,
    userId: number,
]
