function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["startingNumber"].value = "";
    document.forms["numberFun"]["endingNumber"].value = "";
    document.forms["numberFun"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["startingNumber"].focus();
}

function validateItems() {
    clearErrors();
    var startingNumber = parseInt(document.forms["numberFun"]["startingNumber"].value);
    var endingNumber = parseInt(document.forms["numberFun"]["endingNumber"].value);
    var step = parseInt(document.forms["numberFun"]["step"].value);
    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberFun"]["startingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["startingNumber"].focus();
        return false;
    }
   if (endingNumber == "" || isNaN(endingNumber) || endingNumber <= startingNumber){
       alert("Ending number must be filled in with a number that is greater than Starting Number.");
       document.forms["numberFun"]["endingNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["endingNumber"].focus();
       return false;
   }

   if (step == "" || isNaN(step)|| step < 1)  {
    alert("Step must be filled in with a positive number.");
    document.forms["numberFun"]["step"]
       .parentElement.className = "form-group has-error"
    document.forms["numberFun"]["step"].focus();
    return false;
   }


    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("start").innerText = startingNumber;
    document.getElementById("end").innerText = endingNumber;
    document.getElementById("by").innerText = step;

        var text="";
       
        while (startingNumber <= endingNumber) {
            if (startingNumber % 2 == 0) {
                text += startingNumber +"<br>";
            }
            startingNumber+=step;
            
            
        }

            document.getElementById("stuff").innerHTML = text;
                
            
        
        return false;
    }


     