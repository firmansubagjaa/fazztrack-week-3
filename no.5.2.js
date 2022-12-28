const data = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const responseObject = await response.json();
  const nameData = responseObject.map((item) => item.name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve(nameData);
      } else {
        reject(new Error("data not exists"));
      }
    }, 3000);
  });
};

const init = async () => {
  try {
    let result = await data();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

init();
