import BackImage from '../images/bg_top.jpg';
import ProfileImage from '../images/icon_pug.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <header className='cover-image' style={{backgroundImage: `url(${BackImage})`}}>
      <div className="title-container">
        <div className="display-table">
          <div className="display-table-contents">
            <h1 className="title-text">Portfolio</h1>
            <div className="profile-image" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <dl className='profile-text'>
              <dt>名前：</dt>
              <dd>Koki</dd>
              <dt>略歴：</dt>
              <dd>大学卒業後、SierでRPA開発に約3年携わりました。フロントエンドの勉強中です</dd>
              <dt>その他：</dt>
              <dd>映画鑑賞と筋トレにハマってます！</dd>
            </dl>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://github.com/koo310310/">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};