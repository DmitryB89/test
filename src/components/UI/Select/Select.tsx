import {OptionType} from "../../Developers/DevList.tsx";
import {SelectHTMLAttributes} from "react";
import {useDevStore} from "../../../store/store.ts";
import cn from './styles.module.sass'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    defaultValue: string
    options: OptionType[]
    value: string
}
export const Select = ({options, value, defaultValue}: SelectProps) => {
    const {clearFilters, filterDevs} = useDevStore();

    return (
        <div className={cn.filterWrapper}>
            <div>
                {defaultValue}
            </div>
            <select value={value} onChange={e => filterDevs(e.target.value)}>
                {options.map(option => <option value={option.value} key={option.value}>{option.title}</option>)}

            </select>
            <button onClick={clearFilters} className={cn.reset}>сбросить</button>
        </div>
    );
};
