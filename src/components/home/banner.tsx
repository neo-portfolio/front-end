import React, {Component} from "react";
import Styled from "styled-components";

const Container = Styled.span`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(images/wallstreet.png);
    background-repeat: no-repeat;
    background-size: 100%;
`;

const Video = Styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = Styled.h1`
      font-size: 100px;
      font-weight: bold;
      background: -webkit-linear-gradient(#959595, yellow, blue, #44234e, red, green, #dcebf6);
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: orange;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Zhi Mang Xing', cursive;
      position: absolute;
      top: 20px;
      right: 30px;
      display: inline;
      margin: 0;
`;

interface BannerState {
    rotation: number;
}

export class Banner extends Component<{}, BannerState> {
    private direction: number = -.3;
    private interval: number;
    public state: BannerState = {rotation: 0};

    rotate = (): void => {
        const {rotation} = this.state;
        const nextRotation = rotation + this.direction;
        this.setState({rotation: nextRotation});
        if ((this.direction > 0 && nextRotation > 35) || (this.direction < 0 && nextRotation < -35)) {
            this.direction *= -1;
        }
    };

    render() {
        return (
            <Container>
                <Video autoPlay={true} loop={true} muted={true}>
                    <source src="/videos/batman.mp4"/>
                </Video>
                <Title style={{transform: `rotate(${this.state.rotation}deg)`}}>PORTFOLIO OPTIMIZATION</Title>
            </Container>
        );
    }

    startRotating = (): void => {
        this.interval = window.setInterval(this.rotate, 17);
    };

    componentDidMount(): void {
        this.startRotating();
    }

    componentWillUnmount(): void {
        window.clearInterval(this.interval);
    }
}