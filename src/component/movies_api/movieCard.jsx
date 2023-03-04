
export default function MoviesCard({poster_path, release_date, vote_average, title}){
    const GetMoveisURl = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
    return(
        <div className="container poster_film">
            <img className="posrt_film" src={GetMoveisURl} alt="" />
            {/* <div className="title">{title}</div>
            <div className="info">
                <div className="date">{release_date}</div>
                <div className="imdb">{vote_average}</div>
            </div> */}
        </div>
    )
}