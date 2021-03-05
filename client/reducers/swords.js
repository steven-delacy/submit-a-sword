import {
    ADD_SWORD,
    RECIEVE_SWORD,
    DELETE_SWORD,
    UPDATE_SWORD
} from "../actions/sword";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SWORD:
            return action.swordDetails;

        case RECIEVE_SWORD:
            return[...state, action.scrapDetails];

        case DELETE_SWORD:
            return state.filter((sword) => {
                return scrap.id
            })
    }
}