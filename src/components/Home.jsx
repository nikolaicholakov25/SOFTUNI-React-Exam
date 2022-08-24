import { useContext, useEffect, useState } from 'react'
import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
import { HomeGallery } from './HomeGallery'
import { UserSessionContext } from './contexts/userSessionContext'

export const Home = () => {
    let {userSession} = useContext(UserSessionContext)

    let [films, setFilms] = useState([])

    useEffect( () => {
        filmServices.getAll()
        .then(res => setFilms(res))
    } , [] )

    return (
        <div>
            <section className="homesection">
                <div className="hero">
                    {userSession 
                    ? <h1 className='h1'>Welcome {userSession.email}</h1>
                    : <h1 className='h1'>Welcome To The Cinema</h1>}
                </div>

                <HomeGallery 
                films={Object.values(films)}
                />
            </section>
        </div>
    )
}