import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreater from '../../store/data/ActionCreaters';

import classes from './ListMoviePrev.module.css';

import MovieItem from '../../components/MovieItem/MovieItem';
import Spinner from '../../components/Spinner/Spinner';
class ListMoviePrev extends React.Component{


    componentDidMount() {
        this.props.getMoviesStart();
    }





 
    render(){
        let Output;
        if(this.props.Spinner){
            Output=(<Spinner/>);
        }else{
            Output = this.props.MoviesOnPage.map((el) => (
                <MovieItem
                Title= {el.Title}
                Year= {el.Year}
                imdbID= {el.imdbID}
                Type= {el.Type}
                Poster= {el.Poster}
                key={el.imdbID}
                />
            ))
        }

        return(
            <div className={classes.Container}>
                {Output}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return{
        CurrentPage: state.data.CurrentPage,
        MoviesOnPage: state.data.MoviesOnPage,
        ResCounter: state.data.ResCounter,
        Spinner: state.data.Spinner,
        Err: state.data.Err
    };
}


const mapDispatchToProps = dispatch => {
    return {
        getMoviesStart: () => dispatch(actionsCreater.getMoviesOnLoadStart())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(ListMoviePrev);