import "./Home.css";

function Home(){

    return(
        <div className="pagehome">
            <div>
                <h1>Üdvözlet a Volkswagennál</h1>
            </div>
            <img id="alapkep" src={require("../kepek/alapkep.jpg")} alt="alapkep.png" />
        </div>
    )
}
export default Home;