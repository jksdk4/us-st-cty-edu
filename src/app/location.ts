export class Location {
    'FIPS Code': number;
    'State': string;
    'Area Name': string;
    'Less than a high school diploma, 2014-18': string;
    'High school diploma only, 2014-18': string;
    'Some college or associate\'s degree, 2014-18': string;
    'Bachelor\'s degree or higher, 2014-18': string;
    'Percent of adults with less than a high school diploma, 2014-18': number;
    'Percent of adults with a high school diploma only, 2014-18': number;
    'Percent of adults completing some college or associate\'s degree, 2014-18': number;
    'Percent of adults with a bachelor\'s degree or higher, 2014-18': number;

    constructor(
        fipsCode: number,
        state: string,
        areaName: string,
        ltHSD1418: string,
        hsd1418: string,
        someCol1418: string,
        bachPlus1418: string,
        percentltHSD1418: number,
        percenthsd1418: number,
        percentSomeCol1418: number,
        percentBachPlus1418: number,
        ) {
            this['FIPS Code'] = fipsCode;
            this['Postal'] = state;
            this['Area Name'] = areaName;
            this['Less than a high school diploma, 2014-2018'] = ltHSD1418;
            this['High school diploma only, 2014-2018'] = hsd1418;
            this['Some college (1-3 years), 2014-2018'] = someCol1418;
            this['Four years of college or higher, 2014-2018'] = bachPlus1418;
            this['Percent of adults with less than a high school diploma, 2014-2018'] = percentltHSD1418;
            this['Percent of adults with a high school diploma only, 2014-2018'] = percenthsd1418;
            this['Percent of adults completing some college (1-3 years), 2014-2018'] = percentSomeCol1418;
            this['Percent of adults completing four years of college or higher, 2014-2018'] = percentBachPlus1418;
    }
}
