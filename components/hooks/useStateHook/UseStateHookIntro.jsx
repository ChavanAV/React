import React from 'react'
import UseStateEx1 from './useStateEx1'
function useStateHookIntro() {
    const hook = `//Hooks:- 
            // Hooks are nothing but the inbuild methods or functions
            // Hooks names starts with use 
            // ex - useState(), useEffect(), useContext(), useDispatch(), useReduser(), useCallback(), useMemo() etc.
            // We can create any function and we will name it useFunctioName(). Such functions can be treated as custom hooks.`
    return (
        <div>
            <pre>{hook}</pre>
            <br />
            <br />
            <br />
            <UseStateEx1 />
        </div>
    )
}

export default useStateHookIntro
