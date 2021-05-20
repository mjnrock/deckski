import Agency from "@lespantsfancy/agency";

export class InputMouse extends Agency.Event.Network {
	static Signal = {
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
	};
	
	static EventMap = new Map([
		[ "click", InputMouse.Signal.CLICK ],
		[ "contextmenu", InputMouse.Signal.CONTEXT_MENU ],
		[ "dblclick", InputMouse.Signal.DBL_CLICK ],
		[ "mousedown", InputMouse.Signal.MOUSE_DOWN ],
		[ "mouseenter", InputMouse.Signal.MOUSE_ENTER ],
		[ "mouseleave", InputMouse.Signal.MOUSE_LEAVE ],
		[ "mousemove", InputMouse.Signal.MOUSE_MOVE ],
		[ "mouseout", InputMouse.Signal.MOUSE_OUT ],
		[ "mouseover", InputMouse.Signal.MOUSE_OVER ],
		[ "mouseup", InputMouse.Signal.MOUSE_UP ],
	]);

	constructor(target, state = {}, modify = {}) {
		super(state, modify);

		this._bind(target);
	}

	_bind(target) {
		if(!target) {
			return false;
		}

		this.target = target;
		for(let [ type, std ] of InputMouse.EventMap.entries()) {
			this.target.addEventListener(type, (...args) => this.message(std, ...args));
		}

		return true;
	}
};