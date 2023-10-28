import React from "react";
import ListMovie from "../../component/list-movie";
import MovieCard from "../../component/movie-card";

function StorePage() {
  return (
    <div>
      {" "}
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
      <div className="page__right__list">
        <ListMovie>
          <MovieCard
            img={
              "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360"
            }
            name={"Dead Island 2"}
          />
          <MovieCard
            img={
              "https://cdn1.epicgames.com/offer/aa598567414d42378187b8861da550f7/c6758576-ddd6-4601-b4bb-2769df3c7af3_1200x1600-1486abbf9a713a1d20d7facac9a34195?h=480&quality=medium&resize=1&w=360"
            }
            name={"Remnant 2"}
          />
          <MovieCard
            img={
              "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360"
            }
            name={"The Last of Us™ Part I"}
          />
          <MovieCard
            img={
              "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&quality=medium&resize=1&w=360"
            }
            name={"Dead by Daylight"}
          />
          <MovieCard
            img={
              "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435?h=480&quality=medium&resize=1&w=360"
            }
            name={"Dying Light 2 Stay Human"}
          />
        </ListMovie>

        <ListMovie>
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/en-egs-dotw-tiny-tinas-wonderlands-breaker-1920x1080-85f3b8b15948.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"The Last of Us™ Part I"}
          />
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/en-egs-dotw-eternights-breaker-1920x1080-f3455218f4fe.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"Dead by Daylight"}
          />
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/en-sales-specials-dotw-breaker-asset-1920x1080-1313ee288796.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"Dying Light 2 Stay Human"}
          />
        </ListMovie>

        <div className="free-game">
          <ListMovie>
            <MovieCard
              img={
                "https://cdn1.epicgames.com/spt/2c1d81ab-12e7-40a6-9edd-a449cc619ad5/download-tandem-a-tale-of-shadows-offer-5c6a45df.jpg?h=480&quality=medium&resize=1&w=360"
              }
              name={"The Last of Us™ Part I"}
            />
            <MovieCard
              img={
                "https://cdn1.epicgames.com/offer/5891aa5c4c6f4aabbf555a679e02cfb9/EGS_TheEvilWithin2_TangoGameworks_S2_1200x1600-17d620c62723c63398e8d040eb04af7b?h=480&quality=medium&resize=1&w=360"
              }
              name={"Dead by Daylight"}
            />
            <MovieCard
              img={
                "https://cdn1.epicgames.com/offer/a7e2a2c51b9149c097b771926ed91877/EGS_FISTForgedInShadowTorch_TiGames_S6_1200x1600-b0ce396c042359ad9a7b2ca50726cac1?h=480&quality=medium&resize=1&w=360"
              }
              name={"Dying Light 2 Stay Human"}
            />
            <MovieCard
              img={
                "https://cdn1.epicgames.com/spt-assets/9456221af5d04968ba41426fdb2c4557/download-turnip-boy-commits-tax-evasion-offer-1oc2r.png?h=480&quality=medium&resize=1&w=360"
              }
              name={"Dying Light 2 Stay Human"}
            />
          </ListMovie>
        </div>

        <ListMovie>
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/egs-alan-wake-2-deluxe-edition-breaker-1920x1080-2120918b0040.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"The Last of Us™ Part I"}
          />
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/egs-alan-wake-2-guide-breaker-1920x1081-4a9c9b866b59.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"Dead by Daylight"}
          />
          <MovieCard
            img={
              "https://cdn2.unrealengine.com/egs-alan-wake-2-feature-breaker-1920x1080-21ac0623255d.jpg?h=480&quality=medium&resize=1&w=854"
            }
            name={"Dying Light 2 Stay Human"}
          />
        </ListMovie>
      </div>
    </div>
  );
}

export default StorePage;
