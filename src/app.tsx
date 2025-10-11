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
    { id: "left",   defaultVolume: 30, label: "low",    key: "f13" },
    { id: "middle", defaultVolume: 50, label: "medium", key: "f14" },
    { id: "right",  defaultVolume: 80, label: "high",   key: "f15" },
  ];

  for (const { id, defaultVolume, label, key } of profileConfigs) {
    const profile = new VolumeProfile(id, defaultVolume, label as VolumeProfileIcon, key);
    profile.register(); // TODO I think this is auto registered
    console.log(`Registered ${profile._id} volume profile`);
  } 
  VolumeProfile.SettingsSectionRegister();
  console.log("Volume Profiles loaded");
}
export default main;
