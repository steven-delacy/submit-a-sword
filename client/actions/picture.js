export const RECIEVE_PICTURE = 'RECIEVE_PICTURE'
export const ADD_PICTURE = 'ADD_PICTURE'
export const DELETE_PICTURE = 'DELETE_PICTURE'
export const UPDATE_PICTURE = 'UPDATE_PICTURE'

export function initPicture(pictureDetails) {
    console.log('action', pictureDetails)
        return {
            type:RECIEVE_PICTURE,
            pictureDetails
        }
}

export function addPicture(pictureDetails) {
    return {
        type: ADD_PICTURE,
        pictureDetails
    }
}

export function deletePicture(id) {
    return {
        type: DELETE_PICTURE,
        id:
    }
}

export function updatePicture() {
    return {
        type: UPDATE_PICTURE
    }
}