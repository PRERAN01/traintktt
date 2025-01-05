
let items=[{name:" ",data:" ",gen:" ",age:" "}];
displayitems();


function additem(){
    let value=document.querySelector("#input").value;
    let duedate=document.querySelector("#date").value;   
    let gender=document.querySelector("#gen").value;
    let agee=document.querySelector("#age").value;
    items.push({name:value ,data:duedate,gen:gender,age:agee}); 
    count++;   
    let vv=document.querySelector("#count");
    vv.innerHTML=`${count}`;
    document.querySelector("#input").value=" ";
    document.querySelector("#date").value=" ";
    document.querySelector("#gen").value=" ";
    document.querySelector("#age").value=" ";
    document.querySelector("#input").placeholder = "Enter the name of passenger";
    document.querySelector("#gen").placeholder = "Enter gender";
    document.querySelector("#age").placeholder = "Enter age";
    displayitems();              
}
function home() {
    
     window.open("http://127.0.0.1:5500/home.html", "_blank");
    } 
function nump(){
    document.querySelector("#nump").innerHTML=` number of passenger:${items.length}`;
    
}
function relod(){
   window.addEventListener("DOMContentLoaded",document.querySelector("#nump").innerHTML=" ");
}
function displayitems(){

    let abc=document.querySelector("#display")
    
    let newhtml=" ";
    for(let i=0;i<items.length;i++){
        let value=items[i].name;
        let date=items[i].data;
        let genn=items[i].gen;
        let ageee=items[i].age;
        newhtml+=` <div><span>${value}</span>
                  <span>${date}</span>
                  <span>${genn}</span>
                  <span>${ageee}</span>                  
        <button  id="dell" onclick="items.splice(${i},1);
        displayitems(); nump(); ">delete</button></div>
        `;
        
    }
    abc.innerHTML=newhtml; 
            
    
}
function displayitems2(){

    let abc=document.querySelector("#aaaag")
    
    let newhtml=" ";
    for(let i=0;i<items.length;i++){
        
        let ageee=items[i].age;
        newhtml+=`<span>${ageee}</span><br>`;                  
        
        
    }
    abc.innerHTML=newhtml; 
            
    
}

function displayitems3(){

    let abc=document.querySelector("#gennn")
    
    let newhtml=" ";
    for(let i=0;i<items.length;i++){
        
        let genn=items[i].gen;
        
        newhtml+=`<span>${genn}</span><br>`;        
        
        
    }
    abc.innerHTML=newhtml; 
            
    
}
function displayitems4(){

    let abc=document.querySelector("#dattt")
    
    let newhtml=" ";
    for(let i=0;i<items.length;i++){
       
        let date=items[i].data;
        
        newhtml+=`<span>${date}</span><br>`;
                 
        
        
    }
    abc.innerHTML=newhtml; 
            
    
}
function displayitems1(){

    let abc=document.querySelector("#naa")
    
    let newhtml=" ";
    for(let i=0;i<items.length;i++){
        let value=items[i].name;
        
        newhtml+=`<span>${value}</span><br>`;
    }
    abc.innerHTML=newhtml; 
            
    
}

function name() {
    let obj = " "; // Initialize an empty string
    for (let i = 0; i < items.length; i++) {
        let name = items[i].name; // Extract the name from the current item
        obj += `${name} `; // Concatenate the name with a space
    }
    document.querySelector("#nnn").textContent = obj.trim(); // Trim trailing space
}


   

let count = 0;
let abc=[{name:" ",time:" ",from:" ",to:" "}]



function gotopayment(){
window.location.href="http://127.0.0.1:5500/paymentpage.html";
}
function inc(event) {

    
    const container = event.target.closest(".h1, .h2, .h3, .h4");

    if (container) {
       
        const name = container.querySelector(".name")?.textContent.trim();
        const time = container.querySelector(".time")?.textContent.trim();
        const from = container.querySelector(".from")?.textContent.trim();
        const to = container.querySelector(".to")?.textContent.trim();
        document.querySelector("#trainname").textContent=`Name:${name}`
        document.querySelector("#time").textContent=`Time: ${time}`
        document.querySelector("#from").textContentL=`From: ${from}`
        document.querySelector("#to").textContent=`${to}`
        displayyyy();

        
        
        
    } 
}


document.querySelectorAll("#book").forEach((button) => {
    button.addEventListener("click", inc);
});
function inc1(event) {

    
    const container = event.target.closest(".m1, .m2, .m3, .m4");

    if (container) {
        
      
        const name = container.querySelector(".name")?.textContent.trim();
        const time = container.querySelector(".time")?.textContent.trim();
        const from = container.querySelector(".from")?.textContent.trim();
        const to = container.querySelector(".to")?.textContent.trim();
        document.querySelector("#trainname").textContent=`Name: ${name}`
        document.querySelector("#time").textContent=`time: ${time}`
        document.querySelector("#from").textContent=`from: ${from}`
        document.querySelector("#to").textContent=`to: ${to}`
        displayyyy();

        
        
        
    } 
}


document.querySelectorAll("#book").forEach((button) => {
    button.addEventListener("click", inc1);
});
function inc2(event) {

    
    const container = event.target.closest(".c1, .c2, .c3, .c4");

    if (container) {
       
      
        const name = container.querySelector(".name")?.textContent.trim();
        const time = container.querySelector(".time")?.textContent.trim();
        const from = container.querySelector(".from")?.textContent.trim();
        const to = container.querySelector(".to")?.textContent.trim();
        document.querySelector("#trainname").textContent=`Name: ${name}`
        document.querySelector("#time").textContent=`time: ${time}`
        document.querySelector("#from").textContent=`from: ${from}`
        document.querySelector("#to").textContent=`to: ${to}`
        displayyyy();

        
        
        
    } 
}


document.querySelectorAll("#book").forEach((button) => {
    button.addEventListener("click", inc2);
});
function inc3(event) {

    
    const container = event.target.closest(".t1, .t2, .t3, .t4");

    if (container) {
      
        const name = container.querySelector(".name")?.textContent.trim();
        const time = container.querySelector(".time")?.textContent.trim();
        const from = container.querySelector(".from")?.textContent.trim();
        const to = container.querySelector(".to")?.textContent.trim();
        document.querySelector("#trainname").textContent=`Name: ${name}`
        document.querySelector("#time").textContent=`time: ${time}`
        document.querySelector("#from").textContent=`from: ${from}`
        document.querySelector("#to").textContent=`to: ${to}`
        displayyyy();

        
        
        
    } 
}


document.querySelectorAll("#book").forEach((button) => {
    button.addEventListener("click", inc3);
});
function displayyyy() {
    let amount = 0; 
    for (let i = 0; i < items.length; i++) {
        amount += 150; 
    }
    console.log(amount);
    document.querySelector("#payyy").innerText = ` pay:${amount}`;
}
function hi() {
    let amount = 0; 
    for (let i = 0; i < (items.length-1); i++) {
        amount += 150; 
    }
    console.log(amount);
    document.querySelector("#payyy").innerText = ` pay:${amount}`;
}
