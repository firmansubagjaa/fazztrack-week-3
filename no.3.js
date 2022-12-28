const getMonth = (callback) => {
  setTimeout(() => {
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktorber", "November", "Desember"];
    let error = false;
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (error, data) => {
  if (!error) {
    data.map((month) => {
      console.log(month);
    });
  }
};

getMonth(showMonth);
