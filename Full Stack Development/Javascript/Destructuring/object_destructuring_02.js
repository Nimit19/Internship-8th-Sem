function getUserDetails({ name, username, password, email, birthday, city }) {
  console.log(name, username, password, email, birthday, city);
}

const user = {
  username: "nick123",
  password: "password123",
  name: "Nick Patel",
  email: "nick@gmail.com",
  birthday: "19/07/2002",
  city: "Valsad",
};

getUserDetails(user);
