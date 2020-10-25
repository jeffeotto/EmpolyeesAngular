
$("document").ready(function(){
    $("#addEmployee").click(addEmployees);
    $("#all-Users").click(getUsers);
    $("#UsersToDel").click(DeleteEmployees);
    $("#editEmployee").click(editEmployee);
});
  


var baseURI = "https://localhost:44354/";




function addEmployees(e){
    e.preventDefault();
    $("#allusers").html(" ");
    let name = $("#name").val();
    let sname= $("#sname").val();
    let position= $("#position").val();
    let salary=  parseInt($("#salary").val(),10);
    
    var employee = {
        Name:name,
        SecondName: sname,
        Position :position,
        Salary: salary
        }

 $.ajax({
        type: "POST",
        url:  baseURI + "api/Employees",
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify( employee ),
        contentType: "application/json",
        success: function(data){
            alert("SUCCESS =" + data.name);
           document.getElementById("name").value = " ";
           document.getElementById("sname").value  = " ";
           document.getElementById("position").value  = " ";
           document.getElementById("salary").value  = " ";
            
        },
        error: function ( errorthrown) {
            alert(" conection to the server failed ");
            console.log("error: " + errorthrown);
        },
        dataType: "json",
    });

   
}

function editEmployee(e){
    e.preventDefault();
    let id = parseInt($("#editId").val(), 10);
    let name = $("#editName").val();
    let sname= $("#editSname").val();
    let position= $("#editPosition").val();
    let salary=  parseInt($("#editSalary").val(),10);
    
    var employee = {
        Id:id,
        Name:name,
        SecondName: sname,
        Position :position,
        Salary: salary
        }

 $.ajax({
        type: "PUT",
        url:  baseURI + "api/Employees/" + id,
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify( employee ),
        contentType: "application/json",
        success: function(data){
            alert("SUCCESS");
           document.getElementById("editId").value = " ";
           document.getElementById("editName").value  = " ";
           document.getElementById("editSname").value  = " ";
           document.getElementById("editPosition").value  = " ";
           document.getElementById("editSalary").value  = " ";
           $("#allusers").html("");
        },
        error: function ( errorthrown) {
            alert(" conection to the server failed ");
            console.log("error: " + errorthrown);
        },
        dataType: "json",
    });

   
}


function DeleteEmployees(e){
    e.preventDefault();
    let  id = parseInt(document.getElementById("nameToDel").value);
 

 $.ajax({
        type: "DELETE",
        url:  baseURI + "api/Employees/" + id,
        contentType: "application/json",
        success: function(data){
            
            alert("SUCCESS =" + data.id + "Deleted" );
            document.getElementById("nameToDel").value = " ";
            $("#allusers").html("");
        },
        error: function ( errorthrown) {
            alert(" conection to the server failed ");
            console.log("error: " + errorthrown);
        },
        dataType: "json",
    });

   
}


function getUsers() {
    $.ajax({
        type: "GET",
    url: baseURI + "api/Employees",
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) { 
      if(data.length <= 0){ $("#allusers").html("No Employees to show.");}
        $.each(data, function(index, element) {
            $("#allusers").append(
                      `
                      <div>
                      <p>Name: ${element.name},  
                       Second Name :${element.secondName}, 
                       Position :${element.position}, 
                       Salary :${element.salary}, 
                       id :${element.id}
                       </p>
                       </div>
                       `
             );
        });
    },
  });
}



