export default class Content {
    
    private temperatura: string = "0";


	constructor($temperatura: string ) {
		this.temperatura = $temperatura;
	}


    /**
     * Getter $temperature
     * @return {string }
     */
	public get $temperatura(): string  {
		return this.temperatura;
	}

    /**
     * Setter $temperature
     * @param {string } value
     */
	public set $temperatura(value: string ) {
		this.temperatura = value;
	}




}