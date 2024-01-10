export default function WorkerCountUnseenMSG() {
    this.onmessage = e => {
        // this is where code our logic
        console.log("roomsMessages ", e.data.modifiedRoomsMessages)
        let counter = {}
        for(const key in e.data.modifiedRoomsMessages) {
            counter[key] = 0
            let i = e.data.modifiedRoomsMessages[key].list.length
            while(
                (e.data.modifiedRoomsMessages[key].list[--i].senderId != e.data.userData._id) && 
                (new Date(e.data.modifiedRoomsMessages[key].list[i].timestamp).getTime() >= new Date(e.data.modifiedRoomsMessages[key].roomOpenedTimestamp).getTime()))
                counter[key]++
        }

        this.postMessage(counter) // through this method we send our response
    }
}