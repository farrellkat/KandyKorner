import React, { Component } from 'react'

class CandyTypes extends Component {
    render() {
        return (
            <section>
                <div key={this.props.candyType.id}>
                    <h5 className="candyType">{this.props.candyType.name}</h5>
                    {this.props.candies.join(", ")}
                </div>
            </section>
        )
    }
}

export default CandyTypes