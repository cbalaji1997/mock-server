document.querySelector("#UserForm"),addEventListener("submit",handleForm);

const url ="https://ingole-server.onrender.com/post";

function handleForm(e){
    e.preventDefault();
    
    let img = document.getElementById("url").value;
    let book = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let Year = document.getElementById("Year_Pur").value;

    let publisher = document.getElementById("publisher").value;
    let Cost = document.getElementById("Cost").value;
    
    const data={
        img:img,
        book:book,
        author:author,
        genre:genre,
        year:Year,
        publisher:publisher,
        Cost:Number(Cost)
    };


    fetch(url,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(data),

    }).then((res)=>res.json())
    .then(()=>{
        alert("Book posted successfully")
    })
}


//for display data
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

function append(data){
  let container=document.getElementById("https://smoggy-sandals-newt.cyclic.app/books");
  data?.map(function(el){

      let tr=document.createElement("tr");

      let td=document.createElement("img");
      td.src=el.img;
      td.setAttribute("id","im1")
      let td1=document.createElement("td");
      td1.textContent=el.book;
      let td2=document.createElement("td");
      td2.textContent=el.author;
      let td3=document.createElement("td");
      td3.textContent=el.genre
      let td4=document.createElement("td");
      td4.textContent=el.year
      let td5=document.createElement("td");
      td5.textContent=el.publisher
      let td6=document.createElement("td");
      td6.textContent=el.Cost;

      let btn1=document.createElement("button");
      btn1.textContent="Edit";
      

      let btn2=document.createElement("button");
      btn2.textContent="Delete";
      btn2.addEventListener("click", function () {
        RemoveBtn(id)
      })

      tr.append(td,td1,td2,td3,td4,td5,td6,btn1,btn2);
      container.append(tr);


  })

}


function RemoveBtn(id) {
  fetch(`https://smoggy-sandals-newt.cyclic.app/books${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {response.json(); alert("Book deleted successfully"); bookData()});
}
