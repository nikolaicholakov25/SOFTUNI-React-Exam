import { HomeFilmCard } from "./HomeFilm";

export const HomeGallery = (props) => {
    let films = props.films
    // films.forEach(e => console.log(e.id))
    return (
        <div className="homegallery">
            { films 
            ? films.map(x => 
                <HomeFilmCard key={x.id} info={x.film} id={x.id}/>
            
                ) 
            : <div className="noFilms" >No Films Yet...</div>}
        </div>
    )
}