export default function courseReducer(state = [] , action) { 
   switch (action.type){  
	case "CREATE=COURSE": 
	state = [...state , {... action.course}  ];  
	break;  
   } 
	return state; // the new state  
} 

