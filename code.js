function flip(array, n) {
    let b = n-1;
    let tmp = array[b]
    for (let a = 0;  a<=b; a++, b--){
        tmp = array[b];
        array[b] = array[a];
        array[a] = tmp;
    }
    return array;
}

function pancakeSort(array) {
    for(let i = array.length; i > 0; i--){
        let max = array[0];
        let index = 0;
        for(let spot = 0; spot < i; spot++){
            if (array[spot] > max){
                max = array[spot];
                index = spot;
            }
        }
        flip(array, index + 1);
        flip(array, i);
    }
    return array;
}
