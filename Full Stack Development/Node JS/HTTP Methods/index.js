const express = require("express");
const fs = require("fs");
let usersData = require("./USERS_DATA.json");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "Welcome To The NodeJs Environment",
  });
});

app.get("/users", (req, res) => {
  res.json({
    status: "Welcome To The NodeJs Environment",
  });
});

app.post("/api/users/", (req, res) => {
  const user = { ...req.body, id: usersData.length + 1 };
  usersData.push(user);

  fs.writeFile("./USERS_DATA.json", JSON.stringify(usersData), (err, data) => {
    if (err) {
      return;
    }
    return res.json({
      status: "sucess",
      users: user,
    });
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    const user = usersData.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const editUser = req.body;
    usersData = usersData.map((user) => {
      if (user.id === id) {
        return { ...user, ...editUser };
      }
      return user;
    });

    fs.writeFile(
      "./USERS_DATA.json",
      JSON.stringify(usersData),
      (err, data) => {
        return res.json({
          status: "Edit Sucess",
          users: editUser,
        });
      }
    );
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    usersData = usersData.filter((user) => {
      return user.id !== id;
    });

    fs.writeFile(
      "./USERS_DATA.json",
      JSON.stringify(usersData),
      (err, data) => {
        return res.json({
          status: "Delete Sucess",
          usersId: id,
        });
      }
    );
  });

app.listen(9000, () => console.log("Server started: http://localhost:8000/"));
