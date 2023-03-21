const chooseFile = document.getElementById("choose-file");
// console.log(chooseFile);

const imgPreview = document.getElementById("img-preview"); 
// console.log(imgPreview);


function getImgData() {
  
    const files = chooseFile.files[0];
    // console.log(files);
    // console.log(files.name);
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      console.log(fileReader);
      
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        // console.log(this.result);
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
}


chooseFile.addEventListener("change",getImgData);




