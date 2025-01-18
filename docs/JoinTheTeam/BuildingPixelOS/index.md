# Guide to Building PixelOS

This guide will provide a step-by-step tutorial on how to set up a build environment for building PixelOS on Ubuntu and sync the ROM from the manifest.

1. First, you will need to make sure that you have the necessary tools and dependencies installed on your system. This includes the Java Development Kit (JDK),
   the Android SDK, and other tools such as Git and Repo. To do this, open a terminal and run the following command:

```bash
sudo apt-get update && sudo apt-get install openjdk-8-jdk git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip
```

or, if you want an easier method, open a terminal and run the following command:

```bash
wget https://raw.githubusercontent.com/akhilnarang/scripts/master/setup/android_build_env.sh && sudo bash android_build_env.sh
```

2. Once your build environment is set up, you can use Repo to sync the PixelOS ROM from the manifest.
   To do this, create a directory where you want to store the PixelOS source code, then run the following commands:

```bash
mkdir pixelos
cd pixelos
repo init -u https://github.com/PixelOS-AOSP/manifest.git -b thirteen
repo sync
```

This will initialize the Repo tool and sync the `thirteen` version of the PixelOS ROM from the manifest.
This process may take some time, depending on the speed of your disk and internet connection.

3. To download the device-specific source code for the PixelOS ROM, you can use the git clone command and sync the device
   sources to their respective folders.

4. After the device-specific source code is downloaded, you can use the `lunch` and `make` command to build the ROM. For example, if you want to
   build PixelOS for device codenamed `mojito` with build type set to `user`:

```bash
lunch aosp_mojito-user
mka bacon -j$(nproc --all)
```

5. After the build process is complete, you should have a working zip file of the PixelOS ROM, you can find it at `./out/target/product/mojito/PixelOS_*.zip`
   replace `mojito` with codename for your device.

You can flash this zip to your device using the appropriate tools, such as PixelOS Recovery or TWRP.
