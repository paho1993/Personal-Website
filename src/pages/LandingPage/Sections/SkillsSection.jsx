import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
// @material-ui/icons
import Chat from "@material-ui/icons/Chat"
import VerifiedUser from "@material-ui/icons/VerifiedUser"
import Fingerprint from "@material-ui/icons/Fingerprint"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"
import SKillArea from "components/SKillArea/SkillArea.jsx"
import team1 from "assets/img/faces/avatar.jpg"
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class SkillsSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>O mnie</h2>
            <h5 className={classes.description}>
              Jestem absolwentem studiów technicznych, chcącym kontynuować swój
              rozwój w interesujących obszarach Informatyki. Obecnie od ponad
              roku zajmuję się programowaniem aplikacji internetowych. Jestem
              osobą ambitną, lubiącą pracować w zespole, poszukującą nowych
              wyzwań i zadań. Szybko się uczę i zawsze staram się podchodzić do
              zadań z maksymalnym zaangażowaniem. Interesuję się nowymi
              technologiami, podróżowaniem (podczas studiów wziąłem udział w
              programach Work and Travel USA oraz Erasmus + w Portugalii),
              poznawaniem nowych kultur i ludzi, rozwojem osobistym oraz muzyką.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <h2 className={classes.title}>Czym się zajmuję</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <SKillArea
                title="Backend"
                description="Zajmuję się tworzeniem backendowej storny aplikacji internetowych. Pracuje głównie w języku Python, wykorzystując bibliotekę Django. W swojej dotychczasaowej pracy zajmowałem się między innymi: proponowaniem sposobów implementacji nowych rozwiązań oraz utrzymania i wsparcia dla wdrożonych projektów na róznych fazach ukończenia, dynamicznym generowaniem dokumentów czy crawlingiem sieci."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SKillArea
                title="Frontend"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SKillArea
                title="Bazy danych"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SKillArea
                title="DevOps"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
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

export default withStyles(productStyle)(SkillsSection)
