import React, { useState, useEffect } from 'react';
import 'css/index.css'
import 'css/reset.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import firebase from '../util/firebase'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProductContext from 'contexts/product'
import HomePage from 'pages/HomePage'
import ToyPage from 'pages/ToyPage'
import Page404 from 'pages/Page404'


const App = () => {

  
  const [toyList, settoyList] = useState([])

  useEffect(() => {
    const db = firebase.firestore()

    db.collection(`Toys`).get().then(
      (snapshot) => {
        const toyData = []
        console.log("Data obtained.")

        snapshot.docs.forEach(doc => {
          toyData.push(doc.data())
        })

      settoyList(toyData)
    })
  },[])

return (
  <ProductContext.Provider value={toyList}>
    <Header>

    </Header>
    <Router>
      <Switch>
				<Route exact path="/">
          <HomePage />
        </Route>

				<Route path="/product/:id">
          <ToyPage />
        </Route>

        <Route path="*" component={Page404} />
			</Switch>
    </Router>

    <Footer></Footer>
    </ProductContext.Provider>
)
}
export default App
