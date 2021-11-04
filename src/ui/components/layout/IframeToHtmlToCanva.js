import { capture, OutputType } from 'html-screen-capture-js';

const Pico = () => {
  return (
    <button onClick={async () => {

      // capture the webpage
      const htmlDocStr = await capture(
        OutputType.STRING,
        window.document,
        {
          rulesToAddToDocStyle: [
            '@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")'
          ],
          classesOfIgnoredDocBodyElements: [
            'modal-dialog-backdrop',
            'modal-dialog--error'
          ],
        }
      );

      //const container = document.getElementById('no-problem')
      //var newWindow = window.open();
      //newWindow.document.write(htmlDocStr);
      document.write(htmlDocStr);



      // zip and convert
      // const jsZip = new JSZip();
      // jsZip.file('screen-capture.html', htmlDocStr);
      // const screenCaptureZipFile = await jsZip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
      // const screenCaptureZipFileBase64 = await this.convertBlobToBase64(screenCaptureZipFile);

      // post to the server
      // $.ajax({
      //   type: 'POST',
      //   url: url,
      //   headers: headers,
      //   contentType: 'application/json',
      //   dataType: 'json',
      //   data: JSON.stringify({ screenshot: screenCaptureZipFileBase64 }),
      // });

    }}>
      iframetohtmltocanva
    </button >
  )

}

export default Pico;