const debug = require("debug")("my-package-name:constructors");

export class TestClass
{
	constructor(name : string)
	{
		this.name = name;
		debug(`Creating TestClass instance with name ${this.name}.`);
	}
	
	name : string;
}