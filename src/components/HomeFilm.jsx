import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
export const HomeFilmCard = (props) => {
    
    let filmId = props[0]
    let info = props[1]

    return (

        <Link to={`/film-details/${filmId}`}>
            <div className="card">
                <img src={info.imageUrl} alt="filmPicture" />
                <h1 className='cardTitle'>{info.title}</h1>
            </div>
        </Link>
    )
}