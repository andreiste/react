import Widget from "@arcgis/core/widgets/Widget";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators"

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