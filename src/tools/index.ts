export type SetupCtx = {

};

export type RunCtx = {

};

export class InstancePlugin {
	id: string;
	setup: (ctx: SetupCtx) => void | Promise<void>;
	run: (ctx: RunCtx) => void | Promise<void>;

	constructor(info: {
		id: string;
		setup?: (ctx: SetupCtx) => void | Promise<void>;
		run: (ctx: RunCtx) => void | Promise<void>;
	}) {
		this.id = info.id;
		this.setup = info.setup || (() => {});
		this.run = info.run;
	}
}

export class Engine {
	plugins: InstancePlugin[];

	constructor() {
		this.plugins = [];
	}

	use(plugin: InstancePlugin) {
		this.plugins.push(plugin);
	}

	async start() {
		const setupPromises = this.plugins.map(p => {
			const setupCtx: SetupCtx = {};
			return p.setup(setupCtx);
		});
		await Promise.all(setupPromises);

		const runPromises = this.plugins.map(p => {
			const runCtx: RunCtx = {};
			return p.run(runCtx);
		});
		await Promise.all(runPromises);
	}
}
