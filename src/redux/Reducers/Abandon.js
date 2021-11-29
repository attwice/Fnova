import { 
  CHANGE_ABANDON_USER
} from "constants/index"

var initialState = {
  abandonUser: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    streetAddress: "",
    shippingCity: "",
    shippingStreet: "",
    shippingZip: "",
    date: ""
  }
};
    
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ABANDON_USER:
      return {
        ...state,
        abandonUser: action.payload
      };
    default:
      return state;
  }
}