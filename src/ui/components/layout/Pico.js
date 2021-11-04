import * as pico from "@gripeless/pico";

const Pico = () => {
  return (
    <button onClick={async () => {
      
      // let container = document.getElementById('inlineFrameExample');
      const res = await pico.dataURL(window);
      console.log(res);

    }}>
      pico
    </button>
  )

}

export default Pico;