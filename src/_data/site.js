import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json");

export default function () {
  return {
    // i valori vivono nel package.json come unica fonte di verità
    title: pkg.name,
    description: pkg.description,
    language: "it",
    author: {
      name: pkg.author.name,
      email: pkg.author.email,
      url: pkg.author.url,
      github: pkg.author.github,
    },
    // pulizia dell'url da .git
    repository: {
      url: pkg.repository?.url?.replace(/\.git$/, ""),
    },
  };
}
