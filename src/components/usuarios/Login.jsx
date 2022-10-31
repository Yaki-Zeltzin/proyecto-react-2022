
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setCargando(true)
    setError(null)
    axios.post('https://reqres.in/api/login', user)
    .then((data) => {
      setCargando(false)
      localStorage.setItem('tokenEDmarket', data.data.token)
      navigate('/');
    })
    .catch((e)=> {
      setCargando(false)
      console.error(e)
      setError(e.response.data.error)
    })
    
  }

  if(localStorage.getItem('tokenEDmarket')) return <Navigate to='/'/>

  return (
    <>
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input required type="email" name="email" 
            onChange={(e)=>{
              setUser({
                ...user,
                email:e.target.value
              })
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input required type="password" name="password"
            onChange={(e)=>{
              setUser({
                ...user,
                password:e.target.value
              })
            }}
          />
        </div>
        <div className="submit">
          <input
          type="submit"
          className="link"
          value={cargando ? 'Cargando ...' : 'Ingresar'}
        />
        </div>
      </form>
            {
              error && <span className="error">{error}</span>

            }
    </div>
    <div className="login-container">
            <p>Email: eve.holt@reqres.in</p>
            <p>Password: cityslicka</p>
    </div>

</>
     
  )
}

export default Login;