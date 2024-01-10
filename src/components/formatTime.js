const formatTime = (timestamp) => {
    const timeElapsed = Date.now() - new Date(timestamp).getTime()
    const daysPassed = (timeElapsed/(100*60*60*24))
    if(daysPassed >= 2) {
        let date = new Date(timestamp).getDate() 
        date = date / 10 >= 1 ? date : '0' + date  
        let month = new Date(timestamp).getMonth()
        month = month / 10 >= 1 ? month : '0' + month  
        const year = JSON.stringify(new Date(timestamp).getFullYear()).slice(0,2)
        return (`${date}/${month}/${year}`)
    } else if(daysPassed >= 1) {
        return ('Yesterday')
    } else {
        let hrs = new Date(timestamp).getHours()
        const amOrPm = hrs/12 < 1 ? 'am' : 'pm'
        hrs = hrs%13 ? hrs%13 : 1 
        hrs = hrs / 10 >= 1 ? hrs : '0' + hrs
        let min = new Date(timestamp).getMinutes()
        min = min / 10 >= 1 ? min : '0' + min
        return (hrs + ':' + min + ' ' + amOrPm)
    }
}

export default formatTime