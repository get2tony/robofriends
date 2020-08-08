import React, { Component } from 'react';



class ErrorBoundary extends Component{
    constructor(){
        super();

      this.state={
        hasError: false
      }  
    }
    componentDidCatch(error,info){
        this.setState({hasError: true});

    }

    render(){

        const {hasError}= this.state;
        return hasError ? 
        <h1>Oops! what just Happened</h1> :
        this.props.children;

    }



}


export default ErrorBoundary;