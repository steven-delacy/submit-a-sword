import request from 'superagent'

export function getUsers(id) {
    return request.get("/api/v1/users/" + id)
        .then(res => {
            return res.body
        })
        .catch(err => console.log(err))
}
