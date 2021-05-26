import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/prefer-default-export
export const useRemovedCount = () => {
  const [count, setCount] = useState(0);
  const items = useSelector((state) => state.binItems);

  useEffect(() => {
    setCount(items.length);
  }, [items]);

  return [count];
};
