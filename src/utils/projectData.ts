import {
  kenzieHubImage,
  condoManageImage,
  polidaImage,
  nuKenzieImage,
} from "../assets/projects";

interface IPropsProjectData {
  id: number;
  name: string;
  url: string;
  image: string;
}

export const projectsData: IPropsProjectData[] = [
  {
    id: 1,
    name: "Kenzie Hub",
    url: "https://github.com/omarcolombari/kenzie-hub",
    image: kenzieHubImage,
  },
  {
    id: 2,
    name: "CondoManage",
    url: "https://github.com/omarcolombari/condomanage",
    image: condoManageImage,
  },
  {
    id: 3,
    name: "NuKenzie",
    url: "https://github.com/omarcolombari/nu-kenzie",
    image: nuKenzieImage,
  } /*,
  {
    id: 4,
    name: "Api Polida Eletric Station",
    url: "https://github.com/omarcolombari/api-polida-eletric-station",
    image: polidaImage,
  },
  /*{
    id: 5,
    name: "NLW eSports",
    url: "",
    image: "",
  },
  {
    id: 6,
    name: "NLW eSports Api",
    url: "",
    image: "",
  },
  {
    id: 7,
    name: "NLW eSports App Mobile",
    url: "",
    image: "",
  },*/,
];
