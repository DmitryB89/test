import {useState} from "react";

export const useFetching = (url: string) => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false)

        }
    }
    return [fetchData, isLoading, error]
};
