
const requestStatus = (state:Istate|undefined,action:any) => {
    switch (action.type) {
      case "loading":
        return {
          loading: true,
        };
      case "success":
        return {
          loading: false,
        };
      case "error":
        return {
          loading: false,
        };
    }
  };
  type Istate = {
    loading:boolean,
  }

  export const initial_state:Istate = {
    loading: false,
  };
  
  export default requestStatus;