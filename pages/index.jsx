import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import webIcon from "../public/web.png";
import mailIcon from "../public/email.png";
import logo from "../public/logo.png";
import user from "../public/user.png";
import grafico from "../public/grafico.png";

import { useState } from "react";

export default function Home() {
  const [novoNome, setNovoNome] = useState("");
  const [novoComodo, setNovoComodo] = useState("");

  const [aparelhos, setAparelhos] = useState([
    { id: 1, nome: "Geladeira", local: "cozinha" },
    { id: 2, nome: "Televisão", local: "sala" },
    { id: 3, nome: "Ar-condicionado", local: "quarto" },
  ]);

  const addAparelho = () => {
    if (novoNome.length < 1 || novoComodo.length < 1) return;

    setAparelhos((aparelhos) => [
      ...aparelhos,
      {
        id: aparelhos.length + 1,
        nome: novoNome,
        local: novoComodo,
      },
    ]);
  };

  const removeAparelho = (id) => {
    setAparelhos((current) => current.filter((aparelho) => aparelho.id !== id));
  };

  return (
    <div>
      <Head>
        <title>Redstone House</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className={`${styles.navbar} navbar navbar-light`}>
          <div className="col">
            <Image src={logo} alt="Picture of the author" width={150} />
          </div>
          <div className="col justify-content-center text-center">
            <h3>Redstone House</h3>
          </div>
          <div className="col d-flex justify-content-between align-items-center">
            {format(new Date(), "EEEE dd/MMM/yyyy hh:mm a", { locale: ptBR })}
            <Image src={user} alt="Picture of the author" width={40} />
          </div>
        </nav>

        <nav className={`${styles.navbarSecondary} navbar navbar-light`}>
          <div className="col justify-content-start">
            <a className={styles.link} >
              Iníco
            </a>{" "}
            /
            <a className={styles.link} >
              Aparelhos
            </a>{" "}
            /
            <a className={styles.link} >
              Estatísticas
            </a>{" "}
            /
            <a className={styles.link} >
              Cômodos
            </a>{" "}
            /
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className="row d-flex justify-content-between">
          <div className="col d-flex justify-content-center">
            <div className={`${styles.card} card text-white bg-warning mb-3`}>
              <div className="card-header text-center">Consumo Mensal</div>
              <div className="card-body">
                <h5 className="card-title text-center">250kw</h5>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className={`${styles.card} card text-white bg-warning mb-3`}>
              <div className="card-header text-center">Consumo Diário</div>
              <div className="card-body">
                <h5 className="card-title text-center">20kw</h5>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className={`${styles.card} card text-white bg-warning mb-3`}>
              <div className="card-header text-center">
                Limite de Consumo Mensal
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">290kw</h5>
              </div>
            </div>
          </div>
        </div>

        {/* principais aparelhos */}
        <div className="row d-flex justify-content-between">
          <div className="col">
            <h2>Principais Aparelhos:</h2>
            <div className="col d-flex">
              <input
                onChange={(e) => {
                  setNovoNome(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="Nome"
              />
              <input
                onChange={(e) => {
                  setNovoComodo(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="Cômodo"
              />
              <button
                onClick={() => {
                  addAparelho();
                }}
                type="button"
                className="btn btn-success"
              >
                Adicionar
              </button>
            </div>

            {aparelhos.length > 0 &&
              aparelhos.map((aparelho) => {
                return (
                  <div key={aparelho.id} className="card">
                    <div
                      className={`${styles.aparelhosCard} card-body d-flex justify-content-between`}
                    >
                      <span>
                        {aparelho.id} - {aparelho.nome} / {aparelho.local}
                      </span>
                      <button
                        onClick={() => {
                          removeAparelho(aparelho.id);
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col">
            <Image src={grafico} alt="Picture of the author" width={500} />
          </div>
        </div>
      </main>

      <footer className={`${styles.footer}  d-flex justify-content-between`}>
        <div className="col text-center">
          <a  target="_blank" rel="noopener noreferrer">
            <strong>Desenvolvido Por Redstone House</strong>
          </a>
        </div>

        <div className="col text-center">
          <strong>contato@redstonehouse.com</strong>
        </div>

        <div className="col text-center d-flex justify-content-center ">
          <Image src={webIcon} alt="Picture of the author" width={40} />
          <Image src={mailIcon} alt="Picture of the author" width={40} />
        </div>
      </footer>
    </div>
  );
}
