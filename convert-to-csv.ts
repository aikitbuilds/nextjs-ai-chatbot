import fs from 'fs'
import path from 'path'

function convertTxtToCsv(inputPath: string, outputPath?: string) {
  try {
    // Resolve the full path
    const fullInputPath = path.resolve(inputPath)
    
    // If no output path specified, create one by replacing .txt with .csv
    if (!outputPath) {
      outputPath = fullInputPath.replace('.txt', '.csv')
    }
    
    console.log(`Reading file from: ${fullInputPath}`)
    
    // Read the text file
    const textContent = fs.readFileSync(fullInputPath, 'utf-8')
    
    // Split the content into lines
    const lines = textContent.split('\n')
    
    // Process each line
    const csvLines = lines.map(line => {
      // Remove any carriage returns and trim whitespace
      return line.replace('\r', '').trim()
    }).filter(line => line.length > 0) // Remove empty lines
    
    // Write to CSV file
    fs.writeFileSync(outputPath, csvLines.join('\n'))
    
    console.log(`Successfully converted ${fullInputPath} to ${outputPath}`)
  } catch (error) {
    console.error('Error converting file:', error)
  }
}

// Get the input file path from command line arguments or use the default path
const inputPath = process.argv[2] || 'C:\\Users\\aikit\\Downloads\\SteveH-combined.csv.txt'
convertTxtToCsv(inputPath) 