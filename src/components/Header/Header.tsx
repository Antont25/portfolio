import React from 'react';
import style from './header.module.css'

import {Nav} from "./nav/Nav";
import commonStyle from '../../common/css/style.module.css'

export const Header = () => {
    return (
        <div className={style.headerBloc}>
            <div className={commonStyle.container}>
                <Nav/>
            </div>

        </div>
    );
};

