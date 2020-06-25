module.exports = [{
        title: "Directus 6",
        collapsable: false
    },{
        title: "Getting Started",
        collapsable: true,
        children: [
            ["app/introduction/what-is-directus", "What is Directus"],
            ["app/introduction/when-to-use-directus", "Installation"]
        ]
    },
    {
        title: "User Guide",
        collapsable: true,
        children: [
            "app/user-guide/login",
            "app/user-guide/system",
            "app/user-guide/item-listing",
            "app/user-guide/item-detail",
            "app/user-guide/file-library",
            "app/user-guide/user-directory",
            "app/user-guide/messages"
        ]
    },
    {
        title: "Administrator Guide",
        collapsable: true,
        children: [
            ["app/administrator-guide/installation", "Simple Installation"],
            ["app/administrator-guide/updating", "Versions & Updating"],
            ["app/administrator-guide/settings", "Global Settings"],
            ["app/administrator-guide/storage-adapters", "Files & Storage Adapters"],
            ["app/administrator-guide/users-and-groups", "Users, Groups, & Permissions"],
            ["app/administrator-guide/tables-and-columns", "Tables & Columns"],
            ["app/administrator-guide/extensions", "Extensions"]
        ]
    },
    {
        title: "Interface Guide",
        collapsable: true,
        children: [
            "app/interface-guide/core",
            "app/interface-guide/relational",
            "app/interface-guide/custom"
        ]
    },
    {
        title: "Developer Guide",
        collapsable: true,
        children: [
            "app/developer-guide/development-install",
            "app/developer-guide/configuration",
            "app/developer-guide/example-schemas",
            "app/developer-guide/hooks",
            "app/developer-guide/cli",
            "app/developer-guide/docker",
            "app/developer-guide/vagrant",
            "app/developer-guide/apache",
            "app/developer-guide/nginx",
            "app/developer-guide/directus-tables",
            "app/developer-guide/directus-files",
            "app/developer-guide/thumbnailer"
        ]
    },
    {
        title: "Hosted Guide",
        collapsable: true,
        children: [
            ['app/hosted-guide/accounts', 'Accounts'],
            ['app/hosted-guide/billing', 'Billing'],
            ['app/hosted-guide/instances', 'Instances'],
            ['app/hosted-guide/access', 'URLS & Access']
        ]
    },
    {
        title: "API Reference",
        collapsable: true,
        children: [
            {
	            title: "Introduction",
	            collapsable: true,
	            children: [
		            ['api/overview/api-overview', 'API Overview'],
		            ['api/overview/authentication', 'Authentication'],
		            ['api/overview/endpoints', 'Endpoints'],
		            ['api/overview/filters', 'Filters'],
		            ['api/overview/objects-model', 'Directus Objects']
	            ]
            },
            {
	            title: "Items",
	            collapsable: true,
	            children: [
		            ['api/items/create-item', 'Create Item'],
		            ['api/items/get-items', 'Get Items'],
		            ['api/items/get-item', 'Get Item'],
		            ['api/items/update-item', 'Update Item'],
		            ['api/items/delete-item', 'Delete Item'],
		            ['api/items/batch-create-items', 'Batch Create Items'],
		            ['api/items/batch-update-items', 'Batch Update Items'],
		            ['api/items/batch-delete-items', 'Batch Delete Items']
	            ]
            },
            {
	            title: "Files",
	            collapsable: true,
	            children: [
		            ['api/files/create-file', 'Create File'],
		            ['api/files/get-files', 'Get Files'],
		            ['api/files/get-file', 'Get File'],
		            ['api/files/update-file', 'Update File']
	            ]
            },
            {
	            title: "Tables",
	            collapsable: true,
	            children: [
		            ['api/tables/create-table', 'Create Table'],
		            ['api/tables/get-tables', 'Get Tables'],
		            ['api/tables/get-table', 'Get Table']
	            ]
            },
            {
	            title: "Columns",
	            collapsable: true,
	            children: [
		            ['api/columns/create-column', 'Create Column'],
		            ['api/columns/get-columns', 'Get Columns'],
		            ['api/columns/get-column', 'Get Column'],
		            ['api/columns/update-column', 'Update Column'],
		            ['api/columns/delete-column', 'Delete Column']
	            ]
            },
            {
	            title: "Groups",
	            collapsable: true,
	            children: [
		            ['api/groups/create-group', 'Create Group'],
		            ['api/groups/get-groups', 'Get Groups'],
		            ['api/groups/get-group', 'Get Group']
	            ]
            },
            {
	            title: "Group Privileges",
	            collapsable: true,
	            children: [
		            ['api/privileges/create-privileges', 'Create Privileges'],
		            ['api/privileges/get-privileges', 'Get Privileges'],
		            ['api/privileges/get-table-privileges', 'Get Table Privileges'],
		            ['api/privileges/update-privileges', 'Update Privileges']
	            ]
            },
            {
	            title: "Preferences",
	            collapsable: true,
	            children: [
		            ['api/preferences/get-preferences', 'Get Preferences'],
		            ['api/preferences/update-preferences', 'Update Preferences']
	            ]
            },
            {
	            title: "Messages",
	            collapsable: true,
	            children: [
		            ['api/messages/get-messages', 'Get Messages'],
		            ['api/messages/get-message', 'Get Message']
	            ]
            },
            {
	            title: "Activity",
	            collapsable: true,
	            children: [
		            ['api/activity/get-activity', 'Get Activity']
	            ]
            },
            {
	            title: "Bookmarks",
	            collapsable: true,
	            children: [
		            ['api/bookmarks/get-bookmarks', 'Get All Bookmarks'],
		            ['api/bookmarks/get-user-bookmarks', 'Get User Bookmarks'],
		            ['api/bookmarks/get-bookmark', 'Get Bookmark'],
		            ['api/bookmarks/create-bookmark', 'Create Bookmark'],
		            ['api/bookmarks/delete-bookmark', 'Delete Bookmark']
	            ]
            },
            {
	            title: "Settings",
	            collapsable: true,
	            children: [
		            ['api/settings/get-settings', 'Get Settings'],
		            ['api/settings/get-type-settings', 'Get Setting By Type']
	            ]
            },
            {
	            title: "Utils",
	            collapsable: true,
	            children: [
		            ['api/utils/get-random-string', 'Random String'],
		            ['api/utils/get-hash-string', 'Hash String']
	            ]
            },
            {
	            title: "SDKs",
	            collapsable: true,
	            children: [
		            ['api/SDKs/php-sdk', 'PHP SDK'],
		            ['api/SDKs/javascript-sdk', 'Javascript SDK']
	            ]
            }
        ]
    }
]