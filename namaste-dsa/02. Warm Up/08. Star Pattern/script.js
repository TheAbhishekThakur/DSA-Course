/*

Q1. n=4

Output:
* * * * 
* * * * 
* * * * 
* * * * 

*/

function printStarPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
printStarPattern(4);

// **************************************************************

console.log("-----------");

/*

Q2. n=4

Output:
* 
* * 
* * * 
* * * * 

*/


function printRightAngledTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
printRightAngledTriangle(4);

// **************************************************************

console.log("-----------");

/*

Q3. n=4

Output:
1
1 2
1 2 3
1 2 3 4

*/

function printNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

printNumberTriangle(4);

// **************************************************************

console.log("-----------");

/*

Q4. n=4

Output:
1
2 2
3 3 3
4 4 4 4

*/

function printRepeatedNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

printRepeatedNumberTriangle(4);

// **************************************************************

console.log("-----------");

/*

Q5. n=4

Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

function printDecreasingNumberTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row = row + j + " ";
        }
        console.log(row);
    }
}
printDecreasingNumberTriangle(5);

// **************************************************************

console.log("-----------");

/*

Q6. n=4

Output:
      *
    * *
  * * *
* * * *

*/

function printRightAlignedTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (j < n - i - 1) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row)
    }
}

printRightAlignedTriangle(4);

// **************************************************************

console.log("-----------");

/*

Q7. n=6

Output:
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0

*/

function printAlternatingBinaryTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            if (j % 2 === 0) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}
printAlternatingBinaryTriangle(6);

// Using switch temporary variable

console.log("-----------");

function printAlternatingBinaryTriangleSwitch(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let temp = 1;
        for (let j = 0; j <= i; j++) {
            row = row + temp + " ";
            if (temp === 1) {
                temp = 0;
            } else {
                temp = 1;
            }
        }
        console.log(row);
    }
}

printAlternatingBinaryTriangleSwitch(6);

// **************************************************************

console.log("-----------");

/*

Q8. n=5

Output:
1
01
010
1010
10101

*/
function printAlternatingBinaryTrianglePattern(n) {
    let temp = 1
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + temp + " ";
            if (temp === 1) {
                temp = 0;
            } else {
                temp = 1;
            }
        }
        console.log(row);
    }

}
printAlternatingBinaryTrianglePattern(5);