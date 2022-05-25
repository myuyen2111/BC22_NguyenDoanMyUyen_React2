import React, { Component } from "react";
import "../index.css";
import dataGlasses from "../Data/dataGlasses.json";
export default class GlassesPage extends Component {
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glassesInfo, index) => {
      return (
        <img
          src={glassesInfo.url}
          alt="glasses"
          width="70px"
          key={index}
          className="ml-2 mt-3 p-2 border border-width-1 col-2"
          onClick={() => {
            this.changeGlasses(glassesInfo);
          }}
        />
      );
    });
  };
  changeGlasses = (chosenGlasses) => {
    this.setState({
      glasses: chosenGlasses,
    });
  };
  render() {
    //Animation:
    const keyframe = `@keyframes animationChangeGlasses${Date.now()} {
          from { 
              opacity:0;
          }
          to {
              opacity:0.8;
          }
      }`;
    const animation_glasses = {
      animation: `animationChangeGlasses${Date.now()} 1s`,
    };
    return (
      <div
        className="main_background"
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundPosition: "center",
          backgroundSize: "1500px",
        }}
      >
        <style>{keyframe}</style>
        <div className="bg">
          <h1 className="h1-text">TRY GLASSES APP ONLINE</h1>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-md-6" style={{ position: "relative" }}>
                {/* Model image */}
                <img
                  alt="model_glasses"
                  src="./glassesImage/model.jpg"
                  width="300"
                  style={{ position: "absolute" }}
                ></img>
                {/* Glasses */}
                <img
                  className="try_glasses"
                  style={animation_glasses}
                  src={this.state.glasses.url}
                  alt="glasses_image"
                />
                {/* Glasses Information */}
                <div className="glasses_info">
                  <p style={{ color: "#CC33CC", fontWeight: "bold" }}>
                    {this.state.glasses.name}
                  </p>
                  <p className="text-light">{this.state.glasses.desc}</p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="model_none"
                  src="./glassesImage/model.jpg"
                  width="300"
                ></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row mt-5 bg-light  justify-content-center  ">
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
