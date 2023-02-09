const bookData=()=>{
    const url='https://smoggy-sandals-newt.cyclic.app/books'
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        append(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  bookData();