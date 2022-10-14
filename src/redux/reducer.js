const reducer = (
  state = {
    createState: 0,
  },
  action
) => {
  switch (action.type) {
    //when request is initiating
    case "FETCH_DATA_PENDING": {
      return { ...state };
    }

    //when the reqeust is successful
    case "FETCH_DATA_FULFILLED": {
      return {
        ...state,
        data:action?.payload?.data
      };
    }

    //when some error occurs
    case "FETCH_DATA_REJECTED": {
      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
};

export default reducer;
