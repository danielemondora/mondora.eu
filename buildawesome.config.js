import pluginWebc from "@11ty/eleventy-plugin-webc";

export default async function ($config) {
  $config.setInputDirectory("src");
  $config.setLayoutsDirectory("_layouts");
  $config.addPlugin(pluginWebc);
}
