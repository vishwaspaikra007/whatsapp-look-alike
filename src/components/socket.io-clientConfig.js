import socketIoClient from 'socket.io-client'

const socketAddess = false ? 'https://vishwas-auth.herokuapp.com' : 'http://localhost:3000'
const socket = socketIoClient(socketAddess)

export default socket