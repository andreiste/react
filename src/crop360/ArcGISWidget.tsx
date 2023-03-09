// @ts-nocheck
/** @jsxRuntime classic */
/** @jsx tsx */

import Widget from "@arcgis/core/widgets/Widget";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators"
import { tsx } from "@arcgis/core/widgets/support/widget";

@subclass("esri.widgets.ArcGISWidget")
class ArcGISWidget extends Widget {

    constructor(params?: any) {
        super(params);
    }
    render() {
        return (
            <div>Crop360</div>
        );
    }
}

export default ArcGISWidget;