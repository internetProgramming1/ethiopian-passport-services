document.getElementById("site").textContent = localStorage.getItem("site") || "Not provided";
document.getElementById("city").textContent = localStorage.getItem("city") || "Not provided";
document.getElementById("office").textContent = localStorage.getItem("office") || "Not provided";
document.getElementById("delivery").textContent = localStorage.getItem("delivery") || "Not provided";
document.getElementById("date").textContent = localStorage.getItem("date") || "Not provided";
document.getElementById("time").textContent = localStorage.getItem("time") || "Not provided";



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("firstname").textContent = localStorage.getItem("firstname") || "Not provided";
    document.getElementById("middlename").textContent = localStorage.getItem("middlename") || "Not provided";
    document.getElementById("lastname").textContent = localStorage.getItem("lastname") || "Not provided";
    document.getElementById("phone").textContent = localStorage.getItem("phone") || "Not provided";
    document.getElementById("email").textContent = localStorage.getItem("email") || "Not provided";
    document.getElementById("gender").textContent = localStorage.getItem("gender") || "Not provided";
    document.getElementById("dob").textContent = localStorage.getItem("dob") || "Not provided";
    document.getElementById("under18").textContent = localStorage.getItem("under18") || "Not provided";
    document.getElementById("birthplace").textContent = localStorage.getItem("birthplace") || "Not provided";
    document.getElementById("adopted").textContent = localStorage.getItem("adopted") || "Not provided";
    document.getElementById("birth_certificate").textContent = localStorage.getItem("birth_certificate") || "Not provided";
    document.getElementById("nationality").textContent = localStorage.getItem("nationality") || "Not provided";
    document.getElementById("marital_status").textContent = localStorage.getItem("marital_status") || "Not provided";
    document.getElementById("occupation").textContent = localStorage.getItem("occupation") || "Not provided";
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("region").textContent = localStorage.getItem("region") || "Not provided";
    document.getElementById("city").textContent = localStorage.getItem("city") || "Not provided";
    document.getElementById("subcity").textContent = localStorage.getItem("subcity") || "Not provided";
    document.getElementById("woreda").textContent = localStorage.getItem("woreda") || "Not provided";
    document.getElementById("kebele").textContent = localStorage.getItem("kebele") || "Not provided";
    document.getElementById("house_no").textContent = localStorage.getItem("house_no") || "Not provided";
    document.getElementById("id_no").textContent = localStorage.getItem("id_no") || "Not provided";


document.getElementById("mother_first_name").textContent = localStorage.getItem("mother_first_name") || "Not provided";
document.getElementById("mother_father_name").textContent = localStorage.getItem("mother_father_name") || "Not provided";
document.getElementById("mother_grandfather_name").textContent = localStorage.getItem("mother_grandfather_name") || "Not provided";

// Father Section
document.getElementById("father_first_name").textContent = localStorage.getItem("father_first_name") || "Not provided";
document.getElementById("father_father_name").textContent = localStorage.getItem("father_father_name") || "Not provided";
document.getElementById("father_grandfather_name").textContent = localStorage.getItem("father_grandfather_name") || "Not provided";

// Spouse Section
document.getElementById("spouse_first_name").textContent = localStorage.getItem("spouse_first_name") || "Not provided";
document.getElementById("spouse_father_name").textContent = localStorage.getItem("spouse_father_name") || "Not provided";
document.getElementById("spouse_grandfather_name").textContent = localStorage.getItem("spouse_grandfather_name") || "Not provided";
});