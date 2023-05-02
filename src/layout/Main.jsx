import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from "../components/Loading/Loading";

const Main = () => {

    const navigation = useNavigation()

    return (
        <div>
            <Header />
            <div>{navigation.state === 'loading' && <Loading />}</div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;