let hr=document.getElementById("hrs")
let mins=document.getElementById("mins")
let sec=document.getElementById("sec")

function Display_Time(){
    let date=new Date()

    let hh=date.getHours()
    let mm=date.getMinutes()
    let ss=date.getSeconds()

    let h_Rotation=30*hh + mm/2;
    let m_Rotation=6*mm;
    let s_Rotation=6*ss;

    hr.style.transform=`rotate(${h_Rotation}deg)`;
    mins.style.transform=`rotate(${m_Rotation}deg)`;
    sec.style.transform=`rotate(${s_Rotation}deg)`;
}
setInterval(Display_Time, 1000)