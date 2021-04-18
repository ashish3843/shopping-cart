function handelProductCount(product, isIncrease) {
    const productValue = document.getElementById(product + '-add');
    const productValueNum = parseInt(productValue.value);
    // const totalminusvalue = minusValueNum -1;
    let totalProductvalue = productValueNum;
    if (isIncrease == true) {
        totalProductvalue = productValueNum + 1;
    }
    if (isIncrease == false && productValueNum > 0) {
        totalProductvalue = productValueNum - 1;
    }
    productValue.value = totalProductvalue;
    let totalProductprice = 0;
    if (product == 'phone') {
        totalProductprice = totalProductvalue * 1219;
    }
    if (product == 'case') {
        totalProductprice = totalProductvalue * 59;
    }
    document.getElementById(product +'-price').innerText = totalProductprice;
    subTotal()
};

function subTotal() {
  const phoneInput =  document.getElementById('phone-add');
  const phoneInputNum = parseInt(phoneInput.value);
  


  const caseInput =  document.getElementById('case-add');
  const caseInputNum = parseInt(caseInput.value);
  

  const totalsubtotal = phoneInputNum * 1219 + caseInputNum * 59;
  
  document.getElementById('product-subtotal').innerText = '$'+ totalsubtotal;

  const tax = Math.round(totalsubtotal * 0.10);
  document.getElementById('tax-amount').innerText = '$' +tax;

const grandtotal =  totalsubtotal + tax;
document.getElementById('grand-total').innerText = '$' + grandtotal;

}


// // for mobile
// function handelMobileChange(isIncrease) {

//     const minusValue = document.getElementById('add-phone');
//     const minusValueNum = parseInt(minusValue.value);
//     // const totalminusvalue = minusValueNum -1;
//     let totalminusvalue = minusValueNum;
//     if (isIncrease == true) {
//         totalminusvalue = minusValueNum + 1;
//     }
//     if (isIncrease == false && minusValueNum > 0) {
//         totalminusvalue = minusValueNum - 1;
//     }
//     minusValue.value = totalminusvalue;
//     const totalminusprice = totalminusvalue * 1219;
//     document.getElementById('mpbile-price').innerText = totalminusprice;
    
// };

// // for case
// function handelCaseChange(isIncrease) {

    
//     const minusValuec = document.getElementById('add-case');
//     const minusValueNumc = parseInt(minusValuec.value);
//     // const totalminusvalue = minusValueNum -1;
//     let totalminusvalue = minusValueNumc;
//     if (isIncrease == true) {
//         totalminusvalue = minusValueNumc + 1;
//     }
//     if (isIncrease == false && minusValueNumc > 0) {
//         totalminusvalue = minusValueNumc - 1;
//     }
//     minusValuec.value = totalminusvalue;
//     const totalminuspricecase = totalminusvalue * 59;
//     document.getElementById('case-price').innerText = totalminuspricecase;
    
// };



// document.getElementById('add-phoneBtn').addEventListener('click', function () { 

//     handelMobileChange(true); (2nd way)
// 1st way
//  const mobileNumber = document.getElementById('add-phone');
// const mobileinnumbeer = parseInt(mobileNumber.value);
// const totalmobile = mobileinnumbeer + 1;
// mobileNumber.value = totalmobile;
// const totalmobileprice = totalmobile * 1219;
// document.getElementById('mpbile-price').innerText = totalmobileprice;
    

// });
// document.getElementById('minus-phoneBtn').addEventListener('click', function () {
    
//     handelMobileChange(false);

    // const minusValue = document.getElementById('add-phone');
    // const minusValueNum = parseInt(minusValue.value);
    // const totalminusvalue = minusValueNum -1;
    // minusValue.value = totalminusvalue;
    // const totalminusprice = totalminusvalue * 1219;
    // document.getElementById('mpbile-price').innerText = totalminusprice;
// });
// using on click in the HTML file is third way





