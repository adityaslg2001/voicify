


const menuicon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar1');
const overlay = document.getElementById('overlay');


menuicon.addEventListener('click', function() {
  
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('visible');
  
});













const darkModeToggle = document.getElementById('darkmode-toggle');

// Add event listener to the checkbox
darkModeToggle.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (this.checked) {
        // If checked, set the body background color to dark
        document.body.style.backgroundColor = '#242424';
        document.navbar.style.backgroundColor = '#242424';
        document.navbar.style.color = '#ffffff';
        document.body.style.backgroundColor = '#242424';
        
    } else {
        // If unchecked, set the body background color to light
        document.body.style.backgroundColor = '#ffffff';
    }
});
/* -------------------------------------------------------------------WRITE & ERASE TEXT ANIMATION--------------------- */
// var words = ['Convert Voice Into Text In Real-Time', 'Erase Wrongly Written Text Using Voice', 'No Backspace Required', 'NO WORD LIMIT'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 15,
//     speed = 70;
// var wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     }
//     else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       }
//       else {
//         offset--;
//       }
//     }
//     $('.word').text(part);
//   },speed);
// };

// $(document).ready(function () {
//   wordflick();
// });


/* -------------------------------------------------------------------WRITE & ERASE TEXT ANIMATION--------------------- */







// const texts = document.querySelector('.texts1');

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new window.SpeechRecognition();

// recognition.interimResults = true;

// let p = document.createElement('p');

// recognition.addEventListener('result',(e)=>{
    
//     const text = Array.from(e.results).map(result=>result[0]).map(result=>result.transcript).join('');
//     // console.log(e.results);
//     p.innerText = text;
//     texts.appendChild(p);
//     // p.val(text);
    
//     console.log(text);
//     if(e.results[0].isFinal){
//         if(text.includes('erase')){
//             const words = text.split(' ');

//             words.pop();
//             words.pop();

//             const newText = words.join(' ');

//             p.innerText = newText;
        
//         }
//         // p.append();
//         // recognition.continuous = true;
        
//         p=document.createElement('p');
//     }

// })


// recognition.addEventListener('end',()=>{

//     recognition.start();
// })
// recognition.start();





let form = document.querySelector("form");
let sr = window.webkitSpeechRecognition || window.SpeechRecognition;

let spRec = new sr();


// spRec.lang = "hi";
spRec.maxDuration = 500; 
spRec.interimResults = true;
spRec.continuous = true;
// console.log(spRec);
form.addEventListener("submit",e=>{
    e.preventDefault();
    spRec.start();
})





function copyToClipboard(text) {

    navigator.clipboard.writeText(text)
    .then(() => {
            console.log('Text copied to clipboard');
            // Optionally, provide feedback to the user
            alert("Copied to clipboard: " + text);
        })
        .catch(err => {
            console.error('Error copying text to clipboard: ', err);
            // Handle errors here
        });
}




spRec.onresult = res =>{
    let text = Array.from(res.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join(' '); 
    
    form[0].value = text;
    
}

form[5].addEventListener("click" ,()=>{
    spRec.stop();
})

form[2].addEventListener("click" ,()=>{
    spRec.lang = "en";
})

form[3].addEventListener("click" ,()=>{
    spRec.lang = "hi";
})

form[4].addEventListener("click" ,()=>{
    spRec.lang = "bn";
})

form[6].addEventListener("click" ,()=>{

    let text = form[0].value;

    // Call the copyToClipboard function to copy the content to clipboard
    copyToClipboard(text);

    // Optionally, provide feedback to the user
    // alert("Copied to clipboard: " + text);
})




