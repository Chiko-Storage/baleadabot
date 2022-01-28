import { SapphireClient } from '@sapphire/framework';
import { parseClientOptions } from '#root/config';

export class Client extends SapphireClient {
	public constructor() {
		super(parseClientOptions());
	}
}
