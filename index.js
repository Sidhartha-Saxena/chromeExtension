let myLead=[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const tabBtn=document.getElementById("tab-btn");
const delBtn=document.getElementById("del-btn");
const unEl=document.getElementById("unli-el");
const leadsStorage=JSON.parse(localStorage.getItem("myleads"));

if(leadsStorage){
    myLead=leadsStorage;
    render(myLead);
}

function render(leads){
    let listItem="";
    for(let i=0 ; i<leads.length ; i++){
        listItem+= `
        <li><a href="${leads[i]}" target="_blank">${leads[i]} </a></li>`;
    }
    unEl.innerHTML=listItem;
}


inputBtn.addEventListener("click",function () {
    myLead.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myleads",JSON.stringify(myLead));
    render(myLead);
})

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myLead));
        render(myLead);
    });

})

delBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLead=[];
    render(myLead);
})