import './App.css';
import Header from './Header';
import SearchItems from './SearchItems';
import { Container} from '@mui/material';
import List from './List';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState([]);

  const API_URL = "https://reqres.in/api/users?page=2";

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if(!response.ok) throw Error("Data Not Received!!!");

        const listItems = await response.json();
        
        setItems(listItems);
        setFetchError(null);
        
      } catch (error) {
        setFetchError(error.message);
      }finally{
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 1200);
  }, []);

  const [search, setSearch] = useState('');

  return (

    <div className='App'>

      <Container maxWidth="lg">
        <Header title="Employee List View" />
        <SearchItems search={search} setSearch={setSearch} />
        <main>
          {fetchError && <p>{`Error : ${fetchError}`}</p>}
          {isLoading && <h2 style={{marginTop: "200px", color: "gray"}}>Loading Items.......</h2>}
          {!isLoading && !fetchError && <List items={items.data.filter(item => ((item.first_name).toLowerCase()).includes(search.toLowerCase()))} />}
        </main>
      </Container>
      
    </div>
    
  );
}

export default App;
