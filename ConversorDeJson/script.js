const converterForm = document.querySelector("#converterForm")
const converterInput = document.querySelector("#converterInput")
const jsonToCsvButton = document.querySelector(".jsonToCsv")
const CsvToJsonButton = document.querySelector(".CsvToJson")
const resultArea = document.createElement("pre")
function jsonToCsv(json){
 

    const headers = Object.keys(json[0])
    const csvRows = []
    csvRows.push(headers.join(","))


    

   console.log(csvRows);
    for (const row of json) {
        const values = headers.map((header)=> {
            let value= row[header]
             
            if(value === null || value === undefined){
                value =""
            }else if(typeof value === "object"){
                value  = JSON.stringify(value)
            }

            return value
        })
        csvRows.push(values.join(","))
        
    }
    return csvRows.join("\n")
}


 function csvToJson(csv){
    const lines  = csv.split("\n")
    const headers = lines[0].split(",")
    const json = []
    for (let index = 1; index < lines.length; index++) {
        const values =  lines[index].split(",")
        const row = {}
        for (let jindex = 0; jindex < headers.length; jindex++) {
            let value = values[jindex]

            if(value[0] === "{" || value[0] === "["){
                value = JSON.parse(value)
            }
            row[headers[jindex] ] = values
            
        }
        json.push(row)
        
    }
    return json
 }


jsonToCsvButton.addEventListener("click", function(){
    if(converterInput.value === ""){Swal.fire('Campo vazio')}
    validaJson(converterInput.value)
    const json = JSON.parse(converterInput.value.trim())
    const csv = jsonToCsv(json)
    // downloadCsv(csv)
    displayJson(csv)
})


CsvToJsonButton.addEventListener("click", function(){
    if(converterInput.value === ""){Swal.fire('Campo vazio')}
    const csv = converterInput.value.trim()

    const json = csvToJson(csv)
    displayJson(json)  
})

// function downloadCsv(csv){
//     const downloadLink  = document.createElement("a")
//     downloadLink.setAttribute("href","data:text/csv;charset=utf-8"+encodeURIComponent(csv))
     
//     downloadLink.setAttribute("download","data.csv")
//     downloadLink.style.display = "none"
//     document.body.appendChild(downloadLink)
//     downloadLink.click()
//     document.body.removeChild(downloadLink)


// }

function displayJson(json){
  resultArea.textContent = JSON.stringify(json,null,2)
  document.body.appendChild(resultArea)
}

function validaJson(string){
    try {
        JSON.parse(string)
    } catch (error) {
       Swal.fire(error + "  formato de csv incorreto")
    }
}