function interagir(){
    var x = document.getElementById('fname').value
    var y = document.getElementById('lname').value
    document.getElementById('demo').innerHTML = `Olá ${x} ${y}.`
}