let arr= [
    {id:1, name:"john",age:"19",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"},
    {id:4, name:"micky", age:"20",profession:"admin"},
    {id:5, name:"ricky", age:"20",profession:"admin"}
]


arr.forEach(function(element){
    if(element.profession==developer){
        filter.onclick= Filter;
        document.getElementById("first").style.visibility = "visible";
        document.getElementById("second").style.visibility = "visible";
        document.getElementById("third").style.visibility = "hidden";
        document.getElementById("fourth").style.visibility = "hidden";
        document.getElementById("fifth").style.visibility = "hidden";
    }
})

arr.forEach(function(element){
        if(element.profession==admin){
            filter.onclick= Filter;
            document.getElementById("first").style.visibility = "hidden";
            document.getElementById("second").style.visibility = "hidden";
            document.getElementById("third").style.visibility = "visible";
            document.getElementById("fourth").style.visibility = "visible";
            document.getElementById("fifth").style.visibility = "visible";
        }
    })
// function profession(){
//     if(Element.profession==developer){
//         document.getElementById("first").style.visibility = "visible";
//         document.getElementById("second").style.visibility = "visible"; 
//     }
//     if(Element.profession==admin){
//         document.getElementById("third").style.visibility = "visible";
//         document.getElementById("fourth").style.visibility = "visible";
//         document.getElementById("fifth").style.visibility = "visible";
//     }
//     if(Element.profession==""){
//         alert( "click on profession first");
//     }
// }
