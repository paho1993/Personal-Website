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
import Carousel from "components/Carousel/Carousel.jsx"

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"

import team1 from "assets/img/faces/avatar.jpg"
import team2 from "assets/img/faces/christian.jpg"
import team3 from "assets/img/faces/kendall.jpg"

class ThreeDSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Grafika 3D</h2>
        <h5 className={classes.description}>
          W wolnym czasie tworzę grafikę komputerową. Lubię tworzyć ciekawe
          kompozycje i uczyć się nowych technik. Jest to bardzo kreatywne i
          rozwijające zajęcie. Swoje projekty tworzę w programie Blender. Moje
          projekty są dostępne na na{" "}
          <a href="https://www.cgtrader.com/paho1993">moim profilu CGTrader</a>.
          Kilka przykładów mojej twórczości można zobaczyć poniżej :
        </h5>
        <div>
          <Carousel />
          {/* <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Gigi Hadid
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaFacebook />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Christian Louboutin
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaLinkedin />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Kendall Jenner
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaFacebook />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(ThreeDSection)
