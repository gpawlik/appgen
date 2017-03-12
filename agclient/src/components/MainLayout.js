import React from 'react';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="MainLayout">
        <Header />
        <Navigation />
        <main className="MainContent">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
