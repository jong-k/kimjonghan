import { useState } from "react";
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

  const generatePrefix = () => {
    const chosenPrefixes = pickRandomItem(PREFIX_GROUPS);

    if (chosenPrefixes.title === "name") {
      const namePrefix = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, namePrefix });
    } else if (chosenPrefixes.title === "category") {
      const categoryPrefix = pickRandomItem(chosenPrefixes.value);
      setPrefix({ ...DEFAULT_PREFIX, categoryPrefix });
    }
  };

  const resetPrefix = () => {
    setPrefix(DEFAULT_PREFIX);
  };

  return { prefix, generatePrefix, resetPrefix };
};
