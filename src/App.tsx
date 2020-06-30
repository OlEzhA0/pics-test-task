import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NotAvailable } from "./components/NotAvailable";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScroll = () => {
    const scrollInfo = document.documentElement.getBoundingClientRect();
    setScrollPos(scrollInfo.top);

    if (scrollInfo.top < scrollPos && scrollInfo.top <= -200) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <>
      <div className="main-bg" />
      <Switch>
        <Route path="/pricing" exact component={HomePage} />
        <Route path="/" component={NotAvailable} />
      </Switch>
      <Header header={headerVisible} />
      <Footer />
    </>
  );
}

export default App;
