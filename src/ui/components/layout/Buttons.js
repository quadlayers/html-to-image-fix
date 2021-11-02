import * as htmlToImage from 'html-to-image';
import domtoimage from 'dom-to-image';
import { saveAsPng/* , saveAsJpeg */ } from 'save-html-as-image';
import nodeToDataURL from 'html-element-to-image';

/* import Test from './Test'; */
import PicoTest from './PicoTest';

const Buttons = (props) => {

  const {
    containerId = 'problem',
    nodeId = 'my-node',
    text = 'background mask to image'
  } = props

  return (
    <div style={{
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center'
    }}>
      <PicoTest />
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
        {text}(html to image)
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
        {text}(dom to image)
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
        {text}(save-html-as-image to image)
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
        {text}(html-element-to-image to image)
      </button>
    </div >
  )

}

export default Buttons;