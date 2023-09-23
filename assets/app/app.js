let videoItem = document.querySelectorAll(".nayeem__video--container--itme video");
videoItem.forEach(videoPara => {
    videoPara.onclick = () =>{
        document.querySelector('.nayeem__video--popup').style.display = 'block';
        document.querySelector('.nayeem__video--popup video').src = videoPara.getAttribute('src');
    }
});
let closeBtn = document.querySelector('.nayeem__video--popup span');
closeBtn.addEventListener("click", () => {
    document.querySelector('.nayeem__video--popup').style.display = 'none';
});