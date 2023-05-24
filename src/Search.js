import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {

    const {query , searchPost} = useGlobalContext()
  return (
   <>
      <h1>Search Your Query ...</h1>
      <form>
        <div style={{textAlign:"center", marginBottom:"2rem"}}>
            <input type="text" 
                   style={{width:"40%", padding:"8px", borderRadius:"3px", border:"none"}}
                   value={query}
                   onChange={(e)=>searchPost(e.target.value)}   //passing(e.target.value) as paramenter to searchPost
                   placeholder='put your query here ...'
            />
        </div>
      </form>
   </>
  )
}

export default Search