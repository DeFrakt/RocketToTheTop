import { images } from "../views/ImagePath";

export default function (currentCard) {
    switch(currentCard)
            {
                case "TwoClubs" : return images.TwoClubs;
                case "TwoSpades" : return images.TwoSpades;
                case "TwoDiamonds" : return images.TwoDiamonds;
                case "TwoHearts" : return images.TwoHearts;
                case "ThreeClubs" : return images.ThreeClubs;
                case "ThreeSpades" : return images.ThreeSpades;
                case "ThreeDiamonds" : return images.ThreeDiamonds;
                case "ThreeHearts" : return images.ThreeHearts;
                case "FourClubs" : return images.FourClubs;
                case "FourSpades" : return images.FourSpades;
                case "FourDiamonds" : return images.FourDiamonds;
                case "FourHearts" : return images.FourHearts;
                case "FiveClubs" : return images.FiveClubs;
                case "FiveSpades" : return images.FiveSpades;
                case "FiveDiamonds" : return images.FiveDiamonds;
                case "FiveHearts" : return images.FiveHearts;
                case "SixClubs" : return images.SixClubs;
                case "SixSpades" : return images.SixSpades;
                case "SixDiamonds" : return images.SixDiamonds;
                case "SixHearts" : return images.SixHearts;
                case "SevenClubs" : return images.SevenClubs;
                case "SevenSpades" : return images.SevenSpades;
                case "SevenDiamonds" : return images.SevenDiamonds;
                case "SevenHearts" : return images.SevenHearts;
                case "EightClubs" : return images.EightClubs;
                case "EightSpades" : return images.EightSpades;
                case "EightDiamonds" : return images.EightDiamonds;
                case "EightHearts" : return images.EightHearts;
                case "NineClubs" : return images.NineClubs;
                case "NineSpades" : return images.NineSpades;
                case "NineDiamonds" : return images.NineDiamonds;
                case "NineHearts" : return images.NineHearts;
                case "TenClubs" : return images.TenClubs;
                case "TenSpades" : return images.TenSpades;
                case "TenDiamonds" : return images.TenDiamonds;
                case "TenHearts" : return images.TenHearts;
                case "JackClubs" : return images.JackClubs;
                case "JackSpades" : return images.JackSpades;
                case "JackDiamonds" : return images.JackDiamonds;
                case "JackHearts" : return images.JackHearts;
                case "QueenClubs" : return images.QueenClubs;
                case "QueenSpades" : return images.QueenSpades;
                case "QueenDiamonds" : return images.QueenDiamonds;
                case "QueenHearts" : return images.QueenHearts;
                case "KingClubs" : return images.KingClubs;
                case "KingSpades" : return images.KingSpades;
                case "KingDiamonds" : return images.KingDiamonds;
                case "KingHearts" : return images.KingHearts;
                case "AceClubs" : return images.AceClubs;
                case "AceSpades" : return images.AceSpades;
                case "AceDiamonds" : return images.AceDiamonds;
                case "AceHearts" : return images.AceHearts;
                default: console.log("Does not match Card"); break;
            }
}
