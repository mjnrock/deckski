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
	function onGotPointerCapture(e) {
		updateEvents(e);
	};
	function onLostPointerCapture(e) {		
		updateEvents(e);
	};
	
	return (
		<>
			{/* <button
				className="w-full h-24 mt-5 mb-5 bg-gray-400 active:bg-gray-500 hover:bg-gray-300"
				onClick={ () => {
					setEvents([]);
					setLastEvent(0);
				}}
			>Reset</button> */}

			{/* <div>
				{
					events.map(e => (
						<div key={ `${ e.type }${ e.timeStamp }` } className="inline-flex p-5 m-5 text-base text-center">
							{
								`${ e.type } : ${ e.x }, ${ e.y }`
							}
						</div>
					))
				}
			</div> */}

			<div className="grid grid-cols-1 ml-20 mr-20 bg-gray-300">
				<div
					className="min-h-screen bg-gray-400 border border-gray-900 ring"
					onPointerDown={ onPointerDown }
					onPointerUp={ onPointerUp }
					onContextMenu={ onContextMenu }
					// // onPointerMove={ onPointerMove }
					// // onPointerCancel={ onPointerCancel }
					// // onPointerEnter={ onPointerEnter }
					// // onPointerLeave={ onPointerLeave }
					// onDragStart={ onDragStart }
					// onDragEnd={ onDragEnd }
					// onClick={ onClick }
					// onDoubleClick={ onDoubleClick }
					// onGotPointerCapture={ onGotPointerCapture }
					// onLostPointerCapture={ onLostPointerCapture }
				>
					{
						events.length ? (				
							events.map(e => {
								return (
									<div key={ `${ e.type }${ e.timeStamp }` } className="grid grid-cols-6 gap-4 mt-24 text-xs text-center">
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
		</>
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