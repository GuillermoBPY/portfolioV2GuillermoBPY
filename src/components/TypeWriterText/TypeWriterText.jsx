import Typewriter from "typewriter-effect";
import "./TypeWrtierText.css";

const TypeWriterText = () => {
  return (
    <Typewriter
      options={{
        strings: `<span>Guillermo Benitez.</span>`,
        autoStart: true,
        loop: false,
      }}
    />
  );
};

export default TypeWriterText;
