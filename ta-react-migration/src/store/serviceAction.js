import * as actionTypes from './action';

export function servicesTypes(services) {
	return { type: actionTypes.SERVICES, services };
}
