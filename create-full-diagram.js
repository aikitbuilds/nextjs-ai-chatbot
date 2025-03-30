const fs = require('fs')
const path = require('path')

function cleanMxCell(cell) {
  // Remove any double angle brackets
  let cleaned = cell.replace(/<<?/g, '<').replace(/>>?/g, '>')
  
  // Ensure proper tag closure
  if (!cleaned.includes('</mxCell>') && !cleaned.endsWith('/>')) {
    cleaned = cleaned.replace(/<mxCell([^>]*)>/, '<mxCell$1></mxCell>')
  }
  
  return cleaned.trim()
}

function createDrawIO(inputPath, outputPath) {
  // Read the input file
  let content = fs.readFileSync(inputPath, 'utf8')
  console.log('Read input file:', inputPath)

  // Extract mxCell elements
  const mxCellMatches = content.match(/<mxCell[^>]*>[\s\S]*?<\/mxCell>|<mxCell[^>]*\/>/g) || []
  console.log('Found mxCell elements:', mxCellMatches.length)

  // Clean each mxCell element
  const cleanedCells = mxCellMatches.map(cleanMxCell)

  // Create a simpler draw.io structure
  const drawIOContent = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile>
  <diagram>
    <mxGraphModel>
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
${cleanedCells.map(cell => '        ' + cell).join('\n')}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`

  // Write the output file
  fs.writeFileSync(outputPath, drawIOContent)
  console.log('Created complete draw.io diagram at:', outputPath)
}

// Use the file paths
const inputPath = 'C:/Users/aikit/Downloads/code.xml'
const outputPath = 'C:/Users/aikit/Downloads/complete-diagram.drawio'

createDrawIO(inputPath, outputPath) 