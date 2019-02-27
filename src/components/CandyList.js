import React, { Component } from 'react'




class CandyList extends Component {
    render() {
        return (
            <section className="candyList">
                <h3 className="candyList">Candy List</h3>
                {
                    this.props.candyTypes.map(candyType =>
                        <div key={`candytype--${candyType.id}`}> <h3 className="candyType">{candyType.name}</h3>
                        {
                            this.props.candies.filter(candy => candy.type === candyType.id)
                            .map(candy => <div key={`candy--${candy.id}`}>{candy.name}</div>)
                        }
                        </div>
                    )
                }
            </section>
        )
    }
}

export default CandyList