var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDNADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_1 = format_gadm41_IDNADM_ADM_4_1.readFeatures(json_gadm41_IDNADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_1.addFeatures(features_gadm41_IDNADM_ADM_4_1);
var lyr_gadm41_IDNADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_1, 
                style: style_gadm41_IDNADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_1.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_RW_2 = new ol.format.GeoJSON();
var features_RW_2 = format_RW_2.readFeatures(json_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_2.addFeatures(features_RW_2);
var lyr_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_2, 
                style: style_RW_2,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_2_0.png" /> RW 01 Desa Layansari<br />\
    <img src="styles/legend/RW_2_1.png" /> RW 02 Desa Layansari<br />\
    <img src="styles/legend/RW_2_2.png" /> RW 03 Desa Layansari<br />\
    <img src="styles/legend/RW_2_3.png" /> RW 04 Dusun Layansari<br />\
    <img src="styles/legend/RW_2_4.png" /> RW 05 Desa Layansari<br />\
    <img src="styles/legend/RW_2_5.png" /> RW 06 Desa Layansari<br />\
    <img src="styles/legend/RW_2_6.png" /> RW 07 Desa Layansari<br />\
    <img src="styles/legend/RW_2_7.png" /> RW 08 Desa Layansari<br />\
    <img src="styles/legend/RW_2_8.png" /> <br />'
        });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_3_0.png" /> yes<br />'
        });
var format_sawah_4 = new ol.format.GeoJSON();
var features_sawah_4 = format_sawah_4.readFeatures(json_sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_4.addFeatures(features_sawah_4);
var lyr_sawah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_4, 
                style: style_sawah_4,
                popuplayertitle: "sawah",
                interactive: true,
    title: 'sawah<br />\
    <img src="styles/legend/sawah_4_0.png" /> Sawah layansari Kidul<br />\
    <img src="styles/legend/sawah_4_1.png" /> Sawah Layansari Kidul<br />\
    <img src="styles/legend/sawah_4_2.png" /> Sawah Layansari Lor<br />\
    <img src="styles/legend/sawah_4_3.png" /> Sawah Layansari Tengah<br />\
    <img src="styles/legend/sawah_4_4.png" /> Sawah Layansari Wetan<br />\
    <img src="styles/legend/sawah_4_5.png" /> <br />'
        });
var format_Kuburan_5 = new ol.format.GeoJSON();
var features_Kuburan_5 = format_Kuburan_5.readFeatures(json_Kuburan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_5.addFeatures(features_Kuburan_5);
var lyr_Kuburan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_5, 
                style: style_Kuburan_5,
                popuplayertitle: "Kuburan",
                interactive: true,
    title: 'Kuburan<br />\
    <img src="styles/legend/Kuburan_5_0.png" /> Kuburan 1<br />\
    <img src="styles/legend/Kuburan_5_1.png" /> Kuburan 2<br />\
    <img src="styles/legend/Kuburan_5_2.png" /> Kuburan 3<br />\
    <img src="styles/legend/Kuburan_5_3.png" /> <br />'
        });
var format_RTDusunWungurja_6 = new ol.format.GeoJSON();
var features_RTDusunWungurja_6 = format_RTDusunWungurja_6.readFeatures(json_RTDusunWungurja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunWungurja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunWungurja_6.addFeatures(features_RTDusunWungurja_6);
var lyr_RTDusunWungurja_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunWungurja_6, 
                style: style_RTDusunWungurja_6,
                popuplayertitle: "RT Dusun Wungurja",
                interactive: true,
    title: 'RT Dusun Wungurja<br />\
    <img src="styles/legend/RTDusunWungurja_6_0.png" /> RT 01 Dusun Wungurja<br />\
    <img src="styles/legend/RTDusunWungurja_6_1.png" /> Rt 02 Dusun Wungurja<br />\
    <img src="styles/legend/RTDusunWungurja_6_2.png" /> <br />'
        });
var format_RtDusunKedungringin_7 = new ol.format.GeoJSON();
var features_RtDusunKedungringin_7 = format_RtDusunKedungringin_7.readFeatures(json_RtDusunKedungringin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtDusunKedungringin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtDusunKedungringin_7.addFeatures(features_RtDusunKedungringin_7);
var lyr_RtDusunKedungringin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RtDusunKedungringin_7, 
                style: style_RtDusunKedungringin_7,
                popuplayertitle: "Rt Dusun Kedungringin",
                interactive: true,
    title: 'Rt Dusun Kedungringin<br />\
    <img src="styles/legend/RtDusunKedungringin_7_0.png" /> Rt 01 Dusun Kedungringin<br />\
    <img src="styles/legend/RtDusunKedungringin_7_1.png" /> <br />\
    <img src="styles/legend/RtDusunKedungringin_7_2.png" /> Rt 02 Dusun Kedungringin<br />\
    <img src="styles/legend/RtDusunKedungringin_7_3.png" /> Rt 03 Dusun Kedungringin<br />\
    <img src="styles/legend/RtDusunKedungringin_7_4.png" /> Rt 04 Dusun Kedungringin<br />'
        });
var format_RtDusunLentong_8 = new ol.format.GeoJSON();
var features_RtDusunLentong_8 = format_RtDusunLentong_8.readFeatures(json_RtDusunLentong_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtDusunLentong_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtDusunLentong_8.addFeatures(features_RtDusunLentong_8);
var lyr_RtDusunLentong_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RtDusunLentong_8, 
                style: style_RtDusunLentong_8,
                popuplayertitle: "Rt Dusun Lentong",
                interactive: true,
                title: '<img src="styles/legend/RtDusunLentong_8.png" /> Rt Dusun Lentong'
            });
var format_RTDusunPentasan_9 = new ol.format.GeoJSON();
var features_RTDusunPentasan_9 = format_RTDusunPentasan_9.readFeatures(json_RTDusunPentasan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunPentasan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunPentasan_9.addFeatures(features_RTDusunPentasan_9);
var lyr_RTDusunPentasan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunPentasan_9, 
                style: style_RTDusunPentasan_9,
                popuplayertitle: "RT Dusun Pentasan",
                interactive: true,
    title: 'RT Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_0.png" /> <br />\
    <img src="styles/legend/RTDusunPentasan_9_1.png" /> Rt 01 Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_2.png" /> Rt 02 Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_3.png" /> Rt 03 Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_4.png" /> Rt 04 Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_5.png" /> Rt 05 Dusun Pentasan<br />\
    <img src="styles/legend/RTDusunPentasan_9_6.png" /> Rt 06 Dusun Pentasan<br />'
        });
var format_Lapangan_10 = new ol.format.GeoJSON();
var features_Lapangan_10 = format_Lapangan_10.readFeatures(json_Lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_10.addFeatures(features_Lapangan_10);
var lyr_Lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_10, 
                style: style_Lapangan_10,
                popuplayertitle: "Lapangan",
                interactive: true,
    title: 'Lapangan<br />\
    <img src="styles/legend/Lapangan_10_0.png" /> Lapangan Desa Layansari<br />\
    <img src="styles/legend/Lapangan_10_1.png" /> <br />'
        });
var format_MasjidMushola_11 = new ol.format.GeoJSON();
var features_MasjidMushola_11 = format_MasjidMushola_11.readFeatures(json_MasjidMushola_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidMushola_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidMushola_11.addFeatures(features_MasjidMushola_11);
var lyr_MasjidMushola_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidMushola_11, 
                style: style_MasjidMushola_11,
                popuplayertitle: "Masjid & Mushola",
                interactive: true,
    title: 'Masjid & Mushola<br />\
    <img src="styles/legend/MasjidMushola_11_0.png" /> Masjid Al-Hikmah<br />\
    <img src="styles/legend/MasjidMushola_11_1.png" /> Masjid Baiturrohman<br />\
    <img src="styles/legend/MasjidMushola_11_2.png" /> Mushola Anur<br />\
    <img src="styles/legend/MasjidMushola_11_3.png" /> Mushola Darussaadah<br />\
    <img src="styles/legend/MasjidMushola_11_4.png" /> <br />'
        });
var format_RumahKetuaRt_12 = new ol.format.GeoJSON();
var features_RumahKetuaRt_12 = format_RumahKetuaRt_12.readFeatures(json_RumahKetuaRt_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKetuaRt_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRt_12.addFeatures(features_RumahKetuaRt_12);
var lyr_RumahKetuaRt_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRt_12, 
                style: style_RumahKetuaRt_12,
                popuplayertitle: "Rumah Ketua Rt",
                interactive: true,
    title: 'Rumah Ketua Rt<br />\
    <img src="styles/legend/RumahKetuaRt_12_0.png" /> Kertua Rt 05<br />\
    <img src="styles/legend/RumahKetuaRt_12_1.png" /> Ketua Rt 01<br />\
    <img src="styles/legend/RumahKetuaRt_12_2.png" /> Ketua Rt 02<br />\
    <img src="styles/legend/RumahKetuaRt_12_3.png" /> Ketua Rt 03<br />\
    <img src="styles/legend/RumahKetuaRt_12_4.png" /> Ketua Rt 04<br />\
    <img src="styles/legend/RumahKetuaRt_12_5.png" /> Ketua Rt 06<br />\
    <img src="styles/legend/RumahKetuaRt_12_6.png" /> <br />'
        });
var format_KepalaDesaLayansari_13 = new ol.format.GeoJSON();
var features_KepalaDesaLayansari_13 = format_KepalaDesaLayansari_13.readFeatures(json_KepalaDesaLayansari_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepalaDesaLayansari_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepalaDesaLayansari_13.addFeatures(features_KepalaDesaLayansari_13);
var lyr_KepalaDesaLayansari_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepalaDesaLayansari_13, 
                style: style_KepalaDesaLayansari_13,
                popuplayertitle: "Kepala Desa Layansari",
                interactive: true,
    title: 'Kepala Desa Layansari<br />\
    <img src="styles/legend/KepalaDesaLayansari_13_0.png" /> Rumah Kepala Desa Layansari<br />\
    <img src="styles/legend/KepalaDesaLayansari_13_1.png" /> <br />'
        });
var format_Rumahkepalartrw_14 = new ol.format.GeoJSON();
var features_Rumahkepalartrw_14 = format_Rumahkepalartrw_14.readFeatures(json_Rumahkepalartrw_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahkepalartrw_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahkepalartrw_14.addFeatures(features_Rumahkepalartrw_14);
var lyr_Rumahkepalartrw_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahkepalartrw_14, 
                style: style_Rumahkepalartrw_14,
                popuplayertitle: "Rumah kepala rt & rw",
                interactive: true,
    title: 'Rumah kepala rt & rw<br />\
    <img src="styles/legend/Rumahkepalartrw_14_0.png" /> Kertua Rt 01<br />\
    <img src="styles/legend/Rumahkepalartrw_14_1.png" /> Kertua Rt 02<br />\
    <img src="styles/legend/Rumahkepalartrw_14_2.png" /> Kertua Rt 03<br />\
    <img src="styles/legend/Rumahkepalartrw_14_3.png" /> Kertua Rt 04<br />\
    <img src="styles/legend/Rumahkepalartrw_14_4.png" /> Kertua Rw 01<br />\
    <img src="styles/legend/Rumahkepalartrw_14_5.png" /> Kertua Rw 02<br />\
    <img src="styles/legend/Rumahkepalartrw_14_6.png" /> Kertua Rw 05<br />\
    <img src="styles/legend/Rumahkepalartrw_14_7.png" /> Kertua Rw 06<br />\
    <img src="styles/legend/Rumahkepalartrw_14_8.png" /> Kertua Rw 07<br />\
    <img src="styles/legend/Rumahkepalartrw_14_9.png" /> Kertua Rw 08<br />\
    <img src="styles/legend/Rumahkepalartrw_14_10.png" /> Ketua RT 01<br />\
    <img src="styles/legend/Rumahkepalartrw_14_11.png" /> <br />'
        });
var format_Pendidikan_15 = new ol.format.GeoJSON();
var features_Pendidikan_15 = format_Pendidikan_15.readFeatures(json_Pendidikan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_15.addFeatures(features_Pendidikan_15);
var lyr_Pendidikan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_15, 
                style: style_Pendidikan_15,
                popuplayertitle: "Pendidikan",
                interactive: true,
    title: 'Pendidikan<br />\
    <img src="styles/legend/Pendidikan_15_0.png" /> <br />\
    <img src="styles/legend/Pendidikan_15_1.png" /> MI Layansari 01<br />\
    <img src="styles/legend/Pendidikan_15_2.png" /> MI Layansari 02<br />\
    <img src="styles/legend/Pendidikan_15_3.png" /> SDN Layansari 01<br />\
    <img src="styles/legend/Pendidikan_15_4.png" /> SDN Layansari 02<br />\
    <img src="styles/legend/Pendidikan_15_5.png" /> SDN Layansari 03<br />\
    <img src="styles/legend/Pendidikan_15_6.png" /> SMP Satu Atap Satu Gandrungmanggu<br />'
        });
var format_KantorDesaLayansari_16 = new ol.format.GeoJSON();
var features_KantorDesaLayansari_16 = format_KantorDesaLayansari_16.readFeatures(json_KantorDesaLayansari_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorDesaLayansari_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorDesaLayansari_16.addFeatures(features_KantorDesaLayansari_16);
var lyr_KantorDesaLayansari_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorDesaLayansari_16, 
                style: style_KantorDesaLayansari_16,
                popuplayertitle: "Kantor Desa Layansari",
                interactive: true,
    title: 'Kantor Desa Layansari<br />\
    <img src="styles/legend/KantorDesaLayansari_16_0.png" /> Kantor Desa Layansari<br />\
    <img src="styles/legend/KantorDesaLayansari_16_1.png" /> <br />'
        });
var format_KlinikSahabat_17 = new ol.format.GeoJSON();
var features_KlinikSahabat_17 = format_KlinikSahabat_17.readFeatures(json_KlinikSahabat_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlinikSahabat_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlinikSahabat_17.addFeatures(features_KlinikSahabat_17);
var lyr_KlinikSahabat_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlinikSahabat_17, 
                style: style_KlinikSahabat_17,
                popuplayertitle: "Klinik Sahabat",
                interactive: true,
    title: 'Klinik Sahabat<br />\
    <img src="styles/legend/KlinikSahabat_17_0.png" /> Klinik Sahabat<br />\
    <img src="styles/legend/KlinikSahabat_17_1.png" /> <br />'
        });
var format_RumahSaya_18 = new ol.format.GeoJSON();
var features_RumahSaya_18 = format_RumahSaya_18.readFeatures(json_RumahSaya_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSaya_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSaya_18.addFeatures(features_RumahSaya_18);
var lyr_RumahSaya_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSaya_18, 
                style: style_RumahSaya_18,
                popuplayertitle: "Rumah Saya",
                interactive: true,
    title: 'Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_18_0.png" /> Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_18_1.png" /> <br />'
        });
var format_RtDusunWungusari_19 = new ol.format.GeoJSON();
var features_RtDusunWungusari_19 = format_RtDusunWungusari_19.readFeatures(json_RtDusunWungusari_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtDusunWungusari_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtDusunWungusari_19.addFeatures(features_RtDusunWungusari_19);
var lyr_RtDusunWungusari_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RtDusunWungusari_19, 
                style: style_RtDusunWungusari_19,
                popuplayertitle: "Rt Dusun Wungusari",
                interactive: true,
    title: 'Rt Dusun Wungusari<br />\
    <img src="styles/legend/RtDusunWungusari_19_0.png" /> Rt 01 Dusun Wungusari<br />\
    <img src="styles/legend/RtDusunWungusari_19_1.png" /> Rt 02 Dusun Wungusari<br />\
    <img src="styles/legend/RtDusunWungusari_19_2.png" /> Rt 03 Dusun Wungusari<br />\
    <img src="styles/legend/RtDusunWungusari_19_3.png" /> Rt 04 Dususn Wungusari<br />\
    <img src="styles/legend/RtDusunWungusari_19_4.png" /> <br />'
        });
var format_RtDusunCawilayan_20 = new ol.format.GeoJSON();
var features_RtDusunCawilayan_20 = format_RtDusunCawilayan_20.readFeatures(json_RtDusunCawilayan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtDusunCawilayan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtDusunCawilayan_20.addFeatures(features_RtDusunCawilayan_20);
var lyr_RtDusunCawilayan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RtDusunCawilayan_20, 
                style: style_RtDusunCawilayan_20,
                popuplayertitle: "Rt Dusun Cawilayan",
                interactive: true,
    title: 'Rt Dusun Cawilayan<br />\
    <img src="styles/legend/RtDusunCawilayan_20_0.png" /> Rt 01 Dusun Cawilayan<br />\
    <img src="styles/legend/RtDusunCawilayan_20_1.png" /> Rt 02 Dusun Cawilayan<br />\
    <img src="styles/legend/RtDusunCawilayan_20_2.png" /> Rt 03 Dusun Cawilayan<br />\
    <img src="styles/legend/RtDusunCawilayan_20_3.png" /> Rt 05 Dusun Cawilayan<br />\
    <img src="styles/legend/RtDusunCawilayan_20_4.png" /> <br />'
        });
var format_RtDusunTegalsari_21 = new ol.format.GeoJSON();
var features_RtDusunTegalsari_21 = format_RtDusunTegalsari_21.readFeatures(json_RtDusunTegalsari_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtDusunTegalsari_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtDusunTegalsari_21.addFeatures(features_RtDusunTegalsari_21);
var lyr_RtDusunTegalsari_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RtDusunTegalsari_21, 
                style: style_RtDusunTegalsari_21,
                popuplayertitle: "Rt Dusun Tegalsari",
                interactive: true,
    title: 'Rt Dusun Tegalsari<br />\
    <img src="styles/legend/RtDusunTegalsari_21_0.png" /> Rt 01 Dusun Tegalsari<br />\
    <img src="styles/legend/RtDusunTegalsari_21_1.png" /> Rt 02 Dusun Tegalsari<br />\
    <img src="styles/legend/RtDusunTegalsari_21_2.png" /> Rt 03 Dusun Tegalsari<br />\
    <img src="styles/legend/RtDusunTegalsari_21_3.png" /> <br />'
        });
var format_Clipped_22 = new ol.format.GeoJSON();
var features_Clipped_22 = format_Clipped_22.readFeatures(json_Clipped_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_22.addFeatures(features_Clipped_22);
var lyr_Clipped_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_22, 
                style: style_Clipped_22,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_22_0.png" /> residential<br />\
    <img src="styles/legend/Clipped_22_1.png" /> tertiary<br />\
    <img src="styles/legend/Clipped_22_2.png" /> unclassified<br />\
    <img src="styles/legend/Clipped_22_3.png" /> <br />'
        });
var format_Jln_23 = new ol.format.GeoJSON();
var features_Jln_23 = format_Jln_23.readFeatures(json_Jln_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jln_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jln_23.addFeatures(features_Jln_23);
var lyr_Jln_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jln_23, 
                style: style_Jln_23,
                popuplayertitle: "Jln",
                interactive: true,
    title: 'Jln<br />\
    <img src="styles/legend/Jln_23_0.png" /> Jl Ir Karyono<br />\
    <img src="styles/legend/Jln_23_1.png" /> JL. A.Yani<br />\
    <img src="styles/legend/Jln_23_2.png" /> JL. Arjuna<br />\
    <img src="styles/legend/Jln_23_3.png" /> JL. Bima<br />\
    <img src="styles/legend/Jln_23_4.png" /> JL. Gurameh<br />\
    <img src="styles/legend/Jln_23_5.png" /> JL. Mangga<br />\
    <img src="styles/legend/Jln_23_6.png" /> JL. Nakula<br />\
    <img src="styles/legend/Jln_23_7.png" /> JL. Pentasan<br />\
    <img src="styles/legend/Jln_23_8.png" /> JL. Ra Kartini<br />\
    <img src="styles/legend/Jln_23_9.png" /> JL. Rambutan<br />\
    <img src="styles/legend/Jln_23_10.png" /> JL. Tengiri<br />\
    <img src="styles/legend/Jln_23_11.png" /> JL. Tepus<br />\
    <img src="styles/legend/Jln_23_12.png" /> <br />'
        });
var format_UMKM_24 = new ol.format.GeoJSON();
var features_UMKM_24 = format_UMKM_24.readFeatures(json_UMKM_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_24.addFeatures(features_UMKM_24);
var lyr_UMKM_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_24, 
                style: style_UMKM_24,
                popuplayertitle: "UMKM",
                interactive: true,
    title: 'UMKM<br />\
    <img src="styles/legend/UMKM_24_0.png" /> IN Gor Layasari<br />\
    <img src="styles/legend/UMKM_24_1.png" /> Pabrik Gunla<br />\
    <img src="styles/legend/UMKM_24_2.png" /> Pondok Pesantren Roudlotut Thulaab<br />\
    <img src="styles/legend/UMKM_24_3.png" /> Pupuk Super eco farming<br />\
    <img src="styles/legend/UMKM_24_4.png" /> Sablon<br />\
    <img src="styles/legend/UMKM_24_5.png" /> Tempat Giling Padi<br />\
    <img src="styles/legend/UMKM_24_6.png" /> UD.Syirkah Rice Mill<br />\
    <img src="styles/legend/UMKM_24_7.png" /> <br />'
        });
var format_RumahTetangga_25 = new ol.format.GeoJSON();
var features_RumahTetangga_25 = format_RumahTetangga_25.readFeatures(json_RumahTetangga_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahTetangga_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahTetangga_25.addFeatures(features_RumahTetangga_25);
var lyr_RumahTetangga_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahTetangga_25, 
                style: style_RumahTetangga_25,
                popuplayertitle: "Rumah Tetangga",
                interactive: true,
    title: 'Rumah Tetangga<br />\
    <img src="styles/legend/RumahTetangga_25_0.png" /> Bpk Ahmad<br />\
    <img src="styles/legend/RumahTetangga_25_1.png" /> Bpk Alan<br />\
    <img src="styles/legend/RumahTetangga_25_2.png" /> Bpk Alif<br />\
    <img src="styles/legend/RumahTetangga_25_3.png" /> Bpk Anto<br />\
    <img src="styles/legend/RumahTetangga_25_4.png" /> Bpk Bawuk<br />\
    <img src="styles/legend/RumahTetangga_25_5.png" /> Bpk Dani<br />\
    <img src="styles/legend/RumahTetangga_25_6.png" /> Bpk Danu<br />\
    <img src="styles/legend/RumahTetangga_25_7.png" /> Bpk Dasir<br />\
    <img src="styles/legend/RumahTetangga_25_8.png" /> Bpk Demun<br />\
    <img src="styles/legend/RumahTetangga_25_9.png" /> Bpk Gobed<br />\
    <img src="styles/legend/RumahTetangga_25_10.png" /> Bpk Goleng<br />\
    <img src="styles/legend/RumahTetangga_25_11.png" /> Bpk Gupron<br />\
    <img src="styles/legend/RumahTetangga_25_12.png" /> Bpk Himin<br />\
    <img src="styles/legend/RumahTetangga_25_13.png" /> Bpk Huda<br />\
    <img src="styles/legend/RumahTetangga_25_14.png" /> Bpk Irfan<br />\
    <img src="styles/legend/RumahTetangga_25_15.png" /> Bpk isla<br />\
    <img src="styles/legend/RumahTetangga_25_16.png" /> Bpk jamal<br />\
    <img src="styles/legend/RumahTetangga_25_17.png" /> Bpk Jumad<br />\
    <img src="styles/legend/RumahTetangga_25_18.png" /> Bpk Kadir<br />\
    <img src="styles/legend/RumahTetangga_25_19.png" /> Bpk Lisin<br />\
    <img src="styles/legend/RumahTetangga_25_20.png" /> Bpk Miskan<br />\
    <img src="styles/legend/RumahTetangga_25_21.png" /> Bpk Muan<br />\
    <img src="styles/legend/RumahTetangga_25_22.png" /> Bpk Muji<br />\
    <img src="styles/legend/RumahTetangga_25_23.png" /> Bpk Muso<br />\
    <img src="styles/legend/RumahTetangga_25_24.png" /> Bpk najib<br />\
    <img src="styles/legend/RumahTetangga_25_25.png" /> Bpk najmudin<br />\
    <img src="styles/legend/RumahTetangga_25_26.png" /> Bpk Ngadimun<br />\
    <img src="styles/legend/RumahTetangga_25_27.png" /> Bpk Nur<br />\
    <img src="styles/legend/RumahTetangga_25_28.png" /> Bpk Nyamun<br />\
    <img src="styles/legend/RumahTetangga_25_29.png" /> Bpk Nyariman<br />\
    <img src="styles/legend/RumahTetangga_25_30.png" /> Bpk Padil<br />\
    <img src="styles/legend/RumahTetangga_25_31.png" /> Bpk pon<br />\
    <img src="styles/legend/RumahTetangga_25_32.png" /> Bpk Rafly<br />\
    <img src="styles/legend/RumahTetangga_25_33.png" /> Bpk Rasam<br />\
    <img src="styles/legend/RumahTetangga_25_34.png" /> Bpk Rasimun<br />\
    <img src="styles/legend/RumahTetangga_25_35.png" /> Bpk Rastim<br />\
    <img src="styles/legend/RumahTetangga_25_36.png" /> Bpk Rendi<br />\
    <img src="styles/legend/RumahTetangga_25_37.png" /> Bpk Restu<br />\
    <img src="styles/legend/RumahTetangga_25_38.png" /> Bpk Riadi<br />\
    <img src="styles/legend/RumahTetangga_25_39.png" /> Bpk Robi<br />\
    <img src="styles/legend/RumahTetangga_25_40.png" /> Bpk Sariman<br />\
    <img src="styles/legend/RumahTetangga_25_41.png" /> Bpk Sartiman<br />\
    <img src="styles/legend/RumahTetangga_25_42.png" /> Bpk Sibed<br />\
    <img src="styles/legend/RumahTetangga_25_43.png" /> Bpk Simu<br />\
    <img src="styles/legend/RumahTetangga_25_44.png" /> Bpk Slamet<br />\
    <img src="styles/legend/RumahTetangga_25_45.png" /> Bpk Sodri<br />\
    <img src="styles/legend/RumahTetangga_25_46.png" /> Bpk Sudi<br />\
    <img src="styles/legend/RumahTetangga_25_47.png" /> Bpk Supri<br />\
    <img src="styles/legend/RumahTetangga_25_48.png" /> Bpk Sutris<br />\
    <img src="styles/legend/RumahTetangga_25_49.png" /> Bpk Tarian<br />\
    <img src="styles/legend/RumahTetangga_25_50.png" /> Bpk Tarman<br />\
    <img src="styles/legend/RumahTetangga_25_51.png" /> Bpk Tomi<br />\
    <img src="styles/legend/RumahTetangga_25_52.png" /> Bpk Tri<br />\
    <img src="styles/legend/RumahTetangga_25_53.png" /> Bpk Untung<br />\
    <img src="styles/legend/RumahTetangga_25_54.png" /> Bpk Wahyu<br />\
    <img src="styles/legend/RumahTetangga_25_55.png" /> Bpk Yanto<br />\
    <img src="styles/legend/RumahTetangga_25_56.png" /> Bpk Yasin<br />\
    <img src="styles/legend/RumahTetangga_25_57.png" /> Bpk Yatno<br />\
    <img src="styles/legend/RumahTetangga_25_58.png" /> Bpk Yono<br />\
    <img src="styles/legend/RumahTetangga_25_59.png" /> Bpk Zamud<br />\
    <img src="styles/legend/RumahTetangga_25_60.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDNADM_ADM_4_1.setVisible(true);lyr_RW_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_sawah_4.setVisible(true);lyr_Kuburan_5.setVisible(true);lyr_RTDusunWungurja_6.setVisible(true);lyr_RtDusunKedungringin_7.setVisible(true);lyr_RtDusunLentong_8.setVisible(true);lyr_RTDusunPentasan_9.setVisible(true);lyr_Lapangan_10.setVisible(true);lyr_MasjidMushola_11.setVisible(true);lyr_RumahKetuaRt_12.setVisible(true);lyr_KepalaDesaLayansari_13.setVisible(true);lyr_Rumahkepalartrw_14.setVisible(true);lyr_Pendidikan_15.setVisible(true);lyr_KantorDesaLayansari_16.setVisible(true);lyr_KlinikSahabat_17.setVisible(true);lyr_RumahSaya_18.setVisible(true);lyr_RtDusunWungusari_19.setVisible(true);lyr_RtDusunCawilayan_20.setVisible(true);lyr_RtDusunTegalsari_21.setVisible(true);lyr_Clipped_22.setVisible(true);lyr_Jln_23.setVisible(true);lyr_UMKM_24.setVisible(true);lyr_RumahTetangga_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm41_IDNADM_ADM_4_1,lyr_RW_2,lyr_Clipped_3,lyr_sawah_4,lyr_Kuburan_5,lyr_RTDusunWungurja_6,lyr_RtDusunKedungringin_7,lyr_RtDusunLentong_8,lyr_RTDusunPentasan_9,lyr_Lapangan_10,lyr_MasjidMushola_11,lyr_RumahKetuaRt_12,lyr_KepalaDesaLayansari_13,lyr_Rumahkepalartrw_14,lyr_Pendidikan_15,lyr_KantorDesaLayansari_16,lyr_KlinikSahabat_17,lyr_RumahSaya_18,lyr_RtDusunWungusari_19,lyr_RtDusunCawilayan_20,lyr_RtDusunTegalsari_21,lyr_Clipped_22,lyr_Jln_23,lyr_UMKM_24,lyr_RumahTetangga_25];
lyr_gadm41_IDNADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_RW_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Clipped_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_sawah_4.set('fieldAliases', {'id': 'id', 'Sawah': 'Sawah', });
lyr_Kuburan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RTDusunWungurja_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RtDusunKedungringin_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RtDusunLentong_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RTDusunPentasan_9.set('fieldAliases', {'id': 'id', 'RT': 'RT', });
lyr_Lapangan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_MasjidMushola_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RumahKetuaRt_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KepalaDesaLayansari_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumahkepalartrw_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pendidikan_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KantorDesaLayansari_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KlinikSahabat_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RumahSaya_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RtDusunWungusari_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RtDusunCawilayan_20.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RtDusunTegalsari_21.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Clipped_22.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Jln_23.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_UMKM_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RumahTetangga_25.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_RW_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_sawah_4.set('fieldImages', {'id': 'TextEdit', 'Sawah': 'TextEdit', });
lyr_Kuburan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RTDusunWungurja_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RtDusunKedungringin_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RtDusunLentong_8.set('fieldImages', {'id': '', 'Nama': '', });
lyr_RTDusunPentasan_9.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', });
lyr_Lapangan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_MasjidMushola_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RumahKetuaRt_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KepalaDesaLayansari_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumahkepalartrw_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pendidikan_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KantorDesaLayansari_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KlinikSahabat_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RumahSaya_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RtDusunWungusari_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RtDusunCawilayan_20.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RtDusunTegalsari_21.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_22.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Jln_23.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_UMKM_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RumahTetangga_25.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_RW_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_sawah_4.set('fieldLabels', {'id': 'no label', 'Sawah': 'no label', });
lyr_Kuburan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RTDusunWungurja_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RtDusunKedungringin_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RtDusunLentong_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RTDusunPentasan_9.set('fieldLabels', {'id': 'no label', 'RT': 'no label', });
lyr_Lapangan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_MasjidMushola_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RumahKetuaRt_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_KepalaDesaLayansari_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumahkepalartrw_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pendidikan_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_KantorDesaLayansari_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_KlinikSahabat_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RumahSaya_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RtDusunWungusari_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RtDusunCawilayan_20.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RtDusunTegalsari_21.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Clipped_22.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Jln_23.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_UMKM_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RumahTetangga_25.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahTetangga_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});