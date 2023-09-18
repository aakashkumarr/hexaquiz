fetch("https://user-data-b69b8-default-rtdb.firebaseio.com/user.json")
  .then((res) => res.json())
  .then(mapUser)
  .then(console.log);

function mapUser(users) {
  let usersArr = [];
  for (const key in users) {
    let obj = {};

    obj.id = key;
    for (const subKey in users[key]) {
      obj[subKey] = users[key][subKey];
    }
    usersArr.push(obj);
  }
  return usersArr;
}
