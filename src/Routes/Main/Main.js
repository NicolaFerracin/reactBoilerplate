import React, { Component } from 'react';
import Counter from '../../Components/Counter/Counter';
import './Main.scss';

/**
 * Main route
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
  /**
   * Renders main route
   * 
   * @return {JSX.Element} Main route
   */
  render() {
    return (
      <Counter />
    );
  }
}

export default Main;