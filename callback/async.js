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

async function displayUser() {
  const loggedUser = await loginUser("li", 12344);
  const call1 = await callback1(loggedUser.name);
  const call2 = await callback2(call1.id);
  console.log(call2);
}
displayUser();
