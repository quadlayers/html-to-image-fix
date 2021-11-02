import Buttons from './Buttons';

const Problem = () => {

  return (
    <>
      <div id="my-node">
        <div id="my-node-mask" />
      </div>
      <iframe id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
      </iframe>
      <p>
        Problem with the svg in a mask.

        The image provided totally ignores the element with the rule css webkit-mask: url ()
      </p>
      <Buttons
        containerId={'problem'}
        nodeId={'my-node'}
        text={'background mask to image'}
      />

      <div id="problem" className="container" />
    </>
  )

}

export default Problem;