import React, { useState } from "react";
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import NewsFeeds from './components/NewsFeeds';
import Header from "./ui/Header";
import UserLoginDetails from "./ui/UserLoginDetails";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import NewsFeedsForm from "./components/NewsFeedsForm";

function App() {
  const [userType, setUserType] = useState('')

  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <Header />
          <UserLoginDetails userType={userType} setUserType={(q) => setUserType(q)} />
          <NewsFeedsForm  userType={userType}/>      
          <NewsFeeds userType={userType}/>          
        </Container>
      </ToastProvider>
    </Provider>
  );
}
export default App;
