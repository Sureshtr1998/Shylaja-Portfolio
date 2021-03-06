import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import WelcomeImg from "./WelcomeImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <div className="greeting-gif">
                <h1 className="greeting-sub " style={{ color: theme.grayText }}>
                  I'm{" "}
                  <mark data-entity="">
                    {" "}
                    <span style={{ color: theme.text }}>{greeting.sub} </span>
                  </mark>
                </h1>
                <div className="welcomeGreeting">
                  <WelcomeImg />
                </div>
              </div>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Software Test Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Automation QA")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Functional Tester")
                      .pauseFor(200)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A Passionate <u> Quality Analyst </u> With Over 9 Years Of
                  Experience. Experienced With All Stages Of Testing Cycle In
                  Agile methodology.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={require(`../../assets/certificates/Suresh_CV.pdf`)}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
