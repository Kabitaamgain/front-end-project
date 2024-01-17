
$('#partners-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   dot:false,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})

var c=document.getElementById('resc');
function display(){
   c.style.display='block';
}
function hide() {
   c.style.display='none';
}
 
 
 function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("eml").value;
    var message = document.getElementById("msg").value;

    // Check if Email is valid
    var emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return false;
    }
//Check if fname is valid
    var nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    if (!nameRegex.test(fname)) {
       alert("Name should only contain letters.");
       return false;
    }
//Check if lname is valid

    var nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    if (!nameRegex.test(lname)) {
       alert("Name should only contain letters.");
       return false;
    }
    document.getElementById("form").reset();
    return true;
  }
