# Bypassing FRP Lock
In this guide, we will see how to bypass the Factory Reset Protection (FRP) lock on Android devices.

::: warning Disclaimer  
We do **not** endorse any unethical or illegal activities. This guide is purely for educational purposes and is intended to assist users who may get stuck while testing ROM builds or updating their devices.  
:::

### Important Notes
- This method **only works on userdebug builds** and **not on user builds**.
- User builds do not ship with `adb root`, making this method ineffective.
- This method is **not specific to PixelOS** and should work the same way on almost all AOSP-based ROMs.

## Prerequisites

Before starting, ensure you have:

- <a href="/frp-assets/wipe-frp.sh" download>Download the `wipe-frp.sh` script</a> and place it in the `platform-tools` folder.
- `platform-tools` (ADB & Fastboot tools) installed.
- Your device in **recovery mode**.

## Steps to Bypass FRP

### 1. Connect Your Device and Verify ADB Connection
First, check if your device is detected:

```sh
adb devices
```

Expected output:

```sh
List of devices attached
XYZ123456789    recovery
```

If your device does not appear, ensure you have installed the correct drivers.

### 2. Gain Root Access via ADB

```sh
adb root
```

Expected output:

```sh
restarting adbd as root
```

Now, start an ADB shell session:

```sh
adb shell
```

You should now see a root shell prompt:

```sh
munch:/#
```

The `#` symbol confirms that you have root access.

### 3. Push the Script to Device Storage

Now, send the `wipe-frp.sh` script to your device:

```sh
adb push wipe-frp.sh /sdcard/
```

Expected output:

```sh
wipe-frp.sh: 1 file pushed, 0 skipped. 0.1 MB/s (1686 bytes in 0.015s)
```

### 4. Make the Script Executable

```sh
chmod +x /sdcard/wipe-frp.sh
```

### 5. Run the Script

```sh
./sdcard/wipe-frp.sh
```

It should display similar output as shown in following image.

![](/frp-assets/output-representation.jpg)

### 6. Reboot the Device

```sh
reboot
```

Your device should now be free from the FRP lock.

## Troubleshooting

If you encounter any issues, feel free to ask in our [community chat](https://t.me/pixeloschat).

Thanks for reading!
