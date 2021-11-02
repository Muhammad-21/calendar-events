import React from 'react'
import {DatePicker, Form, Input, Button, Row} from 'antd'
import { rules } from '../utils/rules'
export default function EventForm() {
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
