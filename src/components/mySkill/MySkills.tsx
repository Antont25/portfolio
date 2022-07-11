import React from 'react';
import style from './mySkill.module.css'
import commonStyle from "../../common/css/style.module.css";
import {Skill} from "./skill/Skill";

export const MySkills = () => {
    return (
        <div className={style.skillBloc}>
            <div className={`${commonStyle.container} ${commonStyle.blocItem}`}>
                <h1>My Skills</h1>
                <div className={commonStyle.item}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

