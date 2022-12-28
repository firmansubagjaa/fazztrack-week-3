const categoryBooks = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const category = ["fantasy", "magazine", "comic", "self-improvement", "education"];
      const findBooks = category.find((Element) => {
        return Element == item;
      });
      if (findBooks) {
        resolve(findBooks);
      } else {
        reject(new Error("Buku tidak tersedia"));
      }
    }, 3000);
  });
};

const init = async () => {
  try {
    let result = await categoryBooks("fantasy");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

init();
