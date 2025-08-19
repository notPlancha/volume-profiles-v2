import { VolumeProfile } from "./VolumeProfile";

async function main() {
  while (
    !Spicetify?.Player ||
    !Spicetify?.LocalStorage ||
    !Spicetify?.Mousetrap // Mousetrap is used instead of Spicetify.Keyboard because of keys like f13
  ) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  VolumeProfile.SettingsSection.addToggle(
    "toggle-left-click-volume-profile",
    "Set Volume Profile on left click",
    VolumeProfile.ToggleSettings,
    () => {
      VolumeProfile.ToggleSettings =
        VolumeProfile.SettingsSection.getFieldValue(
          "toggle-left-click-volume-profile",
        ) as boolean;
    },
  );
  const left = new VolumeProfile("left", 30, "low", "f13");
  const middle = new VolumeProfile("middle", 50, "medium", "f14");
  const right = new VolumeProfile("right", 80, "high", "f15");
  for (const [i, profile] of [left, middle, right].entries()) {
    setTimeout(() => {
      profile.registerSetting();
      console.log(`Registered ${profile._id} volume profile`);
    }, i * 10);
  }
  VolumeProfile.SettingsSectionRegister();
}
export default main;
