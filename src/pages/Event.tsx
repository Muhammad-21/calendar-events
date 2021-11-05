import { Button, Layout, Modal, Row } from 'antd'
import { useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypeSeceltor } from '../hooks/useTypedSelector';

export default function Event() {
    const [modalVisible,setModalVisible] = useState(false);
    const {fetchGuests} = useActions();
    const {guests} = useTypeSeceltor(state => state.event)
    useEffect(() => {
        fetchGuests();
    }, [])
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
               <EventForm guests={guests}/>
           </Modal>
        </Layout>
    )
}
