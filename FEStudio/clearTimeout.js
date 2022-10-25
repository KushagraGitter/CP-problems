const clearTimeouts = (function() {
    let oldtimeout = window.setTimeout;
    let timeouts = []
    window.setTimeout = function setTimeout(cb, wait) {
        const id = setTimeout(cb, wait);
        timeouts.push(id);
        return id;
    }

    window.clearAllTimeOut = () =>{
        for(let id of timeouts) {
            window.clearTimeout(id)
        }
        timeouts = []
    }

    return window.clearAllTimeOut;

})()