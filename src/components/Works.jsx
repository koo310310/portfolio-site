import Curious from '../images/curious.png';
import Mentai from '../images/mentai.png';
import Portfolio from '../images/portfolio.png';

export const Works = () => {
  const works = [
    {
      name: "ノンアルコールバー",
      sumb: Curious,
      link: "https://koo310310.github.io/curious/",
      type: "コーポレートサイト",
      desc: "チーム開発の練習のため3人で制作。トップ/フード/アクセスページのコーディングを担当しました。",
      skill: ["HTML/CSS","JQuery"]
    },
    {
      name: "映像・写真素材を提供している会社",
      sumb: Mentai,
      link: "https://koo310310.github.io/mentai/",
      type: "コーポレートサイト",
      desc: "架空のコーポレートサイトです。XDのアウトプットと動画の埋め込みの学習のため制作。",
      skill: ["HTML/CSS","JQuery","XD"]
    },
    {
      name: "Portfolio",
      sumb: Portfolio,
      link: "https://koo310310.github.io/portfolio-site/",
      type: "個人サイト",
      desc: "ポートフォリオサイト。Reactのアウトプットの練習として制作しました。",
      skill: ["React","XD"]
    },
  ];

  return (
    <div id="works">
      <div className="container">
        <div className="heading">
          <h2>Works</h2>
        </div>
        <div className="works-container">
          {works.map((item,index) => {
            return(
            <a className="work" key={index} href={item.link}>
              <figure><img src={item.sumb} alt="sumbneil" /></figure>
              <h3>{item.name}</h3>
              <p className="work-desc">{item.desc}</p>
              <ul className='work-skills'>
              {item.skill.map((skills) => {
                return(
                  <li key={skills}>{skills}</li>
                );
              })}
              </ul>
            </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};