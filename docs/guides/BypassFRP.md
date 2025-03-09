# Bypassing FRP Lock

In this guide, we will see how to bypass the Factory Reset Protection (FRP) lock on Android devices.

## Important Notes

- This method **only works on userdebug builds**.
- For builds after [this commit](https://github.com/PixelOS-AOSP/vendor_aosp/commit/ee3e2d2110385f6f6da418bccd3cd14b85b94c9c) (February 22, 2025), the `wipe-frp.sh` script is included in the ROM itself. You do **not** need to download or push the script.
- For older builds, you will need to manually download and push the script.

## Prerequisites

Before starting, ensure you have:

- `platform-tools` (ADB & Fastboot tools) installed.
- Your device in **recovery mode**.

## Steps to Bypass FRP

### 1. Connect your device and verify ADB connection

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

### 2. Gain root access via ADB

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

### 3. Run the Script

::: details For Builds after February 22, 2025
If you’re using a build that includes the script, simply run the script directly:

```sh
wipe-frp
```

:::

::: details For Older Builds
If your build does not include the script, you will need to:

1. [Download the `wipe-frp.sh` script](https://raw.githubusercontent.com/PixelOS-AOSP/vendor_aosp/refs/heads/fifteen/prebuilt/common/bin/wipe-frp.sh) and place it in the `platform-tools` folder.
2. Make sure to exit the adb shell first

    ```sh
    exit
    ```

3. Push the script to your device:

    ```sh
    adb push wipe-frp.sh /sdcard/
    ```

    Expected output:

    ```sh
    wipe-frp.sh: 1 file pushed, 0 skipped. 0.1 MB/s (1686 bytes in 0.015s)
    ```

4. Re-open the adb shell

    ```sh
    adb shell
    ```

5. Make the script executable:

    ```sh
    chmod +x /sdcard/wipe-frp.sh
    ```

6. Run the script:

    ```sh
    ./sdcard/wipe-frp.sh
    ```

:::

It should display similar output:

```log
zeus:/ # ./sdcard/wipe-frp.sh
32+0 records in
32+0 records out
32 bytes (32 B) copied, 0.004 s, 7.8 K/s
1000+0 records in
1000+0 records out
1000 bytes (0.9 K) copied, 0.004 s, 244 K/s
32+0 records in
32+0 records out
32 bytes (32 B) copied, 0.001 s, 31 K/s
8+0 records in
8+0 records out
8 bytes (8 B) copied, 0.001 s, 7.8 K/s
32+0 records in
32+0 records out
32 bytes (32 B) copied, 0.004 s, 7.8 K/s
zeus:/ #
```

### 4. Reboot the Device

```sh
reboot
```

Your device should now be free from the FRP lock.

## Troubleshooting

If you encounter any issues, feel free to ask in our [community chat](https://t.me/pixeloschat).
