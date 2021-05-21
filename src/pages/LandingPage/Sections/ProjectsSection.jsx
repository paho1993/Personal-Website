import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import ProjectArea from "components/ProjectArea/ProjectArea.jsx"
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"
import Chat from "@material-ui/icons/Chat"
import pzd from "assets/img/pzd_card.png"
import mykuba from "assets/img/mykuba_card.jpg"
import team2 from "assets/img/faces/christian.jpg"
import team3 from "assets/img/faces/kendall.jpg"

class ProjectsSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Projekty</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <ProjectArea
                title="Backend"
                description="Klasyczna witryna statyczna włoskiej pizzerii zawierające menu, wskazówki dojazdu, zdjęcia lokalu oraz sekcje kontatktową. Wykonana w technologii GatsbyJs"
                image={pzd}
                buttonMessage="Zobacz stronę"
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <ProjectArea
                title="Backend"
                description="Strona z modułem CMS wykonana w Wordpress'ie. Opisuje ofertę zorganizowanej podrózy na Kubę prowadzoną przez dwoje doświadczonych podróżników."
                image={mykuba}
                buttonMessage="Zobacz stronę"
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(ProjectsSection)
