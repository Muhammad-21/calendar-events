
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
    }
}