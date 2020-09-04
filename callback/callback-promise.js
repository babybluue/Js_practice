function loginUser(name, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("here is the loginuser");
      resolve({ name });
    }, 2000);
  });
}

function callback1(info) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: info, id: 1 });
    }, 2000);
  });
}
function callback2(info) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: info, sex: "man" });
    }, 2000);
  });
}

console.log("start");
loginUser("li", 12344).then((name) => {
  console.log(name);
  callback2(name.name).then((id) => {
    console.log(id);
    callback2(id.id).then((sex) => console.log(sex));
  });
});

console.log("over");
