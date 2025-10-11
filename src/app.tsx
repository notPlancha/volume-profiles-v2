import { VolumeProfile } from "./VolumeProfile";
import type { VolumeProfileIcon } from "./VolumeProfile";
require("arrive");

async function main() {
  while (
    !Spicetify?.Player ||
    !Spicetify?.LocalStorage ||
    !Spicetify?.Mousetrap // Mousetrap is used instead of Spicetify.Keyboard because of keys like f13
  ) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  console.log("Volume Profiles loading...");

  const profiles = {
    left: new VolumeProfile("left", 30, "low", "f13"),
    middle: new VolumeProfile("middle", 50, "medium", "f14"),
    right: new VolumeProfile("right", 80, "high", "f15"),
  };

  VolumeProfile.Settings.register();

  document.arrive(`#${profiles.right.elementId}`, () => {
    console.log("Volume Profiles loaded.");
  });
}
export default main;
