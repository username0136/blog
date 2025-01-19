# Rooting and SafetyNet

## Rooting

:::info Prerequisites
Instructions are written assuming you have a device with an unlocked bootloader running PixelOS with PixelOS Recovery installed.

Commands can be run on Windows CMD, PowerShell, Bash, MacOS Terminal.

Make sure to enable USB Debugging from Developer Opions.

You may use the volume keys to navigate PixelOS Recovery if touch does not work
:::

### From PC/Linux/Mac

1. Setup ADB and Fastboot. [LineageOS Wiki](https://wiki.lineageos.org/adb_fastboot_guide#installing-adb-and-fastboot)
2. Download the [Latest Magisk Installer (APK File)](https://github.com/topjohnwu/Magisk/releases/latest) and save it to your ADB folder
3. Rename the file from `Magisk-vxx.x.apk` to `Magisk-vxx.x.zip`
4. Connect your device to your computer using a charging/data transfer cable and connect to it with adb
5. Reboot the device to recovery by using the command `adb reboot recovery`
6. You should be greeted by PixelOS Recovery screen
7. Select `Apply Update`
8. Select `Apply from ADB`
9. Sideload the Magisk installer using the command `adb sideload path/to/magisk/Magisk-vxx.x.zip`
   ![ADB Sideload](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/9.png)

10. If your device now says `Signature verification failed. Install anyway?`, ignore the warning and click on `Yes`
11. The installation should begin. When it is done, you should see it in the terminal window and on the display of the device
    ![ADB Sideload](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/11.png)

12. Unplug the device and reboot to system, by going back to main menu and selecting `Reboot system now`
13. Once PixelOS boots up, open the newly created Magisk App and follow on-screen-instructions
14. Your device should now be rooted

### From SD Card

1. Download the [Latest Magisk Installer (APK File)](https://github.com/topjohnwu/Magisk/releases/latest) to your SD Card
2. Rename the file from `Magisk-vxx.x.apk` to `Magisk-vxx.x.zip`
3. Reboot the device to recovery by holding Volume Up + Power Button `[Might change from device to device]`
4. You should be greeted by PixelOS Recovery screen
5. Select `Apply Update`
6. Select `Choose from sdcard1`
7. Select the file you downloaded, ie `Magisk-vxx.x.zip`
8. If your device now says `Signature verification failed. Install anyway?`, ignore the warning and click on `Yes`
9. The installation should begin. When it is done, you should see it on the display of the device
10. Reboot to system, by going back to main menu and selecting `Reboot system now`
11. Once PixelOS boots up, open the newly created Magisk App and follow on-screen-instructions
12. Your device should now be rooted

## SafetyNet

SafetyNet on all PixelOS builds should pass by default without the need to do anything further. However, if you have rooted you device, follow the steps below to pass SafetyNet

1. Download [kdrag0n's Universal SafetyNet Fix](https://github.com/kdrag0n/safetynet-fix/releases/latest) to your device
2. Open Magisk App
3. Select the gear icon on the top right
   ![Magisk App](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/magiskApp.png)

4. Scroll down to `Magisk`
5. Enable `Zygisk` and `Enforce DenyList`
6. You can ignore the toast saying `Reboot to apply changes`
   ![Zygisk DenyList](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/ZygiskDenyList.png)

7. Go back, and select Modules
   ![Modules](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/MagiskModules.png)

8. Select the downloaded file
9. It should start installing
   ![SafetyNet Fix Installed](https://github.com/PixelOS-Devices/stuff/raw/main/RootGuide/SafetyNetFixInstall.png)

10. Press the blue `reboot` button on the right corner
11. Once the device reboots you should pass SafetyNet.

::: warning

Some apps may still detect root, try adding them to DenyList.

Some apps may still break due to root, unfortunately there is nothing we can do to fix them. :(

:::
