import { useState } from "react";
// import Agency from "@lespantsfancy/agency";

// const mainnet = new Agency.Event.Network();

export function App() {
	const [ lastEvent, setLastEvent ] = useState(0);
	const [ events, setEvents ] = useState([]);

	function updateEvents(e) {
		const now = Date.now();

		if(now - lastEvent > 1000) {
			setLastEvent(now);
			setEvents([ e ]);
		} else {
			setEvents([
				...events,
				e,
			]);
		}
	}

	function onPointerDown(e) {
		console.log("NOW")
		updateEvents(e);
	};
	function onPointerUp(e) {		
		updateEvents(e);
	};
	function onPointerMove(e) {
		updateEvents(e);
	};
	function onPointerCancel(e) {
		updateEvents(e);
	};
	function onPointerEnter(e) {
		updateEvents(e);
	};
	function onPointerLeave(e) {
		updateEvents(e);
	};
	function onDragStart(e) {
		updateEvents(e);
	};
	function onDragEnd(e) {
		updateEvents(e);
	};
	function onClick(e) {
		updateEvents(e);
	};
	function onDoubleClick(e) {		
		updateEvents(e);
	};
	function onContextMenu(e) {
		e.preventDefault();
		
		updateEvents(e);
	};
	
	return (
		<div className="grid grid-cols-1 m-10 bg-gray-300">
			<div
				className="min-h-screen bg-gray-400 border border-gray-900 ring"
				onPointerDown={ onPointerDown }
				onPointerUp={ onPointerUp }
				onContextMenu={ onContextMenu }
				// onPointerMove={ onPointerMove }
				// onPointerCancel={ onPointerCancel }
				// onPointerEnter={ onPointerEnter }
				// onPointerLeave={ onPointerLeave }
				onDragStart={ onDragStart }
				onDragEnd={ onDragEnd }
				onClick={ onClick }
				onDoubleClick={ onDoubleClick }
			>
				{
					events.length ? (				
						events.map(e => {
							return (
								<div class="grid gap-4 grid-cols-6 mt-24 text-center">
									{						
										Object.entries(e).map(([ k, v ]) => {
											if(typeof v === "object" || typeof v === "function") {
												return null;
											}
											
											return (
												<div key={ k } className="border border-gray-600">
													<div className="font-bold">{ k }</div>
													<div>{ v.toString() }</div>
												</div>
											);
										})
									}
								</div>
							);
						})
					) : null
				}
			</div>
		</div>
	);
};

export default App;


// {
// 	events.length ? (				
// 		events.map(e => {
// 			return (
// 				<div class="grid gap-4 grid-cols-6 mt-24 text-center">
// 					{						
// 						Object.entries(e).map(([ k, v ]) => {
// 							if(typeof v === "object" || typeof v === "function") {
// 								return null;
// 							}
							
// 							return (
// 								<div key={ k } className="border border-gray-600">
// 									<div className="font-bold">{ k }</div>
// 									<div>{ v.toString() }</div>
// 								</div>
// 							);
// 						})
// 					}
// 				</div>
// 			);
// 		})
// 	) : null
// }