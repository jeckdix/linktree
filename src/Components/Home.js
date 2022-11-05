import React from 'react'
import Profile from './Profile';
import Button from './Button/Button'
import Socials from "./Socials";
import Footer from "./Footer/Footer";
import { linkData } from "./linkData";
import { Main, LinkSection } from "./Sections";
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
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

export default Home