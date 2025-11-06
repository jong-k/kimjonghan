import { useEffect, useState } from "react";
import { PREFIX_GROUPS } from "../config";
import { pickRandomItem } from "../lib";

interface Prefix {
  namePrefix: string;
  categoryPrefix: string;
}

const DEFAULT_PREFIX = Object.freeze({
  namePrefix: "",
  categoryPrefix: "",
});

export const usePrefixLogo = () => {
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

    if (chosenPrefixes.title === "name") {
      const namePrefix = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, namePrefix });
    } else if (chosenPrefixes.title === "category") {
      const categoryPrefix = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, categoryPrefix });
    }
  };

  useEffect(() => {
    if (prefix.namePrefix === "" && prefix.categoryPrefix === "") return;
    const timer = setTimeout(() => {
      resetPrefix();
    }, 1250);
    return () => clearTimeout(timer);
  }, [prefix]);

  return { prefix, generatePrefix, resetPrefix };
};
