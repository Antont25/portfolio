import React from 'react';
import commonStyle from '../../common/css/style.module.css'
import style from './myBloc.module.css'

export const MyBloc = () => {
    return (
        <div className={style.myBloc}>
            <div className={`${commonStyle.container} ${style.aboutMe}`}>
                <div className={style.img}>
                    <img src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png" alt="img_avatar"/>
                </div>
                <div className={style.info}>
                    <h1>ANTON TOLKACHOV_</h1>
                    <p>frontend developer</p>
                    <p><b> AGE: </b> 23</p>
                    <p><b>EMAIL: </b> mail@mail.com</p>
                    <p><b>ADDRESS: </b> Melbourne Victoria 3000 Australia</p>
                </div>

            </div>
        </div>
    );
};

