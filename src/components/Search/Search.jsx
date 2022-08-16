import { useEffect, useState } from 'react';
import './search.scss';

export const Search = (props) => {
   const [searchInput, setSearchInput] = useState('');
   const [filteredResults, setFilteredResults] = useState([]);

   const handleOnchangeSearch = (event) => {
      setSearchInput(event.target.value);
   };

   useEffect(() => {
      if (searchInput !== '') {
         const filteredData = props.student.filter((element) => {
            return element.name.includes(searchInput);
         });
         setFilteredResults(filteredData);
      } else {
         setFilteredResults(props.student);
      }
   }, [searchInput]);

   const searchItems = (searchValue) => {
      props.searchStudent([...filteredResults]);
   };

   return (
      <div className="container">
         <div>
            <input
               onChange={(event) => {
                  handleOnchangeSearch(event);
               }}
               className="search-com form-control"
               type="text"
               placeholder="search"
            />
         </div>
         <div>
            <button onClick={() => searchItems()} className="w-100 btn btn-primary w-25">
               Search
            </button>
         </div>
      </div>
   );
};
