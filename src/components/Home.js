import React from 'react';

const Home = () => {
    return (
      <div className="desc-main">
        <h1 className="desc-font">Welcome!, to our Weather Forecast App</h1>
        <br></br>
        <br></br>
        <p className="desc-font ft-sz">
          Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time. People have attempted to predict the weather informally for millennia and formally since the 19th century.

        </p>
        <br></br>
        <br></br>
        <p className="desc-font ft-sz">
          Weather forecasts are made by collecting quantitative data about the current state of the atmosphere, land, and ocean and using meteorology to project how the atmosphere will change at a given place.        </p>
        <br></br>
        <br></br>
        <p className="desc-font ft-sz">
          Once calculated manually based mainly upon changes in barometric pressure, current weather conditions, and sky condition or cloud cover, weather forecasting now relies on computer-based models that take many atmospheric factors into account.
        </p>
        <br></br>
        <br></br>
        <p className="desc-font ft-sz">
          Human input is still required to pick the best possible forecast model to base the forecast upon, which involves pattern recognition skills, teleconnections, knowledge of model performance, and knowledge of model biases.

        </p>
      </div>
    );
  }

export default Home;
