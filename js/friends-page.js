const friendsList = document.querySelector(".friends-list");
const listBtnIcon = friendsList.querySelector(".menus i");
const friendBox = document.querySelector(".friendbox");
function handleListBtn(){
    listBtnIcon.classList.toggle("active");
    friendBox.classList.toggle("hidden");
}


friendsList.addEventListener("click", handleListBtn);