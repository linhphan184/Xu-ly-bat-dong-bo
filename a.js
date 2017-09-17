
let getFuntion = (num) =>{
    if(num > 0 ) return () => console.log("So duong");
    return () => console.log("So am");
}
getFuntion(-1)();