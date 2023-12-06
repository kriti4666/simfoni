import productActionType from "./actionType";

const initState = {
    result: "",
    data: [],
    loading: false,
    error: null,
}

export const getSlideImageReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case productActionType.GET_IMAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case productActionType.GET_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case productActionType.GET_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}