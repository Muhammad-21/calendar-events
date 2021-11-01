import { Layout, Row, Menu} from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../routes';
import { useTypeSeceltor } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export default function Navbar() {
    const router = useHistory();
    const {isAuth, user} = useTypeSeceltor(state => state.auth)
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify="end">
            {isAuth 
                ?
                <>
                <div style={{color:'white'}}>Добро пожаловать {user.username}</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                        onClick={() => logout()} 
                        key={1}>
                        Выйти
                    </Menu.Item>
                </Menu>
                </>
                :
                <>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                        onClick={() => router.push(RouteNames.LOGIN)} 
                        key={1}>
                        Авторизация
                    </Menu.Item>
                </Menu>
                </>
            }
            </Row>
        </Layout.Header>
    )
}
