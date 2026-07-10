
// Base de datos de personajes Dragon Ball Z
export const characters = [
    {
        id: 1,
        name: "Son Goku",
        japanese: "孫悟空",
        race: "Saiyan",
        raceType: "saiyan",
        age: 45,
        powerLevel: "Infinito",
        powerLevelNumeric: 10000,
        description: "El protagonista principal, Saiyan criado como humano. Es el guerrero más fuerte de la Tierra.",
        image: "https://static.wikia.nocookie.net/dragonball/images/a/a7/Goku_%28DBSUPER%29_Full_Render_2.png",
        transformations: ["Super Saiyan", "Super Saiyan 2", "Super Saiyan 3", "Super Saiyan Blue", "Ultra Instinto"],
        attacks: ["Kamehameha", "Genkidama", "Kaio-ken", "Spirit Bomb"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 2,
        name: "Vegeta",
        japanese: "ベジータ",
        race: "Saiyan",
        raceType: "saiyan",
        age: 50,
        powerLevel: "Muy Alto",
        powerLevelNumeric: 8000,
        description: "Príncipe Saiyan, rival de Goku. Eventualmente se convierte en aliado.",
        image: "https://static.wikia.nocookie.net/dragonball/images/9/95/Vegeta_DBSuper.png",
        transformations: ["Super Saiyan", "Super Saiyan 2", "Super Saiyan Blue", "Ultra Ego"],
        attacks: ["Galick Gun", "Big Bang Attack", "Final Flash"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 3,
        name: "Piccolo",
        japanese: "ピッコロ",
        race: "Namekian",
        raceType: "namek",
        age: 900,
        powerLevel: "Alto",
        powerLevelNumeric: 5000,
        description: "Guerrero Namekiano que comienza como enemigo de Goku pero se convierte en su amigo.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/50/Piccolo_DBSuper_Render.png",
        transformations: ["Namekian Giant"],
        attacks: ["Makankosappo", "Hellzone Grenade", "Light Grenade"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 4,
        name: "Krillin",
        japanese: "クリリン",
        race: "Human",
        raceType: "human",
        age: 43,
        powerLevel: "Moderado",
        powerLevelNumeric: 2000,
        description: "Mejor amigo de Goku y compañero de entrenamiento. Humano pero increíblemente fuerte.",
        image: "https://static.wikia.nocookie.net/dragonball/images/9/9f/Krillin_DBSuper_Full.png",
        transformations: [],
        attacks: ["Kamehameha", "Destructo Disc", "Solar Flare"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 5,
        name: "Gohan",
        japanese: "孫悟飯",
        race: "Saiyan",
        raceType: "saiyan",
        age: 27,
        powerLevel: "Muy Alto",
        powerLevelNumeric: 7500,
        description: "Hijo de Goku. Guerrero excepcional con poder latente tremendo.",
        image: "https://static.wikia.nocookie.net/dragonball/images/0/0f/Gohan_Adult_Full.png",
        transformations: ["Super Saiyan", "Super Saiyan 2", "Super Saiyan Ultimate"],
        attacks: ["Masenko", "Kamehameha", "Father-Son Kamehameha"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 6,
        name: "Trunks",
        japanese: "トランクス",
        race: "Saiyan",
        raceType: "saiyan",
        age: 16,
        powerLevel: "Alto",
        powerLevelNumeric: 6500,
        description: "Hijo de Vegeta del futuro. Viaja al pasado para advertir sobre los Androides.",
        image: "https://static.wikia.nocookie.net/dragonball/images/8/8f/Trunks_DBSuper.png",
        transformations: ["Super Saiyan", "Super Saiyan Blue", "Ultra Ego"],
        attacks: ["Burning Attack", "Galick Cannon", "Final Flash"],
        favorites: false,
        saga: "Saga de los Androides"
    },
    {
        id: 7,
        name: "Frieza",
        japanese: "フリーザ",
        race: "Arcosian",
        raceType: "demon",
        age: 70,
        powerLevel: "Legendario",
        powerLevelNumeric: 9000,
        description: "Tirano galáctico y uno de los principales villanos de la serie.",
        image: "https://static.wikia.nocookie.net/dragonball/images/1/1d/Frieza_DBZ.png",
        transformations: ["Forma 2", "Forma 3", "Forma 4", "Golden Frieza"],
        attacks: ["Death Beam", "Destruction Disc", "Supernova"],
        favorites: false,
        saga: "Saga Namek"
    },
    {
        id: 8,
        name: "Cell",
        japanese: "セル",
        race: "Android",
        raceType: "android",
        age: 0,
        powerLevel: "Omnipotente",
        powerLevelNumeric: 9500,
        description: "Bioandroide creado por el Dr. Gero. Posee ADN de los guerreros más fuertes.",
        image: "https://static.wikia.nocookie.net/dragonball/images/3/3a/Cell_Perfect_Form.png",
        transformations: ["Forma Imperfecta", "Forma Semi-Perfecta", "Forma Perfecta"],
        attacks: ["Solar Flare", "Kamehameha", "Cell Juniors"],
        favorites: false,
        saga: "Saga de los Androides"
    },
    {
        id: 9,
        name: "Android 18",
        japanese: "人造人間18号",
        race: "Cyborg",
        raceType: "cyborg",
        age: 25,
        powerLevel: "Muy Alto",
        powerLevelNumeric: 5500,
        description: "Androide creada por el Dr. Gero. Se convierte en aliada y esposa de Krillin.",
        image: "https://static.wikia.nocookie.net/dragonball/images/b/ba/Android18_Power_Up.png",
        transformations: [],
        attacks: ["Destructo Disc", "Unlimited Potential"],
        favorites: false,
        saga: "Saga de los Androides"
    },
    {
        id: 10,
        name: "Majin Buu",
        japanese: "魔人ブウ",
        race: "Majin",
        raceType: "demon",
        age: 5000000,
        powerLevel: "Cataclísmico",
        powerLevelNumeric: 9800,
        description: "Demonio ancestral y uno de los enemigos finales. Posee poder destructor de mundos.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/5e/MajinBuu_Pure.png",
        transformations: ["Thin Buu", "Evil Buu", "Super Buu", "Kid Buu"],
        attacks: ["Candy Beam", "Destruction", "Vanishing Beam"],
        favorites: false,
        saga: "Saga de Majin Buu"
    },
    {
        id: 11,
        name: "Goten",
        japanese: "孫悟天",
        race: "Saiyan",
        raceType: "saiyan",
        age: 7,
        powerLevel: "Alto",
        powerLevelNumeric: 4500,
        description: "Hijo menor de Goku. Aprende a luchar a una edad muy joven.",
        image: "https://static.wikia.nocookie.net/dragonball/images/7/76/Goten_Base.png",
        transformations: ["Super Saiyan", "Super Saiyan Blue"],
        attacks: ["Kamehameha", "Galick Gun"],
        favorites: false,
        saga: "Saga de Majin Buu"
    },
    {
        id: 12,
        name: "Bulla (Bulma)",
        japanese: "ブルマ",
        race: "Human",
        raceType: "human",
        age: 45,
        powerLevel: "Bajo",
        powerLevelNumeric: 100,
        description: "Genio científico e inventor. Esposa de Vegeta y madre de Trunks.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/57/Bulma_DBSuper.png",
        transformations: [],
        attacks: ["Inventos tecnológicos"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 13,
        name: "Yamcha",
        japanese: "ヤムチャ",
        race: "Human",
        raceType: "human",
        age: 43,
        powerLevel: "Moderado",
        powerLevelNumeric: 1800,
        description: "Ladrón de caminos convertido en guerrero. Amigo y rival de Goku.",
        image: "https://static.wikia.nocookie.net/dragonball/images/3/3e/Yamcha_DBZ.png",
        transformations: [],
        attacks: ["Wolf Fang Fist", "Kamehameha"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 14,
        name: "Tenshinhan",
        japanese: "天津飯",
        race: "Human",
        raceType: "human",
        age: 43,
        powerLevel: "Alto",
        powerLevelNumeric: 3500,
        description: "Maestro de artes marciales con múltiples brazos. Muy dedicado al entrenamiento.",
        image: "https://static.wikia.nocookie.net/dragonball/images/1/1f/Tien_DBZ.png",
        transformations: [],
        attacks: ["Kikoho", "Shogi Cannon", "Multi-Form"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 15,
        name: "Master Roshi",
        japanese: "亀仙人",
        race: "Human",
        raceType: "human",
        age: 110,
        powerLevel: "Moderado",
        powerLevelNumeric: 2000,
        description: "Antiguo maestro de Goku. Sabio guerrero con gran experiencia.",
        image: "https://static.wikia.nocookie.net/dragonball/images/2/24/Master_Roshi_DBZ.png",
        transformations: ["Buff Form"],
        attacks: ["Kamehameha", "Turtle Shell Technique"],
        favorites: false,
        saga: "Saga del Saiyan"
    },
    {
        id: 16,
        name: "Broly",
        japanese: "ブロリー",
        race: "Saiyan",
        raceType: "saiyan",
        age: 35,
        powerLevel: "Legendario",
        powerLevelNumeric: 9200,
        description: "Saiyan legendario con poder ilimitado. Uno de los enemigos más poderosos.",
        image: "https://static.wikia.nocookie.net/dragonball/images/2/2c/Broly_DBSuper.png",
        transformations: ["Super Saiyan", "Legendary Super Saiyan", "Full Power"],
        attacks: ["Omega Blaster", "Gigantic Meteor", "Comet Strike"],
        favorites: false,
        saga: "Película"
    },
    {
        id: 17,
        name: "Android 17",
        japanese: "人造人間17号",
        race: "Cyborg",
        raceType: "cyborg",
        age: 25,
        powerLevel: "Muy Alto",
        powerLevelNumeric: 5400,
        description: "Gemelo de Android 18. Eventualmente se convierte en guardián de la naturaleza.",
        image: "https://static.wikia.nocookie.net/dragonball/images/9/9a/Android17_DBSuper.png",
        transformations: [],
        attacks: ["Android Bomb", "Energy Barrier"],
        favorites: false,
        saga: "Saga de los Androides"
    },
    {
        id: 18,
        name: "Videl",
        japanese: "ビーデル",
        race: "Human",
        raceType: "human",
        age: 18,
        powerLevel: "Moderado",
        powerLevelNumeric: 2500,
        description: "Hija del Mr. Satan. Prometida de Gohan y guerrera de artes marciales.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/53/Videl_DBZ.png",
        transformations: [],
        attacks: ["Punch", "Kick", "Masenko"],
        favorites: false,
        saga: "Saga de Majin Buu"
    },
    {
        id: 19,
        name: "Jiren",
        japanese: "ジレン",
        race: "Unknown",
        raceType: "god",
        age: 100,
        powerLevel: "Divino",
        powerLevelNumeric: 9700,
        description: "Luchador del Universo 11. Uno de los más fuertes en el Torneo del Poder.",
        image: "https://static.wikia.nocookie.net/dragonball/images/5/5b/Jiren_DBSuper.png",
        transformations: ["Calm State", "Full Power"],
        attacks: ["Power Impact", "Prison Sphere", "Hakai"],
        favorites: false,
        saga: "Torneo del Poder"
    },
    {
        id: 20,
        name: "Goku Black",
        japanese: "ゴクウブラック",
        race: "Saiyan",
        raceType: "saiyan",
        age: 0,
        powerLevel: "Divino",
        powerLevelNumeric: 9600,
        description: "Versión malvada de Goku del futuro alternativo. Dios del Mal.",
        image: "https://static.wikia.nocookie.net/dragonball/images/4/4e/Goku_Black_DBSuper.png",
        transformations: ["Super Saiyan Rose", "Fusion"],
        attacks: ["Black Kamehameha", "Scythe Attack"],
        favorites: false,
        saga: "Future Trunks Arc"
    }
];

// Función para obtener personajes por raza
export function getCharactersByRace(raceType) {
    return characters.filter(char => char.raceType === raceType);
}

// Función para buscar personajes
export function searchCharacters(query) {
    const lowerQuery = query.toLowerCase();
    return characters.filter(char =>
        char.name.toLowerCase().includes(lowerQuery) ||
        char.japanese.includes(query) ||
        char.description.toLowerCase().includes(lowerQuery) ||
        char.attacks.some(attack => attack.toLowerCase().includes(lowerQuery))
    );
}

// Función para obtener razas únicas
export function getRaces() {
    const races = new Set(characters.map(char => char.race));
    return Array.from(races);
}

// Función para ordenar personajes
export function sortCharacters(sortType) {
    const sorted = [...characters];
    switch(sortType) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'power':
            return sorted.sort((a, b) => b.powerLevelNumeric - a.powerLevelNumeric);
        case 'age':
            return sorted.sort((a, b) => a.age - b.age);
        default:
            return sorted;
    }
}
