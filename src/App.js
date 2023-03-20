import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux'
import UserProfile from './components/UserProfile';
import {fetchCountries, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS }from './vanillaStore/actions/country'
import { fetchTodosThunk } from './store/todo-slice';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const countries = useSelector(state => state.countries)
  const todos = useSelector(state => state.todos)
  console.log(todos)

  return (
    <div style={{textAlign: "center"}}>
      <Header/>
        {!isAuth && <Auth/>}
        {isAuth && <UserProfile/>}
      <Counter />
      <button style={{textAlign: "center"}} onClick={()=> dispatch(fetchCountries())}>{countries.isLoading ? "Fetching" : "Fetch"}</button>
      {countries.error && <p>{countries.error}</p>}
      <ul>
        {countries.items.map(country => (
          <li style={{color: "#ccc"}}>{country.name.common}</li>
        ))}
      </ul>
      <button onClick={()=> dispatch(fetchTodosThunk())}>{todos.isLoading ? "Fetching" :"Fetch"}</button>
      <ul>
        {todos.items.map(todo => (
          <li style={{color: "#ccc"}}>{todo.title}</li>
        ))}
      </ul>
    </div>

  );
}

export default App;
