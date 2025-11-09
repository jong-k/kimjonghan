import { useEffect, useState } from "react";
import type { Prefix } from "./types";
import { PREFIX_GROUPS } from "../config";
import { pickRandomItem } from "../lib";

const DEFAULT_PREFIX = Object.freeze({
  name: "",
  title: "",
});

export const usePrefix = () => {
  const [prefix, setPrefix] = useState<Prefix>(DEFAULT_PREFIX);
  const [hasPrefix, setHasPrefix] = useState(false);

  const resetPrefix = () => {
    setPrefix(DEFAULT_PREFIX);
    setHasPrefix(false);
  };

  const generatePrefix = () => {
    if (hasPrefix) return;
    setHasPrefix(true);
    const chosenPrefixes = pickRandomItem(PREFIX_GROUPS);

    if (chosenPrefixes.category === "name") {
      const name = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, name });
    } else if (chosenPrefixes.category === "title") {
      const title = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, title });
    }
  };

  useEffect(() => {
    if (prefix.name === "" && prefix.title === "") return;
    const timer = setTimeout(() => {
      resetPrefix();
    }, 1250);
    return () => clearTimeout(timer);
  }, [prefix]);

  return { prefix, generatePrefix, resetPrefix };
};
