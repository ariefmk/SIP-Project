let supply = (svgId, assetId) => {
    var getSvg = SVG('#'+svgId).size(150, 300).viewbox(0, 0, 150, 300)

    if ( height < 0) {
        rh = 0
        ry = 0
    }
    else if (height < 60) {
        rh = 60
        ry = 240
    }
    else if (height < 300) {
        rh = height
        ry = 300 - height

    }
    else {
        rh = 300
        ry = 0
     }

    getSvg.rect('100%', '100%').attr({
        id: 'rect1', fill: '#10120f', rx: '100%', ry: '30', x: 0, y: 0
    })
    getSvg.rect('100%', '260').attr({
        id: 'rect2', fill: '#57ff00', rx: '100%', ry: '30', x: 0, y: 40
    })
    getSvg.rect(150, 60).attr({
        id: 'rect3', fill:'#f3f3f3', rx: '100%', ry: '100%', x: 0, y: 40, opacity: '.7'
    })
    getSvg.rect(150, 60).attr({
        id: 'rect4', fill:'#f2f2f2', rx: '100%', ry: '100%', x: 0, y: 0, opacity: '.5'
    })
}

supply('sip-supply')

