// Callback Function
let square = (a, b, h) => (a + b) * h / 2;

console.log("Dien tich : " + square(2,3,2));

let add = (a, b, cb) =>{
    setTimeout(() => {
        if( typeof a != 'number' || typeof b != 'number') {
            return cb(new Error("Loi tham so"));
        }
        cb(undefined, a + b);
    }, 0);
}

add(4, 5, (err, result) => {
    if(err) return console.log("Loi : " + err);
    return console.log("KQ : " + result);
})