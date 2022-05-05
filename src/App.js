import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const pagesize = 5;

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/Science"
            element={
              <News
                key="Science"
                pagesize={pagesize}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                key="Business"
                pagesize={pagesize}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                key="Health"
                pagesize={pagesize}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                key="Sports"
                pagesize={pagesize}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key="Entertainment"
                pagesize={pagesize}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                key="General"
                pagesize={pagesize}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                key="Technology"
                pagesize={pagesize}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
