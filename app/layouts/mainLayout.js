import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navBar'

const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header />
        <NavBar />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

export default MainLayout;
