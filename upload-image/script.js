const chooseFile = document.getElementById("choose-file");

const imgPreview = document.getElementById("img-preview");

const getImgData = function getImgData(e) {
  let inputFilesObj = e.target.files;
  for (var i = 0; i < inputFilesObj.length; i++) {
    let file = chooseFile.files[i];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function () {
        imgPreview.innerHTML += '<div class="deleteItem"><img class="imgCls" src="' + this.result + '" /> <buton onclick="this.parentNode.parentNode.removeChild(this.parentNode);" class="deletImg">X</button></div>';
      });
    }
  }
};

chooseFile.addEventListener("change", getImgData);
