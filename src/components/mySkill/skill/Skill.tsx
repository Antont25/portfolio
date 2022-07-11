import React from 'react';
import style from './skill.module.css'
import iconReact from '../../../common/img/icons-react.svg'

export const Skill = () => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={iconReact} alt=""/>
            <h3>Front-end React</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed,
                sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu</p>
        </div>
    );
};

