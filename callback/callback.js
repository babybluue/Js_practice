function loginUser(name, pass, callback) {
  setTimeout(() => {
    console.log("here is the loginuser");
    callback({ name });
  }, 2000);
}

function callback1(info, callback) {
  setTimeout(() => {
    callback({ name: info, id: 1 });
  }, 2000);
}
function callback2(info, callback) {
  setTimeout(() => {
    callback({ id: info, sex: "man" });
  }, 2000);
}

console.log("start");
const user = loginUser("li", 12344, (user) => {
  console.log(user.name);
  callback1(user.name, (user) => {
    console.log(user);
    callback2(user.id, (id) => {
      console.log(id);
    });
  });
});

console.log("over");
