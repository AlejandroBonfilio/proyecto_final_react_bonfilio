
export default 
class Parse{
	
	static price(value, cents = false){
		if( (!value || (typeof value) === "object") && value != 0)
			return null
		
		var result = value
		if( (typeof value) === "string")
			result = Number(value)
		if(cents == true)
			return '$'+result.toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		else
			return '$'+result.toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	}
}