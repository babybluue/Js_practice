const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello promise");
    // reject(new Error("something happened"));
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 4000);
});
console.log("start");

//*一个错误就会无法运行,正确的结果存在数组里,两个promise的时间不一样的情况下,会等待最长时间的结束一起出结果
Promise.all([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// promise
//   .then((info) => console.log(info))
//   .catch((error) => console.log(error.message));

console.log("over");
