import { useRef, useEffect } from "react";

import ArcGISMap from "@arcgis/core/Map";

import MapView from "@arcgis/core/views/MapView";

import TypeScriptWidget from "./TypeScriptWidget";

import ArcGISWidget from "./ArcGISWidget";

import ButtonMUIComponent from "./ButtonMUIComponent";

import { createRoot } from "react-dom/client";

import "./Map.css";


interface MapProperties{
    centerX: number,
    centerY: number,
    zoom: number
}

function Map(props: MapProperties) {

    const mapDiv = useRef(null);

    useEffect(()=> {
        if (mapDiv.current){
            const map = new ArcGISMap({
                basemap: "satellite"
            });
        
            const view = new MapView({
                map: map,
                container: mapDiv.current,
                center: [props.centerX,props.centerY],
                zoom: props.zoom
            });

            //Widget creat doar cu TypeScript
            const typeScriptWidget = new TypeScriptWidget("Crop360");
            view.ui.add(typeScriptWidget.container,"top-right");

            //Widget creat cu clasa din ArcGIS Maps SDK for JavaScript
            const arcgisWidget = new ArcGISWidget();
            view.ui.add(arcgisWidget,"top-right");

            //Buton creat cu React si Material UI
            const node = document.createElement("div");
            view.ui.add(node,"top-right");
            const root = createRoot(node);
            root.render(<ButtonMUIComponent info="Crop360" />)
        }
    });

    return (<div className="mapDiv" ref={mapDiv}></div>);
}

export default Map;

