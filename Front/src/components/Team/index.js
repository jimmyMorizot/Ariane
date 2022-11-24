import sylvain from 'src/assets/images/sylvain.png';
import melanie from 'src/assets/images/melanie.png';
import kevin from 'src/assets/images/kevin.png';
import jimmy from 'src/assets/images/jimmy.png';
import linkedin from 'src/assets/images/linkedin.png';
import github from 'src/assets/images/github.png';
import './team.scss';

// == Composant
function Team() {
  return (
    <div className="team">
      <div className="team-container">
        <h1 className="team-title">
          Qui sommes-nous <span>?</span>
        </h1>
        <div className="team-card">
          <img
            className="team-card-picture"
            src={sylvain}
            alt="Portrait Sylvain"
          />
          <h2 className="team-card-name">
            <span>S</span>ylvain Chambaud
          </h2>
          <h3 className="team-card-role">
            Product owner
          </h3>
          <h3 className="team-card-role">
            Dev Back
          </h3>
          <div className="team-card-socials">
            <a href="https://www.linkedin.com/in/sylvain-chambaud/">
              <img
                className="team-card-social"
                src={linkedin}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/Sylvain-Chambaud">
              <img
                className="team-card-social"
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
        <div className="team-card">
          <img
            className="team-card-picture"
            src={melanie}
            alt="Portrait Melanie"
          />
          <h2 className="team-card-name">
            <span>M</span>élanie Hautekeur
          </h2>
          <h3 className="team-card-role">
            Scrum master
          </h3>
          <h3 className="team-card-role">
            Dev Front
          </h3>
          <div className="team-card-socials">
            <a href="https://www.linkedin.com/in/melanie-hautekeur/">
              <img
                className="team-card-social"
                src={linkedin}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/MelanieHautekeur">
              <img
                className="team-card-social"
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
        <div className="team-card">
          <img
            className="team-card-picture"
            src={kevin}
            alt="Portrait Kevin"
          />
          <h2 className="team-card-name">
            <span>K</span>évin Lambert
          </h2>
          <h3 className="team-card-role">
            LeadDev Front
          </h3>
          <h3 className="team-card-role">
            Dev Front
          </h3>
          <div className="team-card-socials">
            <a href="https://www.linkedin.com/in/kévin-lambert/">
              <img
                className="team-card-social"
                src={linkedin}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/lambertkevin42">
              <img
                className="team-card-social"
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
        <div className="team-card">
          <img
            className="team-card-picture"
            src={jimmy}
            alt="Portrait Jimmy"
          />
          <h2 className="team-card-name">
            <span>J</span>immy Morizot
          </h2>
          <h3 className="team-card-role">
            LeadDev Back
          </h3>
          <h3 className="team-card-role">
            Dev Back
          </h3>
          <div className="team-card-socials">
            <a href="https://www.linkedin.com/in/jimmy-morizot">
              <img
                className="team-card-social"
                src={linkedin}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/jimmyMorizot">
              <img
                className="team-card-social"
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Team;
