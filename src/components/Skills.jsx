import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faJsSquare,faReact,faPhp } from "@fortawesome/free-brands-svg-icons";
import { faC,faPalette,faStar } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  const skills = [
    {
      icon: faHtml5,
      name: "HTML/CSS",
      rate: ["rgba(231,147,21, 0.7)","rgba(231,147,21, 0.7)","#666","#666","#666"],
      desc: "レスポンシブ対応のWebサイトが制作できます"
    },
    {
      icon: faJsSquare,
      name: "Javascript/JQeury",
      rate: ["rgba(231,147,21, 0.7)","rgba(231,147,21, 0.7)","#666","#666","#666"],
      desc: "プラグインなどを使用した動的なWebサイトが制作できます"
    },
    {
      icon: faReact,
      name: "React",
      rate: ["rgba(231,147,21, 0.7)","#666","#666","#666","#666"],
      desc: "Web APIを使用した簡単なアプリケーションが作成できます"
    },
    {
      icon: faPhp,
      name: "PHP",
      rate: ["rgba(231,147,21, 0.7)","#666","#666","#666","#666"],
      desc: "CRUD処理を実装した簡単な掲示板アプリの作成経験があります"
    },
    {
      icon: faC,
      name: "C/C++",
      rate: ["rgba(231,147,21, 0.7)","rgba(231,147,21, 0.7)","#666","#666","#666"],
      desc: "ラジコンやオセロの開発経験があります"
    },
    {
      icon: faPalette,
      name: "Illustrater/Photoshop/XD",
      rate: ["rgba(231,147,21, 0.7)","rgba(231,147,21, 0.7)","#666","#666","#666"],
      desc: "ロゴやデザインカンプの作成、写真のレタッチが出来ます"
    }
  ];


  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {skills.map((item,index) => {
            return(
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <h3>{item.name}</h3>
              <ul className='skill-rate'>
                {item.rate.map((rate,index) => {
                  return(
                    <li key={index}>
                      <FontAwesomeIcon icon={faStar}  color={rate} />
                    </li>
                  );
                })}
              </ul>
              <p className="skill-desc">{item.desc}</p>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};