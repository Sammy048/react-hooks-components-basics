import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

// Using arrow functions
// const App = () => {
//   <div>
//     <Article />
//     <Comment />
//   </div>
// }

//Class component

// class App extends React.Component{
//   render(){
//     return <div>
//       <Article />
//       <Comment />
//     </div>
//   }
// }

export default App;
