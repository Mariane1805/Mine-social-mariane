let likeCount = 0;
let curtido = false;

let dislikeCount = 0;
let descurtido = false;

function curtir() {
  if (curtido == false) {
    
    if (descurtido == true) {
      descurtido = false;
      dislikeCount--;
    }
    likeCount++;
    curtido = true;
  } else {
    
    likeCount--;
    curtido = false;
  }
  atualizarInterface();
}

function descurtir() {
  if (descurtido == false) {
    
    if (curtido == true) {
      curtido = false;
      likeCount--;
    }
    dislikeCount++;
    descurtido = true;
  } else {
    
    dislikeCount--;
    descurtido = false;
  }
  atualizarInterface();
}

function atualizarInterface() {
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("dislikeBtn").addEventListener("click", descurtir);