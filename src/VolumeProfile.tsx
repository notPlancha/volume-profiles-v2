import { SettingsSection } from "spcr-settings";

type VolumeProfileIcon = "high" | "medium" | "low" | "mute" | "speakerOnly";
type Bind = string;

export class VolumeProfile {
  public static icons = {
    get low() {
      return '<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>';
    },
    get speakerOnly() {
      return '<path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>';
    },
    get high() {
      return `${VolumeProfile.icons.low}<path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>`;
    },
    get medium() {
      return '<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path>';
    },
    get mute() {
      return `${VolumeProfile.icons.speakerOnly}<path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>`;
    },
  };

  private static SettingsRegistered = false;
  private static ToggleSettingsId = "volume-profile-toggle-on-left-click";
  private static settingIdPrefix = "settings-volume-profile-";
  private static bindIdPrefix = "bind-volume-profile-";

  public static SettingsSection = new SettingsSection(
    "Volume Profile Settings",
    "volume-profile-settings",
  );
  private button: Spicetify.Playbar.Button;

  public static get ToggleSettings(): boolean {
    return VolumeProfile.SettingsSection.getFieldValue(
      VolumeProfile.ToggleSettingsId,
    );
  }

  public static set ToggleSettings(value: boolean) {
    VolumeProfile.SettingsSection.setFieldValue(
      VolumeProfile.ToggleSettingsId,
      value,
    );
  }
  private static localStorageIdPrefix = "localStorage-volume-profile-";

  constructor(
    id: string,
    defaultVolume: number,
    icon: VolumeProfileIcon,
    bind: Bind | undefined = undefined,
  ) {
    this._id = id;
    let path = "";
    switch (icon) {
      case "high":
        path = VolumeProfile.icons.high;
        break;
      case "medium":
        path = VolumeProfile.icons.medium;
        break;
      case "low":
        path = VolumeProfile.icons.low;
        break;
      case "mute":
        path = VolumeProfile.icons.mute;
        break;
      case "speakerOnly":
        path = VolumeProfile.icons.speakerOnly;
        break;
    }
    const icon_svg = `
      <svg role="presentation" style="fill: currentColor" viewBox="0 0 16 16" height="16" width="16">
          ${path}
      </svg>
    `;
    this.button = new Spicetify.Playbar.Button(
      `Volume Profile (${this._id})`,
      icon_svg,
      (self) => {
        Spicetify.Player.setVolume(this.volume / 100);
      },
      false,
      false,
      true,
    );
    this.button.element.addEventListener("contextmenu", (ev) => {
      if (VolumeProfile.ToggleSettings) {
        this.volume = Spicetify.Player.getVolume() * 100;
        Spicetify.showNotification(
          `Volume of "${this._id}" changed to ${this.toString()}`,
        );
        VolumeProfile.SettingsSection.setFieldValue(
          this.settingId,
          this.volume.toString(),
        );
        VolumeProfile.SettingsSection.rerender();
      }
    });
    if (Number.isNaN(this.volume)) this.volume = defaultVolume;
    if (bind) this.bind = bind;
  }
  private readonly _id: string;
  private _old_bind: Bind | undefined;
  public get localStorageId(): string {
    return VolumeProfile.localStorageIdPrefix + this._id;
  }
  public get settingId(): string {
    return VolumeProfile.settingIdPrefix + this._id;
  }
  public get volume(): number {
    const volume = VolumeProfile.SettingsSection.getFieldValue(this.settingId);
    return Number(volume);
  }
  public set volume(value: number) {
    VolumeProfile.SettingsSection.setFieldValue(
      this.settingId,
      value.toFixed(2),
    );
  }

  public get bind(): Bind {
    return (
      VolumeProfile.SettingsSection.getFieldValue(
        VolumeProfile.bindIdPrefix + this._id,
      ) || ""
    );
  }

  public set bind(value: Bind) {
    VolumeProfile.SettingsSection.setFieldValue(
      VolumeProfile.bindIdPrefix + this._id,
      value,
    );
    this.registerBind(value);
    this._old_bind = value;
  }

  public static SettingsSectionRegister() {
    if (!VolumeProfile.SettingsRegistered) {
      VolumeProfile.SettingsSection.pushSettings().then(() => {
        VolumeProfile.SettingsRegistered = true;
      });
    } else {
      throw "Settings already registered";
    }
  }
  public static isValidVolume(value: string): boolean {
    return !(
      value === "" ||
      Number.isNaN(Number(value)) ||
      Number(value) < 0 ||
      Number(value) > 100
    );
  }

  public registerSetting() {
    VolumeProfile.SettingsSection.addInput(
      this.settingId,
      `Volume of Profile "${this._id}"`,
      this.toString(),
      () => {
        const changedVolume = VolumeProfile.SettingsSection.getFieldValue(
          this.settingId,
        ) as string;
        if (VolumeProfile.isValidVolume(changedVolume)) {
          VolumeProfile.SettingsSection.setFieldValue(
            this.settingId,
            changedVolume,
          );
        }
      },
    );
    VolumeProfile.SettingsSection.addInput(
      VolumeProfile.bindIdPrefix + this._id,
      `Bind for Profile "${this._id}"`,
      this.bind,
      () => {
        this.bind = VolumeProfile.SettingsSection.getFieldValue(
          VolumeProfile.bindIdPrefix + this._id,
        ) as string;
      },
    );
  }

  public toString(): string {
    return this.volume.toFixed(2);
  }

  public click() {
    this.button.element.click();
  }

  public registerBind(bind: Bind) {
    // TODO: This might be an issue because the setting immediately deletes the other, so it's not a perfect solution
    // An id type of binding and unbinding would help, but I'm not sure yet how to do this.
    // https://craig.is/killing/mice    if(this._old_bind) Spicetify.Mousetrap.unbind(this._old_bind);
    Spicetify.Mousetrap.unbind(bind);
    Spicetify.Mousetrap.bind(bind, () => {
      this.click();
      return true;
    });
  }
}
