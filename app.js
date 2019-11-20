const reasonInput =document.querySelector("#input-reason");
const amountInput =document.querySelector("#input-amount");
const cancelBtn =document.querySelector("#btn-cancel");
const confirmBtn =document.querySelector("#btn-confirm");
const expensesList=document.querySelector("#expense-list");
const totalExpenseOutput=document.querySelector("#total-expenses");
const alertCtrl=document.querySelector("ion-alert-controller")

let totalExpenses=0;
confirmBtn.addEventListener("click",()=>{
  const enteredReason= reasonInput.value;
  const enteredAmount = amountInput.value;
  if(enteredReason.trim().length<=0||enteredAmount<=0||enteredAmount.trim().length<=0){
      alertCtrl.create({
        message:"please enter a valid amount and reason",
        header:"Invalid Input",
        buttons:["ok"]

      }).then(alertElement=>{
        alertElement.present();
      })
      return;
  }
  
  const newItem= document.createElement("ion-item");
  newItem.textContent=enteredReason+" : $"+enteredAmount;
  expensesList.appendChild(newItem);

  totalExpenses+= +enteredAmount;
  totalExpenseOutput.textContent=totalExpenses;

  clear();
  console.log("data entered")
})
const clear=()=>{
    reasonInput.value=null;
    amountInput.value=null;
    
}
cancelBtn.addEventListener("click",clear)




