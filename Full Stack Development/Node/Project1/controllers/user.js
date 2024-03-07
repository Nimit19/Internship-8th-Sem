// 1] Get All Users -> Done
const allUsersHandler = async (req, res) => {
  try {
    const response = await fetch(
      "https://react-http-7a524-default-rtdb.firebaseio.com/users.json"
    );

    if (!response.ok) {
      throw new Error("Failed to ftech users");
    }

    const data = await response.json();

    return res.json({
      status: "success",
      response: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// 2] Get User by Id -> done
const getUserByIdHandler = async (req, res) => {
  const userId = req.params.id;

  try {
    const response = await fetch(
      `https://react-http-7a524-default-rtdb.firebaseio.com/users/${userId}.json`
    );

    if (!response.ok) {
      throw new Error("Failed to Fetch user.");
    }

    const data = await response.json();

    if (!data) {
      throw new Error("User not found.");
    }

    return res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (error) {
    return res.status(404).json({
      status: "unsuccess",
      response: error.message,
    });
  }
};

// 3] Update User By Id -> Done
const updateUserByIdHandler = async (req, res) => {
  const userId = req.params.id;
  const { name, email, gender, age } = req.body;

  try {
    const response = await fetch(
      `https://react-http-7a524-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ name, email, gender, age }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user.");
    }

    const data = await response.json();

    return res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "unsuccess",
      response: error.message,
    });
  }
};

//  4] Delete User By Id -> Done
const deleteUserByIdHandler = async (req, res) => {
  const userId = req.params.id;

  try {
    const response = await fetch(
      `https://react-http-7a524-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user.");
    }

    return res.status(200).json({
      status: "success",
      response: `${userId}`,
    });
  } catch (error) {
    return res.status(500).json({
      status: "unsuccess",
      response: error.message,
    });
  }
};

// 5] Create a New User -> Done
const createNewUserHandler = async (req, res) => {
  const { name, email, gender, age } = req.body;

  if (!name || !email || !gender || !age) {
    return res.status(400).json({
      status: "unsuccess",
      response: "All Fields are required",
    });
  }

  const newUser = {
    name,
    email,
    gender,
    age,
  };

  try {
    const response = await fetch(
      "https://react-http-7a524-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return res.status(201).json({
      status: "success",
      response: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "unsuccess",
      response: error.message,
    });
  }
};

module.exports = {
  allUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
  deleteUserByIdHandler,
  createNewUserHandler,
};
