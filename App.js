import logo from './logo.svg';
import './App.css';
import Header from "./My_Components/Header";
import {Cases} from "./My_Components/Cases";
import {Report} from "./My_Components/Report";
import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
  	<>
  	<Router>
  	<Header title="Liquidation Dashboard" searchBar={true}/>
    <Routes>
    <Route exact path="/cases" element={<Cases/>}/>
    <Route exact path="/Report" element={<Report/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
