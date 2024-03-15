function jikaPalindrome(kata) {
    kata.toLowerCase();
    const n = kata.length;
    for (let i = 0; i < n / 2; i++) {
        if (kata[i] !== kata[n - i - 1]) {
            return false
        }
    }
    return true
}

const kata1 = "katak";
const kata2 = "basi";
const kata3 = "isi";
const kata4 = "rusak";
const kata5 = "ayam";

console.log(`Kata ' ${kata1}' : ${jikaPalindrome(kata1)}`)
console.log(`Kata ' ${kata2}' : ${jikaPalindrome(kata2)}`)
console.log(`Kata ' ${kata3}' : ${jikaPalindrome(kata3)}`)
console.log(`Kata ' ${kata4}' : ${jikaPalindrome(kata4)}`)
console.log(`Kata ' ${kata5}' : ${jikaPalindrome(kata5)}`)