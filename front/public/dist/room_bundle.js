(()=>{"use strict";document.getElementById("createBtn").addEventListener("click",(()=>{const e={roomName:document.getElementById("name").value,roomPassword:document.getElementById("password").value};console.log(window.location),fetch("/createRoom",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json)).then((e=>{}))}))})();