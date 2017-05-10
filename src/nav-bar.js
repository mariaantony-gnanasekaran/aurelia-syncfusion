import { bindable } from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  constructor(){
    this.themeID = window.themeSettings;
  }
  attached() {
    jQuery(this.theme).ejDialog({
      showOnInit: false,
      actionButtons: ["close","pin"],
      enableAnimation: true,
      isResponsive: true,
      animation: {
        show: {
          effect: "fade",
          duration: 700
        },
        hide: {
          effect: "fade",
          duration: 700
        }
      },
      title: "Themes",

    });
    this.dialogInstance = $(this.theme).data("ejDialog");
  }
  showDialog() {
      this.dialogInstance.open();
    }
  higlightMenuItem(args) {
    args.detail.element.classList.add('e-active');
  }
}
