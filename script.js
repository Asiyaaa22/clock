// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     // if(hh === 0){
//     //     hh = 12;
//     // }
//     // if(hh > 12){
//     //     hh = hh - 12;
//     //     session = "PM";
//     //  }
//     if(hh > 12){
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     document.getElementById("clock").innerText = time; 
//     let z = setTimeout(function(){ currentTime() }, 1000);
//   }
  
//  currentTime();







 // setting time

setInterval(() => {
  var date = new Date();
  document.getElementById('hour').textContent = `${date.getHours()%12} hrs`;
  document.getElementById('minute').textContent = date.getMinutes() + ' mins';
  document.getElementById('second').textContent = date.getSeconds() + ' secs';
}, 1000);

var time = (new Date().getHours());
if(time > 12) {
  var pm = document.getElementById('am-pm').textContent = 'PM';
}

else if(time <= 12) {
  var am = document.getElementById('am-pm').textContent = 'AM';
}


var date = new Date();
switch(true) {
  case (date.getHours() >= 9  && date.getHours() < 12) : {
    document.getElementById('message-right-para').textContent = 'BEGIN WITH BREAKFAST-!!!'
    
    break;
  }

  case (date.getHours() >= 12 && date.getHours() < 16) : {
    document.getElementById('message-right-para').textContent = 'GRAB SOME LUNCH !!'
    
    break;
  }

  case (date.getHours() >= 16 && date.getHours() < 20) : {
    document.getElementById('message-right-para').textContent = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
   
    break;
  }

  case (date.getHours() >= 20 || (date.getHours() >= 0 && date.getHours() < 9)) : {
    document.getElementById('message-right-para').textContent = 'CLOSE YOUR EYES AND GO TO SLEEP'
   
    break;
  }
}

document.querySelector('#set-alarm').addEventListener('click', () => {
      let arr = document.getElementsByClassName('box-para');
        arr[0].textContent = 'Wake Up Time: ' + document.getElementById('wake-up').value
        arr[1].textContent = 'Lunch Time: ' + document.getElementById('lunch').value
        arr[2].textContent = 'Nap Time: ' + document.getElementById('nap').value
        arr[3].textContent = 'Night Time: ' + document.getElementById('sleep').value
       

        // For PM

        if(time>12) {
      if(document.getElementById('wake-up').value === `${date.getHours()%12} PM - ${(date.getHours()%12) + 1} PM`) {
            document.getElementById('message').textContent = 'GOOD MORNING!! WAKE UP !!'
            document.getElementById('images').style.backgroundImage = "URL('./image/mor.jpg')";
          }

      else if(document.getElementById('lunch').value === `${date.getHours()%12} PM - ${(date.getHours()%12) + 1} PM`) {
          document.getElementById('message').textContent = 'GOOD AFTERNOON !! TAKE SOME SLEEP'
          document.getElementById('images').style.backgroundImage ="URL('./image/lunch.jpg')";
          }

      else if(document.getElementById('nap').value === `${date.getHours()%12} PM - ${(date.getHours()%12) + 1} PM`) {
          document.getElementById('message').textContent = 'GOOD EVENING !!'
          document.getElementById('images').style.backgroundImage ="URL('./image/Evening.jpg')";
        }

      else if(document.getElementById('sleep').value === `${date.getHours()%12} PM - ${(date.getHours()%12) + 1} PM`) {
        document.getElementById('message').textContent = 'GOOD NIGHT !! SD'
        document.getElementById('images').style.backgroundImage ="URL('./image/night1.jpg')";
      }

    }

    // For AM

        if(time<12) {
          if(document.getElementById('wake-up').value === `${date.getHours()%12} AM - ${(date.getHours()%12) + 1} AM`) {
            document.getElementById('message').textContent = 'GOOD MORNING!! WAKE UP !!'
            document.getElementById('images').style.backgroundImage = "URL('./image/mor.jpg')";
          }

          else if(document.getElementById('lunch').value === `${date.getHours()%12} AM - ${(date.getHours()%12) + 1} AM`) {
            document.getElementById('message').textContent = 'GOOD AFTERNOON !! TAKE SOME SLEEP'
            document.getElementById('images').style.backgroundImage ="URL('./image/lunch.jpg')";
            }

            else if(document.getElementById('nap').value === `${date.getHours()%12} AM - ${(date.getHours()%12) + 1} AM`) {
              document.getElementById('message').textContent = 'GOOD EVENING !!'
              document.getElementById('images').style.backgroundImage ="URL('./image/Evening.jpg')";
            }
    
          else if(document.getElementById('sleep').value === `${date.getHours()%12} AM - ${(date.getHours()%12) + 1} AM`) {
            document.getElementById('message').textContent = 'GOOD NIGHT !! SD'
            document.getElementById('images').style.backgroundImage ="URL('./image/night1.jpg')";
          }
    }
});