import {v4 as uuid} from 'uuid'

export default class ID {
    static novo():string {
        return uuid()
    }
}