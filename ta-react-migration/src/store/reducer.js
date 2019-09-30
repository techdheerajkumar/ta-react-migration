import * as actionTypes from './action';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.SERVICES:
			return [ ...state, ...action.services ];
	}
};
export default reducer;
