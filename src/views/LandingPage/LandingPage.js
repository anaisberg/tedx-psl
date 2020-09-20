import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLeftLinks from "components/Header/HeaderLeftLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Partenaires from "./Sections/PartenairesPreview.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import landing from "assets/img/profile-bg.jpg";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Presentation from "views/LandingPage/Sections/Presentation.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Accueil"
        leftLinks={<HeaderLeftLinks />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Button
                  style={{ marginTop: '350px' }}
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=jHKWpPcd6rE&list=PL1COokRtyptky4Q7TWOnR59dCe&ab_channel=LoQiiHD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <div className={classes.section}>
                <h2 className={classes.title} >Présentation</h2>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8} lg={6}>
                    <img src={landing} alt="..." width="550"
                        className={ classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid} />
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={6}>
                    <Presentation
                        color="red"
                        horizontal={{
                            tabsGrid: { xs: 12, sm: 4, md: 4 },
                            contentGrid: { xs: 12, sm: 8, md: 8 }
                        }}
                        tabs={[
                            {
                                tabButton: "Thème",
                                tabIcon: Dashboard,
                                tabContent: (
                                    <span>
                        <p>
                          Le thème de cette conférence est l'eau. TEDx PSL
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                                )
                            },
                            {
                                tabButton: "Lieu",
                                tabIcon: Schedule,
                                tabContent: (
                                    <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                                )
                            }
                        ]}
                    />
                    <div className={classes.container}>
                        <GridContainer style={{ display: 'flex', align: 'center', justifyContent: 'center' }}>
                            <Button
                              color="danger"
                              size="md"
                              href="/speakers"
                              rel="noopener noreferrer"
                            >
                              Billetterie
                            </Button>
                        </GridContainer>
                    </div>
                </GridItem>
            </GridContainer>
            <TeamSection />
          <Partenaires />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
