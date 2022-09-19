//https://leetcode.com/problems/find-duplicate-file-in-system/
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let map = new Map();
  let result = [];
  //"root/a 1.txt(abcd) 2.txt(efgh)"
  for (let i = 0; i < paths.length; i++) {
    let split_paths = paths[i].split(' ');

    for (let j = 1; j < split_paths.length; j++) {
      let fileAndPath = split_paths[j].split('(');

      if (map.has(fileAndPath[1])) {
        map.get(fileAndPath[1]).push(split_paths[0] + '/' + fileAndPath[0]);
      } else {
        map.set(fileAndPath[1], [split_paths[0] + '/' + fileAndPath[0]]);
      }
    }
  }
  for (const [key, value] of map) {
    if (value.length > 1) {
      result.push(value);
    }
  }

  return result;
};
