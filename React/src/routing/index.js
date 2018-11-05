//copied from Lesson 7 instructions
import React from 'react';

const route = (WrappedComponent, routes) => { 
    return class extends React.Component { 
      render() { 
        const ComponentForPathname = routes[this.props.pathname]; 
        return ( 
          <WrappedComponent> 
            <ComponentForPathname {...this.props} /> 
          </WrappedComponent> 
        ); 
      } 
    }; 
  }; 
   
//   const Root = props => 
//     <div> 
//       {props.children} 
//     </div>; 
   
//   const Router = route(Root, { 
//     "/": Home, 
//     "/search": Search, 
//     "/mine": Mine 
//   }); 
   
//   let pathname = window.location.pathname; 
   
//   render(<Router pathname={pathname} />, document.getElementById("root")); 
   
//   window.addEventListener("popstate", () => { 
//     pathname = window.location.pathname; 
//   });


// import React from 'react'; 
// import { render } from 'react-dom'; 
// import { BrowserRouter as Router, Route } from "react-router-dom"; 
// import { Provider } from "react-redux"; 
// import { Home, Search, Mine } from "./screens"; 
 
// const Index = ({ store }) => ( 
//   <Provider store={store}> 
//     <Router> 
//       <div> 
//         <Route path="/" component={Home} /> 
//         <Route path="/search" component={Search} /> 
//         <Route path="/mine" component={Mine} /> 
//       </div> 
//     </Router> 
//   </Provider> 
// ); 
 
// render(<Index />, document.getElementById('root')); 
