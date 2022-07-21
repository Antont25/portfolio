import React from 'react';
import style from './header.module.scss'
import {Nav} from "./Nav";
import commonStyle from '../../common/style/scss/style.module.scss'

export const Header = () => {
    return (
        <div className={style.headerBloc}>
            <div className={commonStyle.container}>
                <Nav/>
            </div>

        </div>
    );
};

