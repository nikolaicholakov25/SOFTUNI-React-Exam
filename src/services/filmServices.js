import { showSession } from "./userServices"

const url = 'http://localhost:3030/jsonstore/'

export const getAll = () => {
    let suffix = "films"

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const getFilm = (id) => {
    let suffix = `films/${id}`

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const editGame =(id , body) => {
    let suffix = `data/films/${id}`

    // let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'put',
        headers: {
            'content-type' : 'application/json',
            // "X-Authorization": acc
        },
        body: JSON.stringify(body)

    })
    .then(res => res.json())

}

export const createFilm = (film) => {
    let suffix = `films`

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'post',
        headers: {
            'content-type' : 'application/json',
            "X-Authorization": acc
        },
        body: JSON.stringify(film)
    })
    .then(res => res.json())
}


export const deleteFilm = (filmId) => {
    let suffix = `films/${filmId}`

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'delete',
        headers: {
            "X-Authorization": acc
        },
    })
    .then(res => res.json())
}
export const getComments = (gameId) => {
    let suffix = `data/comments?where=gameId%3D%22${gameId}%22`

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const addComment = (gameId,comment) => {
    let suffix = `data/comments`

    // let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'post',
        headers: {
            'content-type' : 'application/json',
            // "X-Authorization": acc
        },
        body: JSON.stringify({
            gameId,
            comment
        })
    })
    .then(res => res.json())
}
