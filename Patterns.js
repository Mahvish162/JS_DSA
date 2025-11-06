let prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number"));

/*       *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *   */

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= i - 1; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 

*/

for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log()
}

/*
A 
A B
A B C
A B C D
A B C D E
A B C D E F
*/

for (let i = 1; i <= n; i++) {
    let ascii = 65
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " ")
        ascii++;
    }
    console.log()
}
console.log()

/*
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}

/*
        * * * * *
      * * * * *
    * * * * *
  * * * * *
* * * * *

*/
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}

console.log()

/*

*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *

*/
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}

/*

* * * * * *
*         *
*         *
*         *
*         * 
* * * * * * 

*/
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j == 1 || j == n || i == 1 || i == n) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log()
}
/*

* * * * * * *
*           *
*   * * *   *
*   * * *   *
*   * * *   *
*           *
* * * * * * *

*/
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j == 1 || j == n || i == 1 || i == n) {
            process.stdout.write("* ")
        }
        else if (j == 2 || j == n - 1 || i == 2 || i == n - 1) {
            process.stdout.write("  ")
        }
        else {
            process.stdout.write("* ")
        }
    }
    console.log()
}
console.log()


/*


* * * * * * *
* *       * *
*   *   *   *
*     *     *
*   *   *   *
* *       * *
* * * * * * *

*/

for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n || i == j || i + j == n + 1) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log()
}

console.log()

/*


            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * * 
  * * * * * * * * * * *
* * * * * * * * * * * * *
  * * * * * * * * * * *
    * * * * * * * * *
      * * * * * * *
        * * * * *
          * * *
            *

*/
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= i - 1; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
n--;
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ")
    }

    console.log()
}

console.log()

/*

* * * * * * * * * * * * * *
* * * * * *     * * * * * *
* * * * *         * * * * *
* * * *             * * * *
* * *                 * * *
* *                     * *
*                         *
*                         *
* *                     * *
* * *                 * * *
* * * *             * * * *
* * * * *         * * * * *
* * * * * *     * * * * * *
* * * * * * * * * * * * * *

*/

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ")
    }
    for (let j = 1; j <= i - 1; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j <= i - 1; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}


/*
            *
          *   *
        *       *
      *           *
    *               *       
  *                   *
*                       *
  *                   *
    *               *
      *           *
        *       *
          *   *
            *

*/

for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i + j == n + 1) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    for (j = 1; j <= n; j++) {
        if (i == j + 1) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log()
}
n--;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == j - 1) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    for (j = 1; j <= n; j++) {
        if (i + j == n + 1) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log()
}






for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i == j) {
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    for (j = 1; j <= n; j++) {
        if (i + j == n) {
            process.stdout.write("* ")
        }
        else
            process.stdout.write("  ")
    }
    console.log()
}

