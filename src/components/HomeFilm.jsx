import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'

export const HomeFilmCard = (props) => {
    return (
        <Link to={`/film-details/${props.id}`}>
            <div className="card">
                <img src={props.info.imageUrl} alt="filmPicture" />
                <h1 className='cardTitle'>{props.info.title}</h1>
            </div>
        </Link>
    )
}