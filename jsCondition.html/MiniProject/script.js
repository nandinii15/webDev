document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob= document.getElementById("DOB").ariaValueMax;
    const curDate = document.getElementById("CurrentDate").value;

})
// let curYear = Number(curDate.split("-")[0]);
// let dobYear = Number(curDate.split("-")[0]);
//  const Age = curDate-dobYear;

const Age= Number(curDate.split("-")[0])
console.log(curYear);
