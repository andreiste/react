import "./TypeScriptWidget.css";

class TypeScriptWidget {

    container: HTMLDivElement

    constructor(title: string){
        this.container = document.createElement('div');
        this.container.classList.add('titleDiv')
        this.container.classList.add('esri-widget');
        this.container.classList.add('esri-component');
        this.container.innerHTML = title;
    }
}

export default TypeScriptWidget;