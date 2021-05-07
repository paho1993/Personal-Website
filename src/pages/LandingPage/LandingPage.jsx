import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaPlay } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

//Images
import BgImage from "assets/img/landing-bg.jpg"

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx"
import SkillsSection from "./Sections/SkillsSection.jsx"
import ThreeDSection from "./Sections/ThreeDSection"
import ProjectsSection from "./Sections/ProjectsSection"
import WorkSection from "./Sections/WorkSection.jsx"

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, texts, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Maciej Pacholak"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={BgImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Fullstack Developer</h1>
                  <h3 className={classes.subtitle}>Do zrobienia!</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SkillsSection />
            <ProjectsSection />
            <ThreeDSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
