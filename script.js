let select = document.querySelectorAll(".currency")
let btn = document.getElementById("btn")
let input = document.getElementById("input")
fetch("https://www.frankfurter.app/currencies")
// converting
.then(res=>res.json())

// passing to function
.then(res=>display(res))

function display(res)
{
  let currency = Object.entries(res)

  for(let i = 0;i<currency.length;i++)
  {
    let opt = `<option value="${currency[i][0]}">${currency[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt
  }

}

btn.addEventListener('click',()=>{
  let cur1 = select[0].value
  let curr2 = select[1].value
  let inputv  = input.value
  if(cur1  === curr2)
  {
    alert("choose different choices")
  }
  else{
    convert(cur1,curr2,inputv);
  }
})


function convert(cur1, curr2, inputv) {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${inputv}&from=${cur1}&to=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      // Object.values()
      document.getElementById("result").value = Object.values(data.rates)[0];
    });
}


