import React from 'react';
import commonStyle from '../../common/style/scss/style.module.scss'
import style from './header.module.scss'

export const Nav = () => {
    return (
        <div className={style.navBloc}>
            <ul className={`${commonStyle.blocUL} ${style.items}`}>
                <li><a href="">HOME</a></li>
                <li><a href="">SKILLS</a></li>
                <li><a href="">PORTFOLIO</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    );
};

 