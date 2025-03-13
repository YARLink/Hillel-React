import { Link } from "react-router-dom";

const Home = () => (
  <section className="home-container">
    <h1>GitHub Battle: battle your friends!</h1>
    <Link className="button" to="/battle">
      Battle
    </Link>
  </section>
);

export default Home;
