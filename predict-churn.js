function analyse(){
    let v = document.getElementById("churn").value;
    v = v.toLowerCase();
    if(v == "yes"){
        alert("The Customer Will Churn Out..!");
    }
    else if(v  == "no"){
        alert("The Customer Will Retain..!");
    }
    else{
        alert("Invalid Input in Churn-Box");
        document.getElementById("churn").style="background-color:red;"
    }
}