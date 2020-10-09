import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link} from "react-router-dom";



export default class Navbar extends Component {


  render() {

    return (
      <Menu secondary>
      <Link to="/">  <Menu.Item name="home"  /> </Link>
      <Link to="/messages"><Menu.Item name='Messages' /> </Link>
      <Link to="/messages">  <Menu.Item name='friends' /> </Link>


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
//
// import React, { Component } from 'react';
//
// import { Link} from "react-router-dom";
//
//
//
// class Navbar extends Component{
//   render() {
//     return(
//       <nav className="nav-wrapper">
//           <div className="container">
//             <ul className="left">
//               <Link to="/" className="brand-logo">Delivered</Link>
//               </ul>
//
//               <ul className="right">
//                   <li><Link to="/messages">Messages</Link></li>
//                   <li><Link to="/sweets">Sweets</Link></li>
//               </ul>
//           </div>
//       </nav>
//     )
//   }
// }




// export default Navbar;
