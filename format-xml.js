const fs = require('fs')
const path = require('path')

function formatXmlFile(inputPath, outputPath) {
  try {
    // Remove any special characters from the beginning of the path
    const cleanPath = inputPath.replace(/^[\u200E\u200F]/, '')
    
    // Resolve the full path
    const fullInputPath = path.resolve(cleanPath)
    
    // If no output path specified, create one by replacing .txt with .xml
    if (!outputPath) {
      outputPath = fullInputPath.replace('.txt', '.xml')
    }
    
    console.log(`Reading file from: ${fullInputPath}`)
    
    // Read the file content
    const content = fs.readFileSync(fullInputPath, 'utf-8')
    
    // Basic XML validation
    if (!content.trim().startsWith('<?xml')) {
      console.log('Warning: File does not start with XML declaration')
    }
    
    // Write to XML file
    fs.writeFileSync(outputPath, content)
    
    console.log(`Successfully formatted and saved XML to: ${outputPath}`)
  } catch (error) {
    console.error('Error formatting XML file:', error)
  }
}

// Get the input file path from command line arguments
const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Please provide the input file path')
  process.exit(1)
}

formatXmlFile(inputPath) 