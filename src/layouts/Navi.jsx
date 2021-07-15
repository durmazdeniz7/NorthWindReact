import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {  Container,  Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history= useHistory()
    history.push("/")

function handleSignOut() {
    setIsAuthenticated(false)  

}

function handleSignIn() {
    setIsAuthenticated(true)
}


    return (
        <div>

            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home' as={NavLink} to="/"
                    />
                    <Menu.Item 
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                     <CartSummary/>
                     {isAuthenticated?<SignedIn signOut={handleSignOut}/>: <SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
