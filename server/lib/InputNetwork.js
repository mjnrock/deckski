import Agency from "@lespantsfancy/agency";

export const InputMouse = {
	Flag: 1 << 1,
	Signal: {
		CLICK: "InputMouse:Click",
		CONTEXT_MENU: "InputMouse:ContextMenu",
		DBL_CLICK: "InputMouse:DoubleClick",
		MOUSE_DOWN: "InputMouse:MouseDown",
		MOUSE_ENTER: "InputMouse:MouseEnter",
		MOUSE_LEAVE: "InputMouse:MouseLeave",
		MOUSE_MOVE: "InputMouse:MouseMove",
		MOUSE_OUT: "InputMouse:MouseOut",
		MOUSE_OVER: "InputMouse:MouseOver",
		MOUSE_UP: "InputMouse:MouseUp",
	},
	Events: [
		"click",
		"contextmenu",
		"dblclick",
		"mousedown",
		"mouseenter",
		"mouseleave",
		"mousemove",
		"mouseout",
		"mouseover",
		"mouseup",
	],
	EventMap: new Map(),
};
Object.keys(InputMouse.Signal).forEach((key, i) => {
	InputMouse.EventMap.set(InputMouse.Events[ i ], key);
	InputMouse.EventMap.set(InputMouse.Signal[ key ], InputMouse.Events[ i ]);
});

export function InputNetwork(target, inputObject, { state, modify } = {}) {
	const network = new Agency.Event.Network(state, modify);
	network.target = target;
	
	const signals = Object.values(inputObject.Signal);
	for(let [ type, std ] of inputObject.EventMap.entries()) {
		if(!signals.includes(type)) {
			network.target.addEventListener(type, (...args) => this.message(std, ...args));
		}
	}
};