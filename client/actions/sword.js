export const RECIEVE_SWORD = 'RECIEVE_SWORD'
export const ADD_SWORD = 'ADD_SWORD'
export const DELETE_SWORD = 'DELETE_SWORD'
export const UPDATE_SWORD = 'UPDATE_SWORD'

export function initSword(swordDetails) {
    console.log('action', swordDetails)
        return {
            type:RECIEVE_SWORD,
            swordDetails
        }
}

export function addSwords(swordDetails) {
    return {
        type: ADD_SWORD,
        swordDetails
    }
}

export function deleteSword(id) {
    return {
        type: DELETE_SWORD,
        id
    }
}