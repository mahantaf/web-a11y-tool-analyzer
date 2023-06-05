module.exports = {
    websitesBaseURL: 'http://127.0.0.1:8080/results',
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
            apiKey: "EXq9hMiB3114",
            reportType: "3",
            reportFormat: "xpath"
        }
    }
}