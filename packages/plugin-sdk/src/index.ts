export type SetupApi = {

};

export type RunApi = {
	showMessage(text: string): void;
};

export class InstancePlugin {
	id: string;
	setup: (ctx: SetupApi) => void | Promise<void>;
	run: (ctx: RunApi) => void | Promise<void>;

	constructor(info: {
		id: string;
		setup?: (ctx: SetupApi) => void | Promise<void>;
		run: (ctx: RunApi) => void | Promise<void>;
	}) {
		this.id = info.id;
		this.setup = info.setup || (() => {});
		this.run = info.run;
	}
}
