import Agency from "@lespantsfancy/agency";

export function MergeInputObjects(...inputObjects) {
	const obj = {
		Flag: 0,
		Signal: {},
		Events: [],
		EventMap: new Map(),
	};

	for(let inputObject of inputObjects) {
		for(let [ key, value ] of Object.entries(inputObject)) {
			if(value instanceof Map) {
				obj[ key ] = new Map([ ...obj[ key ], ...value ]);
			} else if(typeof value === "object") {
				obj[ key ] = {
					...(obj[ key ] || {}),
					...value,
				}
			} else {
				obj[ key ] = Agency.Util.Bitwise.add(obj[ key ], value);
			}
		}
	}

	return obj;
};

export function InputNetwork(target, inputObject, { state, modify } = {}) {
	const network = new Agency.Event.Network(state, modify);
	network.target = target;
	
	const signals = Object.keys(inputObject.Signal);
	for(let [ type, std ] of inputObject.EventMap.entries()) {
		if(!signals.includes(type)) {
			if(network.target instanceof HTMLElement) {
				network.target[ `on${ type }` ] = (...args) => network.message(inputObject.Signal[ std ], ...args);
			} else {
				network.target.addEventListener(type, (...args) => network.message(inputObject.Signal[ std ], ...args));
			}
		}
	}

	console.log(network.target.addEventListener)

	return network;
};

export default InputNetwork;