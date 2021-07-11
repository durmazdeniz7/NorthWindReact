import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={props.signIn} >Giriş Yap</Button>
                <Button primary style={{marginleft:'1em'}}>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}
