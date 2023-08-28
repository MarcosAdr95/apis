import { MongoClient } from 'mongodb';

import {Register,Prompt} from './interfaces';

export default class Mongo {
	static url:string = 'mongodb://127.0.0.1:27017/';
	static urlAtlas = 'mongodb+srv://root:<password>@learningdb.uw2iv6j.mongodb.net/?retryWrites=true&w=majority';
	private client:any;

	constructor() {
		this.client = new MongoClient(Mongo.url, {
			connectTimeoutMS: 5*1000, // 15 segundos
			serverSelectionTimeoutMS: 5*1000 // 15 segundos
		});
	}

	private async connect() {
		await this.client.connect();
	}

	private disconnect() {
		this.client.close();
	}

	private updatePrompt(prompt:any, data:any):Prompt {
		for(let key in prompt)
			if(data?.hasOwnProperty(key))
				prompt[key] = data[key];

		return prompt;
	}

	private async insert(collection:any, inputs:Array<Object>, prompts:Prompt | undefined):Promise<void> {
		if(!prompts)
			return await collection.insertMany(inputs);

		for(let input of inputs) {
			const collItem = await collection.findOne(this.updatePrompt(prompts.findOne, input));

			if(!collItem) {
				await collection.insertOne(input);
			}
		}
	}

	public async register(config:Register):Promise<void> {
		try {
			const {database,collection,input,prompts} = config;

			await this.connect();
			await this.insert(this.client.db(database).collection(collection), input.map(n => n), prompts);

		} catch(e) {
			throw `Register Mongo: ${e}`;

		} finally {
			this.disconnect();
		}
	}
}