import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is now: {this.props.dateval.toTimeString()}
      </p>
    );
  }
});

var Goodbye = React.createClass({
  render: function() {
    return (
      <div>This is a test. {this.props.sampleValue}</div>
    );
  }
});


setInterval(function() {
  ReactDOM.render(
    <div>
        <HelloWorld dateval={new Date()} />
        <Goodbye sampleValue="Steve" />
    </div>,
    document.getElementById('main')
  );
}, 500);