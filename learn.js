const getData = () => {
  return new Promise((resolve, reject) => {
    //mengambil data dari API
    fetch("https://jsonplaceholder.typicode.com/users")
      //pengecekan koneksi API
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
          message: "success",
          data: json.map((item) => item.name),
        });
      })
      .catch(() => {
        return reject({
          message: "failed to fetch",
          data: [],
        });
      });
  });
};

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
