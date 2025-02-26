const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();
  
    clearUI();
  
    let url = document.getElementById("url").value.trim(); // Get the trimmed value of the URL input
    const size = document.getElementById("size").value;
  
    if (url === "") {
      alert("Please enter a website URL");
      return;
    }
  
    // Check if the URL starts with "http://" or "https://", and add "https://" if not
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }
  
    console.log(url, size);
  
    showSpinner();
  
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
  
      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 2000);
  };

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const clearUI = () => {
  qr.innerHTML = "";
  const saveBtn = document.getElementById('save-link');
  if(saveBtn) saveBtn.remove();
};

const createSaveBtn = (saveUrl)=>{
    const link = document.createElement('a');
    link.id = "save-link";
    link.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);

}

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
