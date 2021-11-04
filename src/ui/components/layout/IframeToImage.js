import * as iframe2image from "iframe2image";

const IframeToImage = (props) => {

  const {
    containerId = 'problem',
    nodeId = 'my-node'
  } = props

  return (
    <button onClick={async () => {

      let container = document.getElementById(containerId);
      let node = document.getElementById(nodeId);
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      node.style.background = `#${randomColor}`
      
      iframe2image(node, function (err, dataUrl) {
        // If there is an error, log it
        if (err) { return console.error(err); }
      
        // Otherwise, add the image to the canvas
        console.log('dataUrl : ', dataUrl)
        var img = new Image();
        img.src = dataUrl;
        container.appendChild(img);
      });

    }}>
      iframetoimage
    </button >
  )

}

export default IframeToImage;