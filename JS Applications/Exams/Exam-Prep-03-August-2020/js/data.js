import { beginRequest, endRequest } from './notification.js';
import API from './api.js';

const endpoints = {
    EVENTS: 'data/events',
    EVENT_BY_ID: 'data/events/'
};

const api = new API('96EEBC56-2EF0-9201-FFD3-1AF726E63300','B4470D77-87E0-4096-A415-CA1BDCF3AD5B',beginRequest,endRequest);

export const apiLogin = api.login.bind(api);
export const apiRegister = api.register.bind(api);
export const apiLogout = api.logout.bind(api);

export async function getEvents() {
    beginRequest();
    const result = await api.get(endpoints.EVENTS);
    endRequest();

    return result;
}
export async function getEventsByOwner() {
    beginRequest();
    const ownerId = localStorage.getItem('userId');
    const result = api.get(endpoints.EVENTS + `?where=ownerId%3D%27${ownerId}%27`);
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