import { Button, Layout, Modal, Row } from 'antd'
import React, { useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm';

export default function Event() {
    const [modalVisible,setModalVisible] = useState(false);
    return (
        <Layout>
           <EventCalendar events={[]}/>
           <Row justify="center">
               <Button onClick={()=>setModalVisible(true)}>Добавить события</Button>
           </Row>
           <Modal
            title="Добавить события"
            visible={modalVisible}
            footer={null}
            onCancel={()=>setModalVisible(false)}
           >
               <EventForm/>
           </Modal>
        </Layout>
    )
}
