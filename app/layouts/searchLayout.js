import React from 'react';

const SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header">Search header</header>
        <div className="results">
          {this.props.children}
        </div>
        <footer className="primary-footer">
          <div className="search-footer pagination">Search Footer</div>
        </footer>
      </div>
    );
  }
});

export default SearchLayout;
