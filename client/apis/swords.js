//FRONT-END API CALLS
import request from "superagent";

//API - GET SWORDS
export function getSwords()
    return request.get("/api/v1")
    .then((res) => {
        return res.body
    })

//API - ADD SWORDS
export function addSwords(swords) {
    console.log(swords)
    return request
        .post("/api/v1")
        .send(swords)
        .then((res) => res.body)
}

//API - DELETE SWORDS
export function deleteSword(id) {
    return request
        .delete('/api/v1/' + id)
        .then(res => res.body)
}

//API - UPDATE SWORDS
export function updateSword(id, swords) {
    return request
        .patch('/api/v1/' + id)
        .send(swords)
        .then(res => res.body)
}
