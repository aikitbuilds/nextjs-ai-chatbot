const fs = require('fs')
const path = require('path')

function fixDrawIO(inputPath, outputPath) {
  try {
    // Remove any special characters from the beginning of the path
    const cleanPath = inputPath.replace(/^[\u200E\u200F]/, '')
    
    // Resolve the full path
    const fullInputPath = path.resolve(cleanPath)
    
    // If no output path specified, create one by replacing extension with .drawio
    if (!outputPath) {
      outputPath = fullInputPath.replace(/\.[^/.]+$/, '.drawio')
    }
    
    console.log(`Reading file from: ${fullInputPath}`)
    
    // Read the file content
    let content = fs.readFileSync(fullInputPath, 'utf-8')
    
    // Extract the mxGraphModel content
    const mxGraphModelMatch = content.match(/<mxGraphModel[^>]*>[\s\S]*?<\/mxGraphModel>/)
    if (!mxGraphModelMatch) {
      console.error('Error: Could not find mxGraphModel content')
      process.exit(1)
    }
    
    const mxGraphModelContent = mxGraphModelMatch[0]
    
    // Create the proper draw.io file structure
    const drawIOContent = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="${new Date().toISOString()}" agent="Mozilla/5.0" version="21.7.5" type="device">
  <diagram id="diagram-id" name="Page-1">
    ${mxGraphModelContent}
  </diagram>
</mxfile>`
    
    // Write to draw.io file
    fs.writeFileSync(outputPath, drawIOContent)
    console.log(`\nSuccessfully saved to: ${outputPath}`)
    
    // Log the first few lines of the output file for verification
    const outputContent = fs.readFileSync(outputPath, 'utf-8')
    console.log('\nFirst few lines of the output file:')
    console.log(outputContent.split('\n').slice(0, 5).join('\n'))
  } catch (error) {
    console.error('Error converting file:', error)
  }
}

// Get the input file path from command line arguments
const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Please provide the input file path')
  process.exit(1)
}

fixDrawIO(inputPath) 