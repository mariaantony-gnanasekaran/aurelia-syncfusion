import { DOM } from 'aurelia-pal';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
@inject(EventAggregator)
export class Index {
    constructor(ea) {
        window.oldTheme ="vendors/css/web/bootstrap-theme/ej.web.all.min.css";
        this.ea = ea;
        this.themeInfo = {
            "Flat Azure": { "path": "default-theme", "theme": "flatlight" }, "Flat Azure Dark": { "path": "flat-azure-dark", "theme": "flatdark" }, "Flat Lime": { "path": "flat-lime", "theme": "flatlight" }, "Flat Lime Dark": { "path": "flat-lime-dark", "theme": "flatdark" }, "Flat Saffron": { "path": "flat-saffron", "theme": "flatlight" },
            "Flat Saffron Dark": { "path": "flat-saffron-dark", "theme": "flatdark" }, "Gradient Azure": { "path": "gradient-azure", "theme": "gradientlight" }, "Gradient Azure Dark": { "path": "gradient-azure-dark", "theme": "gradientdark" }, "Gradient Lime": { "path": "gradient-lime", "theme": "gradientlight" }, "Gradien Lime Dark": { "path": "gradient-lime-dark", "theme": "gradientdark" },
            "Gradient Saffron": { "path": "gradient-saffron", "theme": "gradientlight" }, "Gradient Saffron Dark": { "path": "gradient-saffron-dark", "theme": "gradientdark" }, "Bootstrap": { "path": "bootstrap-theme", "theme": "bootstrap" }, "High contrast 1": { "path": "high-contrast-01", "theme": "high-contrast-01" }, "High contrast 2": { "path": "high-contrast-02", "theme": "high-contrast-01" }, "Material": { "path": "material", "theme": "material" }, "Office 365": { "path": "office-365", "theme": "material" }
        };
        this.name = ["Flat Azure", "Flat Azure Dark", "Flat Lime", "Flat Lime Dark", "Flat Saffron", "Flat Saffron Dark", "Gradient Azure", "Gradient Azure Dark", "Gradient Lime", "Gradien Lime Dark", "Gradient Saffron", "Gradient Saffron Dark", "Bootstrap","High contrast 1", "High contrast 2", "Material"];//office 365 is currently in development
    }
    click(theme) {
        window.themeName = theme;
        window.theme = this.themeInfo[theme].theme;
        jQuery('body').fadeOut(0, () => {
        this.path = this.themeInfo[theme].path;
            this.updateTheme(this.path)
                .then(() => jQuery('body').fadeIn(2000));
        });
    }

    updateTheme(path) {
       
        return Promise.all([this.removeCss(), this.updateCss(), this.themePath(path),this.commonPath(),this.datavisualizationTheme()]) .then(() => this.ea.publish('Theme', theme));
    }

    datavisualizationTheme() {
        this.update.loadChartTheme();
        this.update.loadSunburstTheme();
        this.update.loadBulletTheme();
        this.update.loadGaugeTheme();
        this.update.loadRangeNavigatorTheme();
        window.oldTheme = `vendors/css/web/${this.path}/ej.web.all.min.css`;
    }
    themePath(path) {
        let themePath = System.normalizeSync(`syncfusion-javascript/css/web/${path}/ej.web.all.min.css!`);
        this.deletePath(themePath);
        return System.import(themePath);
    }
    commonPath() {
        let commonPath = System.normalizeSync(`syncfusion-javascript/css/web/responsive-css/ej.responsive.css!`);
        this.deletePath(commonPath);
        return System.import(commonPath);
    }
    updateCss() {
        if (!window.theme.includes("bootstrap")) {
            $("body").addClass("iconFix");
        }
        else {
            $("body").removeClass("iconFix");
        }
        if (window.themeName.includes("Material")) {
            $("body").addClass("material");
        }
        else {
            $("body").removeClass("material");
        }
        if (window.theme.includes("dark") || window.theme.includes("contrast")) {
            $("body").addClass("theme-dark");
        }
        else {
            $("body").removeClass("theme-dark");
        }
    }
    removeCss() {
        jQuery('head > link').each(function () {
            if (this.href.includes(window.oldTheme) || this.href.includes('vendors/css/web/responsive-css/ej.responsive.css')) {
                DOM.removeNode(this);
            }
        });
        return 0;
    }
    deletePath(Path) {
        if (System.has(Path)) {
            System.delete(Path);
        }
    }
}