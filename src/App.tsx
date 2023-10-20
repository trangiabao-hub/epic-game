import "./index.scss";
import "./app.scss";
function App() {
  return (
    <div className="page">
      <div className="page__left">
        <div className="img">
          <img src="/logo.png" width={80} alt="" />
        </div>

        <ul>
          <li className="active">
            <h3>Store</h3>
          </li>
          <li>
            <h3>Library</h3>
          </li>
          <li>
            <h3>Unreal Engine</h3>
          </li>
        </ul>
      </div>
      <div className="page__right">
        <div className="page__right__header">
          <i className="fa fa-angle-left"></i>

          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search Store" />

            <ul>
              <li className="active">Discover</li>
              <li>Browse</li>
              <li>News</li>
            </ul>
          </div>
        </div>

        <div className="page__right__bg">
          <div className="focus">
            <img
              src="https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-desktop-1920x1080-a3ae08411ddb.jpg?h=720&quality=medium&resize=1&w=1280"
              alt=""
            />

            <div className="info">
              <img
                src="https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-logo-v2-350x100-3e9b736edfe0.png"
                alt=""
              />
              <p>Now Available</p>
              <p>
                The only survival crafting game set in the Fourth Age of Middle-earth™, the iconic fantasy world created
                by J.R.R. Tolkien.
              </p>
            </div>
          </div>
          <div className="bar">
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-thumb-v2-1200x1600-5d5f6bd3b206.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Return to Moria</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-lords-of-the-fallen-carousel-thumb-1200x1600-d457b5a8325e.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Lords of the Fallen</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-hot-wheels-unleashed-2-carousel-thumb-1200x1600-b887a4ce0f17.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Hot Wheels Unleashed™ 2</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-alan-wake-2-v1-thumb-1200x1600-bd72dfcfdfcf.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Alan Wake 2</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-thumb-1200x1600-d005dcddaa56.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Return to Moria</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-thumb-v2-1200x1600-5d5f6bd3b206.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Ghostrunner 2</h3>
            </div>
            <div className="item">
              <img
                src="https://cdn2.unrealengine.com/en-halloween-carousel-thumbnail-1200x1600-f12a3ba3cc36.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
              />
              <h3>Halloween Sale 2023</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
