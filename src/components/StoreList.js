import React, { Component } from 'react'

class StoreList extends Component {
    render() {
        return (
            <section className="storeList">
            <h3>Store List</h3>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            {store.location}
                        </div>
                        )
                }
            </section>
        )
    }
}

export default StoreList