import Buttons from './Buttons';

const Problem = () => {

  return (
    <>
      <div id="my-node">
        <div id="my-node-mask"/>
      </div>
      <p>
        Problem with the svg in a mask.

        The image provided totally ignores the element with the rule css webkit-mask: url ()
      </p>
      <Buttons
        containerId={'problem'}
        nodeId={'my-node'}
        text={'background mask to image'}
      />

      <div id="problem" className="container"/>
    </>
  )

}

export default Problem;