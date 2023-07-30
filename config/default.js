module.exports = {
    websitesBaseURL: 'https://mahantaf.github.io',
    tools: {
        QualWeb: {
            enable: true,
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
            enable: true,
            reportFormat: "xpath",
        },
        Axe: {
            enable: true,
            reportFormat: "css-selector",
        },
        Wave: {
            enable: true,
            baseURL: "https://wave.webaim.org",
            apiKey: "Am25w6313114",
            reportType: "3",
            reportFormat: "xpath"
        },
        a11ywatchLite: {
            enable: true,
            reportFormat: "css-selector",
        },
        continuum: {
            enable: true,
            reportFormat: "css-selector",
        }
    }
}