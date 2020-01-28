import React from "react";
import "./App.css";

const BootstrapCard = props => {
  // 1) replace the hard-coded image, description, link, etc. With their property variable.
  return (
    <div className="card m-5">
      <img className="card-img-top" src={props.imageUrl} alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href="https://en.wikipedia.org/wiki/Dave_Grohl"
          className="btn btn-primary"
        >
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <BootstrapCard
        imageUrl="https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3"
        alt="Card image cap"
        title="Dave Grohl"
        description="David Eric Grohl (born January 14, 1969) is an American singer,
          songwriter, musician and ... guest for a concert at the Anfield
          football stadium in Liverpool, in one of the central events of the
          English city's year as European Capital of Culture."
        buttonLabel="Go To Wikipedia"
      />
    </main>
  );
};

export default App;
