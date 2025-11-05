type PrefixGroup = {
  title: "name" | "category";
  value: string[];
};

export const PREFIX_GROUPS: PrefixGroup[] = [
  {
    title: "name",
    value: ["도전하는", "호기심 많은", "끈기있는"],
  },
  {
    title: "category",
    value: ["프론트엔드", "프로젝트", "개발 기록"],
  },
];
