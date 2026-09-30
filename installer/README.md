> **Installing or upgrading a customer server?** See
> **[INSTALL-13.2.md](INSTALL-13.2.md)**. This file is about *building* the
> installer, not running it.

## Building Installer

The installer is using Setup Factory, with the .suf file in this project.
Copy the contents of the release folder before creating the installer.

If using https on a server that does not have mSupply installed then after an install add key.pem and cert.pem to the root of the dashboard directory e.g. `c:\program files\msupply dashboard` and then update the `/conf/custom.ini` file to reflect the correct location.
