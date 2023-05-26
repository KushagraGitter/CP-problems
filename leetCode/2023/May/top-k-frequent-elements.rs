//https://leetcode.com/problems/top-k-frequent-elements/description/
use std::collections::HashMap;

impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
     let  mut fre_map: HashMap<i32, i32> = HashMap::new();
    
    for value in nums {
        fre_map.entry(value)
            .and_modify(|x| *x += 1)
            .or_insert(1);
    }

    let mut result: Vec<_> = fre_map
                            .iter()
                            .collect();
        result.sort_by_key(|x| x.1);
      
    let result1: Vec<i32> =  result
                    .iter_mut()
                    .rev()
                    .take(k as usize)
                    .map(|(x, y)| **x)
                    .collect();

   
    return result1;
    }
}