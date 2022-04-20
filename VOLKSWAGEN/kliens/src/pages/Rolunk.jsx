import "./Rolunk.css";
import React from "react";

function Rolunk(){
    return(
        <div className="page">
            <img id="autorolunk" src={require("../kepek/rolunk.png")} alt="auto" />
            <div className="info">
                <h1>Rolunk</h1>
                <p>A Volkswagen konszern német autógyártó vállalat, egyike a legnagyobb autógyártó cégeknek a világon. A cégcsoporthoz tizenkét márka tartozik  a Volkswagen, az Audi, a SEAT, a Škoda, a Bentley, a Bugatti, a Lamborghini, a Porsche, a Ducati, a Volkswagen Nutzfahrzeuge (Volkswagen haszonjárművek), a Scania és az MAN. A csoport legnagyobb piaca Kína, ahol külön leányvállalata működik Volkswagen Group China néven. 2011-ben a Volkswagen csoport összesen 9,265 millió autót adott el, mellyel a nemzetközi személygépkocsi-piacon 12,3%-os részesedést ért el.

                A 2011. évi 200 milliárd eurós forgalmát tekintve az egyik legfontosabb európai iparvállalat.

                A cég akkori vezetője Martin Winterkorn 2015-ben a dízelbotrány okán mondott le, majd a helyére Matthias Müller került. Matthias Müllert 2018 áprilisában Herbert Diess váltotta az elnöki székben.</p>
            
            <div id="km">
                <h2>kozosegi media</h2>
                <ul>
                    <li className="kozosegim"><a href="https://www.facebook.com/VolkswagenSrbija/?brand_redir=344123578939684"><img className="fyi" src={require("../kepek/fb.png")} alt="fb.png" /></a></li>
                    <li className="kozosegim"><a href="https://www.instagram.com/volkswagenmagyarorszag/"><img className="fyi"  src={require("../kepek/ig.png")} alt="ig.png" /></a></li>
                    <li className="kozosegim"><a href="https://www.youtube.com/channel/UC4XTvax9Ki193LjDS0Mu2tQ"><img className="fyi"  src={require("../kepek/yt.png")} alt="yt.png" /></a></li>
                </ul>
            </div>
            </div>
            
            

        </div>
    );

}
export default Rolunk;