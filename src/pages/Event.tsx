import { Button, Layout, Modal, Row } from 'antd'
import { useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypeSeceltor } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

export default function Event() {
    const [modalVisible,setModalVisible] = useState(false);
    const {fetchGuests, createEvent,fetchEvents} = useActions();
    const {guests,events} = useTypeSeceltor(state => state.event)
    const {user} = useTypeSeceltor(state => state.auth);
    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, [])

    const addNewEvent = (event:IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }
    return (
        <Layout>
           <EventCalendar events={events}/>
           <Row justify="center">
               <Button onClick={()=>setModalVisible(true)}>Добавить события</Button>
           </Row>
           <Modal
            title="Добавить события"
            visible={modalVisible}
            footer={null}
            onCancel={()=>setModalVisible(false)}
           >
               <EventForm 
                guests={guests}
                submit={addNewEvent}
                />
           </Modal>
        </Layout>
    )
}
