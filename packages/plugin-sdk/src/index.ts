import { RunApi, SetupApi } from './api';

export {
	RunApi,
	SetupApi
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
