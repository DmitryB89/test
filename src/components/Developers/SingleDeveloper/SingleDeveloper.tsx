import {FC} from "react";
import cn from './styles.module.sass'
import deleteDev from "/public/delete.svg"
import {Button} from "../../UI/Button/Button.tsx";
import {DevType} from "../DevList.tsx";

type SingleDeveloperProps = {
    dev: DevType
    number: number
    removeDev: (dev: DevType) => void

}
export const SingleDeveloper: FC<SingleDeveloperProps> = ({dev, removeDev, number}) => {
    const {name, rank, branch} = dev
    return (
        <div className={cn.devWrapper}>
            <div className={cn.singleDev}>
                <div className={cn.textBlock}>
                    <div className={cn.name}>{number}. {name}</div>
                    <div className={cn.rank}>{rank}</div>
                    <div className={cn.branch}>{branch} developer</div>
                </div>
                <Button className={cn.deleteBtn} onClick={() => removeDev(dev)}><img src={deleteDev}
                                                                                     className={cn.deleteIcon}></img> Удалить</Button>
            </div>
        </div>
    );
};

