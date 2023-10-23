import MovieCard from "../movie-card";
import "./index.css";
const ListMovie = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ fontSize: 18, fontWeight: 400, marginBottom: 5 }}>Halloween Spotlight</h1>
      <div className="list-movie">
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
      </div>
    </div>
  );
};
export default ListMovie;
