const fs = require('fs');
var parse = require("csv-parse");
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

console.log("start")
var csvFile = "testdata.csv";
var newArrayData = [1, 2, 3, 4, 5, 'Blue']

const csvWriter = createCsvWriter({
    path: csvFile,
});

const processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }
    //data.shift(); // only required if csv has heading row
    // const userList = data.map(row => new CountryCaseRow(...row));
    const length = data[0].length
    console.log("length", length)

    for (x = newArrayData.length; x < length; x++) {
        newArrayData.push("")
    }
    console.log("length newArray", newArrayData.length)

    console.log(data[0])
    data.push(newArrayData)
    // console.log(data)



    csvWriter.writeRecords(data)
        .then(() => {
            console.log('The CSV file was written successfully')
        });
}

fs.createReadStream(csvFile)
    .pipe(parse({ delimiter: ',' }, processData));













// fs.createReadStream('testdata.csv')
//     .pipe(parse())
//     .on('data', (row) => {
//         console.log(row);
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });


// var stringify = require('csv-stringify');
// stringify(data, function (err, output) {
//     console.log(output)
//     // output.should.eql('1,2,3,4\na,b,c,d\n');
//     fs.writeFileSync(csvFile, output)
// });