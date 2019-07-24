import React from 'react';


import Header from '../Header/Header';
import ListMoviePrev from '../ListMoviePrev/ListMoviePrev';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {



    render() {
        return(
            <React.Fragment>
                <Header/>
                <ListMoviePrev/>
                <Footer/>
            </React.Fragment>
        );
    }


}


export default Home;