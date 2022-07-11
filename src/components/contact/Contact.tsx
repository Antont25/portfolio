import React from 'react';
import style from './contact.module.css'
import commonStyle from "../../common/css/style.module.css";
import residence from '../../common/img/icons.png'
import telefon from '../../common/img/icons8-telefon.png'
import sms from '../../common/img/icons8-sms.png'

export const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={`${commonStyle.container} ${commonStyle.blocItem}  `}>
                <h1>Contact </h1>
                <div className={style.item}>
                    <div className={style.formBloc}>
                        <h3>Contact mu</h3>
                        <form className={style.form}>
                            <input type="text" id="fname" name="fname" placeholder='Your name'/>
                            <input type="text" name="fname" placeholder='Your email'/>
                            <textarea name="fname" placeholder='Type the message here'/>
                            <button type="submit" className={style.btnForm}>SEND</button>
                        </form>
                    </div>
                    <div className={style.infoBloc}>
                        <h3>Get in touch mu</h3>
                        <p>Always available for freelancing if the right project comes along, Feel free to
                            contact me.
                        </p>
                        <div className={style.media}>
                            <div className={style.icon}>
                                <img src={residence} alt='residence'/>
                            </div>
                            <span className={style.mediaBody}>
                                    Country Ukraine,
                                city of Chernihiv
                                </span>
                        </div>
                        <a href='tel:+3800000' className={style.media}>
                            <div className={style.icon}>
                                <img src={telefon} alt='telefon'/>
                            </div>
                            <span className={style.mediaBody}>
                                    tel:+3800000
                                </span>
                        </a>
                        <a href='mailto: antontolkachovdev@gmail.com' className={style.media}>
                            <div className={style.icon}>
                                <img src={sms} alt='sms'/>
                            </div>
                            <span className={style.mediaBody}>
                                   email: antontolkachovdev@gmail.com
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

