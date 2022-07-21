import React from 'react';
import style from './myPortfolio.module.scss'
import commonStyle from "../../common/style/scss/style.module.scss";
import {Portfolio} from "./Portfolio";

export const MyPortfolio = () => {
    return (
        <div className={style.myPortfolioBloc}>
            <div className={`${commonStyle.container} ${commonStyle.blocItem}`}>
                <h1 className={commonStyle.textH1}>My Portfolio</h1>
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

