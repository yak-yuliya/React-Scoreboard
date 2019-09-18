// const title = React.createElement( //this is an object represantation of Dom node
//   'h1',
//   {id: 'main-title', title: 'This is a title'}, // or null
//   'My first react element!'
// );

//JSX:
// const title = <h1>My first React Element</h1>;

// const title = 'My first React Element';

// const desc = React.createElement( //this is an object represantation of Dom node
//   'p',
//   null,
//   'I just learned how to create a React Node and render it into a DOM.'
// );

// const desc = <p>I just learned how to create a React Node and render it into a DOM.</p>

const desc = 'I just learned how to create a React Node and render it into a DOM.';
const myTitleID = 'main-title';
const name = 'Julia';

// const header = React.createElement( //this is an object represantation of Dom node
//   'header',
//   null,
//   title,
//   desc
// );

// const header = (
//   <header>
//   <h1>My first React Element</h1>
//   <p>I just learned how to create a React Node and render it into a DOM.</p>
//   </header>
// );


//JSX Expression
const header = (
  <header>
  {/* this is JSX comment */}
  <h1 id={myTitleID}>{ name}'s first React Element!</h1>
  <p className="main-desc">{ desc }</p>
  <input value={10 * 20}/>
  </header>
);




ReactDOM.render(
  header,
  document.getElementById('root')
);



//console.log(title);
