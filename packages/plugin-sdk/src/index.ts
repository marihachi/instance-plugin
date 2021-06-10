export type SetupCtx = {

};

export type RunCtx = {
	showMessage(text: string): void;
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
