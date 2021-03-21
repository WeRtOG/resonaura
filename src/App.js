import BWLogo from './assets/BWLogo.svg';

import Icon_YouTube from './assets/icons/01-YouTube.svg';
import Icon_Spotify from './assets/icons/02-Spotify.svg';
import Icon_VKMusic from './assets/icons/03-VKMusic.svg';
import Icon_ITunes from './assets/icons/04-ITunes.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <section className="TitleBlock">
          <img src={BWLogo} alt="иероглиф" className="Logo" />
          <h1>Выбери музыкальный сервис</h1>
          <h2>на свой вкус</h2>
        </section>
        <section className="Social">
          <a title="YouTube Music" className="SocialNetwork" href="https://music.youtube.com/playlist?list=OLAK5uy_mA4XrnUU_QEPuOBD3dtOILvTzCkBSoZiA" rel="noreferrer" target="_blank">
            <img src={Icon_YouTube} alt="YouTube Music"></img>
          </a>
          <a title="Spotify" className="SocialNetwork" href="https://open.spotify.com/album/6mc4Ottuciw6nNn1Q0QxAs?si=SIbxRRg6Q_WmJilpi4sHyQ" rel="noreferrer" target="_blank">
            <img src={Icon_Spotify} alt="Spotify"></img>
          </a>
          <a title="VK Music" className="SocialNetwork" href="https://vk.com/music/album/-2000589903_10589903_268fbd2e79456ac1ee" rel="noreferrer" target="_blank">
            <img src={Icon_VKMusic} alt="VK Music"></img>
          </a>
          <a title="Apple Music" className="SocialNetwork" href="https://music.apple.com/ua/album/%D0%BE%D0%B4%D0%BD%D0%B0-ep/1556214674" rel="noreferrer" target="_blank">
            <img src={Icon_ITunes} alt="Apple Music"></img>
          </a>
        </section>
      </section>
    </div>
  );
}

export default App;