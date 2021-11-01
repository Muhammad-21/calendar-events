import React, { useState } from 'react'
import {Form, Input,Button} from 'antd';
import { rules } from '../utils/rules';
import { useTypeSeceltor } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export default function LoginForm() {
    const {error,isLoading} = useTypeSeceltor(state => state.auth) 
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {login} = useActions();
    const submit = () => {
        login(username,password);
    }
    return (
        <Form
            labelCol={{ span:11}}
            onFinish={submit}
        >
           {error && <div style={{color:'red'}}>{error}</div> }
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}
            >
            <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль!')]}
            >
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 9}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}
