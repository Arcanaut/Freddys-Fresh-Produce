import React from 'react'
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import PostList from './components/PostList';
import SinglePost from './pages/SinglePost';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          <Header />
          <MainPage></MainPage>
          {/* <ItemExampleLink></ItemExampleLink> */}
          <div className="container">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/postlist" component={PostList} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/post/:id" component={SinglePost} />

              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
          <Footer />
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
