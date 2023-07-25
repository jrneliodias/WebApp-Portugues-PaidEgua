const routeData = [
    {
        id: 1,
        route: "/",
        page: "Capa",
    },
    {
        id: 2,
        route: "/aboutapp",
        page: "Apresentação",
    },
    {
        id: 3,
        route: "/acai0introd",
    },
    {
        id: 4,
        route: "/acaiturma",
        page: "Personagens",
    },
    {
        id: 5,
        route: "/aboutapp2",
        page: "Sobre o App ",
    },
    {
        id: 6,
        route: "/aboutapp3",
        page: "Explicações dos Icons",
    },
    {
        id: 7,
        route: "/acai0introd2",
    },
    {
        id: 8,
        route: "/listapaidegua",
        page: "Lista Pai D'Égua",
    },
    {
        id: 9,
        route: "/acai0introd3",
    },
    {
        id: 10,
        route: "/objaprend",
        page: "Objetivos de Aprendizagem",
    },
    {
        id: 11,
        route: "/acai0introd4",
    },
    {
        id: 12,
        route: "/orientimport",
        page: "Orientações Importantes",
    },
    {
        id: 13,
        route: "/acai0tema1",
    },
    {
        id: 14,
        route: "/alfafonetico",
        page: "Tema I - Alfabeto Fonético",
    },
    {
        id: 15,
        route: "/acai0tema2",
    },
    {
        id: 16,
        route: "/alfafonetico2",
        page: "Alfabeto Fonético 2",
    },
    {
        id: 17,
        route: "/tabelaalfabeto",
        page: "Tabela do Alfabeto Fonético",
    },
    {
        id: 18,
        route: "/acai0tema12",
    },
    {
        id: 19,
        route: "/alfafonetico3",
        page: "Explicação Alfabeto fonético",
    },
    {
        id: 20,
        route: "/acai0tema13curious",
    },
    {
        id: 21,
        route: "/alfafoneticocuriosity",
        page: "Curiosidades do Dialeto Paraense",
    },
    {
        id: 22,
        route: "/acai0tema14curious",
    },
    {
        id: 23,
        route: "/alfafoneticocuriosity2",
        page: "Curiosidades do Dialeto Paraense 2",
    },
    {
        id: 24,
        route: "/acai0tema14dialeto",
    },
    {
        id: 25,
        route: "/actv1vowel",
        page: "Atividade 1 - Vogais",
    },
    {
        id: 26,
        route: "/actv2vowel",
        page: "Atividade 2 - Vogais",
    },
    {
        id: 27,
        route: "/actv3vowel",
        page: "Atividade 3 - Vogais",
    },
    {
        id: 9,
        route: "/acai0introd3",
    },
    {
        id: 10,
        route: "/objaprend",
    },
    {
        id: 11,
        route: "/acai0introd4",
    },
    {
        id: 12,
        route: "/orientimport",
    },
    {
        id: 13,
        route: "/acai0tema1",
    },
    {
        id: 14,
        route: "/alfafonetico",
    },
    {
        id: 15,
        route: "/acai0tema20",
    },
    {
        id: 16,
        route: "/acai0tema21",
    },
    {
        id: 17,
        route: "/saupapchibe",
    },
    {
        id: 18,
        route: "/cumpsaud",
    },
    {
        id: 19,
        route: "/pergunt",
    },
    {
        id: 20,
        route: "/respond",
    },
    {
        id: 21,
        route: "/desped",
    },
    {
        id: 22,
        route: "/acai0tema22",
    },
    {
        id: 23,
        route: "/cump",
    },
    {
        id: 24,
        route: "/iniconv",
    },
    {
        id: 25,
        route: "/respondiz",
    },
    {
        id: 26,
        route: "/despedfa",
    },
    {
        id: 27,
        route: "/acai0tema23",
    },
    {
        id: 28,
        route: "/chama",
    },
    {
        id: 29,
        route: "/interje",
    },
    {
        id: 30,
        route: "/acai0tema24",
    },
    {
        id: 31,
        route: "/atv1",
    },
    {
        id: 32,
        route: "/acai0tema25",
    },
    {
        id: 33,
        route: "/acai0tema26",
    },
    {
        id: 34,
        route: "/atv2",
    },
    {
        id: 35,
        route: "/acai0tema27",
    },
];


function renumberIDs(routeData) {

    routeData.forEach((item, index) => {
        item.id = index + 1;
    });
    return routeData;

}

const newRouteData = renumberIDs(routeData);

// Print all the results
console.log(newRouteData);