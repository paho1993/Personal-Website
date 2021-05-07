import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import skillStyle from "assets/jss/material-kit-react/components/skillStyle.jsx"

function SkillArea({ ...props }) {
  const { classes, title, description, iconColor, vertical } = props
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
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
        <ul>
          <li>Królestwa Północy</li>
          <li>Scoia'tael</li>
          <li>Cesarstwo Nilfgaardu</li>
          <li>Skellige</li>
        </ul>
      </div>
    </div>
  )
}

SkillArea.defaultProps = {
  iconColor: "gray",
}

SkillArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
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

export default withStyles(skillStyle)(SkillArea)
