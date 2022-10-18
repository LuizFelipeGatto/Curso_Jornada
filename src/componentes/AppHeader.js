import React, { Component } from "react";
import "../estilo.css";

class AppHeader extends Component {
  render() {
    return (
      <div>
        <div className="divMenu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/filme">filmes</a>
          </li>
          <li>
            <a href="/series">Séries</a>
          </li>
        </div>
      </div>
    );
  }
}

export default AppHeader;
