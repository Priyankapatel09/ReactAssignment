import React from 'react';
import {Component} from 'react'
import AnotherClassComponent from './AnotherClassComponent';
class BasicClassComponent extends Component{
    render() {
        return <div className="basic">
            <h2>This is basic class component</h2>
            <AnotherClassComponent />
        </div>;
    }
}
export default BasicClassComponent;