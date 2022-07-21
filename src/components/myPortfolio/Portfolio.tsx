import React from 'react';
import style from './myPortfolio.module.scss'
import imgPortfolio from '../../common/img/6.jpg'
import styleCommon from '../../common/style/scss/style.module.scss'

export const Portfolio = () => {
    return (
        <div className={style.portfolioItems}>
            <div className={style.imgBloc}>
                <img src={imgPortfolio} alt="IMG_PORTFOLIO"/>
            </div>
            <h3 className={styleCommon.textH3}> названия</h3>
            <p className={styleCommon.textBody}>Краткое описания</p>
        </div>
    );
};

