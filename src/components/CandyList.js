import React, { Component } from 'react'
import bear from "../img/gummyBear2.png"
import food from "../img/food.png"





class CandyList extends Component {
    render() {

        return (
            <section className="candyList">
            <img src={bear} alt="bear" className="gummybear" />
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
                                            <button className="delButton" onClick={() => this.props.discontinue("candies", candy.id)}><img src={food} alt="food" className="foodX" /></button>
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