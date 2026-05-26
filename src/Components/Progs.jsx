import data from "../assets/datatv.json";
import { uid } from "uid";

const Progs = () => {
  return (
    <div className="progs">
      {data.map((prog) => (
        <div key={uid()} className="prog">
          <div className="col-gauche">
            <div className="heures">
              <h4>{prog.time}</h4>
            </div>
            <div className="picture">
              <img src={prog.image} alt={prog.title} />
            </div>
          </div>
          <div className="col-droite">
            <div className="col-droite-haut">
              <div className="titre">
                <h4>{prog.title}</h4>
              </div>
              <div className="ss-titre">
                <h5>{prog.type}</h5>
              </div>
            </div>
            <div className="col-droite-bas">
              <div className="duree">
                <h5>{prog.duration}</h5>
              </div>
              <div className="info">
                <h5>
                  {prog.direct ? (
                    <span className="red direct">• Direct</span>
                  ) : (
                    ""
                  )}
                  {prog.isUnseen ? <span className="red">Inédit</span> : ""}
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progs;
