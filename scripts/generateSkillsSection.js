class CategorizedSkills {
    constructor() {
        this.frontEnd = [];
        this.backEnd = [];
        this.tools = [];
    }
}

class individualSkill {
    constructor(name, img, type) {
        this.name;
        this.img;
        this.type;
    }
}

function createAllSkills() {
    
    const skills = [
        {
            name: "TypeScript",
            imgSrc: "alec202.github.io/imgs/typescript_logo.png",
            type: "language"
        },
        {
            name: "JavaScript",
            imgSrc: "alec202.github.io/imgs/javascript_logo.png",
            type: "language"
        }
    ];

}

const categorizedSkills = new CategorizedSkills();
