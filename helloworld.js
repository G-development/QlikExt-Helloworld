define( [ 
    //here are the dependencies;
    'jquery',
    './properties'
],
function ( $, props ) {
    'use strict';

    return {

        //def of layout-panels - ref to properties.js
        definition: props,
        
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [],
                qMeasures: [],
                qInitialDataFetch: [
                    {
                        //Default of columns
                        qHeight: 100,
                        qWidth: 10
                    }
                ]
            }
            
        },
        


        //Paint resp.Rendering logic
        paint: function ( $element, layout ) {

            var hc = layout.qHyperCube;
            console.log( 'Data returned: ', hc );

            // Default rendering with HTML injection
            $element.empty();
            var table = '<table border="1" >';
    
            //Head of table
            table += '<thead>';
            table += '<tr>';
            for (var i = 0; i<hc.qDimensionInfo.length; i++){
                table += '<th>' + hc.qDimensionInfo[i].qFallbackTitle + '</th>';
            }
            for (var i = 0; i<hc.qMeasureInfo.length; i++){
                table += '<th>' + hc.qMeasureInfo[i].qFallbackTitle + '</th>';
            }
            table += '</tr>';
            table += '</thead>';
            
            
            //Body of table
            table += '<tbody>';
            
            //qDataPages is empty - error
            
            for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
                table += '<tr>';
                for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
                    table += '<td>';
                        table += hc.qDataPages[0].qMatrix[r][c].qText;
                    table += '</td>';
                }
                table += '</tr>';
            }
            
            table += '</tbody>';
            table += '</table>';


            $element.append( table );
            console.log("Table appended");


        }
    }; 
} );
