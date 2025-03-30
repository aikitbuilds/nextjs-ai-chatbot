const fs = require('fs')
const path = require('path')

const diagramContent = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="${new Date().toISOString()}" agent="Mozilla/5.0" version="21.7.5" type="device">
  <diagram id="diagram-id" name="Page-1">
    <mxGraphModel dx="2316" dy="1436" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="1700" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="VnI1o5KkYqZf9a8b7C3d-2" value="BDC Lead Magnet &amp; Nurturing Flow" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=18;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="340" y="20" width="420" height="30" as="geometry" />
        </mxCell>
        <mxCell id="VnI1o5KkYqZf9a8b7C3d-3" value="Attraction Channels" style="swimlane;startSize=23;html=1;whiteSpace=wrap;rounded=0;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="1">
          <mxGeometry x="40" y="80" width="1020" height="180" as="geometry" />
        </mxCell>
        <mxCell id="VnI1o5KkYqZf9a8b7C3d-4" value="Apollo.io&lt;br&gt;(Cold Outreach)" style="shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;fillColor=#ffe6cc;strokeColor=#d79b00;" vertex="1" parent="VnI1o5KkYqZf9a8b7C3d-3">
          <mxGeometry x="40" y="60" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="VnI1o5KkYqZf9a8b7C3d-5" value="SEO / Organic Search" style="shape=cloud;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="VnI1o5KkYqZf9a8b7C3d-3">
          <mxGeometry x="180" y="60" width="140" height="80" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`

const outputPath = path.resolve('C:/Users/aikit/Downloads/diagram.drawio')
fs.writeFileSync(outputPath, diagramContent)
console.log(`Created draw.io file at: ${outputPath}`) 