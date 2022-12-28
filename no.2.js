const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

//then & catch
cekHariKerja("senin")
  .then((result) => {
    setTimeout(() => {
      console.log(result); // meneruskan dari resolve
    }, 1000);
  })
  .catch((message) => {
    console.log(message); // menampilkan reject
  });

// try & catch
const init = async () => {
  try {
    let result = await cekHariKerja("selasa"); // menunggu hasil perjanjian dari cek hari kerja
    console.log(result);
  } catch (error) {
    console.log(error); // jika tidak sesuai maka akan dihubungkan ke reject
  }
};

init();

//catatan rest api gratis
// https://jsonplaceholder.typicode.com/
// https://developers.themoviedb.org/3/movies/get-movie-details
//mockapi.io
// json server
