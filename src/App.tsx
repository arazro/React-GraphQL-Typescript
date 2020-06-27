import React, { Fragment } from "react";
import { Router } from '@reach/router';
import Home from './pages/Home';
import Market from './pages/Market';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer';
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Home path="/" />
          <Market path="/market" />
          <Detail path="/detail" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}

export default App;

