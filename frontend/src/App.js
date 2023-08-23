import "./App.css";
import { data } from "./static/data";

function App() {
  return (
    <>
      <div className="title">
        <h1>CITIES TO VISIT IN EUROPE</h1>
      </div>
      <div className="card">
        {data.map((item) => {
          return (
            <>
              <div className="container">
                <div className="Image">
                  <img src={item.imageLink} alt={item.city} />
                </div>
                <div className="desc">
                  <div className="countrydetails">
                    <span className="country">{item.coutnry}</span>
                    <span className="city">{item.city}</span>
                  </div>
                  <div className="detail">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
