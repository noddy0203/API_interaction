import React, { createContext, useContext, useReducer, useEffect } from 'react'

import reducer from './reducer'

const api = "https://hn.algolia.com/api/v1/search?"

const initialState = {
    query: "HTML",
    isLoading: true,
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const removePost = (post_id)=>{
        dispatch(
            {
                type: "REMOVE_POST",
                payload: post_id
            }
        )
    }

    const searchPost = (searchQuery)=>{
         dispatch({
            type:"SEARCH_POST",
            payload: searchQuery
         })  
    }

    const getNextPage = ()=>{
           dispatch({
            type:"NEXT_PAGE"
           })
    }

    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGE"
           })
    }

    useEffect(() => {
        fetchData(`${api}query=${state.query}&page=${state.page}`)
    }, [state.query , state.page])

    return (
        <AppContext.Provider value={{ ...state , removePost, searchPost, getPrevPage, getNextPage}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }