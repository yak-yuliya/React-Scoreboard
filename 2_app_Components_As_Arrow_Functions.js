//header, player and counter

// function Header(){//H - custom component, header - native DOM element, HTML tags
//   return (
//     <header>
//     <h1>Scoreboard</h1>
//     <span className="stats">Player: 1</span>
//     </header>
//   );
// }

//same code:
const Header = () =>  //const!!!!, removed many brackets
    <header>
    <h1>Scoreboard</h1>
    <span className="stats">Player: 1</span>
    </header>
  ;




ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
