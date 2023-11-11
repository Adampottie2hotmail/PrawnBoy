function doDate()
{
    var str = "";
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    str += days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.toLocaleTimeString();
    document.getElementById("date").innerHTML = str;
    var hours = now.getHours();
    if(hours>20){
        document.getElementById("greeting").innerHTML = "Good Night!";
    } else if(hours>17) {
        document.getElementById("greeting").innerHTML = "Good Evening!";
    } else if(hours>11) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!";
    } else if(hours>6) {
        document.getElementById("greeting").innerHTML = "Good Morning!";
}
}
setInterval(doDate, 100);