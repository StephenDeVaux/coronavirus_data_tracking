const fs = require('fs')
var parse = require("csv-parse");

var csvFile = "coronadata.csv";
var newcsvFile = "newcoronadata.csv";
var newcsvFile2 = "newFrom100coronadata.csv";
const numberofcasesLimit = 4; 

///WILL NEED TO UPDATE THIS EVERY TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class CountryCaseRow {
    constructor(Province, Country, Lat, Long,
        Ja22, Ja23, Ja24, Ja25, Ja26, Ja27, Ja28, Ja29, Ja30, Ja31,
        Fe01, Fe02, Fe03, Fe04, Fe05, Fe06, Fe07, Fe08, Fe09, Fe10, Fe11, Fe12, Fe13, Fe14, Fe15, Fe16, Fe17, Fe18, Fe19, Fe20,
        Fe21, Fe22, Fe23, Fe24, Fe25, Fe26, Fe27, Fe28, Fe29,
        Ma01, Ma02, Ma03, Ma04, Ma05, Ma06, Ma07, Ma08, Ma09, Ma10, Ma11, Ma12, Ma13, Ma14, Ma15, Ma16, Ma17, Ma18, Ma19, Ma20,
        Ma21, Ma22, Ma23, Ma24, Ma25, Ma26, Ma27, Ma28, Ma29, Ma30, Ma31
        ) {
        this.province = Province;
        this.country = Country;
        this.lat = Lat;
        this.long = Long;
        this.ja22 = Ja22;
        this.ja23 = Ja23;
        this.ja24 = Ja24;
        this.ja25 = Ja25;
        this.ja26 = Ja26;
        this.ja27 = Ja27;
        this.ja28 = Ja28;
        this.ja29 = Ja29;
        this.ja30 = Ja30;
        this.ja31 = Ja31;
        this.fe01 = Fe01;
        this.fe02 = Fe02;
        this.fe03 = Fe03;
        this.fe04 = Fe04;
        this.fe05 = Fe05;
        this.fe06 = Fe06;
        this.fe07 = Fe07;
        this.fe08 = Fe08;
        this.fe09 = Fe09;
        this.fe10 = Fe10;
        this.fe11 = Fe11;
        this.fe12 = Fe12;
        this.fe13 = Fe13;
        this.fe14 = Fe14;
        this.fe15 = Fe15;
        this.fe16 = Fe16;
        this.fe17 = Fe17;
        this.fe18 = Fe18;
        this.fe19 = Fe19;
        this.fe20 = Fe20;
        this.fe21 = Fe21;
        this.fe22 = Fe22;
        this.fe23 = Fe23;
        this.fe24 = Fe24;
        this.fe25 = Fe25;
        this.fe26 = Fe26;
        this.fe27 = Fe27;
        this.fe28 = Fe28;
        this.fe29 = Fe29;
        this.ma01 = Ma01;
        this.ma02 = Ma02;
        this.ma03 = Ma03;
        this.ma04 = Ma04;
        this.ma05 = Ma05;
        this.ma06 = Ma06;
        this.ma07 = Ma07;
        this.ma08 = Ma08;
        this.ma09 = Ma09;
        this.ma10 = Ma10;
        this.ma11 = Ma11;
        this.ma12 = Ma12;
        this.ma13 = Ma13;
        this.ma14 = Ma14;
        this.ma15 = Ma15;
        this.ma16 = Ma16;
        this.ma17 = Ma17;
        this.ma18 = Ma18;
        this.ma19 = Ma19;
        this.ma20 = Ma20;
        this.ma21 = Ma21;
        this.ma22 = Ma22;
        this.ma23 = Ma23;
        this.ma24 = Ma24;
        this.ma25 = Ma25;
        this.ma26 = Ma26;
        this.ma27 = Ma27;
        this.ma28 = Ma28;
        this.ma29 = Ma29;
        this.ma30 = Ma30;
        this.ma31 = Ma31;
    }
}

//Will need to update all of these!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var Australia = new CountryCaseRow('', 'Australia',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var Canada = new CountryCaseRow('', 'Canada',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var China = new CountryCaseRow('', 'China',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var HongKong = new CountryCaseRow('', 'Hong Kong',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var Denmark = new CountryCaseRow('', 'Denmark',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var France = new CountryCaseRow('', 'France',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var UnitedKingdom = new CountryCaseRow('', 'United Kingdom',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
var US = new CountryCaseRow('', 'US',
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)


class CountryCasesbyDay {
    constructor(Country, Days, Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9, Day10,
        Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20,
        Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30,
        Day31, Day32, Day33, Day34, Day35, Day36, Day37, Day38, Day39, Day40,
        Day41, Day42, Day43, Day44, Day45, Day46, Day47, Day48, Day49, Day50,
        Day51, Day52, Day53, Day54, Day55, Day56, Day57, Day58, Day59, Day60,
        Day61, Day62, Day63, Day64, Day65, Day66, Day67, Day68, Day69, Day70,
        Day71, Day72, Day73, Day74, Day75, Day76, Day77, Day78, Day79, Day80,
        Day81, Day82, Day83, Day84, Day85, Day86, Day87, Day88, Day89, Day90,
        Day91, Day92, Day93, Day94, Day95, Day96, Day97, Day98, Day99, Day100
    ) {
        this.country = Country;
        this.days = Days;
        this.day1 = Day1;
        this.day2 = Day2;
        this.day3 = Day3;
        this.day4 = Day4;
        this.day5 = Day5;
        this.day6 = Day6;
        this.day7 = Day7;
        this.day8 = Day8;
        this.day9 = Day9;
        this.day10 = Day10;
        this.day11 = Day11;
        this.day12 = Day12;
        this.day13 = Day13;
        this.day14 = Day14;
        this.day15 = Day15;
        this.day16 = Day16;
        this.day17 = Day17;
        this.day18 = Day18;
        this.day19 = Day19;
        this.day20 = Day20;
        this.day21 = Day21;
        this.day22 = Day22;
        this.day23 = Day23;
        this.day24 = Day24;
        this.day25 = Day25;
        this.day26 = Day26;
        this.day27 = Day27;
        this.day28 = Day28;
        this.day29 = Day29;
        this.day30 = Day30;
        this.day31 = Day31;
        this.day32 = Day32;
        this.day33 = Day33;
        this.day34 = Day34;
        this.day35 = Day35;
        this.day36 = Day36;
        this.day37 = Day37;
        this.day38 = Day38;
        this.day39 = Day39;
        this.day40 = Day40;
        this.day41 = Day41;
        this.day42 = Day42;
        this.day43 = Day43;
        this.day44 = Day44;
        this.day45 = Day45;
        this.day46 = Day46;
        this.day47 = Day47;
        this.day48 = Day48;
        this.day49 = Day49;
        this.day50 = Day50;
        this.day51 = Day51;
        this.day52 = Day52;
        this.day53 = Day53;
        this.day54 = Day54;
        this.day55 = Day55;
        this.day56 = Day56;
        this.day57 = Day57;
        this.day58 = Day58;
        this.day59 = Day59;
        this.day60 = Day60;
        this.day61 = Day61;
        this.day62 = Day62;
        this.day63 = Day63;
        this.day64 = Day64;
        this.day65 = Day65;
        this.day66 = Day66;
        this.day67 = Day67;
        this.day68 = Day68;
        this.day69 = Day69;
        this.day70 = Day70;
        this.day71 = Day71;
        this.day72 = Day72;
        this.day73 = Day73;
        this.day74 = Day74;
        this.day75 = Day75;
        this.day76 = Day76;
        this.day77 = Day77;
        this.day78 = Day78;
        this.day79 = Day79;
        this.day80 = Day80;
        this.day81 = Day81;
        this.day82 = Day82;
        this.day83 = Day83;
        this.day84 = Day84;
        this.day85 = Day85;
        this.day86 = Day86;
        this.day87 = Day87;
        this.day88 = Day88;
        this.day89 = Day89;
        this.day90 = Day90;
        this.day91 = Day91;
        this.day92 = Day92;
        this.day93 = Day93;
        this.day94 = Day94;
        this.day95 = Day95;
        this.day96 = Day96;
        this.day97 = Day97;
        this.day98 = Day98;
        this.day99 = Day99;
        this.day100 = Day100;
    }
}

const removingDaysBelow100 = a => {
    var listBelow100 = []

    a.forEach(function (value) {
        var country = new CountryCasesbyDay(value.country)
        var day = 1

        const saveToList = (b) => {
            if (day == 1) {
                country.day1 = b
            }
            if (day == 2) {
                country.day2 = b
            }
            if (day == 3) {
                country.day3 = b
            }
            if (day == 4) {
                country.day4 = b
            }
            if (day == 5) {
                country.day5 = b
            }
            if (day == 6) {
                country.day6 = b
            }
            if (day == 7) {
                country.day7 = b
            }
            if (day == 8) {
                country.day8 = b
            }
            if (day == 9) {
                country.day9 = b
            }
            if (day == 10) {
                country.day10 = b
            }
            if (day == 11) {
                country.day11 = b
            }
            if (day == 12) {
                country.day12 = b
            }
            if (day == 13) {
                country.day13 = b
            }
            if (day == 14) {
                country.day14 = b
            }
            if (day == 15) {
                country.day15 = b
            }
            if (day == 16) {
                country.day16 = b
            }
            if (day == 17) {
                country.day17 = b
            }
            if (day == 18) {
                country.day18 = b
            }
            if (day == 19) {
                country.day19 = b
            }
            if (day == 20) {
                country.day20 = b
            }
            if (day == 21) {
                country.day21 = b
            }
            if (day == 22) {
                country.day22 = b
            }
            if (day == 23) {
                country.day23 = b
            }
            if (day == 24) {
                country.day24 = b
            }
            if (day == 25) {
                country.day25 = b
            }
            if (day == 26) {
                country.day26 = b
            }
            if (day == 27) {
                country.day27 = b
            }
            if (day == 28) {
                country.day28 = b
            }
            if (day == 29) {
                country.day29 = b
            }
            if (day == 30) {
                country.day30 = b
            }
            if (day == 31) {
                country.day31 = b
            }
            if (day == 32) {
                country.day32 = b
            }
            if (day == 33) {
                country.day33 = b
            }
            if (day == 34) {
                country.day34 = b
            }
            if (day == 35) {
                country.day35 = b
            }
            if (day == 36) {
                country.day36 = b
            }
            if (day == 37) {
                country.day37 = b
            }
            if (day == 38) {
                country.day38 = b
            }
            if (day == 39) {
                country.day39 = b
            }
            if (day == 40) {
                country.day40 = b
            }
            if (day == 41) {
                country.day41 = b
            }
            if (day == 42) {
                country.day42 = b
            }
            if (day == 43) {
                country.day43 = b
            }
            if (day == 44) {
                country.day44 = b
            }
            if (day == 45) {
                country.day45 = b
            }
            if (day == 46) {
                country.day46 = b
            }
            if (day == 47) {
                country.day47 = b
            }
            if (day == 48) {
                country.day48 = b
            }
            if (day == 49) {
                country.day49 = b
            }
            if (day == 50) {
                country.day50 = b
            }
            if (day == 51) {
                country.day51 = b
            }
            if (day == 52) {
                country.day52 = b
            }
            if (day == 53) {
                country.day53 = b
            }
            if (day == 54) {
                country.day54 = b
            }
            if (day == 55) {
                country.day55 = b
            }
            if (day == 56) {
                country.day56 = b
            }
            if (day == 57) {
                country.day57 = b
            }
            if (day == 58) {
                country.day58 = b
            }
            if (day == 59) {
                country.day59 = b
            }
            if (day == 60) {
                country.day60 = b
            }
            if (day == 61) {
                country.day61 = b
            }
            if (day == 62) {
                country.day62 = b
            }
            if (day == 63) {
                country.day63 = b
            }
            if (day == 64) {
                country.day64 = b
            }
            if (day == 65) {
                country.day65 = b
            }
            if (day == 66) {
                country.day66 = b
            }
            if (day == 67) {
                country.day67 = b
            }
            if (day == 68) {
                country.day68 = b
            }
            if (day == 69) {
                country.day69 = b
            }
            if (day == 70) {
                country.day70 = b
            }
            if (day == 71) {
                country.day71 = b
            }
            if (day == 72) {
                country.day72 = b
            }
            if (day == 73) {
                country.day73 = b
            }
            if (day == 74) {
                country.day74 = b
            }
            if (day == 75) {
                country.day75 = b
            }
            if (day == 76) {
                country.day76 = b
            }
            if (day == 77) {
                country.day77 = b
            }
            if (day == 78) {
                country.day78 = b
            }
            if (day == 79) {
                country.day79 = b
            }
            if (day == 80) {
                country.day80 = b
            }
            if (day == 81) {
                country.day81 = b
            }
            if (day == 82) {
                country.day82 = b
            }
            if (day == 83) {
                country.day83 = b
            }
            if (day == 84) {
                country.day84 = b
            }
            if (day == 85) {
                country.day85 = b
            }
            if (day == 86) {
                country.day86 = b
            }
            if (day == 87) {
                country.day87 = b
            }
            if (day == 88) {
                country.day88 = b
            }
            if (day == 89) {
                country.day89 = b
            }
            if (day == 90) {
                country.day90 = b
            }
            if (day == 91) {
                country.day91 = b
            }
            if (day == 92) {
                country.day92 = b
            }
            if (day == 93) {
                country.day93 = b
            }
            if (day == 94) {
                country.day94 = b
            }
            if (day == 95) {
                country.day95 = b
            }
            if (day == 96) {
                country.day96 = b
            }
            if (day == 97) {
                country.day97 = b
            }
            if (day == 98) {
                country.day98 = b
            }
            if (day == 99) {
                country.day99 = b
            }
            if (day == 100) {
                country.day100 = b
            }

            day = day + 1;
        }

        if (parseInt(value.ja22) > numberofcasesLimit) {
            saveToList(value.ja22)
        }
        if (parseInt(value.ja23) > numberofcasesLimit) {
            saveToList(value.ja23)
        }
        if (parseInt(value.ja24) > numberofcasesLimit) {
            saveToList(value.ja24)
        }
        if (parseInt(value.ja25) > numberofcasesLimit) {
            saveToList(value.ja25)
        }
        if (parseInt(value.ja26) > numberofcasesLimit) {
            saveToList(value.ja26)
        }
        if (parseInt(value.ja27) > numberofcasesLimit) {
            saveToList(value.ja27)
        }
        if (parseInt(value.ja28) > numberofcasesLimit) {
            saveToList(value.ja28)
        }
        if (parseInt(value.ja29) > numberofcasesLimit) {
            saveToList(value.ja29)
        }
        if (parseInt(value.ja30) > numberofcasesLimit) {
            saveToList(value.ja30)
        }
        if (parseInt(value.ja31) > numberofcasesLimit) {
            saveToList(value.ja31)
        }
        if (parseInt(value.fe01) > numberofcasesLimit) {
            saveToList(value.fe01)
        }
        if (parseInt(value.fe02) > numberofcasesLimit) {
            saveToList(value.fe02)
        }
        if (parseInt(value.fe03) > numberofcasesLimit) {
            saveToList(value.fe03)
        }
        if (parseInt(value.fe04) > numberofcasesLimit) {
            saveToList(value.fe04)
        }
        if (parseInt(value.fe05) > numberofcasesLimit) {
            saveToList(value.fe05)
        }
        if (parseInt(value.fe06) > numberofcasesLimit) {
            saveToList(value.fe06)
        }
        if (parseInt(value.fe07) > numberofcasesLimit) {
            saveToList(value.fe07)
        }
        if (parseInt(value.fe08) > numberofcasesLimit) {
            saveToList(value.fe08)
        }
        if (parseInt(value.fe09) > numberofcasesLimit) {
            saveToList(value.fe09)
        }
        if (parseInt(value.fe10) > numberofcasesLimit) {
            saveToList(value.fe10)
        }
        if (parseInt(value.fe11) > numberofcasesLimit) {
            saveToList(value.fe11)
        }
        if (parseInt(value.fe12) > numberofcasesLimit) {
            saveToList(value.fe12)
        }
        if (parseInt(value.fe13) > numberofcasesLimit) {
            saveToList(value.fe13)
        }
        if (parseInt(value.fe14) > numberofcasesLimit) {
            saveToList(value.fe14)
        }
        if (parseInt(value.fe15) > numberofcasesLimit) {
            saveToList(value.fe15)
        }
        if (parseInt(value.fe16) > numberofcasesLimit) {
            saveToList(value.fe16)
        }
        if (parseInt(value.fe17) > numberofcasesLimit) {
            saveToList(value.fe17)
        }
        if (parseInt(value.fe18) > numberofcasesLimit) {
            saveToList(value.fe18)
        }
        if (parseInt(value.fe19) > numberofcasesLimit) {
            saveToList(value.fe19)
        }
        if (parseInt(value.fe20) > numberofcasesLimit) {
            saveToList(value.fe20)
        }
        if (parseInt(value.fe21) > numberofcasesLimit) {
            saveToList(value.fe21)
        }
        if (parseInt(value.fe22) > numberofcasesLimit) {
            saveToList(value.fe22)
        }
        if (parseInt(value.fe23) > numberofcasesLimit) {
            saveToList(value.fe23)
        }
        if (parseInt(value.fe24) > numberofcasesLimit) {
            saveToList(value.fe24)
        }
        if (parseInt(value.fe25) > numberofcasesLimit) {
            saveToList(value.fe25)
        }
        if (parseInt(value.fe26) > numberofcasesLimit) {
            saveToList(value.fe26)
        }
        if (parseInt(value.fe27) > numberofcasesLimit) {
            saveToList(value.fe27)
        }
        if (parseInt(value.fe28) > numberofcasesLimit) {
            saveToList(value.fe28)
        }
        if (parseInt(value.fe29) > numberofcasesLimit) {
            saveToList(value.fe29)
        }
        if (parseInt(value.ma01) > numberofcasesLimit) {
            saveToList(value.ma01)
        }
        if (parseInt(value.ma02) > numberofcasesLimit) {
            saveToList(value.ma02)
        }
        if (parseInt(value.ma03) > numberofcasesLimit) {
            saveToList(value.ma03)
        }
        if (parseInt(value.ma04) > numberofcasesLimit) {
            saveToList(value.ma04)
        }
        if (parseInt(value.ma05) > numberofcasesLimit) {
            saveToList(value.ma05)
        }
        if (parseInt(value.ma06) > numberofcasesLimit) {
            saveToList(value.ma06)
        }
        if (parseInt(value.ma07) > numberofcasesLimit) {
            saveToList(value.ma07)
        }
        if (parseInt(value.ma08) > numberofcasesLimit) {
            saveToList(value.ma08)
        }
        if (parseInt(value.ma09) > numberofcasesLimit) {
            saveToList(value.ma09)
        }
        if (parseInt(value.ma10) > numberofcasesLimit) {
            saveToList(value.ma10)
        }
        if (parseInt(value.ma11) > numberofcasesLimit) {
            saveToList(value.ma11)
        }
        if (parseInt(value.ma12) > numberofcasesLimit) {
            saveToList(value.ma12)
        }
        if (parseInt(value.ma13) > numberofcasesLimit) {
            saveToList(value.ma13)
        }
        if (parseInt(value.ma14) > numberofcasesLimit) {
            saveToList(value.ma14)
        }
        if (parseInt(value.ma15) > numberofcasesLimit) {
            saveToList(value.ma15)
        }
        if (parseInt(value.ma16) > numberofcasesLimit) {
            saveToList(value.ma16)
        }
        if (parseInt(value.ma17) > numberofcasesLimit) {
            saveToList(value.ma17)
        }
        if (parseInt(value.ma18) > numberofcasesLimit) {
            saveToList(value.ma18)
        }
        if (parseInt(value.ma19) > numberofcasesLimit) {
            saveToList(value.ma19)
        }
        if (parseInt(value.ma20) > numberofcasesLimit) {
            saveToList(value.ma20)
        }
        if (parseInt(value.ma21) > numberofcasesLimit) {
            saveToList(value.ma21)
        }
        if (parseInt(value.ma22) > numberofcasesLimit) {
            saveToList(value.ma22)
        }
        if (parseInt(value.ma23) > numberofcasesLimit) {
            saveToList(value.ma23)
        }
        if (parseInt(value.ma24) > numberofcasesLimit) {
            saveToList(value.ma24)
        }
        if (parseInt(value.ma25) > numberofcasesLimit) {
            saveToList(value.ma25)
        }
        if (parseInt(value.ma26) > numberofcasesLimit) {
            saveToList(value.ma26)
        }
        if (parseInt(value.ma27) > numberofcasesLimit) {
            saveToList(value.ma27)
        }
        if (parseInt(value.ma28) > numberofcasesLimit) {
            saveToList(value.ma28)
        }
        if (parseInt(value.ma29) > numberofcasesLimit) {
            saveToList(value.ma29)
        }
        if (parseInt(value.ma30) > numberofcasesLimit) {
            saveToList(value.ma30)
        }
        if (parseInt(value.ma31) > numberofcasesLimit) {
            saveToList(value.ma31)
        }
        if (day != 1) {
            country.days = day - 1
            listBelow100.push(country)
        }
    })
    return listBelow100
}

//Will need to update this every time!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const additionOfCountries = (a, b) => {
    const countryTotal = new CountryCaseRow(a.province, a.country, a.lat, a.long,
        String(parseInt(a.ja22) + parseInt(b.ja22)),
        String(parseInt(a.ja23) + parseInt(b.ja23)),
        String(parseInt(a.ja24) + parseInt(b.ja24)),
        String(parseInt(a.ja25) + parseInt(b.ja25)),
        String(parseInt(a.ja26) + parseInt(b.ja26)),
        String(parseInt(a.ja27) + parseInt(b.ja27)),
        String(parseInt(a.ja28) + parseInt(b.ja28)),
        String(parseInt(a.ja29) + parseInt(b.ja29)),
        String(parseInt(a.ja30) + parseInt(b.ja30)),
        String(parseInt(a.ja31) + parseInt(b.ja31)),
        String(parseInt(a.fe01) + parseInt(b.fe01)),
        String(parseInt(a.fe02) + parseInt(b.fe02)),
        String(parseInt(a.fe03) + parseInt(b.fe03)),
        String(parseInt(a.fe04) + parseInt(b.fe04)),
        String(parseInt(a.fe05) + parseInt(b.fe05)),
        String(parseInt(a.fe06) + parseInt(b.fe06)),
        String(parseInt(a.fe07) + parseInt(b.fe07)),
        String(parseInt(a.fe08) + parseInt(b.fe08)),
        String(parseInt(a.fe09) + parseInt(b.fe09)),
        String(parseInt(a.fe10) + parseInt(b.fe10)),
        String(parseInt(a.fe11) + parseInt(b.fe11)),
        String(parseInt(a.fe12) + parseInt(b.fe12)),
        String(parseInt(a.fe13) + parseInt(b.fe13)),
        String(parseInt(a.fe14) + parseInt(b.fe14)),
        String(parseInt(a.fe15) + parseInt(b.fe15)),
        String(parseInt(a.fe16) + parseInt(b.fe16)),
        String(parseInt(a.fe17) + parseInt(b.fe17)),
        String(parseInt(a.fe18) + parseInt(b.fe18)),
        String(parseInt(a.fe19) + parseInt(b.fe19)),
        String(parseInt(a.fe20) + parseInt(b.fe20)),
        String(parseInt(a.fe21) + parseInt(b.fe21)),
        String(parseInt(a.fe22) + parseInt(b.fe22)),
        String(parseInt(a.fe23) + parseInt(b.fe23)),
        String(parseInt(a.fe24) + parseInt(b.fe24)),
        String(parseInt(a.fe25) + parseInt(b.fe25)),
        String(parseInt(a.fe26) + parseInt(b.fe26)),
        String(parseInt(a.fe27) + parseInt(b.fe27)),
        String(parseInt(a.fe28) + parseInt(b.fe28)),
        String(parseInt(a.fe29) + parseInt(b.fe29)),
        String(parseInt(a.ma01) + parseInt(b.ma01)),
        String(parseInt(a.ma02) + parseInt(b.ma02)),
        String(parseInt(a.ma03) + parseInt(b.ma03)),
        String(parseInt(a.ma04) + parseInt(b.ma04)),
        String(parseInt(a.ma05) + parseInt(b.ma05)),
        String(parseInt(a.ma06) + parseInt(b.ma06)),
        String(parseInt(a.ma07) + parseInt(b.ma07)),
        String(parseInt(a.ma08) + parseInt(b.ma08)),
        String(parseInt(a.ma09) + parseInt(b.ma09)),
        String(parseInt(a.ma10) + parseInt(b.ma10)),
        String(parseInt(a.ma11) + parseInt(b.ma11)),
        String(parseInt(a.ma12) + parseInt(b.ma12)),
        String(parseInt(a.ma13) + parseInt(b.ma13)),
        String(parseInt(a.ma14) + parseInt(b.ma14)),
        String(parseInt(a.ma15) + parseInt(b.ma15)),
        String(parseInt(a.ma16) + parseInt(b.ma16)),
        String(parseInt(a.ma17) + parseInt(b.ma17)),
        String(parseInt(a.ma18) + parseInt(b.ma18)),
        String(parseInt(a.ma19) + parseInt(b.ma19)),
        String(parseInt(a.ma20) + parseInt(b.ma20)),
        String(parseInt(a.ma21) + parseInt(b.ma21)),
        String(parseInt(a.ma22) + parseInt(b.ma22)),
        String(parseInt(a.ma23) + parseInt(b.ma23)),
        String(parseInt(a.ma24) + parseInt(b.ma24)),
        String(parseInt(a.ma25) + parseInt(b.ma25)),
        String(parseInt(a.ma26) + parseInt(b.ma26)),
        String(parseInt(a.ma27) + parseInt(b.ma27)),
        String(parseInt(a.ma28) + parseInt(b.ma28)),
        String(parseInt(a.ma29) + parseInt(b.ma29)),
        String(parseInt(a.ma30) + parseInt(b.ma30)),
        String(parseInt(a.ma31) + parseInt(b.ma31)),
    )
    return countryTotal
}

const writeCSV = userList => {
    var updatedCountryList = []
    userList.forEach(function (value) {
        if (value.province == 'Hong Kong') {
            const temp1 = additionOfCountries(HongKong, value)
            HongKong = temp1
            return
        }
        if (value.country == 'Australia') {
            const temp1 = additionOfCountries(Australia, value)
            Australia = temp1
            return
        }
        if (value.country == 'Canada') {
            const temp1 = additionOfCountries(Canada, value)
            Canada = temp1
            return
        }
        if (value.country == 'China') {
            const temp1 = additionOfCountries(China, value)
            China = temp1
            return
        }
        if (value.country == 'Denmark') {
            const temp1 = additionOfCountries(Denmark, value)
            Denmark = temp1
            return
        }
        if (value.country == 'France') {
            const temp1 = additionOfCountries(France, value)
            France = temp1
            return
        }
        if (value.country == 'United Kingdom') {
            const temp1 = additionOfCountries(UnitedKingdom, value)
            UnitedKingdom = temp1
            return
        }
        if (value.country == 'US') {
            const temp1 = additionOfCountries(US, value)
            US = temp1
            return
        }

        updatedCountryList.push(value)

    })
    updatedCountryList.push(HongKong)
    updatedCountryList.push(Australia)
    updatedCountryList.push(Canada)
    updatedCountryList.push(China)
    updatedCountryList.push(Denmark)
    updatedCountryList.push(France)
    updatedCountryList.push(UnitedKingdom)
    updatedCountryList.push(US)

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: newcsvFile,
        header: [
            { id: 'country', title: 'Country' },
            { id: 'ja22', title: 'ja22' },
            { id: 'ja23', title: 'ja23' },
            { id: 'ja24', title: 'ja24' },
            { id: 'ja25', title: 'ja25' },
            { id: 'ja26', title: 'ja26' },
            { id: 'ja27', title: 'ja27' },
            { id: 'ja28', title: 'ja28' },
            { id: 'ja29', title: 'ja29' },
            { id: 'ja30', title: 'ja30' },
            { id: 'ja31', title: 'ja31' },
            { id: 'fe01', title: 'fe01' },
            { id: 'fe02', title: 'fe02' },
            { id: 'fe03', title: 'fe03' },
            { id: 'fe04', title: 'fe04' },
            { id: 'fe05', title: 'fe05' },
            { id: 'fe06', title: 'fe06' },
            { id: 'fe07', title: 'fe07' },
            { id: 'fe08', title: 'fe08' },
            { id: 'fe09', title: 'fe09' },
            { id: 'fe10', title: 'fe10' },
            { id: 'fe11', title: 'fe11' },
            { id: 'fe12', title: 'fe12' },
            { id: 'fe13', title: 'fe13' },
            { id: 'fe14', title: 'fe14' },
            { id: 'fe15', title: 'fe15' },
            { id: 'fe16', title: 'fe16' },
            { id: 'fe17', title: 'fe17' },
            { id: 'fe18', title: 'fe18' },
            { id: 'fe19', title: 'fe19' },
            { id: 'fe20', title: 'fe20' },
            { id: 'fe21', title: 'fe21' },
            { id: 'fe22', title: 'fe22' },
            { id: 'fe23', title: 'fe23' },
            { id: 'fe24', title: 'fe24' },
            { id: 'fe25', title: 'fe25' },
            { id: 'fe26', title: 'fe26' },
            { id: 'fe27', title: 'fe27' },
            { id: 'fe28', title: 'fe28' },
            { id: 'fe29', title: 'fe29' },
            { id: 'ma01', title: 'ma01' },
            { id: 'ma02', title: 'ma02' },
            { id: 'ma03', title: 'ma03' },
            { id: 'ma04', title: 'ma04' },
            { id: 'ma05', title: 'ma05' },
            { id: 'ma06', title: 'ma06' },
            { id: 'ma07', title: 'ma07' },
            { id: 'ma08', title: 'ma08' },
            { id: 'ma09', title: 'ma09' },
            { id: 'ma10', title: 'ma10' },
            { id: 'ma11', title: 'ma11' },
            { id: 'ma12', title: 'ma12' },
            { id: 'ma13', title: 'ma13' },
            { id: 'ma14', title: 'ma14' },
            { id: 'ma15', title: 'ma15' },
            { id: 'ma16', title: 'ma16' },
            { id: 'ma17', title: 'ma17' },
            { id: 'ma18', title: 'ma18' },
            { id: 'ma19', title: 'ma19' },
            { id: 'ma20', title: 'ma20' },
            { id: 'ma21', title: 'ma21' },
            { id: 'ma22', title: 'ma22' },
            { id: 'ma23', title: 'ma23' },
            { id: 'ma24', title: 'ma24' },
            { id: 'ma25', title: 'ma25' },
            { id: 'ma26', title: 'ma26' },
            { id: 'ma27', title: 'ma27' },
            { id: 'ma28', title: 'ma28' },
            { id: 'ma29', title: 'ma29' },
            { id: 'ma30', title: 'ma30' },
            { id: 'ma31', title: 'ma31' },
        ]
    });

    csvWriter
        .writeRecords(updatedCountryList)
        .then(() => console.log('The CSV file was written successfully'));

    
    const listBelow100 = removingDaysBelow100(updatedCountryList)
    const csvWriter2 = createCsvWriter({
        path: newcsvFile2,
        header: [
            { id: 'country', title: 'Country' },
            { id: 'days', title: 'days since 100' },
            { id: 'day1', title: 'day1' },
            { id: 'day2', title: 'day2' },
            { id: 'day3', title: 'day3' },
            { id: 'day4', title: 'day4' },
            { id: 'day5', title: 'day5' },
            { id: 'day6', title: 'day6' },
            { id: 'day7', title: 'day7' },
            { id: 'day8', title: 'day8' },
            { id: 'day9', title: 'day9' },
            { id: 'day10', title: 'day10' },
            { id: 'day11', title: 'day11' },
            { id: 'day12', title: 'day12' },
            { id: 'day13', title: 'day13' },
            { id: 'day14', title: 'day14' },
            { id: 'day15', title: 'day15' },
            { id: 'day16', title: 'day16' },
            { id: 'day17', title: 'day17' },
            { id: 'day18', title: 'day18' },
            { id: 'day19', title: 'day19' },
            { id: 'day20', title: 'day20' },
            { id: 'day21', title: 'day21' },
            { id: 'day22', title: 'day22' },
            { id: 'day23', title: 'day23' },
            { id: 'day24', title: 'day24' },
            { id: 'day25', title: 'day25' },
            { id: 'day26', title: 'day26' },
            { id: 'day27', title: 'day27' },
            { id: 'day28', title: 'day28' },
            { id: 'day29', title: 'day29' },
            { id: 'day30', title: 'day30' },
            { id: 'day31', title: 'day31' },
            { id: 'day32', title: 'day32' },
            { id: 'day33', title: 'day33' },
            { id: 'day34', title: 'day34' },
            { id: 'day35', title: 'day35' },
            { id: 'day36', title: 'day36' },
            { id: 'day37', title: 'day37' },
            { id: 'day38', title: 'day38' },
            { id: 'day39', title: 'day39' },
            { id: 'day40', title: 'day40' },
            { id: 'day41', title: 'day41' },
            { id: 'day42', title: 'day42' },
            { id: 'day43', title: 'day43' },
            { id: 'day44', title: 'day44' },
            { id: 'day45', title: 'day45' },
            { id: 'day46', title: 'day46' },
            { id: 'day47', title: 'day47' },
            { id: 'day48', title: 'day48' },
            { id: 'day49', title: 'day49' },
            { id: 'day50', title: 'day50' },
            { id: 'day51', title: 'day51' },
            { id: 'day52', title: 'day52' },
            { id: 'day53', title: 'day53' },
            { id: 'day54', title: 'day54' },
            { id: 'day55', title: 'day55' },
            { id: 'day56', title: 'day56' },
            { id: 'day57', title: 'day57' },
            { id: 'day58', title: 'day58' },
            { id: 'day59', title: 'day59' },
            { id: 'day60', title: 'day60' },
            { id: 'day61', title: 'day61' },
            { id: 'day62', title: 'day62' },
            { id: 'day63', title: 'day63' },
            { id: 'day64', title: 'day64' },
            { id: 'day65', title: 'day65' },
            { id: 'day66', title: 'day66' },
            { id: 'day67', title: 'day67' },
            { id: 'day68', title: 'day68' },
            { id: 'day69', title: 'day69' },
            { id: 'day70', title: 'day70' },
            { id: 'day71', title: 'day71' },
            { id: 'day72', title: 'day72' },
            { id: 'day73', title: 'day73' },
            { id: 'day74', title: 'day74' },
            { id: 'day75', title: 'day75' },
            { id: 'day76', title: 'day76' },
            { id: 'day77', title: 'day77' },
            { id: 'day78', title: 'day78' },
            { id: 'day79', title: 'day79' },
            { id: 'day80', title: 'day80' },
            { id: 'day81', title: 'day81' },
            { id: 'day82', title: 'day82' },
            { id: 'day83', title: 'day83' },
            { id: 'day84', title: 'day84' },
            { id: 'day85', title: 'day85' },
            { id: 'day86', title: 'day86' },
            { id: 'day87', title: 'day87' },
            { id: 'day88', title: 'day88' },
            { id: 'day89', title: 'day89' },
            { id: 'day90', title: 'day90' },
            { id: 'day91', title: 'day91' },
            { id: 'day92', title: 'day92' },
            { id: 'day93', title: 'day93' },
            { id: 'day94', title: 'day94' },
            { id: 'day95', title: 'day95' },
            { id: 'day96', title: 'day96' },
            { id: 'day97', title: 'day97' },
            { id: 'day98', title: 'day98' },
            { id: 'day99', title: 'day99' },
            { id: 'day100', title: 'day100' },
        ]
    });

    csvWriter2
        .writeRecords(listBelow100)
        .then(() => console.log('The CSV file was written successfully'));
}

const processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }
    //data.shift(); // only required if csv has heading row
    const userList = data.map(row => new CountryCaseRow(...row));
    writeCSV(userList);
}

fs.createReadStream(csvFile)
    .pipe(parse({ delimiter: ',' }, processData));
