const Header = (props) => {
  console.log(props);
  return (
    <header>
    <h1>{ props.title }</h1>
    <span className="stats">Player: { props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  // console.log(props.removePlayer)
  return (
    <div className="player">
    <span className="player-name">
    <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
    {props.name}
    </span>
    <Counter />
    </div>
  )
}

class Counter extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     score : 0
  //   };
  // }

state = {
  score: 0
};

incrementScore(){
  // console.log(this)
  this.setState( prevState => ({
     score: prevState.score + 1
  }));
}

decrementScore(){
  this.setState( prevState => {
    return {
      score: prevState.score - 1
    }
  });
}


// decrementScore(){
//   this.setState({
//     score: this.state.score - 1
//   });
// }

  render () {
    return (
      <div className="counter">
      <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
      <span className="counter-score">{ this.state.score }</span>
      <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

class App extends React.Component {

  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

handleRemovePlayer = (id) => {
  this.setState( prevState => {
    return {
          players: prevState.players.filter( p => p.id !== id )
    };
  });
}

render() {
  return (
    <div className="scoreboard">
    <Header
    title="My Scoreboard"
    totalPlayers={ this.state.players.length }
    />

    {/* Players list */}
    {this.state.players.map(player =>
      <Player
      name={player.name}
      id={player.id}
      key={player.id.toString()}
      removePlayer={this.handleRemovePlayer}
      />
    )}
    </div>
  );
}

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
