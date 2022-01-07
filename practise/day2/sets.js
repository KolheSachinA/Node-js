// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(orderSet);
// console.log(new Set('zoo'));
// console.log(orderSet.add('Garlic Bread'));
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.delete('Pizza'));
// console.log(orderSet);
// console.log(NaN !== NaN);//false but in set it is considered equal.

// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Waiter'];
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);
// console.log(typeof staffUnique);
// console.log(typeof new Set);

//set operations using set.
// function isSuperset(set, subset) {
//     for (let elem of subset) {
//         if (!set.has(elem)) {
//             return false
//         }
//     }
//     return true
// }

// function union(setA, setB) {
//     let _union = new Set(setA)
//     for (let elem of setB) {
//         _union.add(elem)
//     }
//     return _union
// }

// function intersection(setA, setB) {
//     let _intersection = new Set()
//     for (let elem of setB) {
//         if (setA.has(elem)) {
//             _intersection.add(elem)
//         }
//     }
//     return _intersection
// }

// function symmetricDifference(setA, setB) {
//     let _difference = new Set(setA)
//     for (let elem of setB) {
//         if (_difference.has(elem)) {
//             _difference.delete(elem)
//         } else {
//             _difference.add(elem)
//         }
//     }
//     return _difference
// }

// function difference(setA, setB) {
//     let _difference = new Set(setA)
//     for (let elem of setB) {
//         _difference.delete(elem)
//     }
//     return _difference
// }

// // Examples
// const setA = new Set([1, 2, 3, 4])
// const setB = new Set([2, 3])
// const setC = new Set([3, 4, 5, 6])

// console.log(isSuperset(setA, setB))        // returns true
// console.log(union(setA, setC))            // returns Set {1, 2, 3, 4, 5, 6}
// intersection(setA, setC)        // returns Set {3, 4}
// symmetricDifference(setA, setC) // returns Set {1, 2, 5, 6}
// difference(setA, setC)          // returns Set {1, 2}

isSuperSubset = (set, subset) => {
    for (let ele of subset) {
        if (!set.has(ele)) {
            return false
        }
    }
    return true;
}
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([1, 2, 6]);
console.log(isSuperSubset(setA, setB))