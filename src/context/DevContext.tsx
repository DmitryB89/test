import {createContext, useContext, useState} from "react";
import {DevType} from "../components/Developers/DevList.tsx";

export const DevContext = createContext<DevType[]>([]);

export function DevProvider({children}:any) {
    const [devs] = useState<DevType[]>([
        {
            id: 1,
            name: 'Dmitry Juniorovich',
            rank: 'junior',
            branch: 'frontend'
        },
        {
            id: 2,
            name: 'Vasyan Vasyanov',
            rank: 'middle',
            branch: 'frontend'
        },
        {
            id: 3,
            name: 'Nickolai Nidvoraev',
            rank: 'senior',
            branch: 'backend'
        },
    ])

    return <DevContext.Provider value={devs}>{children}</DevContext.Provider>
}
export const useDevContext = () => {

    const devs = useContext(DevContext)
    if (devs === null) {
        console.log('devs should not be null')
    }
    return devs

}
