import { Component } from "react";
import TextScramble from "react-textscramble";
import "./ScrambleText.css";

export default class MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      shouldRender: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRender: true });
      // eslint-disable-next-line react/prop-types
      this.props.setshowArrow(true);
    }, 4000);
  }

  render() {
    if (!this.state.shouldRender) {
      return null;
    }

    let phrases = [
      "Desarrollador Full Stack.",
      "Transformo ideas en realidad digital.",
      "Desarrollador Front-end.",
      "Explora mi portfolio.",
      "Desarrollador Back-end.",
      "Descubre mis proyectos destacados.",
      "¡Te invito a ser parte de mi mundo digital!",
    ];
    let freezeDuration = 1600;

    return (
      <div className="MainScreen">
        <div className="scramble-container">
          <TextScramble
            phrases={phrases}
            freezeDuration={freezeDuration}
            isInfiniteLoop={true}
          />
        </div>
      </div>
    );
  }
}
