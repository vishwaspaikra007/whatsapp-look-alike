export default class WebWorkerEnabler{
    constructor(worker) {
        if(window.Worker) {
            console.log("Worker is supported in your browser")
            let code = worker.toString()
            code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))
     
            const blob = new Blob([code], { type: 'application/javascript' })
            return new Worker(URL.createObjectURL(blob))
        } else {
            console.log("Worker is not supported in your browser")
        }
       
    }
}
    