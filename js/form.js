var vehicle = '';
function formSubmit(){
    var myOutput = '';
    var errors = '';
    
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;
    var postcode = document.getElementById('postcode').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var make = document.getElementById('make').value;
    var model = document.getElementById('model').value;
    var year = document.getElementById('year').value;

    

    if(first!=""){
        errors += '';
    }
    else{
        errors += 'First name is required <br/>';
    }
    if(last!=""){
        errors += '';
    }
    else{
        errors += 'Last name is required <br/>';
    }
    if(address!=""){
        errors += '';
    }
    else{
        errors += 'Address is required <br/>';
    }
    if(city!=""){
        errors += '';
    }
    else{
        errors += 'City is required <br/>';
    }
    if(province!=""){
        errors += '';
    }
    else{
        errors += 'Province is required <br/>';
    }
    if(postcode!=""){
        var postcoderegex = /^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
        postcode = postcode.toUpperCase(); 
        if(postcoderegex.test(postcode)){
            errors += '';
        }
        else{
            errors += 'Post code is not in correct format <br/>';
        }
    }
    else{
        errors += 'Postcode is required <br/>';
    }
    if(email!=""){
        var emailregex = /^\S+@\S+$/;
        if(emailregex.test(email)){
            errors += '';
        }
        else{
            errors += 'Email is not in correct format <br/>'; 
        }
    }
    else{
        errors += 'Email is required <br/>';
    }
    if(phone!=""){
        var phoneregex = /(^[1-9]\d{2}-\d{3}-\d{4}$)|(^\([1-9]\d{2}\)\d{3}-\d{4}$)|(^[1-9]\d{2}\d{3}\d{4}$)/;
        if(phoneregex.test(phone)){
            errors += '';
        }
        else{
            errors += 'Phone is not in correct format <br/>'; 
        }
    }
    else{
        errors += 'Phone is required <br/>';
    }
    if(make!=""){
        errors += '';
    }
    else{
        errors += 'Make is required <br/>';
    }
    if(model!=""){
        errors += '';
    }
    else{
        errors += 'Model is required <br/>';
    }
    if(year!=""){
        var yearregex = /^(19|20)\d{2}$/;
        if(yearregex.test(year)){
            errors += '';
        }
        else{
            errors += 'Year is not in correct format <br/>'; 
        }
    }
    else{
        errors += 'Year is required <br/>';
    }
   

    if(errors != ''){
        document.getElementById('errors').innerHTML = errors;
        document.getElementById('errors').style.border = '2px dashed white';
    }
    else{
        myOutput = `<p>Name: ${first} ${last}</p><br>
                    <p>Address: ${address}, ${city}, ${province}</p><br>
                    <p>Post Code: ${postcode}</p><br>
                    <p>Email: ${email}</p><br>
                    <p>Phone: ${phone}</p><br>
                    <p>Vehicle: ${make} ${model}</p><br>
                    <p>Year: ${year}</p><br>
                    Link: <a href='http://www.jdpower.com/cars/${make}/${model}/${year}'>http://www.jdpower.com/cars/${make}/${model}/${year}</a><br>
                    `;

        document.getElementById('errors').innerHTML = '';
        document.getElementById('errors').style.border = '0px';
        document.getElementById('formResult').innerHTML = myOutput
        vehicle = myOutput;
        
    }

    return false;
}

function AddVehicle(){
    var oneCar = vehicle;
    document.getElementById('allVehicle').innerHTML = oneCar;
}