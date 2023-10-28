import "./index.css";
const ListMovie = ({ children }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ fontSize: 18, fontWeight: 400, marginBottom: 5 }}>Halloween Spotlight</h1>
      <div className="list-movie">{children}</div>
    </div>
  );
};
export default ListMovie;
