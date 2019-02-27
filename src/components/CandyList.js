import React, { Component } from 'react'
import CandyTypes from './CandyTypes';


class CandyList extends Component {
    render() {
        return (
            <section className="candyList">
            <h3 className="candyList">Candy List</h3>
            {
                this.props.candyTypes.map(candyType =>
                    <CandyTypes key={`candyType--` + candyType.id}
                        candyType = {candyType}
                        candies = {
                            this.props.candies.filter(candy => candy.type === candyType.id)
                            .map(candy =>  candy.name
                        )

                        }
                    />

                )
            }
            </section>
        )
    }
}

export default CandyList