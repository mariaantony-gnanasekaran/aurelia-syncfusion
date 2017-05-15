import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
@inject(EventAggregator)
export class NavBar {
  @bindable router = null;
  constructor(ea) {
    this.event = ea;
    this.themeID = window.themeSettings;
  }
  attached() {
    this.navEvent = this.event.subscribe('router:navigation:complete', response => {
      setTimeout(() => {
        if (window.theme_URL) {
          if (window.location.hash.includes("#!")) {
            let index = window.location.hash.indexOf("#!");
            let temp_URL = window.location.hash.substr(0, index - 1);
            history.pushState(null, null, temp_URL + "/#!/" + window.theme_URL);
          }
          else {
            history.pushState(null, null, window.location.hash + "/#!/" + window.theme_URL);
          }
        }
      });
    },100)
  jQuery(this.theme).ejDialog({
      showOnInit: false,
    actionButtons: ["close", "pin"],
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
