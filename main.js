// document.getElementById('aa').addEventListener('click', addData);
// let arr = [];
// let num = 1;
// data();
let div = document.getElementById("add1");
// function data() {
//     const myheaders = new Headers();
    //myheaders.append('Authorization', 'Bearer  1HXWFhZZT_h8KTB0pQDX_fThygtGEUIvUUcO');
    fetch('http://127.0.0.1:3000/', {
            method: 'GET',
            // headers: myheaders,
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
           let hj = data.photo;
           for(let i=0 ; i<20 ; i++) {
             div.innerHTML += `<img src = "${hj[i]}" class = "img" />`;
           }
        })

// num++;
// }


// function data1() {
//     const myheaders = new Headers();
//     fetch('http://localhost:3000/photo?page=' + num, {
//             method: 'GET',
//             headers: myheaders,
//         })
//         .then(Response =>
//             Response.json())
//         .then(result => {
//            consol.log(result.result),
//                 addData()
//         });

//     const html = arr.map((item, index) => {
//         return '<img class="img1" src="' + item.thumbnail + '" data-id="' + index + '" onClick="togglePhoto(event)">';
//     });
//     document.getElementById('add1').innerHTML += html.join('');



//     num++;
// }
// console.log(num);

// function addData() {
//     const html = arr.map((item, index) => {
//         return '<img class="img1" src="' + item.thumbnail + '" data-id="' + index + '" onClick="togglePhoto(event)">';
//     });
//     document.getElementById('add1').innerHTML += html.join('');
// }

// function togglePhoto(event) {
//     console.log(num);
//     console.log(arr);

//     document.getElementById("aa").style.visibility = "visible"
//     const index = event.target.getAttribute('data-id');
//     console.log(index)
//     document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + arr[index].url + '" class="img3"><div class="text-block">' + arr[index].title + ' </div></div>';
// }

  
// document.getElementById("close").addEventListener('click', close);
// function close() {
//     document.getElementById("aa").style.visibility = "hidden";
// }function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function showSlides(n) {
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//       slideIndex = slides.length
//     }
  
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }
