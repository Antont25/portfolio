import React, {FC} from 'react';
import style from './mySkill.module.scss'
import iconReact from '../../common/img/icons-react.svg'
import styleCommon from '../../common/style/scss/style.module.scss'
import {Progress} from "../progressBar/Progress";

type SkillType = {
    progress: number
}

export const Skill: FC<SkillType> = (props) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={iconReact} alt=""/>
            <Progress progress={props.progress}/>
            <h3 className={styleCommon.textH3}>Front-end React</h3>
            <p className={styleCommon.textBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui
                sem, vulputate vitae dolor sed,
                sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu</p>
        </div>
    );
};

