function isLucky(n)
        {
                let counter = 2;
                
                if(counter > n)
                    return 1;
                if(n % counter == 0)
                    return 0;
                
            /*calculate next position of input no.
                Variable "next_position" is just for
                readability of the program we can
                remove it and update in "n" only */
                let next_position = n - Math.floor(n/counter);
                
                counter++;
                return isLucky(next_position);
            }