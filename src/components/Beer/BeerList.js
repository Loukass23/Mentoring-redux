import React, { Component } from 'react'
import BeerCard from './BeerCard'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const beers_URL = 'https://api.punkapi.com/v2/beers'



class BeerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get(beers_URL)
            .then(res => {

                this.setState({ beers: res.data })
            })
    }
    render() {
        const beers = this.state.beers
        console.log(beers)
        return (
            <div className="beers-list section">
                <Grid
                    container
                    spacing={24}
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                    {beers && beers.map(beer => {
                        return (
                            <Grid item xs={12} sm={6} lg={4} key={beer.id}>
                                <BeerCard beer={beer} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}


export default BeerList

