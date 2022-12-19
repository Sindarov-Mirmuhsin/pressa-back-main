import {fetch } from '../../lib/postgres.js'
import { LOGINADMIN } from './query.js'


const LOGIN = async ({username, password}) => {
    try {
        return await fetch(LOGINADMIN, [username, password]);
    } catch (error) {
        console.error(error);
    }
}

export default {
    LOGIN
}