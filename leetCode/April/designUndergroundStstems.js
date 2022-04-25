var UndergroundSystem = function () {
  this.checkIns = new Map();
  this.averageTimes = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkIns.set(id, { stationName, time: t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const averageTimes = this.averageTimes,
    checkIn = this.checkIns.get(id);
  const key = `${checkIn.stationName} - ${stationName}`;

  if (averageTimes.has(key)) {
    averageTimes.set(key, {
      total: averageTimes.get(key).total + t - checkIn.time,
      count: averageTimes.get(key).count + 1,
    });
  } else {
    averageTimes.set(key, { total: t - checkIn.time, count: 1 });
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const key = `${startStation} - ${endStation}`;
  const value = this.averageTimes.get(key);
  return value.total / value.count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
