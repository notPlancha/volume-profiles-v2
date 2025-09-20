import { SettingsSection } from "spcr-settings";

export type VolumeProfileIcon = "high" | "medium" | "low" | "mute" | "speakerOnly";
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
    fromString(icon: VolumeProfileIcon): string {
      switch (icon) {
        case "high":
          return VolumeProfile.icons.high;
        case "medium":
          return VolumeProfile.icons.medium;
        case "low":
          return VolumeProfile.icons.low;
        case "mute":
          return VolumeProfile.icons.mute;
        case "speakerOnly":
          return VolumeProfile.icons.speakerOnly;
        default:
          throw `Invalid icon string: ${icon}`;
      }
    },
  };

  private static Ids = {
    ToggleSettingsId: "volume-profile-toggle-on-left-click",
    ToggleSettingsId2: "toggle-left-click-volume-profile", // TODO not sure why there's 2
    settingIdPrefix: "settings-volume-profile-",
    bindIdPrefix: "bind-volume-profile-",
  };
  private static Settings = {
    isRegistered: false,
    section: new SettingsSection(
      "Volume Profile Settings",
      "volume-profile-settings",
    ),
  };
  private button: HTMLButtonElement;

  public static get ToggleSettings(): boolean {
    return VolumeProfile.Settings.section.getFieldValue(
      VolumeProfile.Ids.ToggleSettingsId,
    );
  }

  public static set ToggleSettings(value: boolean) {
    VolumeProfile.Settings.section.setFieldValue(
      VolumeProfile.Ids.ToggleSettingsId,
      value,
    );
  }
  private static localStorageIdPrefix = "localStorage-volume-profile-";
  constructor(
    id: string,
    defaultVolume: number,
    icon: VolumeProfileIcon,
    bind?: Bind,
  ) {
    this._id = id;
    
    this.button = document.createElement('button');
    this.button.className = 'Button-buttonTertiary-small-iconOnly-useBrowserDefaultFocusStyle main-genericButton-button e-91000-button-tertiary--icon-only'; // last one it so it centers for some reason
    this.button.innerHTML = `
      <span class="e-91000-button__icon-wrapper">
        <svg class="e-91000-icon e-91000-baseline" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);" viewBox="0 0 16 16">
          ${VolumeProfile.icons.fromString(icon)}
        </svg>
      </span>
    `; // TODO missing aria-label

    this.button.addEventListener('click', (ev) => {
      Spicetify.Player.setVolume(this.volume / 100);
    });
    this.button.addEventListener('contextmenu', (ev) => {
      this.volume = Spicetify.Player.getVolume() * 100;
      Spicetify.showNotification(
        `Volume of "${this._id}" changed to ${this.toString()}`,
      );
      VolumeProfile.Settings.section.setFieldValue(
        this.settingId,
        this.volume.toString(),
      );
      VolumeProfile.Settings.section.rerender();
    });
    
    // Ensure volume is valid
    if (Number.isNaN(this.volume)) this.volume = defaultVolume;
    if (bind) this.bind = bind;
  }
  public readonly _id: string;
  private _old_bind: Bind | undefined;
  public get localStorageId(): string {
    return VolumeProfile.localStorageIdPrefix + this._id;
  }
  public get settingId(): string {
    return VolumeProfile.Ids.settingIdPrefix + this._id;
  }
  public get volume(): number {
    const volume = VolumeProfile.Settings.section.getFieldValue(this.settingId);
    return Number(volume);
  }
  public set volume(value: number) {
    VolumeProfile.Settings.section.setFieldValue(
      this.settingId,
      value.toFixed(2),
    );
  }

  public get bind(): Bind {
    return (
      VolumeProfile.Settings.section.getFieldValue(
        VolumeProfile.Ids.bindIdPrefix + this._id,
      ) || ""
    );
  }

  public set bind(value: Bind) {
    VolumeProfile.Settings.section.setFieldValue(
      VolumeProfile.Ids.bindIdPrefix + this._id,
      value,
    );
    this.registerBind(value);
    this._old_bind = value;
  }

  public static SettingsSectionRegister() {
    if (!VolumeProfile.Settings.isRegistered) {
      VolumeProfile.Settings.section.addToggle(
        VolumeProfile.Ids.ToggleSettingsId2,
        "Set Volume Profile on left click",
        VolumeProfile.ToggleSettings,
        () => {
          VolumeProfile.ToggleSettings =
            VolumeProfile.Settings.section.getFieldValue(
              VolumeProfile.Ids.ToggleSettingsId2,
            ) as boolean;
        },
      );
      VolumeProfile.Settings.section.pushSettings().then(() => {
        VolumeProfile.Settings.isRegistered = true;
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
  }  private registerButton(whereToPut: HTMLElement) {
    whereToPut.insertBefore(this.button, whereToPut.firstChild);
  }
  private registerSetting() {
    VolumeProfile.Settings.section.addInput(
      this.settingId,
      `Volume of Profile "${this._id}"`,
      this.toString(),
      () => {
        const changedVolume = VolumeProfile.Settings.section.getFieldValue(
          this.settingId,
        ) as string;
        if (VolumeProfile.isValidVolume(changedVolume)) {
          VolumeProfile.Settings.section.setFieldValue(
            this.settingId,
            changedVolume,
          );
        }
      },
    );
    VolumeProfile.Settings.section.addInput(
      VolumeProfile.Ids.bindIdPrefix + this._id,
      `Bind for Profile "${this._id}"`,
      this.bind,
      () => {
        this.bind = VolumeProfile.Settings.section.getFieldValue(
          VolumeProfile.Ids.bindIdPrefix + this._id,
        ) as string;
      },
    );
  }
  public register(whereToPut: HTMLElement) {
    this.registerButton(whereToPut);
    this.registerSetting();
  }

  public toString(): string {
    return this.volume.toFixed(2);
  }
  public click() {
    this.button.click();
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

