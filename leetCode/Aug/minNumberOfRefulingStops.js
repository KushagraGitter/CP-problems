//https://leetcode.com/problems/minimum-number-of-refueling-stops/
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  //Start Heap class in javascript
  class Heap {
    constructor(type) {
      this.type = type
      this.data = []
      this.data[0] = undefined
    }
    getSize() {
      return this.data.length - 1
    }
    insert(value) {
      this.data.push(value)
      if (this.data.length == 2) {
        return
      }
      let lastIndex = this.data.length - 1
      while (
        this.data[Math.floor(lastIndex / 2)] !== undefined &&
        this.compare(
          this.data[lastIndex],
          this.data[Math.floor(lastIndex / 2)],
        ) > 0
      ) {
        let temp = this.data[Math.floor(lastIndex / 2)]
        this.data[Math.floor(lastIndex / 2)] = this.data[lastIndex]
        this.data[lastIndex] = temp
        lastIndex = Math.floor(lastIndex / 2)
      }
    }
    //This returns a positive number if a is greater than b. Here meaing of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b .
    compare(a, b) {
      if (this.type === 'min') {
        return b - a
      } else {
        return a - b
      }
    }
    removeTop() {
      let max = this.data[1]
      if (this.getSize() > 1) {
        this.data[1] = this.data.pop()
        this.heapify(1)
      } else {
        //If the size is 0 then just remove the element, no shifting and hipify will be applicable
        this.data.pop()
      }
      return max
    }
    getTop() {
      let max = null
      if (this.getSize() >= 1) {
        max = this.data[1]
      }
      return max
    }
    heapify(pos) {
      if (pos * 2 > this.data.length - 1) {
        //That means element at index 'pos' is not having any child
        return
      }
      if (
        (this.data[pos * 2] !== undefined &&
          this.compare(this.data[pos * 2], this.data[pos]) > 0) ||
        (this.data[pos * 2 + 1] !== undefined &&
          this.compare(this.data[pos * 2 + 1], this.data[pos]) > 0)
      ) {
        if (
          this.data[pos * 2 + 1] === undefined ||
          this.compare(this.data[pos * 2 + 1], this.data[pos * 2]) <= 0
        ) {
          let temp = this.data[pos * 2]
          this.data[pos * 2] = this.data[pos]
          this.data[pos] = temp
          this.heapify(pos * 2)
        } else {
          let temp = this.data[pos * 2 + 1]
          this.data[pos * 2 + 1] = this.data[pos]
          this.data[pos] = temp
          this.heapify(pos * 2 + 1)
        }
      }
    }
  }
  //End Head class in javascript

  let prevLocation = 0,
    currLocation,
    tank = startFuel,
    maxHeap,
    ans = 0
  maxHeap = new Heap('max')
  for (let i = 0; i < stations.length; i++) {
    currLocation = stations[i][0]
    tank -= currLocation - prevLocation //Subtract fueul for the distance we covered
    while (tank < 0 && maxHeap.getSize() > 0) {
      //If tank is negative then use a station, fetch the maximum one. Keep using station and adding fuel until tank is positive.
      tank += maxHeap.removeTop()
      ans++
    }
    if (tank < 0) {
      //If after using all the available stations till this point the tank is still negative, then return -1
      return -1
    }
    maxHeap.insert(stations[i][1])
    prevLocation = currLocation
  }
  tank -= target - prevLocation //Now subtract fuel for the distance from last station to destination
  while (tank < 0 && maxHeap.getSize() > 0) {
    //If tank is negative then use a station, fetch the maximum one. Keep using station and adding fuel until tank is positive.
    tank += maxHeap.removeTop()
    ans++
  }
  if (tank < 0) {
    //If after using all the available stations till this point the tank is still negative, then return -1
    return -1
  }
  return ans
}
