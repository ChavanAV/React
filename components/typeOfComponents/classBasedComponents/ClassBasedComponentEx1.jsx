import React, { Component } from 'react'

export default class ClassBasedComponentEx1 extends Component {


    //cbc is stateful component
    // eg 1
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }

    // eg 2
    // let count = 0; in class we can't use var, let , const keyword for declaring the variables
    count = 0;
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                ClassBasedComponentEx1
                <h2>
                    Count: {this.state.count}
                </h2>

                <button onClick={() => {
                    this.setState(() => {
                        // this.setState({ count: this.state.count++ }) it will not work
                        this.setState({ count: this.state.count + 1 })
                    })
                }}>Add</button>
            </div>
        )
    }
}