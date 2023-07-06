interface RouteData {
  id: number;
  route: string;
}

export const routeData: RouteData[] = [
  { id: 1, route: "/" },
  { id: 2, route: "/aboutapp" },
  { id: 3, route: "/acai0introd" },
  { id: 4, route: "/acaiturma" },
  { id: 5, route: "/aboutapp2" },
  { id: 6, route: "/aboutapp3" },
  { id: 7, route: "/acai0introd2" },
  { id: 8, route: "/listapaidegua" },
  { id: 9, route: "/acai0introd3" },
  { id: 10, route: "/objaprend" },
  { id: 11, route: "/acai0introd4" },
  { id: 12, route: "/orientimport" },
  { id: 13, route: "/acai0tema1" },
  { id: 14, route: "/alfafonetico" },
  { id: 15, route: "/acai0tema2" },
  { id: 16, route: "/alfafonetico2" },
  { id: 17, route: "/tabelaalfabeto" },
  { id: 18, route: "/acai0tema12" },
  { id: 19, route: "/alfafonetico3" },
];

export const menuRoute = [
  {
    page: "Capa",
    route: "/",
  },
  {
    page: "Sobre o App",
    route: "/aboutapp",
  },
  {
    page: "Personagens",
    route: "/acaiturma",
  },
  {
    page: "Sobre o App 2",
    route: "/aboutapp2",
  },
  {
    page: "Sobre o App 3",
    route: "/aboutapp3",
  },
  {
    page: "Lista Pai D'Égua",
    route: "/listapaidegua",
  },
  {
    page: "Objetivos de Aprendizagem",
    route: "/objaprend",
  },
  {
    page: "Orientações Importantes",
    route: "/orientimport",
  },
  {
    page: "Tema I - Alfabeto Fonético",
    route: "/alfafonetico",
  },
  {
    page: "Alfabeto Fonético 2",
    route: "/alfafonetico2",
  },
  {
    page: "Tabela do Alfabeto Fonético",
    route: "/tabelaalfabeto",
  },
  {
    page: "Explicação Alfabeto fonético",
    route: "/alfafonetico3",
  },
];
