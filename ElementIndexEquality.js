//TASK
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000

// Time limit: 150 ms
//-----------------------------------------------------------------------
//  -------------------Option #1 -------------------
//for..of cycle (by values)

// function IndexMatch(myArr) {
//   for (var v of myArr) {
//     if (v === myArr.indexOf(v)) {
//       return myArr.indexOf(v);
//     }
//   }
//   return -1
// }

//  -------------------Option #2 -------------------
//for cycle (by indices)

// function IndexMatch(a) {
//   for (let i=0;i>=a[i];i++) {
//     if (i === a.indexOf(i)) {
//       return a.indexOf(i);
//     }
//   }
//   return -1
// }

//  -------------------Option #3 -------------------
//find()

// function IndexMatch(arr) {
//   let x=arr.find(el => el===arr.indexOf(el));
//   return (x===undefined)?(-1):arr.indexOf(x);
// }

//  -------------------Option #4 -------------------
///binary search

// function IndexMatch(a) {
//   let s = 0;
//    let e = a.length;
//    let m;
//    let x;
//    //console.log(x);
//    while (s <= e) {
//      m = Math.floor((s + e) / 2);
//      if (a[m] < m) {
//        s = m + 1;
//      } else if (a[m] >= m){
//        if (a[m] === m){x=m;}
//        e = m - 1;
//      }
//    }

//    return (x===undefined)?(-1):x;
//  }

//  -------------------Option #5 -------------------
///binary search(compact)

function IndexMatch(a) {
  let s = 0;
  let e = a.length - 1;
  let m;
  while (s < e) {
    m = Math.floor((s + e) / 2);
    if (a[m] >= m) {
      e = m;
    } else {
      s = m + 1;
    }
  }

  return a[e] === e ? e : -1;
}

///test input
console.log(IndexMatch([-3, 0, 1, 3, 10])); //3
console.log(IndexMatch([-1, 0, 3, 6])); //-1
console.log(IndexMatch([-5, 1, 2, 3, 4, 5, 7, 10, 15])); //1
console.log(IndexMatch([-15, 0, -1, 2, 4, 5, 7, 10, 15])); //4
