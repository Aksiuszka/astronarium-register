import React, {useState, useEffect} from 'react';
import './App.css';
import Logo from './components/logo';

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [list, setList]=useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && surname && email && password){
      const person = {name, surname, email, password }
      setList((list)=>{
        return[...list, person]
      })
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
    }
    else{
      console.log("error")
      return(
          <h2>Uzupełnij wszystkie pola!</h2>
      )
    }
  }

  return (
    <div className="body">
      <div className="logo-container">
      <Logo/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
        <input 
        type="text" 
        placeholder=" "
         value ={name}
         onChange={(e)=> setName(e.target.value)}
         required></input>
        <label htmlFor="name">Imiona: </label>
         
        </div>
        <div className="label-container">
        <input 
        type="text" 
        placeholder=" " 
        value ={surname}
        onChange={(e)=>setSurname(e.target.value)}
        required></input>
        <label htmlFor="surname" className="labelka">Nazwisko: </label>
        </div>
        <div className="label-container">
        <input 
        type="text" 
        placeholder=" " 
        value ={email}
        onChange={(e)=>setEmail(e.target.value)}
        required></input>
        <label htmlFor="email">Email: </label>
        </div>
        <div className="label-container">
        <input 
        type="password" 
        placeholder=" " 
        value ={password}
        onChange={(e)=>setPassword(e.target.value)}
        required></input>
        <label htmlFor="password">Hasło: </label>
        </div>
        <button className="btn" type="submit">rejestruj</button>
      </form>

      <div className="body-continuum">
        {list.map((person, index)=>{
          const {name, surname, email, password}=person;
          return(
            <div className="list-container" key={index}>

              <div className="h-container">
              <h4><span className="h-info">Imiona: </span>{name}</h4>
             </div>
             <div className="h-container">
             <span className="h-info">Nazwisko: </span>
              <h4>{surname}</h4>
              </div>
              <div className="h-container">
              <span className="h-info">Email: </span>
              <h4>{email}</h4>
              </div>
             
              <div className="h-container">
              <span className="h-info">Hasło: </span>
              <h4>{password}</h4>
              </div>
              
              </div>
            
          )
        })}
      </div>
      <footer>
        <h2>   </h2>
      </footer>
    </div>
  );
}

export default App;
