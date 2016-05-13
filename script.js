function JSon(){
var infoObject={"Employee":
[
{"firstname":"Jenni",
"surname":"Bill",
"Age":20,
"Address":
{
"StreetName":"Gorgeous Street",
"BlockNumber":"20 F 55",
"PostalCode":00001
}
},
{"firstname":"Mikko",
"surname":"Andrea",
"Age":40,
"Address":
{
"StreetName":"Gorgeous Street",
"BlockNumber":"20 F 55",
"PostalCode":00002
}
},
{"firstname":"Tom",
"surname":"Kelly",
"Age":25,
"Address":
{
"StreetName":"Gorgeous Street",
"BlockNumber":"20 F 55",
"PostalCode":00003
}
}
]
}
var result = "<ol>";
    for (var i=0;i<3;i++) {
        result+="<li>" + "First Name:" + infoObject.Employee[i].firstname + "<br/> " + 
		                 "Last Name:" + infoObject.Employee[i].surname + "<br/> " + 
						 "Age:" + infoObject.Employee[i].Age + "<br/> "  + 
						 "Street Name:" + infoObject.Employee[i].Address.StreetName + "<br/> " + 
		                 "Block Number:" + infoObject.Employee[i].Address.BlockNumber + "<br/> " +
		                 "Postal Code:" + infoObject.Employee[i].Address.PostalCode +
		                  "</li>";
    }
   result +="</ol>";
   document.getElementById("out").innerHTML=result;
}
   $(document).ready(function(){
    $("button").click(function(){
         $("#out").css("padding","20px");
		 var content=$("button").html();
		 if(content=="Open Info"){
		     $("#out").show(1000);
		     $("button").html("collapse Info");
		 }
		 if(content=="collapse Info"){
		     $("#out").hide(1000);
		     $("button").html("Open Info");
		 }
    });
});