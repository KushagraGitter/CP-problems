//https://leetcode.com/problems/my-calendar-i/
var MyCalendar = function () {
  this.events = []
}

MyCalendar.prototype.book = function (start, end) {
  let left = 0
  let right = this.events.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (start < this.events[mid][1] && this.events[mid][0] < end) return false

    if (this.events[mid][1] <= start) left = mid + 1
    else right = mid - 1
  }
  this.events.push([start, end])
  this.events.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  return true
}
