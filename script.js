// Display Day of Week Name

const dayOfWeekName = () =>{

    let dayOfWeek = new Date().toLocaleString(
      'default', {weekday: 'long'}
    );
    document.getElementById("dayOfWeek").innerHTML = dayOfWeek
    console.log(dayOfWeek); 
}
dayOfWeekName();


// Display Time in UTC

const currentUTCTime = () =>{

    let dayOfWeek = new Date().getTime();
    document.getElementById("utcTime").innerHTML = dayOfWeek;
}
currentUTCTime();