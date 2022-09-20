// Javascript program for the above approach
let MOD = 1e9 + 7;
 
// Function to find the minimum jumps
// required to make the whole group
// sit adjacently
function minJumps(seats)
{
    // Store the indexes
    let position = [];
     
    // Stores the count of occupants
    let count = 0;
     
    // Length of the string
    let len = seats.length;
     
    // Traverse the seats
    for(let i = 0; i < len; i++)
    {
         
        // If current place is occupied
        if (seats[i] == 'x')
        {
             
            // Push the current position
            // in the vector
            position.push(i - count);
            count++;
        }
    }
     
    // Base Case:
    if (count == len || count == 0)
        return 0;
     
    // The index of the median element
    let med_index = parseInt((count - 1) / 2, 10);
     
    // The value of the median element
    let med_val = position[med_index];
     
    let ans = 0;
     
    // Traverse the position[]
    for(let i = 0; i < position.length; i++)
    {
     
        // Update the ans
        ans = (ans % MOD + Math.abs(position[i] -
          med_val) % MOD) % MOD;
    }
     
    // Return the final count
    return ans % MOD;
}