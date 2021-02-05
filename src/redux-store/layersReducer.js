import { response } from "../api/api";

const SET_LAYERS = 'SET_LAYERS';


let initialState = {
    layers: []
}

const layersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAYERS:
            return {
                ...state,
                layers: action.layers,
            }
        default:
            return state
    }
}

export const setLayers = (layers) => ({ type: SET_LAYERS, layers });


export default layersReducer;

