// App.jsx
import React from "react";
import Header from "./Header";
import SimpleAppBar from "./SimpleAppBar";

export default class App extends React.Component {
  render () {
    return (
      <div>
        <SimpleAppBar />
        <Header />
      </div>
    );
  }
}