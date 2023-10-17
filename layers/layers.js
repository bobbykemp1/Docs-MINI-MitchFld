var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'Google Sat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_NLSOld1_1 = new ol.layer.Tile({
            'title': 'NLS Old 1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=0e1FOgfCSpysyBGm1F79'
            })
        });
var format_1MitchFldNuBnds_2 = new ol.format.GeoJSON();
var features_1MitchFldNuBnds_2 = format_1MitchFldNuBnds_2.readFeatures(json_1MitchFldNuBnds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MitchFldNuBnds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MitchFldNuBnds_2.addFeatures(features_1MitchFldNuBnds_2);
var lyr_1MitchFldNuBnds_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1MitchFldNuBnds_2, 
                style: style_1MitchFldNuBnds_2,
                interactive: true,
                title: '<img src="styles/legend/1MitchFldNuBnds_2.png" /> #1: MitchFld Nu Bnds'
            });
var format_BigLnsPOIs_3 = new ol.format.GeoJSON();
var features_BigLnsPOIs_3 = format_BigLnsPOIs_3.readFeatures(json_BigLnsPOIs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BigLnsPOIs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BigLnsPOIs_3.addFeatures(features_BigLnsPOIs_3);
var lyr_BigLnsPOIs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BigLnsPOIs_3, 
                style: style_BigLnsPOIs_3,
                interactive: true,
                title: '<img src="styles/legend/BigLnsPOIs_3.png" /> Big Lns + POIs'
            });

lyr_GoogleSat_0.setVisible(true);lyr_NLSOld1_1.setVisible(true);lyr_1MitchFldNuBnds_2.setVisible(true);lyr_BigLnsPOIs_3.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_NLSOld1_1,lyr_1MitchFldNuBnds_2,lyr_BigLnsPOIs_3];
lyr_1MitchFldNuBnds_2.set('fieldAliases', {'FID': 'FID', });
lyr_BigLnsPOIs_3.set('fieldAliases', {'FID': 'FID', });
lyr_1MitchFldNuBnds_2.set('fieldImages', {'FID': '', });
lyr_BigLnsPOIs_3.set('fieldImages', {'FID': '', });
lyr_1MitchFldNuBnds_2.set('fieldLabels', {'FID': 'no label', });
lyr_BigLnsPOIs_3.set('fieldLabels', {'FID': 'no label', });
lyr_BigLnsPOIs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});