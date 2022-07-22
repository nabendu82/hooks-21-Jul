import React from 'react'
import { UserContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <>
                        <h1>Child Component</h1>
                        <h3>Hello {user}</h3>
                    </>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Child