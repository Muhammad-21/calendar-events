import React, {FC, useState} from 'react'
import {DatePicker, Form, Input, Button, Row,Select} from 'antd'
import { rules } from '../utils/rules'
import { IUser } from '../models/User'
import { IEvent } from '../models/IEvent'
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypeSeceltor} from "../hooks/useTypedSelector";
interface EventFormProps {
    guests : IUser[],
    submit : (event : IEvent) => void
}
const EventForm: FC<EventFormProps> = (props) =>{
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent);

    const {user} = useTypeSeceltor(state => state.auth)
    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описания события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description:e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 2}}
                label="Дата события"
                name="data"
                rules={[rules.required(), rules.isDateAfter("Нельзя создать событие в прошлом")]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}

                />
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 2}}
                label="Выберите гостя"
                name="guests"
                rules={[rules.required()]}
            >
                <Select>
                    {props.guests.map(guest => 
                        <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>)}
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