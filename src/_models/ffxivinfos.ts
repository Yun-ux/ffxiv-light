export interface FfxivInfos {
    attributes: Attributes;
    body: Body;
    bracelets: Bracelets;
    earrings: Earrings;
    feet: Feet;
    hands: Hands;
    head: Head;
    legs: Legs;
    mainHand: MainHand;
    necklace: Necklace;
    ring1: Ring1;
    ring2: Ring2;
    soulCrystal: SoulCrystal;
    waist: Waist;
    gear: Gear;
    gearSet: GearSet;
    grandCompagny: GrandCompany;
    character: Character;
    rootObject: RootObject;
}

export interface Attributes {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    19: number;
    20: number;
    21: number;
    22: number;
    24: number;
    27: number;
    33: number;
    34: number;
    44: number;
    45: number;
    46: number;
}

export interface Body {
    Creator?: any;
    Dye: number;
    ID: number;
    Materia: any[];
    Mirage: number;
}

export interface Bracelets {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Earrings {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage?: any;
}

export interface Feet {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Hands {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Head {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Legs {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface MainHand {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Necklace {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage: number;
}

export interface Ring1 {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage?: any;
}

export interface Ring2 {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage?: any;
}

export interface SoulCrystal {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: any[];
    Mirage?: any;
}

export interface Waist {
    Creator?: any;
    Dye?: any;
    ID: number;
    Materia: number[];
    Mirage?: any;
}

export interface Gear {
    Body: Body;
    Bracelets: Bracelets;
    Earrings: Earrings;
    Feet: Feet;
    Hands: Hands;
    Head: Head;
    Legs: Legs;
    MainHand: MainHand;
    Necklace: Necklace;
    Ring1: Ring1;
    Ring2: Ring2;
    SoulCrystal: SoulCrystal;
    Waist: Waist;
}

export interface GearSet {
    Attributes: Attributes;
    ClassID?: any;
    Gear: Gear;
    GearKey: string;
    JobID?: any;
    Level?: any;
}

export interface GrandCompany {
    NameID: number;
    RankID: number;
}

export interface Character {
    ActiveClassJob?: any;
    Avatar: string;
    Bio: string;
    ClassJobs: any[];
    DC: string;
    FreeCompanyId: string;
    GearSet: GearSet;
    Gender: number;
    GrandCompany: GrandCompany;
    GuardianDeity: number;
    ID: number;
    Lang?: any;
    Minions: any[];
    Mounts: any[];
    Name: string;
    Nameday: string;
    ParseDate: number;
    Portrait: string;
    PvPTeamId?: any;
    Race: number;
    Server: string;
    Title: number;
    TitleTop: boolean;
    Town: number;
    Tribe: number;
}

export interface RootObject {
    Achievements?: any;
    AchievementsPublic?: any;
    Character: Character;
    FreeCompany?: any;
    FreeCompanyMembers?: any;
    Friends?: any;
    FriendsPublic?: any;
    PvPTeam?: any;
}

