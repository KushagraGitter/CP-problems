 function fib(n) {
            if(n <= 2) {
                return n - 1;
            }

            return fib(n - 1) + fib (n - 2)
         }