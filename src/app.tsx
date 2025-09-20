import { VolumeProfile } from "./VolumeProfile";
import type { VolumeProfileIcon } from "./VolumeProfile";

async function main() {
  while (
    !Spicetify?.Player ||
    !Spicetify?.LocalStorage ||
    !Spicetify?.Mousetrap // Mousetrap is used instead of Spicetify.Keyboard because of keys like f13
  ) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))


  // const buttonToClone = document.querySelector("button[data-testid=control-button-npv]") as HTMLButtonElement;
  const whereToPut = document.querySelector(".main-nowPlayingBar-extraControls") as HTMLElement;
  const profileConfigs = [
    { id: "right",  defaultVolume: 80, label: "high",   key: "f15" },
    { id: "middle", defaultVolume: 50, label: "medium", key: "f14" },
    { id: "left",   defaultVolume: 30, label: "low",    key: "f13" },

  ];

  for (const { id, defaultVolume, label, key } of profileConfigs) {
    const profile = new VolumeProfile(id, defaultVolume, label as VolumeProfileIcon, key);
    profile.register(whereToPut);
    console.log(`Registered ${profile._id} volume profile`);
  }

  VolumeProfile.SettingsSectionRegister();
  // const observer = new MutationObserver(() => {});
  // observer.observe;
}
export default main;
