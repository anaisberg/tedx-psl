/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";

import logo from "assets/img/TEDxPSL_noir_sans_fond.png";
import Button from "../CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <ListItem className={classes.inlineBlock}>
          <img src={logo} alt="..." width="100" />
              <div>Cet événement TEDx est organisé de façon indépendante sous license TED.</div>
              <a
                className={classes.block}
                target="_blank"
            >
              © TEDxPSL 2020
            </a>
          </ListItem>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.center}>
          <ListItem className={classes.inlineBlock}>
            <a href="/about"
               className={classes.block}>
              A propos
            </a>
            <a href="http://blog.creative-tim.com/?ref=mkr-footer"
               className={classes.block}
               target="_blank">
              Evenements
            </a>
            <a href="/partenaires"
               className={classes.block}>
              Partenaires
            </a>
          </ListItem>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.center}>
          <ListItem className={classes.inlineBlock}>
            <a href="https://www.facebook.com/TEDxPSL"
               className={classes.block}
               target="_blank">
              Facebook
            </a>
            <a className={classes.block}
               href="https://www.linkedin.com/in/anaïs-schlienger-06a117177/"
               target="_blank">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/tedxpsl"
               className={classes.block}
               target="_blank">
              Instagram
            </a>
          </ListItem>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
