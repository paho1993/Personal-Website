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
import SkillArea from "components/SkillArea/SkillArea.jsx"
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
              <SkillArea
                title="Backend"
                description="Zajmuję się tworzeniem backendowej storny aplikacji internetowych. Pracuje głównie w językach Python oraz JavaScript. W swojej dotychczasaowej pracy zajmowałem się między innymi: proponowaniem sposobów implementacji nowych rozwiązań oraz utrzymania i wsparcia dla wdrożonych projektów na róznych fazach ukończenia, dynamicznym generowaniem dokumentów czy crawlingiem sieci."
                icon={Chat}
                skills={[
                  "JavaScript",
                  "Python",
                  "Node.js",
                  "Django",
                  "REST API",
                  "Security",
                ]}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SkillArea
                title="Frontend"
                description="Tworzę i projektuję profesjonalne, nowoczesne i responsywne interfejsy użytkownika aplikacji webowych. Mam doświadczenie w pracy nad wieloma aplikacjami korporaycjnymi, głównie SPA tworzonych w technologii React. Posiadam również doświadczenie w tworzeniu stron z systemem CMS opartych o Wordpress'a oraz pozycjonowaniu (SEO) stron internetowych w wyszukiwarce Google."
                icon={Chat}
                skills={[
                  "React (Hooks)",
                  "TypeScript",
                  "CSS",
                  "HTML",
                  "SEO",
                  "Wordpress",
                ]}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SkillArea
                title="Bazy danych"
                description="W mojej pracy cały czas mam do czynienia z bazami danych. Zarówno relacyjnymi jak i nierelacyjnymi. Posiadam wiedzę na temat modelowania baz danych, zarządzania bazami i serverami SQL."
                icon={Chat}
                skills={[
                  "SQL Server",
                  "MongoDB",
                  "PostgreSQL",
                  "Modelowanie danych",
                ]}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SkillArea
                title="DevOps"
                description="Potrafię tworzyć rozwiązania CI/CD, zajmuję się tworzeniem pipelnów do deployment'u aplikacji. Posiadam również wiedzę na temat konfigurowania i zarządzania rozwiązaniami chmurowymi Microsoft Azure."
                icon={Chat}
                skills={["CI/CD", "Azure Cloud", "Octopus", "SonarQube"]}
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
