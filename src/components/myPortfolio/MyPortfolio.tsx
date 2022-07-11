import React from 'react';
import style from './myPortfolio.module.css'
import commonStyle from "../../common/css/style.module.css";
import {Portfolio} from "./Portfolio";

export const MyPortfolio = () => {
    return (
        <div className={style.myPortfolioBloc}>
            <div className={`${commonStyle.container} ${commonStyle.blocItem}`}>
                <h1>My Portfolio</h1>
                <div className={commonStyle.item}>
                    <Portfolio/>
                    <Portfolio/>
                    <Portfolio/>
                    <Portfolio/>
                    <Portfolio/>
                    <Portfolio/>
                </div>
            </div>

        </div>
    );
};

