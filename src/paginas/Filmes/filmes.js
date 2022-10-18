import React, { Component } from "react";
import api from "../../api";
import "../../estilo.css";

class Filmes extends Component {
  state = {
    filmes: [],
    nomePesquisa: ""
  };

  async filme(nome) {
    const response = await api.get(nome);
    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;
    var nomePesquisa = "";

    const puxarFilmes = (event) => {
      nomePesquisa = event.target.value;
      this.filme(nomePesquisa);
    };

    return (
      <div>
        <h1 className="titulo">Curso de react com api</h1>
        <input
          type="text"
          placeholder="digite o nome do filme"
          name="nomePesquisa"
          onChange={puxarFilmes}
        />
        <h2>Lista de filmes</h2>
        <table className="tableLayout">
          <th>Título:</th>
          <th>Linguagem:</th>

          {filmes.map((filme) => (
            <tbody key={filme.show.id}>
              <td>{filme.show.name}</td>
              <td>{filme.show.language}</td>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Filmes;
