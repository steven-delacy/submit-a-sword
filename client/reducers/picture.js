import {
    ADD_PICTURE,
    RECIEVE_PICTURE,
    DELETE_PICTURE,
    UPDATE_PICTURE
} from "../actions/picture";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PICTURE:
            return action.pictureDetails;

        case RECIEVE_PICTURE:
            return[...state, action.pictureDetails];

        case DELETE_PICTURE:
            return state.filter((picture) => {
                return picture.id
            })
        case UPDATE_PICTURE:
            return state.filter((picture) => {
                return picture.id !== action.id;
            })
    }
}

export default reducer;