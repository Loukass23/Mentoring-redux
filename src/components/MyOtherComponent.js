import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../store/actions/myObjectActions'

class MyOtherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            entry: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEntry(this.state)
    }
    render() {
        const myEntries = this.props.myEntries
        console.log(myEntries)

        return (
            <div>

                <h4>Component subscribed to store dispaching an action</h4>
                <ul>
                    {myEntries.map(entry => {
                        return (<li style={{ listStyle: "none" }} key={entry.name}>{entry.name}</li>)

                    })}

                </ul>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Entry</h5>
                    <div className="input-field">
                        <label htmlFor="name" >Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>

                </form>
                <button className="mydispatchButton" onClick={this.handleSubmit}>Add Entry
          </button>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        myEntries: state.myEntries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addEntry: (entry) => dispatch(addEntry(entry))
    }
}




export default connect(mapStateToProp, mapDispatchToProps)(MyOtherComponent)