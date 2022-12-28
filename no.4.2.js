const biodata = (people) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          firstName: "firman",
          lastName: "subagja",
          age: 23,
        },
        {
          firstName: "siti",
          lastName: "nuryani",
          age: 21,
        },
        {
          firstName: "farhan",
          lastName: "anzilan",
          age: 23,
        },
      ];
      const userFind = users.find((element) => {
        return people === element.age;
      });

      if (userFind) {
        resolve(userFind);
      } else {
        reject(new Error("nama tidak tersedia"));
      }
    }, 3000);
  });
};

biodata(23)
  .then((result) => {
    setTimeout(() => {
      console.log(result);
    }, 4000);
  })
  .catch((error) => {
    console.log(error);
  });
