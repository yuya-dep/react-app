import React from 'react';
import {GameBoardComponent as Board} from "./GameBoardComponent"

import '../../assets/css/Tutorial.css';

export class IndexComponent extends React.Component{
  render() {
    return (
      <div className="game">
        <div className="gam-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}