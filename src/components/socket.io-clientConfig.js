import socketIoClient from 'socket.io-client'
import config from './config'

const socketAddess = config.production ? config.server : 'http://localhost:3000'
const socket = socketIoClient(socketAddess)

export default socket