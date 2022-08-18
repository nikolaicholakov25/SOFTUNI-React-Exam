const url = 'http://localhost:3030/'

export const showSession = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}


export const login = async (email,password) => {
    let suffix = "users/login"

        return fetch(`${url}${suffix}`, {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email,
                    password
                })
            })
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    return res.json()
                    .then(x => {
                        throw new Error(x.message)
                    })
                }
            })
            .then(d => sessionStorage.setItem('user' , JSON.stringify(d)))
            .catch(err => {
                alert(err)
            })

}


export const logout = () => {
    let suffix = 'users/logout'

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}`, {
        headers : {
            'X-Authorization': acc
        }
    })
    .then(e => sessionStorage.clear())
}

export const register = (email,password) => {
    let suffix = 'users/register'

    return fetch(`${url}${suffix}` , {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            likes: [],
        })
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return res.json()
            .then(x => {
                throw new Error(x.message)
            })
        }
    })
    .then(d => sessionStorage.setItem('user' , JSON.stringify(d)))
    .catch(err => alert(err))
}

