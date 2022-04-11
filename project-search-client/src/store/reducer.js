const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TAGS':
            return {
                ...state,
                activeTags: action.payload
            }
        case 'UPDATE_TERM':
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }
}

export default reducer