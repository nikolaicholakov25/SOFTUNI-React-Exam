import { HomeFilmCard } from "./HomeFilm";

export const HomeGallery = (props) => {
    return (
        <div className="homegallery">
            {props.films.length > 0 
            ? props.films.map(x => 
                <HomeFilmCard key={x._id} {...x}/>)
            : <div className="noFilms" >No Films Yet...</div>}
        </div>
    )
}