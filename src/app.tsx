import { VolumeProfile } from "./VolumeProfile";

async function main() {
  while (
    !Spicetify?.Player ||
    !Spicetify?.LocalStorage ||
    !Spicetify?.Mousetrap // Mousetrap is used instead of Spicetify.Keyboard because of keys like f13
  ) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const left = new VolumeProfile("left", 30, "low", "f13");
  const middle = new VolumeProfile("middle", 50, "medium", "f14");
  const right = new VolumeProfile("right", 80, "high", "f15");
  for (const [i, profile] of [left, middle, right].entries()) {
    profile.register();
    console.log(`Registered ${profile._id} volume profile`);
  }


  VolumeProfile.SettingsSectionRegister();
  // const observer = new MutationObserver(() => {});
  // observer.observe;
}
export default main;
