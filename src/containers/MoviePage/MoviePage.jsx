import React from 'react'
import classes from './MoviePage.module.css'

const data =
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Comedy, Sci-Fi",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
  "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
  "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.7/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
      },
      {
          "Source": "Metacritic",
          "Value": "67/100"
      }
  ],
  "Metascore": "67",
  "imdbRating": "7.7",
  "imdbVotes": "489,848",
  "imdbID": "tt3896198",
  "Type": "movie",
  "DVD": "22 Aug 2017",
  "BoxOffice": "$389,804,217",
  "Production": "Walt Disney Pictures",
  "Website": "https://marvel.com/guardians",
  "Response": "True"

}

class MoviePage extends React.Component {
  componentDidMount () {
    const str = this.props.location.pathname
    const id = str.substr(1)
  }
  render () {
    console.log('params', this.props.match.params.redirectParam)
    return (
      <div className={classes.Main}>
        <div className={classes.Container}>
          <div className={classes.TitleAndBtnContainer}>
            <div className={classes.Primary_title}>{data.Title}</div>
          </div>
          <div className={classes.PosterAndDataContainer}>
            <div><img src={data.Poster} alt="Poster" /></div>
            <div className={classes.DataContainer}>
              <div className={classes.Data}>Rated As : {data.Rated}</div>
              <div className={classes.Data}>Runtime : {data.Runtime}</div>
              <div className={classes.Data}>Year Of Realise : {data.Released}</div>
              <div className={classes.Data}>Genre : {data.Genre}</div>
              <div className={classes.Data}>Language : {data.Language}</div>
              <div className={classes.Data}>Country : {data.Country}</div>
              <div className={classes.Data}>Director : {data.Director}</div>
              <div className={classes.Data}>Main Cast : {data.Actors}</div>
              <div className={classes.Data}>Production : {data.Production}</div>
              <div className={classes.Data}>BoxOffice : {data.BoxOffice}</div>
              <div>Awards : {data.Awards}</div>
              <div className={classes.LinkContainer}><a className={classes.Link} href={data.Website}>Site</a></div>
            </div>
          </div>
          <div className={classes.LikeBtnContainer}>
            <button className={classes.Btn} type={'button'}>Like</button>
          </div>
        </div>


      </div>

    )
  }
}

export default MoviePage
