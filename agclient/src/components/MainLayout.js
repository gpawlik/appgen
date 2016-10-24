import React from 'react';
import Header from './HeaderArea/Header';
import Navigation from './NavigationArea/Navigation';
import Footer from './FooterArea/Footer';

class MainLayout extends React.Component {   
    render () {
        return (
            <div className="MainLayout">
                <Header />
                <Navigation />
                <main className="MainContent">                    
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )        
    }     
};

export default MainLayout;
