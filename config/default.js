module.exports = {
    // websitesBaseURL: 'http://127.0.0.1:8080/results',
    websitesBaseURL: 'https://mahantaf.github.io',
    tools: {
        QualWeb: {
            enable: false,
            plugins: {
                adBlock: true,
                stealth: true
            },
            clusterOptions: {
                maxConcurrency: 5,
                timeout: 60 * 1000,
                monitor: true
            },
            launchOptions: {
                headless: "new"
            },
            reportFormat: "complex-css-selector"
        },
        AChecker: {
            enable: false,
            reportFormat: "xpath",
        },
        Axe: {
            enable: false,
            reportFormat: "css-selector",
        },
        Wave: {
            enable: false,
            baseURL: "https://wave.webaim.org",
            apiKey: "Am25w6313114",
            reportType: "3",
            reportFormat: "xpath"
        },
        a11ywatchLite: {
            enable: false,
            reportFormat: "css-selector",
        },
        continuum: {
            enable: false,
            reportFormat: "css-selector",
        }
    }
}