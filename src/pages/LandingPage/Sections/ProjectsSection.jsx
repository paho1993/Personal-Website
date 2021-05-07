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
                description="Zajmuję się tworzeniem backendowej storny aplikacji internetowych. Pracuje głównie w języku Python, wykorzystując bibliotekę Django. W swojej dotychczasaowej pracy zajmowałem się między innymi: proponowaniem sposobów implementacji nowych rozwiązań oraz utrzymania i wsparcia dla wdrożonych projektów na róznych fazach ukończenia, dynamicznym generowaniem dokumentów czy crawlingiem sieci."
                image={pzd}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <ProjectArea
                title="Backend"
                description="Zajmuję się tworzeniem backendowej storny aplikacji internetowych. Pracuje głównie w języku Python, wykorzystując bibliotekę Django. W swojej dotychczasaowej pracy zajmowałem się między innymi: proponowaniem sposobów implementacji nowych rozwiązań oraz utrzymania i wsparcia dla wdrożonych projektów na róznych fazach ukończenia, dynamicznym generowaniem dokumentów czy crawlingiem sieci."
                image={mykuba}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
          {/* <Card>fasfasfasf</Card> */}
          {/* <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{ width: "20rem" }}>
                <img
                  style={{ height: "180px", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src={team2}
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>Card title</h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{ width: "20rem" }}>
                <img
                  style={{ height: "180px", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src={team2}
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>Card title</h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(ProjectsSection)
