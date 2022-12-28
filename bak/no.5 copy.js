let getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return reject({
            message: "failed to fetch",
            data: [],
          });
        }
      })
      .then((json) => {
        return resolve({
          message: "successfully get all users",
          data: json.map((item) => item.name),
        });
      })
      .catch(() =>
        reject({
          message: "failed to fetch",
          data: [],
        })
      );
  });
};

getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
