const fs = require('fs');
const parse = require("csv-parse");
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

const add_line_to_end_of_csv_file = async (file_path, array_of_data) => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(file_path)
            .pipe(parse({ delimiter: ',' }, (err, data) => {
                if (err) {
                    resolve(false);
                    return
                }
                //Loop to ensure size of new array same as existing data
                for (x = array_of_data.length; x < data[0].length; x++) {
                    array_of_data.push("")
                }
                data.push(array_of_data)
                const csvWriter = createCsvWriter({
                    path: file_path,
                });
                csvWriter.writeRecords(data)
                    .then(() => {
                        resolve(true)
                    });
            }));
    })
}

const test = async () => {
    const yes = await add_line_to_end_of_csv_file("testdata.csv", ['yay', 0, 1])
    console.log(yes)
}

test() 