const initState = [
    {
        name: 'dummy',
        dateStamp: new Date(),
    },
    {
        name: 'data',
        dateStamp: new Date(),

    },
]

// const myObjectReducer = (state = initState, action) => {
//     return state
// }


const myObjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':

            console.log('added entry', action.payload.name)
            return [
                ...state, {
                    name: action.payload.name,
                    dateStamp: new Date()
                }
            ]
        case 'DELETE':

            console.log('added entry', action.payload.name)
            return [
                ...state, {
                    name: action.payload.name,
                    dateStamp: new Date()
                }
            ]
        default:
            return state;
    }
}

export default myObjectReducer