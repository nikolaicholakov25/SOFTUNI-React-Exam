import { useEffect, useState } from 'react'
import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
import { HomeGallery } from './HomeGallery'

export const Home = () => {

    let [films, getFilms] = useState({})

    useEffect(() => {
        filmServices.getAll()
        .then(r => getFilms(r))
    } , [])

    return (
        <div>
            <section className="homesection">
                <div className="hero">
                <h1 className='h1'>Welcome To Central Cinema</h1>
                </div>

                <HomeGallery 
                films={Object.values(films)}
                />
            </section>
        </div>
    )
}