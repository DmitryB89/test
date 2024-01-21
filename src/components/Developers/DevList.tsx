import {SingleDeveloper} from "./SingleDeveloper/SingleDeveloper.tsx";
import cn from './styles.module.sass'
import {Select} from "../UI/Select/Select.tsx";
import {useDevStore} from "../../store/store.ts";
import {filterOptions} from "../../data/filterOptions.ts";

export type DevType = {
    id: number;
    name: string;
    rank: string
    branch: string
};

export type OptionType = {
    value: string
    title: string
}


export const DevList = () => {
    const {devs, selectedFilter, removeDeveloper} = useDevStore();

    return <section className={cn.devlistWrapper}>

        <Select defaultValue='Фильтровать' options={filterOptions} value={selectedFilter}
        />

        {devs.length > 0 ? devs.map((dev, index) => {
            return <SingleDeveloper dev={dev} number={index + 1} removeDev={removeDeveloper} key={dev.id}/>
        }) : <h2 className={cn.empty}>Список пуст</h2>}


    </section>

};

