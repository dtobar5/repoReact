import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import "./itemListContainer.css"

export default class ItemListContainer extends Component {
    render() {
        return (
            <div className="listado">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla dui, sollicitudin a leo eu, mattis consequat ipsum.</p>

                <ItemList />
            </div>
        )
    }
};
