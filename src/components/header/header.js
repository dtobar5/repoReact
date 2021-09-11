import React from 'react'
import "./header.css"



class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Bienvenido {this.props.name}</h1>
            </div >

        )
    }
}

export default Header
