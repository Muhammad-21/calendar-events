import { Layout, Row, Menu} from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../routes';


export default function Navbar() {
    const router = useHistory();
    const auth = false;
    return (
        <Layout.Header>
            <Row justify="end">
            {auth 
                ?
                <>
                <div style={{color:'white'}}>Muhammad</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                        onClick={() => console.log('Exit')} 
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
                            Войти
                        </Menu.Item>
                    </Menu>
                </>
            }
            </Row>
        </Layout.Header>
    )
}
