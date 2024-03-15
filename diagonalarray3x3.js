function jumlahdiagonal3x3(array) {
    if (array.length !== 3 || array[0].length !== 3) {
        return "array bukan 3x3";
    }

    let hitungdiagonalkanan = 0;
    for (let i = 0; i < array.length; i++) {
        hitungdiagonalkanan += array[i][i];
    }

    let hitungdiagonalkiri = 0;
    for (let i = 0; i < array.length; i++) {
        hitungdiagonalkiri += array[i][array.length - i - 1]
    }
    return hitungdiagonalkanan + hitungdiagonalkiri;
}

const array = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, 12],
]

const total = jumlahdiagonal3x3(array)
console.log(`total diagonal: ${total}`)