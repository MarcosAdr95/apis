export interface Prompt {
	findOne?: {
		[key:string]:any;
	}
}

export interface Register {
	database:string;
	collection:string;
	input:Array<Object>;
	prompts?: Prompt | undefined;
}