import { database } from '../firebase';

export default defineEventHandler(event => {
    return {
      hello: 'world'
    }
})