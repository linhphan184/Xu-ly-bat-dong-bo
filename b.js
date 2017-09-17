//  Sử lý bất đồng bộ trong javascript
//  Đồng bộ là các câu lệnh chạy từ trên xuống dưới
// Bất đồng bộ là co một câu lệnh đang chạy chưa xong thì có thể có 1 câu 
// lệnh khác chạy xong rồi

setTimeout(() => {
    console.log("Da chay xong 1s");
}, 1000);

console.log("I'm OK");
