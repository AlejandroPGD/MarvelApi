import { names } from "./characters";
const filmsObj = {
    captainAmericaTheFirstAvenger: {
        name: "Captain America: The First Avenger",
        characters: [
            names.CaptainAmerica,
            names.RedSkull,
            names.PeggyCarter,
            names.Bucky,
            names.DumDumDugan,
            names.GabeJones,
            names.NickFury
        ],
    },
    captainMarvel: {
        name: "Captain Marvel",
        characters: [
            names.CaptainMarvel,
            names.NickFury,
            names.Talos,
            names.Korath,
            names.SupremeIntelligence,
            names.PhilCoulson
        ],
    },
    ironMan: {
        name: "Iron Man",
        characters: [
            names.IronMan,
            names.WarMachine,
            names.ObadiahStane,
            names.PepperPotts
        ],
    },
    ironManII: {
        name: "Iron Man 2",
        characters: [
            names.IronMan,
            names.PepperPotts,
            names.WarMachine,
            names.BlackWidow,
            names.JustinHammer,
            names.NickFury
        ],
    },
    TheIncredibleHulk: {
        name: "The Incredible Hulk",
        characters: [
            names.Hulk,
            names.BettyRoss,
            names.Abomination,
            names.ThunderboltRoss
        ],
    },
    Thor: {
        name: "Thor",
        characters: [
            names.Thor,
            names.JaneFoster,
            names.Loki,
            names.Odin,
            names.Sif
        ],
    },
    avengers: {
        name: "Avengers",
        characters: [
            names.IronMan,
            names.CaptainAmerica,
            names.Hulk,
            names.Thor,
            names.BlackWidow,
            names.Hawkeye,
            names.Loki,
            names.PhilCoulson,
            names.MariaHill,
            names.NickFury

        ],
    },
    ironManIII: {
        name: "Iron Man 3",
        characters: [
            names.IronMan,
            names.PepperPotts,
            names.IronPatriot,
            names.HappyHogan
        ],
    },
    thorTheDarkWorld: {
        name: "Thor: The Dark World",
        characters: [
            names.Thor,
            names.JaneFoster,
            names.Loki,
            names.Odin,
            names.Sif
        ],
    },
    captainAmericaTheWinterSoldier: {
        name: "Captain America: The Winter Soldier",
        characters: [
            names.CaptainAmerica,
            names.BlackWidow,
            names.WinterSoldier,
            names.Falcon,
            names.MariaHill,
            names.SharonCarter,
            names.PeggyCarter,
            names.AlexanderPierce,
            names.NickFury
        ],
    },
    guardiansOfTheGalaxy: {
        name: "Guardians Of The Galaxy",
        characters: [
            names.StarLord,
            names.Gamora,
            names.Drax,
            names.Groot,
            names.RocketRaccoon,
            names.Yondu,
            names.Nebula,
            names.Korath,
            names.TheCollector
        ],
    },
    guardiansOfTheGalaxyVolII: {
        name: "Guardians Of The Galaxy Vol. II",
        characters: [
            names.StarLord,
            names.Gamora,
            names.Drax,
            names.Groot,
            names.RocketRaccoon,
            names.Yondu,
            names.Nebula,
            names.Mantis,
            names.Starhawk
        ],
    },
    avengersAgeOfUltron: {
        name: "Avengers: Age Of Ultron",
        characters: [
            names.IronMan,
            names.Thor,
            names.Hulk,
            names.CaptainAmerica,
            names.BlackWidow,
            names.Hawkeye,
            names.WarMachine,
            names.ScarletWitch,
            names.Vision,
            names.MariaHill,
            names.FalconSamWilson,
            names.PeggyCarter,
            names.Ultron,
            names.NickFury
        ],
    },
    antMan: {
        name: "Ant-Man",
        characters: [
            names.AntMan,
            names.Yellowjacket,
            names.JimPaxton,
            names.Falcon,
            names.HankPym
        ],
    },
    captainAmericaCivilWar: {
        name: "Captain America: Civil War",
        characters: [
            names.CaptainAmerica,
            names.IronMan,
            names.BlackWidow,
            names.WinterSoldier,
            names.Falcon,
            names.WarMachine,
            names.Hawkeye,
            names.BlackPanther,
            names.Vision,
            names.ScarletWitch,
            names.AntMan,
            names.SharonCarter,
            names.SpiderMan,
            names.ThaddeusRoss,
            names.BaronZemo
        ],
    },
    spiderManHomecoming: {
        name: "Spider-Man: Homecoming",
        characters: [
            names.SpiderMan,
            names.Vulture,
            names.HappyHogan,
            names.PepperPotts,
            names.Shocker,
            names.AnneMarieHoag,
            names.MayParker,
            names.IronMan
        ],
    },
    doctorStrange: {
        name: "Doctor Strange",
        characters: [
            names.StephenStrange,
            names.BaronMordo,
            names.Wong,
            names.AncientOne
        ],
    },
    blackWidow: {
        name: "Black Widow",
        characters: [
            names.BlackWidow,
            names.BlackWidowYelena,
            names.RedGuardian,
            names.Taskmaster,
            names.ThaddeusRoss

        ],
    },
    blackPanther: {
        name: "Black Panther",
        characters: [
            names.BlackPanther,
            names.Killmonger,
            names.Nakia,
            names.Okoye,
            names.BlackPanther
        ],
    },
    thorRagnarok: {
        name: "Thor: Ragnarok",
        characters: [
            names.Thor,
            names.Loki,
            names.Hela,
            names.Grandmaster,
            names.Executioner,
            names.Hulk,
            names.Odin
        ],
    },
    antManAndTheWasp: {
        name: "Ant-Man And The Wasp",
        characters: [
            names.AntMan,
            names.Yellowjacket,
            names.JimPaxton,
            names.JimmyWoo,
            names.Goliath,
            names.HankPym
        ],
    },
    avengersInfinityWar: {
        name: "Avengers: Infinity War",
        characters: [
            names.IronMan,
            names.Thor,
            names.Hulk,
            names.CaptainAmerica,
            names.BlackWidow,
            names.StephenStrange,
            names.WarMachine,
            names.SpiderMan,
            names.BlackPanther,
            names.Vision,
            names.ScarletWitch,
            names.Falcon,
            names.WinterSoldier,
            names.Loki,
            names.Wong,
            names.Mantis,
            names.Nebula,
            names.Drax,
            names.Gamora,
            names.Groot,
            names.RocketRaccoon,
            names.PepperPotts,
            names.TheCollector,
            names.Thanos,
            names.StarLord
        ],
    },
    avengersEndgame: {
        name: "Avengers: Endgame",
        characters: [
            names.IronMan,
            names.CaptainAmerica,
            names.Hulk,
            names.Thor,
            names.BlackWidow,
            names.Hawkeye,
            names.WarMachine,
            names.AntMan,
            names.CaptainMarvel,
            names.Nebula,
            names.Okoye,
            names.Wong,
            names.HappyHogan,
            names.RocketRaccoon,
            names.PepperPotts,
            names.Thanos,
            names.StephenStrange,
            names.BlackPanther,
            names.SpiderMan,
            names.Gamora,
            names.ScarletWitch,
            names.Falcon,
            names.WinterSoldier,
            names.Loki,
            names.Mantis,
            names.Drax,
            names.BlackPantherShuri,
            names.ThaddeusRoss,
            names.MariaHill,
            names.Groot,
            names.StarLord,
            names.NickFury,
            names.RedSkull
        ],
    },
    shangChiAndTheLegendOfTheTenRings: {
        name: "Shang-Chi and the Legend of the Ten Rings",
        characters: [

        ],
    },
    spiderManFarFromHome: {
        name: "Spider-Man: Far From Home",
        characters: [
            names.SpiderMan,
            names.NickFury,
            names.MariaHill,
            names.HappyHogan,
            names.MayParker,
            names.Mysterio
        ],
    },
    spiderManNoWayHome: {
        name: "Spider-Man: No Way Home",
        characters: [
            names.SpiderMan,
            names.StephenStrange,
            names.HappyHogan,
            names.GreenGoblin,
            names.DoctorOctopus,
            names.Wong,
            names.MayParker
        ],
    },
    eternals: {
        name: "Eternals",
        characters: [
            names.Sersi,
            names.Ikaris,
            names.Sprite,
            names.Makkari,
            names.Druig,
            names.Gilgamesh,
            names.BlackKnight,
            names.Ajak,
            names.Thena
        ],
    },
    doctorStrangeInTheMultiverseOfMadness: {
        name: "Doctor Strange in the Multiverse of Madness",
        characters: [
            names.StephenStrange,
            names.ScarletWitch,
            names.BaronMordo,
            names.Wong,
            names.MsAmerica
        ],
    },
}

let films = [];

for (const key in filmsObj) {
    films.push(filmsObj[key]);
}


export default films;

