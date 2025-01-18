let vscpuBtn = document.getElementById("vscpuBtn");
let onev1Btn = document.getElementById("onev1Btn");
let gameMode = ''
console.log("Game Start")
vscpuBtn.addEventListener("mouseover",function(){
     gameMode = 'vscpu'
     save2LocalStorage(gameMode)

})

onev1Btn.addEventListener("mouseover",function(){
    gameMode = '1v1'
    save2LocalStorage(gameMode)

})

function save2LocalStorage(score)
{
  localStorage.setItem('mode', score)

}