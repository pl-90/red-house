import styles from "../../styles/Cadastro.module.css";
import logo from "../../public/logo.png";
import Image from "next/image";

const Cadastro = () => {
  return (
    <div
      className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}
    >
      <div className={`${styles.rowCadastro} row`}>
        <div className="col d-flex justify-content-center">
          <div className={`${styles.leftCadastro} col-md-3 text-center`}></div>
          <div className={`${styles.rightCadastro} col-md-3 text-center`}>
            <h1>CADASTRO</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nome Completo"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
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

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Confirmar senha"
                />
              </div>

              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Concordo com os <strong>Termos de Uso</strong> do Redstone House
                </label>
              </div>

              <div className="form-group">
                <a href="/">
                <button type="submit" className="btn btn-success">
                  Cadastrar
                </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.logo} row`}>
        <Image src={logo} alt="Picture of the author" width={200} />
      </div>
    </div>
  );
};

export default Cadastro;
