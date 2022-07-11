import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MyBloc} from "./components/myBloc/MyBloc";
import {MySkills} from "./components/mySkill/MySkills";
import {MyPortfolio} from "./components/myPortfolio/MyPortfolio";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <MyBloc/>
            <MySkills/>
            <MyPortfolio/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
