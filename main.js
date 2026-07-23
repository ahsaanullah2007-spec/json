fetch("user.json")
.then(response => response.json())
.then (data => {
    let user = "";
     
   data.forEach((mk) => {
     user += `
     <p>${mk.id}</p>
     <p>${mk.name}</p>
     <p>${mk.class}</p>
     <p>${mk.email}</p>
     `;

     document.getElementById("ok").innerHTML = user
    
   });
})