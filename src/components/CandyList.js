import React, { Component } from 'react'




class CandyList extends Component {
    render() {

        return (
            <section className="candyList">
                <h3 className="candyListHeader">Candy List</h3>
                <div className="candyContainer">
                {
                    this.props.candyTypes.map(candyType =>
                        <div key={candyType.id} className="candyColumn">
                            <h3 className="candyType">{candyType.name}</h3>
                            <div className="candyHolder">
                            {
                                this.props.candies.filter(candy => candy.candyTypeId === candyType.id)
                                    .map(candy =>
                                        <div key={candy.id}>
                                            {candy.name}
                                            <button className="delButton" onClick={() => this.props.discontinue(candy.id)}> X </button>
                                        </div>
                                    )
                                }
                                </div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}

export default CandyList