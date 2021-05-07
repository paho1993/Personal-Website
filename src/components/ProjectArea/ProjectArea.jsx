import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import Button from "components/CustomButtons/Button.jsx"
import projectStyle from "assets/jss/material-kit-react/components/projectStyle.jsx"

import pzd from "assets/img/pzd_card.png"

function ProjectArea({ ...props }) {
  const { classes, title, description, iconColor, vertical, image } = props
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  })
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  })
  return (
    <div className={classes.projectArea}>
      <Card>
        <img
          style={{ height: "180px", width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={image}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="primary">Do something</Button>
        </CardBody>
      </Card>
    </div>
  )
}

ProjectArea.defaultProps = {
  iconColor: "gray",
}

ProjectArea.propTypes = {
  classes: PropTypes.object.isRequired,
  // image: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
}

export default withStyles(projectStyle)(ProjectArea)
