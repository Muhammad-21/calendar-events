import React, {FC} from 'react'
import {DatePicker, Form, Input, Button, Row,Select} from 'antd'
import { rules } from '../utils/rules'
import { IUser } from '../models/User'

interface EventFormProps {
    guests : IUser[]
}
const EventForm: FC<EventFormProps> = (props) =>{
    return (
        <Form>
            <Form.Item
                label="Описания события"
                name="description"
                rules={[rules.required()]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 2}}
                label="Дата события"
                name="data"
                rules={[rules.required()]}
            >
                <DatePicker/>
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 2}}
                label="Дата события"
                name="data"
                rules={[rules.required()]}
            >
                <Select>
                    {props.guests.map(guest => 
                        <Select.Option value={guest.username}>{guest.username}</Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}
export default EventForm;