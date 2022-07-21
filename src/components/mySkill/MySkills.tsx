import React from 'react';
import style from './mySkill.module.scss'
import commonStyle from "../../common/style/scss/style.module.scss";
import {Skill} from "./Skill";

export const MySkills = () => {
    return (
        <div className={style.skillBloc}>
            <div className={`${commonStyle.container} ${commonStyle.blocItem}`}>
                <h1 className={commonStyle.textH1}>My Skills</h1>
                <div className={commonStyle.item}>
                    <Skill progress={70}/>
                    <Skill progress={60}/>
                    <Skill progress={70}/>
                    <Skill progress={80}/>
                    <Skill progress={70}/>
                    <Skill progress={30}/>
                </div>
            </div>
        </div>
    );
};

