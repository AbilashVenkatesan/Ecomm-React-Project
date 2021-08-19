//import files
import React, { useState, useEffect } from 'react';
//import style files
import 'css/index.css'
import 'css/reset.css'
import 'css/medium.css'
import 'css/large.css'
import 'css/extralarge.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import firebase from './util/firebase'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProductContext from 'contexts/product'
import HomePage from './Pages/HomePage'
import ToyPage from './Pages/ToyPage'
import Page404 from './Pages/Page404';

//gets all data from firebase
const App = () => {
  
  const [toyList, settoyList] = useState([])
  
  useEffect(() => {
    const db = firebase.firestore()

    //pulling data from firebase
    db.collection(`Toys`).get().then((snapshot) => {
        const toyData = []
        console.log("Data obtained.")

        snapshot.docs.forEach(doc => {
          toyData.push(doc.data())
        })

      settoyList(toyData)
    })
  },[])

  //returns layout
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

      <Footer>
      </Footer>
      </ProductContext.Provider>
  )
}

export default App
