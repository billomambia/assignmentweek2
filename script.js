function getName() 
    var year = parseInt(document.getElementById("YY").value);
    var month = parseInt(document.getElementById("MM").value);
    var day = parseInt(document.getElementById("DD").value);
    var date = new date('${year})-${month-1}-${day}');
    var date = new date(year, month-1, day)
    var dob = date.getDay();
    var male = document.getElementById("male")
    var female = document.getElementById("female")

    var Weekdays = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday";
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua"];

    if (male.checked == false && female.checked ==false) {
        alert("identify your gender");
    }
    else if (year == ""|| year.length < 4 || year.length> 4){
        alert("please enter a valid year");
    }
    else if (month <1 || month > 12 || month == 2 && day > 29 ){
        alert("please enter valid month")
        
