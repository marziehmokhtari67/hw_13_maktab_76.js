let url="https://62ab6beda62365888bdc2f11.mockapi.io/Hw13"
let siteId=[]
let projectId=[]
let tbody=document.querySelector("tbody")

let head = document.querySelector("thead tr")

function getData(){
    fetch(url,{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{ data.forEach(fill);
        // end of for each
        
        HeaderRow(siteId );
        creatingCells(data);   
    })
}
document.addEventListener('DOMContentLoaded', function() {
    getData();
     })


/// filling the empty array with fill function
function fill(item){
    if (siteId.indexOf(item.SiteId)===-1)
    {
    siteId.push(item.SiteId)
    }
    if(projectId.indexOf(item.ProjectId)===-1)
    {projectId.push(item.ProjectId)}
    siteId.sort((a,b)=>a-b)
    projectId.sort((a,b)=>a-b)
    
 } 
// / creating header row
 function HeaderRow( array){
    let emptyCell=document.createElement("th")
    emptyCell.innerHTML=`siteId<hr> projectId`
    head.appendChild(emptyCell)
    for(let i =0; i<array.length ; i++){
        let th= document.createElement("th")
        th.innerHTML=array[i]
        head.append(th)
        
    }
    
 }
/// creatinf rest cells of table
 function creatingCells(data) {  
    console.log(data);
for(let j =0 ;j< projectId.length;j++){
    
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.innerHTML=projectId[j]
    tr.appendChild(th)
   
    for(let k=0; k<siteId.length;k++){
        
        data.forEach((element)=>{
            if(element.SiteId===siteId[k]&&element.ProjectId===projectId[j]){
                let td = document.createElement("td")
                td.innerHTML=element.Target
                tr.append(td)
            }
        })
    
    }
    tbody.appendChild(tr)
}
}  
