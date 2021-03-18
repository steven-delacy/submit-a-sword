//FRONT-END API CALLS
import request from "superagent";

//API - GET PICTURES
export function getPicture()
    return request.get("/api/v1")
    .then((res) => {
        return res.body
    })

//API - ADD PICTURES
export function addPicture(picture) {
    console.log(picture)
    return request
        .post("/api/v1")
        .send(picture)
        .then((res) => res.body)
}

//API - DELETE PICTURES
export function deletePicture(id) {
    return request
        .delete('/api/v1/' + id)
        .then(res => res.body)
}

//API - UPDATE PICTURES
export function updateSword(id, picture) {
    return request
        .patch('/api/v1/' + id)
        .send(picture)
        .then(res => res.body)
}
