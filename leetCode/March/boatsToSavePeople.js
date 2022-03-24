var numRescueBoats = function (people, limit) {
  let count = 0;
  let p1 = 0;
  let p2 = people.length - 1;
  people = people.sort((a, b) => a - b);
  while (p1 <= p2) {
    if (p1 !== p2) {
      if (people[p1] + people[p2] <= limit) {
        count++;
        p1++;
        p2--;
      } else if (people[p1] + people[p2] > limit) {
        count++;
        p2--;
      }
    } else {
      count++;
      p1++;
      p2--;
    }
  }

  return count;
};
