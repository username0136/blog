# Guide to Building PixelOS

::: danger WARNING
The content on this page is outdated and will be updated in near future.
:::

This guide provides a step-by-step tutorial on setting up a build environment for building PixelOS on Ubuntu and syncing the ROM from the manifest.

## Step 1: Install Necessary Tools and Dependencies

Ensure you have the necessary tools and dependencies installed on your system, including the Java Development Kit (JDK), the Android SDK, Git, and Repo. Open a terminal and run the following command:

```bash
sudo apt-get update && sudo apt-get install openjdk-8-jdk git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip
```

Alternatively, for a simpler method, run:

```bash
wget https://raw.githubusercontent.com/akhilnarang/scripts/master/setup/android_build_env.sh && sudo bash android_build_env.sh
```

## Step 2: Sync PixelOS ROM Using Repo

Once your build environment is set up, use Repo to sync the PixelOS ROM from the manifest. Create a directory to store the PixelOS source code and run the following commands:

```bash
mkdir pixelos
cd pixelos
repo init -u https://github.com/PixelOS-AOSP/manifest.git -b thirteen
repo sync
```

This initializes the Repo tool and syncs the `thirteen` version of the PixelOS ROM from the manifest. The process may take some time, depending on your disk and internet connection speed.

## Step 3: Download Device-Specific Source Code

To download the device-specific source code for the PixelOS ROM, use the `git clone` command and sync the device sources to their respective folders.

## Step 4: Build the ROM

After downloading the device-specific source code, use the `lunch` and `make` commands to build the ROM. For example, to build PixelOS for the device codenamed `mojito` with the build type set to `user`:

```bash
lunch aosp_mojito-user
mka bacon -j$(nproc --all)
```

## Step 5: Locate the Built ROM

After the build process is complete, you should have a working zip file of the PixelOS ROM. You can find it at `./out/target/product/mojito/PixelOS_*.zip` (replace `mojito` with the codename for your device).

You can flash this zip to your device using the appropriate tools, such as PixelOS Recovery or TWRP.
