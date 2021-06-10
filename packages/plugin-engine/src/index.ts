import { InstancePlugin, RunApi, SetupApi } from 'plugin-sdk';

export type ApiImplement = {
	generateRunApi(plugin: InstancePlugin): RunApi;
	generateSetupApi(plugin: InstancePlugin): SetupApi;
};

export class Engine {
	impl: ApiImplement;
	plugins: InstancePlugin[];

	constructor(props: {
		impl: ApiImplement;
	}) {
		this.impl = props.impl;
		this.plugins = [];
	}

	use(plugin: InstancePlugin) {
		this.plugins.push(plugin);
	}

	async setup() {
		const setupPromises = this.plugins.map(p => {
			const setupApi = this.impl.generateSetupApi(p);
			return p.setup(setupApi);
		});
		await Promise.all(setupPromises);
	}

	async run() {
		const runPromises = this.plugins.map(p => {
			const runApi = this.impl.generateRunApi(p);
			return p.run(runApi);
		});
		await Promise.all(runPromises);
	}
}
