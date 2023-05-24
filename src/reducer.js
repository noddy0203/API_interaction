const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
        return {
        ...state,
        isLoading: true
        }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false ,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curEl)=>{
                    return curEl.objectID !== action.payload
                })
            }
        case "SEARCH_POST" :
            return {
                ...state,
                query: action.payload
            }
        case "NEXT_PAGE" :
            let pageNuminc = state.page+1;
            if (pageNuminc >= state.nbPages) {
                pageNuminc = 0
            }
            return {
               ...state,
               page: pageNuminc
            }            
        case "PREV_PAGE":
            let pageNum = state.page -1;
            if (pageNum <= 0) {
                pageNum = 0
            }
            return {
                ...state,
                page: pageNum
            }    
    }
    
    return state;
}

export default reducer