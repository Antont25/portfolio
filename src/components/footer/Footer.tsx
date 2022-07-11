import React from 'react';
import style from './footer.module.css'
import commonStyle from "../../common/css/style.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBloc}>
            <div className={`${commonStyle.container} ${commonStyle.item}`}>
                <div className={style.footerIcon}>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 50 50" width="25px"
                             height="25px">
                            <g id="surface29762940">
                                <path style={{
                                    stroke: 'none',
                                    fillRule: 'nonzero',
                                    fill: 'rgb(100%,100%,100%)',
                                    fillOpacity: '1'
                                }}
                                      d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594
                                  48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406
                                  2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375
                                  46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z
                                  M 26.582031 10 C 23.929688 10 21.917969 10.867188 20.679688 12.402344 C
                                  19.4375 13.933594 19 15.980469 19 18.226562 L 19 20 L 17 20 C 16.449219 20
                                  16 20.449219 16 21 L 16 26 C 16 26.550781 16.449219 27 17 27 L 19 27 L 19
                                  39 C 19 39.550781 19.449219 40 20 40 L 26 40 C 26.550781 40 27 39.550781 27
                                  39 L 27 27 L 31 27 C 31.476562 27 31.886719 26.664062 31.980469 26.195312 L
                                  32.980469 21.195312 C 33.039062 20.902344 32.960938 20.597656 32.773438 20.367188
                                  C 32.582031 20.132812 32.300781 20 32 20 L 27 20 L 27 17.808594 C 27 17.320312
                                  27.03125 17.324219 27.171875 17.234375 C 27.3125 17.144531 27.820312 17 28.710938
                                  17 L 32 17 C 32.550781 17 33 16.550781 33 16 L 33 12 C 33 11.578125 32.734375
                                  11.199219 32.335938 11.058594 C 32.335938 11.058594 29.457031 10 26.582031 10 Z M
                                  26.582031 12 C 28.472656 12 30.226562 12.511719 31 12.753906 L 31 15 L 28.710938 15 C
                                  27.664062 15 26.8125 15.085938 26.085938 15.558594 C 25.355469 16.03125 25 16.941406 25
                                  17.804688 L 25 21 C 25 21.550781 25.449219 22 26 22 L 30.78125 22 L 30.179688 25 L 26 25
                                  C 25.449219 25 25 25.449219 25 26 L 25 38 L 21 38 L 21 26 C 21 25.449219 20.550781 25 20
                                  25 L 18 25 L 18 22 L 20 22 C 20.550781 22 21 21.550781 21 21 L 21 18.226562 C 21 16.246094
                                  21.40625 14.683594 22.234375 13.65625 C 23.058594 12.632812 24.335938 12 26.582031 12 Z M
                                  26.582031 12 "/>
                            </g>
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="25px" height="25px"
                             viewBox="0 0 172 172"
                             style={{fill: '#000000'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1"
                               strokeLinecap="butt" strokeMiterlimit="10"
                               strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                               fontSize="none" textAnchor="none">
                                <path d="M0,172v-172h172v172z" fill="none">
                                </path>
                                <g fill="#ffffff">
                                    <path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603
                            35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12
                            -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,
                            72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM55.04,
                            41.28c-5.65883,0 -10.32,4.66117 -10.32,10.32c0,5.65883 4.66117,10.32 10.32,10.32c5.65883,0 10.32,-4.66117
                            10.32,-10.32c0,-5.65883 -4.66117,-10.32 -10.32,-10.32zM55.04,48.16c1.9406,0 3.44,1.4994 3.44,3.44c0,1.9406
                            -1.4994,3.44 -3.44,3.44c-1.9406,0 -3.44,-1.4994 -3.44,-3.44c0,-1.9406 1.4994,-3.44 3.44,-3.44zM48.16,65.36c-1.89978,
                            0.00019 -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019
                            3.43981,-1.54022 3.44,-3.44v-51.6c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM75.68,65.36c-1.89978,0.00019
                            -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022
                             3.44,-3.44v-25.8c0,-4.74563 3.85437,-8.6 8.6,-8.6c4.74563,0 8.6,3.85437 8.6,8.6v8.6v17.2c0.00019,1.89978 1.54022,
                             3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-29.24c0,-14.20854 -11.59146,-25.8 -25.8,
                             -25.8c-4.42546,0 -8.39448,1.43156 -12.04,3.4064c-0.01861,-1.88665 -1.55326,-3.40631 -3.44,-3.4064zM51.6,
                             72.24h6.88v44.72h-6.88zM79.12,72.24h6.88v2.80844c0.00017,1.37921 0.824,2.62502 2.09306,3.16514c1.26906,0.54012
                             2.73802,0.27014 3.73209,-0.68592c3.40844,-3.27421 7.99223,-5.28765 13.09485,-5.28765c10.49066,0 18.92,8.42934
                             18.92,18.92v25.8h-6.88v-13.76v-8.6c0,-8.49837 -6.98163,-15.48 -15.48,-15.48c-8.49837,0 -15.48,6.98163
                             -15.48,15.48v22.36h-6.88z">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="25px" height="25px"
                             viewBox="0 0 172 172"
                             style={{fill: '#000000'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1"
                               strokeLinecap="butt" strokeMiterlimit="10"
                               strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                               fontSize="none" textAnchor="none">
                                <path d="M0,172v-172h172v172z" fill="none">
                                </path>
                                <g fill="#ffffff">
                                    <path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603
                            35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12
                            -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,
                            72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM55.04,
                            41.28c-5.65883,0 -10.32,4.66117 -10.32,10.32c0,5.65883 4.66117,10.32 10.32,10.32c5.65883,0 10.32,-4.66117
                            10.32,-10.32c0,-5.65883 -4.66117,-10.32 -10.32,-10.32zM55.04,48.16c1.9406,0 3.44,1.4994 3.44,3.44c0,1.9406
                            -1.4994,3.44 -3.44,3.44c-1.9406,0 -3.44,-1.4994 -3.44,-3.44c0,-1.9406 1.4994,-3.44 3.44,-3.44zM48.16,65.36c-1.89978,
                            0.00019 -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019
                            3.43981,-1.54022 3.44,-3.44v-51.6c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM75.68,65.36c-1.89978,0.00019
                            -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022
                             3.44,-3.44v-25.8c0,-4.74563 3.85437,-8.6 8.6,-8.6c4.74563,0 8.6,3.85437 8.6,8.6v8.6v17.2c0.00019,1.89978 1.54022,
                             3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-29.24c0,-14.20854 -11.59146,-25.8 -25.8,
                             -25.8c-4.42546,0 -8.39448,1.43156 -12.04,3.4064c-0.01861,-1.88665 -1.55326,-3.40631 -3.44,-3.4064zM51.6,
                             72.24h6.88v44.72h-6.88zM79.12,72.24h6.88v2.80844c0.00017,1.37921 0.824,2.62502 2.09306,3.16514c1.26906,0.54012
                             2.73802,0.27014 3.73209,-0.68592c3.40844,-3.27421 7.99223,-5.28765 13.09485,-5.28765c10.49066,0 18.92,8.42934
                             18.92,18.92v25.8h-6.88v-13.76v-8.6c0,-8.49837 -6.98163,-15.48 -15.48,-15.48c-8.49837,0 -15.48,6.98163
                             -15.48,15.48v22.36h-6.88z">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="25px" height="25px"
                             viewBox="0 0 172 172"
                             style={{fill: '#000000'}}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1"
                               strokeLinecap="butt" strokeMiterlimit="10"
                               strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                               fontSize="none" textAnchor="none">
                                <path d="M0,172v-172h172v172z" fill="none">
                                </path>
                                <g fill="#ffffff">
                                    <path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603
                            35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12
                            -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,
                            72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM55.04,
                            41.28c-5.65883,0 -10.32,4.66117 -10.32,10.32c0,5.65883 4.66117,10.32 10.32,10.32c5.65883,0 10.32,-4.66117
                            10.32,-10.32c0,-5.65883 -4.66117,-10.32 -10.32,-10.32zM55.04,48.16c1.9406,0 3.44,1.4994 3.44,3.44c0,1.9406
                            -1.4994,3.44 -3.44,3.44c-1.9406,0 -3.44,-1.4994 -3.44,-3.44c0,-1.9406 1.4994,-3.44 3.44,-3.44zM48.16,65.36c-1.89978,
                            0.00019 -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019
                            3.43981,-1.54022 3.44,-3.44v-51.6c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM75.68,65.36c-1.89978,0.00019
                            -3.43981,1.54022 -3.44,3.44v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022
                             3.44,-3.44v-25.8c0,-4.74563 3.85437,-8.6 8.6,-8.6c4.74563,0 8.6,3.85437 8.6,8.6v8.6v17.2c0.00019,1.89978 1.54022,
                             3.43981 3.44,3.44h13.76c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-29.24c0,-14.20854 -11.59146,-25.8 -25.8,
                             -25.8c-4.42546,0 -8.39448,1.43156 -12.04,3.4064c-0.01861,-1.88665 -1.55326,-3.40631 -3.44,-3.4064zM51.6,
                             72.24h6.88v44.72h-6.88zM79.12,72.24h6.88v2.80844c0.00017,1.37921 0.824,2.62502 2.09306,3.16514c1.26906,0.54012
                             2.73802,0.27014 3.73209,-0.68592c3.40844,-3.27421 7.99223,-5.28765 13.09485,-5.28765c10.49066,0 18.92,8.42934
                             18.92,18.92v25.8h-6.88v-13.76v-8.6c0,-8.49837 -6.98163,-15.48 -15.48,-15.48c-8.49837,0 -15.48,6.98163
                             -15.48,15.48v22.36h-6.88z">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <span className={style.footerText}>© 2022 copyright  all reserved</span>
            </div>
        </div>
    );
};
