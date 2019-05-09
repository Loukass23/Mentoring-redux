import React from 'react'
import { connect } from 'react-redux'

function MyComponent({ myEntries }) {
    console.log({ myEntries })
    return (
        <div>
            <h4>Component subscribed to store</h4>
            <ul>
                {myEntries.map(entry => {
                    return (<li style={{ listStyle: "none" }} key={entry.name}><p><b>{entry.name}</b> created at : {entry.dateStamp.toString()}</p></li>)

                })}

            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myEntries: state.myEntries
    }
}


export default connect(mapStateToProps)(MyComponent)