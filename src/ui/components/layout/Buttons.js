import * as htmlToImage from 'html-to-image';
import domtoimage from 'dom-to-image';
import { saveAsPng/* , saveAsJpeg */ } from 'save-html-as-image';
import nodeToDataURL from 'html-element-to-image';

/* import GetDisplayMedia from './GetDisplayMedia'; */
import Pico from './Pico';
import IframeToHtmlToCanva from './IframeToHtmlToCanva';
/* import IframeToImage from './IframeToImage'; */

const Buttons = (props) => {

  const {
    containerId = 'problem',
    nodeId = 'my-node'
  } = props

  return (
    <div style={{
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center'
    }}>
      <Pico />
      <IframeToHtmlToCanva />
      {/* <IframeToImage
        containerId={containerId}
        nodeId={nodeId}
      /> */}
      <button onClick={() => {
        let container = document.getElementById(containerId);
        let node = document.getElementById(nodeId);
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
        html to image
      </button>
      <button onClick={() => {
        let container = document.getElementById(containerId);
        let node = document.getElementById(nodeId);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        node.style.background = `#${randomColor}`

        domtoimage.toPng(node)
          .then(dataUrl => {
            var img = new Image();
            img.src = dataUrl;
            container.appendChild(img);
          })
      }}>
        dom to image
      </button>
      <button onClick={() => {
        let container = document.getElementById(containerId);
        let node = document.getElementById(nodeId);
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

        saveAsPng(node)
      }}>
        save-html-as-image to image
      </button>
      <button onClick={() => {
        let container = document.getElementById(containerId);
        let node = document.getElementById(nodeId);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        node.style.background = `#${randomColor}`

        nodeToDataURL({
          targetNode: node,
        })
          .then((url) => {
            var img = new Image();
            img.src = url;
            container.appendChild(img);
          })
      }}>
        html-element-to-image to image
      </button>
    </div >
  )

}

export default Buttons;