import React from 'react';
import { Link } from 'react-router'

const NavBar = React.createClass({
  render: function() {
    return (
    	<div className="nav-bar">
    		<ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
        </ul>
    	</div>
  	);
  }
});

export default NavBar;
