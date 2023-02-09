import './App.css';
import Recipe from './components/Recipe';
import { useState } from 'react';
import Axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipe] = useState([]);
  const [healthlabel, sethealthLabel] = useState("Vegan");

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '602d3eb893msh29bfe7a7e85a502p1f5763jsn0708ffff313d',
  //     'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  //   }
  // };

  //  async function getRecipe(){

  //       const res= await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, options)
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .then(response=>setRecipe(response.hits))
  //       .catch(err => console.error(err));

  // console.log(data);
  // setRecipe(res.data.hits);
  // }
  // const data=res.json();



  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipe = async () => {
    var result = await Axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data.hits);
  };

  const onsubmit = (e) => {
    e.preventDefault();

    getRecipe();
  }


  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Recipe-Book</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Recipe Catalog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Vegan</a></li>
                  <li><a className="dropdown-item" href="#">Vegetarian</a></li>
                  <li><a className="dropdown-item" href="#">Paleo</a></li>
                  <li><a className="dropdown-item" href="#">Diary Free</a></li>
                  <li><a className="dropdown-item" href="#">Egg Free</a></li>
                  <li><a className="dropdown-item" href="#">Peanut Free</a></li>
                  <li><a className="dropdown-item" href="#">Low Sugar</a></li>
                  <li><a className="dropdown-item" href="#">Tree Nut free</a></li>
                  <li><a className="dropdown-item" href="#">Soy Free</a></li>
                  <li><a className="dropdown-item" href="#">Fish Free</a></li>
                  <li><a className="dropdown-item" href="#">ShelliFish Free</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else </a></li>
                </ul>
              </li>

            </ul>

            <form className="d-flex" role="search" onSubmit={onsubmit}>
              <input className="form-control me-2" value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search Recipe" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {
              isAuthenticated ? (<button className='btn btn-secondary mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>) : (<button className='btn btn-primary mx-2' onClick={() => loginWithRedirect()}>Log In</button>
              )
            }

          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          {recipes.map(recipe => {
            return <div className="col-md-5" key={recipe["uri"]}> <Recipe recipe={recipe} />
            </div>
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
