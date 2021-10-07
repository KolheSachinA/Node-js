//10.
function test_prime(n) {

    if (n === 1) {
        return "1 IS NOT PRIME";
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return "NOT PRIME";
            }
        }
        return "PRIME NUMBER";
    }
}

console.log(test_prime(2));
