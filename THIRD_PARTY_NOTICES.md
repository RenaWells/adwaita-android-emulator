# Third-Party Notices

This file credits third-party software, services, runtimes, and assets used by
the Android Emulator project. It is an attribution and license notice file for
dependencies and related tooling; it is not a license grant for this project's
own source code.

## Included in the AppImage

- AppImage type 2 runtime
  - Project: AppImage type2-runtime / AppImageKit
  - License: MIT, see the upstream repository license
  - Source: https://github.com/AppImage/type2-runtime
  - Use: prepended runtime used by `package-appimage.sh` to make the AppImage
    executable

## Required Host Runtime

These components are expected to be installed by the Linux distribution or by
the user. They are not bundled into this project's AppImage.

- Python
  - License: Python Software Foundation License
  - Source: https://www.python.org/
  - Use: application runtime

- GTK 4
  - Project: GNOME GTK
  - License: LGPL-2.1-or-later
  - Source: https://gtk.org/
  - Use: application widgets through PyGObject

- libadwaita
  - Project: GNOME libadwaita
  - License: LGPL-2.1-or-later
  - Source: https://gitlab.gnome.org/GNOME/libadwaita
  - Use: Adwaita application widgets and styling

- PyGObject / GObject Introspection
  - Project: GNOME PyGObject
  - License: LGPL-2.1-or-later
  - Source: https://pygobject.gnome.org/
  - Use: Python bindings for GTK, libadwaita, GLib, Gio, and related GNOME
    libraries

## Downloaded by the Setup Flow

These components may be downloaded or installed by the setup wizard or by
`setup-android-gaming.sh`. They are not redistributed by this project unless a
user downloads them separately on their own system.

- Android SDK command-line tools, platform-tools, emulator, and system images
  - Provider: Google / Android Open Source Project
  - License: Android SDK License Agreement and component-specific licenses
  - Source: https://developer.android.com/studio
  - Use: emulator binaries, SDK manager, ADB, and Android system images

- LineageOS x86_64 custom images
  - Project: LineageOS and image/package maintainers
  - License: LineageOS and bundled component licenses
  - Source: https://lineageos.org/
  - Use: optional user-supplied custom emulator image for the
    `Gaming_LineageOS_x86_64` AVD

- Arch Linux bootstrap and packages
  - Project: Arch Linux and upstream package maintainers
  - License: per-package licenses from Arch Linux and upstream projects
  - Source: https://archlinux.org/
  - Use: optional glibc runtime environment for Alpine/musl systems

- OpenJDK and distribution packages
  - Projects: selected by the user's distro package manager
  - License: per-package licenses
  - Use: SDK tooling and host integration dependencies

## Build, Deployment, and Operations Tools

These tools are used to build, publish, host, or operate the project. They are
not part of the app's own source code.

- squashfs-tools / `mksquashfs`
  - License: GPL-2.0-or-later
  - Source: https://github.com/plougher/squashfs-tools
  - Use: builds the AppImage SquashFS payload

- libarchive / `bsdtar`
  - License: BSD-style license, see upstream license files
  - Source: https://www.libarchive.org/
  - Use: archive extraction during setup

- GitHub CLI
  - License: MIT
  - Source: https://github.com/cli/cli
  - Use: repository and GitHub Pages publishing workflow

- GitHub Pages and GitHub Actions
  - Provider: GitHub
  - License: service terms plus action-specific repository licenses
  - Source: https://github.com/actions
  - Use: static site hosting and deployment

- Apache HTTP Server
  - License: Apache-2.0
  - Source: https://httpd.apache.org/
  - Use: optional local internal-testing website host

- cloudflared
  - Project: Cloudflare Tunnel client
  - License: Apache-2.0, see upstream repository license
  - Source: https://github.com/cloudflare/cloudflared
  - Use: temporary public tunnel during testing; not required by the app

## Project-Created Assets

The app icon SVG, website preview SVG, website screenshot, website copy, shell
scripts, and Python application code in this repository were created for this
project unless a file states otherwise.
