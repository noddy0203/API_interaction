import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext()
    return (
        <div style={{ textAlign: "center" }}>
            <div >
                <button onClick={() => getPrevPage()} style={{
                    marginRight: "1rem",
                    padding: "1rem",
                    border: "none", color: "white",
                    marginBottom: "2rem", borderRadius: "3px",
                    backgroundColor: "blue"
                }}>PREV</button>

                <p>{page + 1} of {nbPages}</p>

                <button onClick={() => getNextPage()} style={{
                    marginLeft: "1rem",
                    padding: "1rem",
                    border: "none", color: "white",
                    marginBottom: "2rem", borderRadius: "3px",
                    backgroundColor: "blue"
                }}>NEXT</button>
            </div>
        </div>
    )
}

export default Pagination