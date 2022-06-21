import AppHeader from "../appHeader/appHeader";
import CharInfo from "../charInfo/charInfo";
import CharList from "../charList/charList";
import RandomChar from "../randomChar/randomChar";
import vision from "../../resources/img/vision.png"
import AppBanner from "../appBanner/appBaner";
import ComicsList from "../comicsList/comicsList";
import SingleComic from "../singleComic/singleComic";


function App() {
  return (
    <div className="app">
      <AppHeader/>
      <AppBanner/>
      <main>
        <RandomChar/>
        <div className="char-content">
          <CharList/>
          <div>
            <CharInfo/>
          </div>
        </div>
        <ComicsList/>
        <SingleComic/>
        <img className="vision-bg-img" src={vision} alt="vision" />
     </main>
    </div>
  );
}

export default App;
