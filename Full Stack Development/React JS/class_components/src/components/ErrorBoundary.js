import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }
  
  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <p>There is Something Wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
