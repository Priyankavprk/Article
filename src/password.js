function findStrength (str) {

    let length;
    let arr = [0,0,0,0]
    let smallCase=false;
    let upperCase=false;
    let digit=false;
    let specialChar=false;
    let number = 0;
    for(let i = 0 ; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            arr[0] = 1
        } else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            arr[1] = 1
        } else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            arr[2] = 1
        } else if(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 45) {
            arr[3] = 1
        }
    }
    let zero = arr.filter((i) => i === 0);
    if(str.length < 6 || zero.length > 0) {
        number = zero.length;
        if(number+str.length >= 6) {
            return number
        } else {
            return number + (6 - (number+str.length))
        }
    }
}

console.log(findStrength('BBBB'))