// download.js

export function downloadCV() {
    const cvLink = document.querySelector('#download-cv');
    cvLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      // Replace 'path_to_your_cv.pdf' with the actual path to your CV PDF file
      const cvUrl = './MaishaMaimuna_TCS.pdf';
      const fileName = 'MaishaMaimuna_TCS.pdf';
      downloadFile(cvUrl, fileName);
    });
  
    function downloadFile(url, fileName) {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  