import { useEffect, useLayoutEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef();
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => { savedCallback.current() }

    if (delay) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
