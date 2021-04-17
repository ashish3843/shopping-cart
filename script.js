document.getElementById('add-phoneBtn').addEventListener('click', function () { 
    addnumber('add-phone');
})
document.getElementById('minus-phoneBtn').addEventListener('click', function () {
    deducNumber('add-phone');
})


function addnumber(id) {
    const mobileNumber = document.getElementById(id).value;
const mobileinnumbeer = parseInt(mobileNumber);
const totalmobile = mobileinnumbeer + 1;
document.getElementById(id).value = totalmobile;
}
function deducNumber(id) {
    const minusValue = document.getElementById(id);
    const minusValueNum = parseInt(minusValue.value);
    const totalminusvalue = minusValueNum -1;
    minusValue.value = totalminusvalue;
}

