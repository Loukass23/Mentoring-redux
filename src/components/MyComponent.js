import React from 'react'
import { connect } from 'react-redux'

function MyComponent({ myEntries }) {
    console.log({ myEntries })
    return (
        <div><h1>Demo</h1>
            <ul>
                {myEntries.map(entry => {
                    return (<li key={entry.name}>{entry.name}</li>)

                })}

            </ul>
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myEntries: state.myEntries
    }
}


export default connect(mapStateToProps)(MyComponent)