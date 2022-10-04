import Aos from "aos";
import "aos/dist/aos.css";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { projectsData } from "@/utils/projectData";

export const Home = (): JSX.Element => {
  const flickityOptions = {
    initialIndex: 2,
  };
  Aos.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text
              as="h1"
              type="heading1"
              color="grey5"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text
              type="body1"
              color="grey6"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Sempre possui afinidade e contato com a tecnologia, desde cedo
              explorando e conhecendo tudo que um computador pode oferecer e,
              com isso, veio a vontade de entrar cada vez mais fundo neste
              universo, consequentemente conheci a programação. A capacidade de
              se comunicar com o computador, conseguir criar seus próprios
              projetos e quem sabe construir algo que possa não só mudar o mundo
              da tecnologia, mas ele como um todo, tudo isso me fascinou e me
              prendeu.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Text
            style={{ textAlign: "center" }}
            as="h4"
            type="heading1"
            color="grey1"
          >
            Tecnologias que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Text
          style={{ textAlign: "center" }}
          as="h4"
          type="heading1"
          color="grey1"
        >
          Projetos
        </Text>
        <Container style={{ maxWidth: "none" }}>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaContent>
              <Flickity options={{ draggable: false, wrapAround: true }}>
                {projectsData.map((project) => {
                  return (
                    <a href={project.url} key={project.id} target="_blank">
                      <Text
                        style={{ textAlign: "center" }}
                        as="h4"
                        type="heading2"
                        color="grey2"
                      >
                        {project.name}
                      </Text>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={project.image}
                        alt={project.name}
                      />
                    </a>
                  );
                })}
              </Flickity>
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
