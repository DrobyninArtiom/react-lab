import { useState, useCallback } from 'react';

export function myUseReducer(reducer: (state: any, action: any) => any, initialState: any) {
  const [state, setState] = useState(initialState);

  const dispatch = useCallback((action: any) => {
    setState((currentState: any) => reducer(currentState, action));
  }, [reducer]);

  return [state, dispatch];
}