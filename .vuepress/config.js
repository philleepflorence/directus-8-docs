const versioning = require('./lib/versioning.js');

module.exports = {
    base: "/",
    title: "Directus Docs",
    description: "Directus. Future Proof Headless CMS for Managing Custom Database Content.",
    ga: "UA-24637628-7",
    plugins: [
    	['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/search', {
            searchMaxSuggestions: 10,
            /*
	            Only search the latest version, e.g. 8.7, otherwise many duplicates will show up
            */ 
            test: `/${versioning.versions.latest.replace('.', '\\.')}/`
        }]
    ],
    markdown: {
        extendMarkdown(md) {
            md.use(require('markdown-it-include'), {
                root: './.vuepress/_includes',
                includeRe: /\!{3}\s*include\s*(.+?)\s*\!{3}/i
            });
        }
    },
    head: [
        ["link", {
            rel: "manifest",
            href: "/site.webmanifest"
        }],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5"
            }
        ],
        [
            "link",
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }
        ],,
        [
            "link",
		    {
	            rel: 'stylesheet',
	            type: 'text/css',
	            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
	        }
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                type: "image/x-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }
        ],
        ["meta", {
            name: "application-name",
            content: "Directus Docs"
        }],
        ["meta", {
            name: "theme-color",
            content: "#263238"
        }],
        ["meta", {
            name: "apple-mobile-web-app-title",
            content: "Directus Docs"
        }],
        ["meta", {
            name: "msapplication-TileColor",
            content: "#263238"
        }],
        ["meta", {
            name: "msapplication-config",
            content: "/browserconfig.xml"
        }]
    ],
    themeConfig: {
        lastUpdated: "Last Updated",
        repo: "directus/docs",
        docsDir: "",
        editLinks: true,
        serviceWorker: true,
        nav: [
        	{
                text: 'Versions',
                items: versioning.linksFor()
            },
			{
                text: "Website",
                link: "https://directus.io"
            },
            {
                text: "Cloud",
                link: "https://directus.cloud"
            },
            {
                text: "Demo",
                link: "https://directus.app"
            }
        ],
        versions: {
            latest: versioning.versions.latest,
            selected: versioning.versions.latest,
            all: versioning.versions.all
        },
        sidebarDepth: 1,
        sidebar: versioning.sidebars,
        searchPlaceholder: 'Search Directus Docs...'
    },
    extraWatchFiles: [
	    '**/*.md', 
	    '**/*.vue', 
	    '**/*.js', 
	    '**/*.json'
    ]
};