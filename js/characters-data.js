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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23FF9500' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3ESon Goku%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%234B5FBF' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EVegeta%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%2322C55E' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EPiccolo%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%236366F1' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EKrillin%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23F59E0B' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EGohan%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%2310B981' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3ETrunks%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23D946EF' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EFrieza%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23EC4899' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3ECell%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23F87171' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EAndroid 18%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23A78BFA' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EMajin Buu%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23FBBF24' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EGoten%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%232563EB' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EBulma%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%238B5CF6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EYamcha%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%2306B6D4' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3ETenshinhan%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%2314B8A6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EMaster Roshi%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%2384CC16' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EBroly%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23EF4444' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EAndroid 17%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23F472B6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EVidel%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%238B5CF6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EJiren%3C/text%3E%3C/svg%3E",
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23171717' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EGoku Black%3C/text%3E%3C/svg%3E",
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