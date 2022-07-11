import React from 'react';
import style from './myPortfolio.module.css'
import imgPortfolio from '../../common/img/6.jpg'

export const Portfolio = () => {
    return (
        <div className={style.portfolioItems}>
            <div className={style.imgBloc}>
                <img src={imgPortfolio} alt="IMG_PORTFOLIO"/>
            </div>
            <h3> названия</h3>
            <p>Краткое описания</p>
        </div>
    );
};

