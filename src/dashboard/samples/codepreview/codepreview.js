export class CodePreview{
    constructor(){
        this.url=window.location.hash.substr(34)
        this.html=`dashboard/samples/${this.url}/${this.url}.html`;
        this.js=`dashboard/samples/${this.url}/${this.url}.js`;
        this.css=`dashboard/samples/${this.url}/${this.url}.css`;
    }
}