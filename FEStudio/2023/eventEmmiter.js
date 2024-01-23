// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

class EventEmitter {
    constructor() {
      this.eventMap = new Map();
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
      if(this.eventMap.has(eventName)) {
        this.eventMap.get(eventName).push(listener);
      } else {
        this.eventMap.set(eventName, [listener]);
      }
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
      if(this.eventMap.has(eventName)) {
        const idx =  this.eventMap.get(eventName).findIndex((lis) => {
              if(lis === listener) {
                  return true
              }
          })
  
          this.eventMap.get(eventName).splice(idx, 1)
      }
        return thsi;
    }
  
    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
      let listenerArray = [];
      if(this.eventMap.has(eventName)) {
        listenerArray = this.eventMap.get(eventName).slice();
        listenerArray.forEach((listener) => {
          listener.apply(null, args);
        })
        return true;
      } else {
        return false;
      }
      
    }
  }