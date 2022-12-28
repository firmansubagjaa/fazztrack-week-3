const data = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }
    const responseObject = await response.json();
    const nameData = responseObject.map((item) => item.name);
    const toString = nameData.join("\n");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (nameData) {
          resolve(toString);
          console.log(toString);
        } else {
          reject(new Error("data not exists"));
        }
      }, 3000);
    });
  } catch (error) {
    console.log(error);
  }
};

console.log(data());

// const init = async () => {
//   try {
//     let result = await data();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// init();
