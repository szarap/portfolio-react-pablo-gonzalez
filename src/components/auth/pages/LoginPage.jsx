import { useNavigate } from "react-router-dom"



export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (

    <>
      <section className="login">
        <div className="card__login">
          <h1><span className="sp">PORT</span><span className="sp1">FOLIO</span></h1>
          <h2> Pablo Gonzalez</h2>
          <button
            onClick={onLogin}>
            LOGIN
          </button>
        </div>
      </section>

    </>
  )
}


