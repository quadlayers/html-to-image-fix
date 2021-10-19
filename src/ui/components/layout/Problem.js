/* ES6 */
import * as htmlToImage from 'html-to-image';

const Problem = () => {

  return (
    <>
      <div id="my-node">
        <div id="my-node-mask">

        </div>
      </div>

      <button onClick={() => {
        let container = document.getElementById('problem');
        let node = document.getElementById('my-node');
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        node.style.background = `#${randomColor}`

        htmlToImage.toPng(node)
          .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            container.appendChild(img);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      }}>
        background mask to image
      </button>

      <div id="problem" className="container">
      </div>
    </>
  )

}

export default Problem;