import React, { Component } from 'react'
import open from "../img/open.png"

class StoreList extends Component {
    render() {
        return (
            <section className="storeList">
            <img src={open} alt="bear" className="openLogo" />
            <h3 className="storeHeader">Store List</h3>
                {
                    this.props.stores.map(store =>
                        <div key={store.id} className="storeContainer">
                            {store.location}
                        </div>
                        )
                }
            </section>
        )
    }
}

export default StoreList