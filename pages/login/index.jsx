import styles from "../../styles/Login.module.css";
import logo from "../../public/logo.png";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}
    >
      <div className={`${styles.rowLogin} row`}>
        <div className="col d-flex justify-content-center">
          <div className={`${styles.leftLogin} col-md-3 text-center`}>
            <h1>LOGIN</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Usuário"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Senha"
                />
              </div>

              <a className={styles.link} href="/recuperar-senha">
                <small>ESQUECI A SENHA</small>
              </a>

              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Entrar
                </button>
              </div>
            </form>

            <div className={styles.cadastreSe}>
              <p>
                Ainda não possui conta?{" "}
                <a className={styles.link} href="/cadastro">
                  <small>CADASTRE-SE</small>
                </a>
              </p>
            </div>
          </div>
          <div className={`${styles.rightLogin} col-md-3 text-center`}></div>
        </div>
      </div>

      <div className={`${styles.logo} row`}>
        <Image src={logo} alt="Picture of the author" width={200} />
      </div>
    </div>
  );
};

export default Login;
