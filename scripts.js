// let age = prompt('how old are you');
function drive(event) {
    event.preventDefault();
    let age = document.getElementById('age').value;

    if (age == 18) {
        alert('small car');
    } else if (age > 18 && age <= 24) {
        document.getElementById('log').innerHTML ='big car';
    } else if (age > 24) {
        document.getElementById('log').innerHTML ='truck';
    } else {
        document.getElementById('log').innerHTML ='to young';
    }
    
}

drive(age);