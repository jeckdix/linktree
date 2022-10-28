import "./App.css";
import Profile from "./Components/Profile";
import Button from "./Components/Button/Button";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer/Footer";
import { linkData } from "./linkData";
import { Main, LinkSection } from "./Components/Sections";





function App() {
  return (
    <div className="App">
      <Main>
        <Profile />
        <LinkSection>
          {linkData.map((link) => {
            return (
              <Button
                title={link.title}
                link={link.link}
                id={link.id}
                key={link.id}
              />
            );
          })}
        </LinkSection>
      </Main>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
