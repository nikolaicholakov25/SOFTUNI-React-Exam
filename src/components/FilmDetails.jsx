import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFilm } from "../services/filmServices"

export const FilmDetails = () => {
    let [film,setFilm] = useState({})
    let {filmId} = useParams()

    useEffect(() => {
       getFilm(filmId)
       .then(r => setFilm(r))
    }, [])

    console.log(film);

    return (
        <div className="filmdetails">
            <div className="img"></div>
            <div className="description">
                <h1>{film.title}</h1>
            </div>
        </div>
    )
}