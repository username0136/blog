# Device Requirements

1. RemovePackages **MUST NOT** be used. This is a form of modifying the source code, and is not allowed.

2. The device **MUST** have SELinux Enforcing to release builds.

3. Release builds **MUST** be `userdebug` or `user`.

4. Usage of `IGNORE_SELINUX_NEVERALLOWS := true` **MUST** be avoided.

5. The device **MUST NOT** include any unused props, overlays or packages. This includes, but is not limited to, packages not being built, packages that don't work, obsolete packages, placebo 'tweaks' or any packages that will include unnecessary and/or unwanted features.

6. On the encryption, the device **MUST** always have the encryption enabled and enforced as per stock. This is to ensure the security and privacy of the device's data.

7. You **MUST** make the kernel sources for the ROM publicly available, unless the OEM does not provide them. Prebuilt kernels are **DISCOURAGED** for kernel version 5.4 and below.

8. You **MUST NOT** overclock or do anything that can damage the device. This can cause instability and can harm the device.

::: info
Exceptions for some of the requirements maybe made for older phones and during beta stage.
:::
