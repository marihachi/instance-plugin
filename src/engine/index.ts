import { InstancePlugin, RunCtx, SetupCtx } from '../plugin';

export type ContextImplement = {
	generateRunCtx(plugin: InstancePlugin): RunCtx;
	generateSetupCtx(plugin: InstancePlugin): SetupCtx;
};

export class Engine {
	impl: ContextImplement;
	plugins: InstancePlugin[];

	constructor(props: {
		impl: ContextImplement;
	}) {
		this.impl = props.impl;
		this.plugins = [];
	}

	use(plugin: InstancePlugin) {
		this.plugins.push(plugin);
	}

	async start() {
		const setupPromises = this.plugins.map(p => {
			const setupCtx = this.impl.generateSetupCtx(p);
			return p.setup(setupCtx);
		});
		await Promise.all(setupPromises);

		const runPromises = this.plugins.map(p => {
			const runCtx = this.impl.generateRunCtx(p);
			return p.run(runCtx);
		});
		await Promise.all(runPromises);
	}
}
