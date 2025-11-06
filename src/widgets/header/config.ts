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

export const TOP_BANNER_TEXT = "반응형 UI가 적용되어 이제 다양한 디바이스에서 접속이 가능합니다!";
