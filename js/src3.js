 //add diffrent time conter for diffent div timeleft
 const countDown = new Date("April 3, 2024 12:30:00").getTime();
 const y = setInterval(function(){
     const now = new Date().getTime();
     const distance = countDown - now;
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("hr").innerHTML = hours;
     document.getElementById("min").innerHTML = minutes;
     document.getElementById("sec").innerHTML = seconds;
     if(distance < 0){
         clearInterval(y);
         document.getElementById("hr").innerHTML = 0;
         document.getElementById("min").innerHTML = 0;
         document.getElementById("sec").innerHTML = 0;
     }
 }, 1000);

 //same but for class timeleft2
 const countDown1 = new Date("April 3, 2024 12:30:00").getTime();
 const z = setInterval(function(){
     const now = new Date().getTime();
     const distance = countDown1 - now;
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("hr1").innerHTML = hours;
     document.getElementById("min2").innerHTML = minutes;
     document.getElementById("sec3").innerHTML = seconds;
     if(distance < 0){
         clearInterval(z);
         document.getElementById("hr1").innerHTML = 0;
         document.getElementById("min2").innerHTML = 0;
         document.getElementById("sec3").innerHTML = 0;
     }
 }, 1000);
 
 //add spesicif time on 3 april 2024 date 
 const countDownDate = new Date("April 3, 2024 12:30:00").getTime();
 const x = setInterval(function(){
     const now = new Date().getTime();
     const distance = countDownDate - now;
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
     if(distance < 0){
         clearInterval(x);
         document.getElementById("days").innerHTML = 0;
         document.getElementById("hours").innerHTML = 0;
         document.getElementById("minutes").innerHTML = 0;
         document.getElementById("seconds").innerHTML = 0;
     }
 }, 1000);