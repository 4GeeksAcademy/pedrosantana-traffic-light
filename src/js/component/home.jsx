import React, {useState} from "react";

const Light = () => {
	const [color, setColor] = useState("red");
	const colors = ["red", "yellow", "green"];
	//function adding css styles to div tag
	function trafficStyles(colorStyle){
		return {
			backgroundColor: colorStyle,
			borderRadius: "50%",
    		width: "50px",
    		height: "50px"
		}
		
	}

	const trafficLights = colors.map(lights => 
		<div className={
			lights == color? lights+" selected" : lights}
			onClick={(e) => setColor(e.target.className)}
			style={trafficStyles(lights)}
			>
		</div>);
	return (
		<div className="otro justify-content-center">
			<div className="trafficTop mx-5"></div>
			<div className="container mx-2 p-4">
				{trafficLights}
			</div>
		</div>
	);
};

export default Light;
