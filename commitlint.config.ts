import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

module.exports = Configuration;
