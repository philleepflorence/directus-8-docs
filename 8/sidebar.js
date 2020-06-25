module.exports = [{
		title: "Directus 8",
		collapsable: false
	}, {
		title: "Getting Started",
		collapsable: true,
		children: [
			["getting-started/introduction", "Introduction"],
			["getting-started/installation", "Installation"],
			["getting-started/contributing", "Contributing"],
			["getting-started/supporting-directus", "Supporting Directus"],
			["getting-started/troubleshooting", "Troubleshooting"]
		]
	},
	{
		title: "Guides",
		collapsable: true,
		children: [
			"guides/user-guide",
			"guides/admin-guide",
			"guides/accountability",
			"guides/authentication",
			"guides/cli",
			"guides/collections",
			"guides/database",
			"guides/fields",
			"guides/field-types",
			"guides/files",
			"guides/interfaces",
			["guides/i18n", "Internationalization"],
			["guides/js-sdk", "JavaScript SDK"],
			"guides/layouts",
			"guides/modules",
			"guides/permissions",
			"guides/projects",
			"guides/relationships",
			"guides/roles",
			"guides/status",
			["guides/style-guide", "Style Guide"],
			"guides/upgrading",
			"guides/users"
		]
	},
	{
		title: "API Reference",
		collapsable: true,
		children: [
			["api/reference", "Introduction"],
			["api/authentication", "Authentication"],
			["api/items", "Items"],
			["api/files", "Files"],
			["api/assets", "Assets (Thumbnails)"],
			["api/activity", "Activity"],
			["api/collections", "Collections"],
			["api/collection-presets", "Collection Presets"],
			["api/extensions", "Extensions"],
			["api/fields", "Fields"],
			["api/folders", "Folders"],
			["api/graphql", "GraphQL"],
			["api/mail", "Mail"],
			["api/permissions", "Permissions"],
			["api/projects", "Projects"],
			["api/relations", "Relations"],
			["api/revisions", "Revisions"],
			["api/roles", "Roles"],
			["api/scim", "SCIM"],
			["api/server", "Server"],
			["api/settings", "Settings"],
			["api/users", "Users"],
			["api/utilities", "Utilities"]
		]
	},
	{
		title: "Extensions",
		collapsable: true,
		children: [
			["extensions/", "Introduction"],
			"extensions/auth-providers",
			"extensions/custom-endpoints",
			"extensions/hooks",
			"extensions/interfaces",
			"extensions/layouts",
			"extensions/modules",
			"extensions/storage-adapters"
		]
	},
	{
		title: "Docker",
		collapsable: true,
		children: [
			['docker/overview', 'Overview'],
			['docker/environment', 'Environment Variables'],
			['docker/faq', 'FAQ'],
		]
	},
	{
		title: "Advanced",
		collapsable: true,
		children: [
			['advanced/source', 'Local Dev Environment'],
			['advanced/ddev', 'Local Dev Environment with DDEV'],
			['advanced/server-setup', 'Server Setup'],
			['advanced/api/configuration', 'API Configuration'],
			['advanced/api/data', 'Direct Data Access']
		]
	},
	{
		title: "Directus Cloud",
		collapsable: true,
		children: [
			['cloud/overview', 'Overview'],
			['cloud/user-guide', 'User Guide']
		]
	}
]