import React from 'react';
import commonStyle from '../../common/style/scss/style.module.scss'
import style from './myBloc.module.scss'

export const MyBloc = () => {
    return (
        <div className={style.myBloc}>
            <div className={`${commonStyle.container}  ${style.aboutMe}`}>
                <div className={style.img}>
                    <img src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png" alt="img_avatar"/>
                </div>
                <div className={style.info}>
                    <h1 className={commonStyle.textH1}>ANTON TOLKACHOV_</h1>
                    <p className={commonStyle.textBody}>frontend developer</p>
                    <p className={commonStyle.textBody}><b> AGE: </b> 23</p>
                    <p className={commonStyle.textBody}><b>EMAIL: </b> mail@mail.com</p>
                    <p className={commonStyle.textBody}><b>ADDRESS: </b> Melbourne Victoria 3000 Australia</p>
                </div>

            </div>
        </div>
    );
};

