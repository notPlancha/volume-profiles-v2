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
    const profileConfigs = [
    { id: "right",  defaultVolume: 80, label: "high",   key: "f15" },
    { id: "middle", defaultVolume: 50, label: "medium", key: "f14" },
    { id: "left",   defaultVolume: 30, label: "low",    key: "f13" },
  ];
  document.arrive(".main-nowPlayingBar-extraControls", { onceOnly: false }, (whereToPut) => {
    console.log("extra-Controls found, injecting buttons...");
    // first if the buttons are there already
    if (document.getElementById("volume-profile-left")) {console.log("buttons already there, skipping injection"); return;};

    for (const { id, defaultVolume, label, key } of profileConfigs) {
      const profile = new VolumeProfile(id, defaultVolume, label as VolumeProfileIcon, key);
      profile.register(whereToPut as HTMLElement);
      console.log(`Registered ${profile._id} volume profile`);
    }

    VolumeProfile.SettingsSectionRegister();
  });
}
export default main;
