import { Index } from './themes/index';

export function configure(aurelia) {
  window.themeSettings = "online";
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll());

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');
  aurelia.use.globalResources('shared/theme');
  aurelia.start()
    .then(au => {
      let theme = au.container.get(Index)
      let key = Object.keys(theme.themeInfo);
      if (window.location.hash.includes("#!")) {
        let index = window.location.hash.indexOf("#!");
        let urlName = window.location.hash.substr(index + 3);
        for (let name of key) {
          let temp = theme.themeInfo[name].url;
          if (temp == urlName) {
            window.themeName = name;
            window.theme = theme.themeInfo[name].theme;
            window.theme_URL = theme.themeInfo[name].theme;
            theme.path = theme.themeInfo[name].path;
            window.oldTheme = `vendors/css/web/${theme.path}/ej.web.all.min.css`;
            return theme.updateTheme(theme.path)
              .then(() => au);
          }
        }
      }
      else {
        window.oldTheme = `vendors/css/web/bootstrap-theme/ej.web.all.min.css`;
        let themePath = System.normalizeSync(`syncfusion-javascript/css/web/bootstrap-theme/ej.web.all.min.css!`);
        System.import(themePath)
        let commonPath = System.normalizeSync(`syncfusion-javascript/css/web/responsive-css/ej.responsive.css!`);
        return System.import(commonPath)
          .then(() => au);
      }

    })
    .then(au => au.setRoot('app'))
}
