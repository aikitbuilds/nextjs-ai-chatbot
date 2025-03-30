const fs = require('fs')
const path = require('path')

function convertCsvToXml(inputPath, outputPath) {
  try {
    // Resolve the full path
    const fullInputPath = path.resolve(inputPath)
    
    // If no output path specified, create one by replacing .csv with .xml
    if (!outputPath) {
      outputPath = fullInputPath.replace('.csv', '.xml')
    }
    
    console.log(`Reading file from: ${fullInputPath}`)
    
    // Read the CSV file
    const csvContent = fs.readFileSync(fullInputPath, 'utf-8')
    
    // Split the content into lines
    const lines = csvContent.split('\n').map(line => line.trim()).filter(line => line.length > 0)
    
    // Get headers from first line
    const headers = lines[0].split(',').map(header => header.trim())
    
    // Convert data rows to XML
    const xmlRows = lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim())
      const row = values.map((value, index) => {
        const header = headers[index] || `field${index + 1}`
        return `    <${header}>${value}</${header}>`
      }).join('\n')
      return `  <row>\n${row}\n  </row>`
    }).join('\n')
    
    // Create the complete XML document
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<data>
${xmlRows}
</data>`
    
    // Write to XML file
    fs.writeFileSync(outputPath, xmlContent)
    
    console.log(`Successfully converted ${fullInputPath} to ${outputPath}`)
  } catch (error) {
    console.error('Error converting file:', error)
  }
}

// Get the input file path from command line arguments or use the default path
const inputPath = process.argv[2] || 'C:/Users/aikit/Downloads/SteveH-combined.csv.csv'
convertCsvToXml(inputPath) 