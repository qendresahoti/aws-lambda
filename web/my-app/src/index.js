import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import '~bootstrap/scss/bootstrap.scss';
import './styles/main.scss';
import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);