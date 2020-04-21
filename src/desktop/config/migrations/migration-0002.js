// @flow
function migrate(oldConfig: any) {
	return Object.assign(oldConfig, {"desktopConfigVersion": 2, "overrideFont": null})
}

export const migrateClient = migrate
export const migrateAdmin = migrate