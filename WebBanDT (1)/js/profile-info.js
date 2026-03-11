const API = "http://localhost:8080/api/user";

const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

async function loadProfile(){

    const res = await fetch(API + "/profile/" + userId,{
        headers:{
            "Authorization":"Bearer " + token
        }
    });

    const data = await res.json();

    document.getElementById("username").value = data.username || "";
    document.getElementById("phone").value = data.phone || "";
    document.getElementById("address").value = data.address || "";
}

loadProfile();


async function updateUser(){

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const res = await fetch(API + "/update/" + userId,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token
        },
        body:JSON.stringify({
            username,
            phone,
            address
        })
    });

    if(res.ok){
        alert("Cập nhật thành công");
    }else{
        alert("Cập nhật thất bại");
    }

}