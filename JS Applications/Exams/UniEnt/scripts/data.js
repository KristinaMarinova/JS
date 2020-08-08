import { beginRequest, endRequest, showError } from './notification.js';
import API from './api.js';

const endpoints = {
    EVENTS: 'data/events',
    EVENT_BY_ID: 'data/events/'
};


const api = new API(
    'F438E3C0-B5C9-9F4F-FF4E-8B22039EBE00',
    '90AFB5FA-046B-4D6A-B453-D2A1C30D948E',
    beginRequest,
    endRequest);

export const apiLogin = api.login.bind(api);
export const apiRegister = api.register.bind(api);
export const apiLogout = api.logout.bind(api);

export async function getEventsByOwner() {
    beginRequest();
    const ownerId = localStorage.getItem('userId');
    const result = api.get(endpoints.EVENTS + `?where=ownerId%3D%27${ownerId}%27`);
    endRequest();

    return result;
}

export async function getEvents() {
    beginRequest();
    const result = await api.get(endpoints.EVENTS);
    endRequest();

    return result;
}

export async function getEventById(objectId) {
    beginRequest();
    const result = await api.get(endpoints.EVENT_BY_ID + objectId);
    endRequest();
    return result;
}

export async function createEvent(event) {
    beginRequest();
    const result = await api.post(endpoints.EVENTS, event)
    endRequest();
    return result;
}

export async function editEvent(objectId, event) {
    beginRequest();
    const result = await api.put(endpoints.EVENT_BY_ID + objectId, event)
    endRequest();
    return result;
}


export async function deleteEvent(objectId) {
    beginRequest();
    const result = await api.delete(endpoints.EVENT_BY_ID + objectId)
    endRequest();
    return result;
}