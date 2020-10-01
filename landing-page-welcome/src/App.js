import React from 'react';
import Nav from "./components/Nav";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
    return (
         
        <div>
           <Nav/>
           <div className="container">
            <Jumbotron/>
           
            <div className="card-group mt-4">
                <div className="col-3 ml-10">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>    
                <div className="col-3">
                    <Card />
                </div>    
                <div className="col-3">
                    <Card />
                </div>
                
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
