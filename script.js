const notif = document.querySelector(".notifmodal");
const notifikasiBtn = document.querySelector(".container .item .wrap .searchbox .wadahNotif .notifikasi");
const user = document.querySelector(".usermodal");
const userBtn = document.querySelector(".container .item .wrap .searchbox .wadahImg .orang")


notifikasiBtn.addEventListener("click", () => {
    notif.classList.toggle("muncul");
});


userBtn.addEventListener("click", () => {
    user.classList.toggle("muncul");
})

// notifikasiBtn.addEventListener("click", () => {
//     notif.classList.remove("muncul");
// });