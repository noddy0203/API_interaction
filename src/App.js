import React, {Suspense} from 'react'
import './App.css';
import Stories from './Stories';
import Pagination from './Pagination';

const Search = React.lazy(() => import("./Search"))
function App() {

  return (
    <>
      <Suspense fallback={<div>...loading</div>}>
        <Search />
      </Suspense>
        <Pagination />
       <Stories />
    </>
  );
}

export default App;
