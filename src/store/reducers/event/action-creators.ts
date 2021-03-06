
import { AppDispatch } from "../..";
import data from "../../../users/users.json";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/User";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";


export const EventActionCreators = {
    setGuests: (payload:IUser[]):SetGuestsAction => ({type:EventActionEnum.SET_GUESTS,payload}),
    setEvents: (payload:IEvent[]):SetEventsAction => ({type:EventActionEnum.SET_EVENTS,payload}),
    fetchGuests: () => async (dispatch:AppDispatch) => {
        try{
            dispatch(EventActionCreators.setGuests(data));
        } catch (e) {
            console.log(e);
        }
    },
    createEvent: (event: IEvent) => async (dispatch:AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem("events",JSON.stringify(json));
        } catch (e) {

        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}