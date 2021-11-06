import React, { FC, PropsWithChildren } from 'react'
import { Badge, Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import {Moment} from "moment";
import { formatDate } from '../utils/date';
interface EventCalendarProps {
    events:IEvent[];
}
const EventCalendar:FC<EventCalendarProps> =(props:PropsWithChildren<EventCalendarProps>) => {
    function dateCellRender(value:Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
          <ul style={{listStyle:'none'}}>
            {currentDayEvents.map((item, index) => (
              <li key={index}>
                <Badge status="warning" text={item.description} />
              </li>
            ))}
          </ul>
        );
      }
    return (
        <Calendar dateCellRender={dateCellRender}/>
    )
}
export default EventCalendar;