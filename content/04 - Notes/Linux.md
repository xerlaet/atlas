# Linux
---

Preliminaries
1. Download iso from a mirror: https://archlinux.org/download/#http-downloads
2. Install onto a flash drive: https://wiki.archlinux.org/title/USB_flash_installation_medium
3. Disable secure boot in bios (F2)

Setup wifi
```bash
rfkill list
rfkill unblock all
ip link
ip link set wlan0 up
iwctl
device list
station wlan0 get-networks
station wlan0 connect [network]
exit
ping archlinux.org
```

`nmcli device wifi connect NETWORK password PASSWORD`

Archinstall
```bash
archinstall
# Archinstall Language         English (100%)
# Locales                      us, en_US.UTF-8, UTF-8
# Mirrors and repositories     United States
# Disk configuration           Best effort partition layout
# Swap                         Enabled
# Bootloader                   Grub
# Hostname                     [hostname]
# Authentication               root password, primary user account
# Profile                      Minimal
# Applications                 Bluetooth: Enabled, Audio: pipewire
# Kernels                      linux
# Network configuration        NetworkManager
# Additional packages          none
# Timezone                     US/Central
# Automatic time sync (NTP)    Enabled
```

Chroot for additional setup
```bash
# install packages
pacman -S nvidia nvidia-utils egl-wayland libva-nvidia-driver
pacman -S hyprland zsh kitty fuzzel waybar firefox ranger neovim tmux

# regenerate initramfs
# MODULES = (... i915 nvidia nvidia_modeset nvidia_uvm nvidia_drm ...)
# verify Y with sudo cat /sys/module/nvidia_drm/parameters/modeset
nvim /etc/mkinitcpio.conf
sudo mkinitcpio -P

# regenerate GRUB config
# GRUB_CMDLINE_LINUX_DEFAULT = "... nvidia-drm.modeset=1"
# uncomment GRUB_DISABLE_OS_PROBER=false
nvim /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

# create a pacman hook: https://wiki.archlinux.org/title/NVIDIA#pacman_hook
mkdir -p /etc/pacman.d/hooks/
nvim /etc/pacman.d/hooks/nvidia.hook
```

Exit and reboot the system (F12)
```bash
# configure wifi again
nmtui
ping archlinux.org
hyprland
```

```bash
hyprland 
kitty zsh? ranger neovim tmux man-db tldr git openssh
fuzzel
cliphist
firefox
obsidian

dunst (notifications)
xdg-desktop-portal-hyprland (screensharing)
hyprpolkitagent (authentication)
qt5-wayland qt6-wayland (for some gui support)

waybar
hyprpaper
hyprlock
hyprpicker

brightnessctl
greetd greetd-tuigreet (systemctl enable greetd.service)

otf-font-awesome
os-prober
htop
discord
spotify-launcher
hyprshot
image-magick
ttf-noto-nerd
```

```bash
sudo systemctl enable --now bluetooth.service
bluetoothctl
power on
scan on
connect [mac address]
trust [mac address]
exit
```


gimp/obs
android studio/vs code
bambu studio/cura
vmware
protonvpn
wacom tablet/roccat
discord/slack (vesktop or something else maybe)
git
parsec
python/java
sharex/powertoys/everything
steam/epic games/battle.net

```bash
# ~/.config/hypr/hyprland.conf
env = LIBVA_DRIVER_NAME,nvidia
env = __GLX_VENDOR_LIBRARY_NAME,nvidia
env = NVD_BACKEND,direct
env = ELECTRON_OZONE_PLATFORM_HINT,auto

# Monitor Configuration
# Laptop monitor (main)
monitor=eDP-1,2560x1600@60,0x0,1
# Ultrawide monitor
monitor=DP-1,3440x1440@144,2560x0,1
# For when you want to use the ultrawide by itself
# monitor=DP-1,3440x1440@144,0x0,1
# monitor=eDP-1,disable

# General Variables
$terminal = kitty
$file_manager = $terminal -e ranger
$menu = fuzzel
$browser = firefox
$shell = zsh

# General Settings
general {
    gaps_in = 5
    gaps_out = 8
    border_size = 2
    col.active_border = rgb(88c0d0)
    col.inactive_border = rgb(5e81ac)
    layout = dwindle
}

# Decorations
decoration {
    rounding = 5
    drop_shadow = true
    shadow_range = 4
    shadow_render_power = 3
    col.shadow = rgba(1a1a1aee)
}

# Animations
animations {
    enabled = true
    animation = windows,1,5,overshot,slide
    animation = fade,1,10,default
    animation = workspaces,1,6,overshot,slidevert
}

# Dwindle Layout
dwindle {
    pseudotile = true
}

# Gestures
gestures {
    workspace_swipe = true
}

# Keybindings
$mod = SUPER # Use the Super key (Windows key) as the modifier

# Basic Functionality
bind = $mod, Q, killactive,
bind = $mod, F, fullscreen,
bind = $mod, M, exit,
bind = $mod, L, exec, loginctl lock-session

# Launch Applications
bind = $mod, T, exec, $terminal
bind = $mod, E, exec, $file_manager
bind = $mod, R, exec, $menu
bind = $mod, B, exec, $browser
bind = $mod, N, exec, $editor
# bind = $mod, P, exec, grim -g "$(slurp)" # Screenshot tool

# Window Management
bind = $mod, space, togglefloating,

# Workspace Navigation
bind = $mod, 1, workspace, 1
bind = $mod, 2, workspace, 2
bind = $mod, 3, workspace, 3
bind = $mod, 4, workspace, 4
bind = $mod, 5, workspace, 5

# Move to Workspace
bind = $mod SHIFT, 1, movetoworkspace, 1
bind = $mod SHIFT, 2, movetoworkspace, 2
bind = $mod SHIFT, 3, movetoworkspace, 3
bind = $mod SHIFT, 4, movetoworkspace, 4
bind = $mod SHIFT, 5, movetoworkspace, 5

# Window Movement
bind = $mod, left, movefocus, l
bind = $mod, right, movefocus, r
bind = $mod, up, movefocus, u
bind = $mod, down, movefocus, d

# Window Rules
windowrule = float,^(wvkbd-desktop)$
windowrule = float,^(fuzzel)$
```
