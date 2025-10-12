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

  /*
    Why check order? Because Spicetify's button registering sometimes rotates order for some reason,,
     and adding them with manual order breaks with the marketplace sometimes.
    Hopefully this is more reliable.
  */
  document.arrive(`#${profiles.right.elementId}`, () => { // DONT MAKE IT ONCEONLY, NO POINT + MIGHT BREAK
    console.log("Volume Profiles loaded.");
    // get children of main-nowPlayingBar-extraControls
    const extraControls = document.getElementsByClassName("main-nowPlayingBar-extraControls")[0];
    if (!extraControls) { throw "Could not find main-nowPlayingBar-extraControls"; }
    // check order
    const extraControlsChildren = Array.from(extraControls.children);
    // I was gonna do an if but not point
    extraControls.insertBefore(profiles.left.element, profiles.middle.element);
    extraControls.insertBefore(profiles.right.element, profiles.middle.element.nextSibling);
  });
}
export default main;
