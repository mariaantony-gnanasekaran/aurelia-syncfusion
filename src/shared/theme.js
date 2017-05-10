import { noView } from 'aurelia-framework';
@noView
export class Theme {

    loadChartTheme() {
        let chartInstance = $("ej-chart").data("ejChart");
        if (chartInstance && window.theme) {
            chartInstance.option({
                theme: window.theme,
            });
            chartInstance.animate(chartInstance.model.series);
        }
    }
    loadSunburstTheme() {
        let sunburstInstance = $("ej-sunburst-chart").data("ejSunburstChart");
        if (sunburstInstance && window.theme) {
            if (window.theme.includes("dark") || window.theme.includes("contrast")) {
                sunburstInstance.option("theme", "flatdark");
            }
            else
                sunburstInstance.option("theme", "flatlight");
        }
    }
    loadBulletTheme() {
        let bulletInstance = $("ej-bullet-graph").data("ejBulletGraph");
        if (bulletInstance && window.theme) {
            if (window.theme.includes("dark") || window.theme.includes("contrast")) {
                bulletInstance.option("theme", "flatdark");
            }
            else if (window.theme.includes("material")) {
                bulletInstance.option("theme", "material");
            }
            else {
                bulletInstance.option("theme", "flatlight");
            }
        }
    }
    loadGaugeTheme() {
        let gaugeInstance = $("ej-circular-gauge").data("ejCircularGauge") || $("ej-linear-gauge").data("ejLinearGauge") || $("ej-digital-gauge").data("ejDigitalGauge");
        if (gaugeInstance && window.theme) {
            if (window.theme.includes("dark") || window.theme.includes("contrast")) {
                gaugeInstance.option("theme", "flatdark");
            }
            else
                gaugeInstance.option("theme", "flatlight");
        }
    }
    loadRangeNavigatorTheme() {
        let rangeInstance = $("ej-range-navigator").data("ejRangeNavigator");
        if (rangeInstance && window.theme) {
            if (window.theme.includes("bootstrap") || window.theme.includes("material")) {
                rangeInstance.option("theme", "flatlight");
            }
            else if (window.theme.includes("contrast")) {
                rangeInstance.option("theme", "flatdark");
            }
            else
                rangeInstance.option("theme", window.theme);
        }
    }
}