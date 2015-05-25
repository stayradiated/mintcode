+++
weight = 12

date = "2015-05-24T01:51:22+12:00"
title = "Khaki"

image = "/assets/home/khaki.jpg"

sourcelink = "https://github.com/stayradiated/khaki"

description = "Bluetooth Car Keys with iOS app."
+++

- **Languages:** Go, Objective-C

Unlock your car just by approaching it! Uses Bluetooth LE on your iPhone to
automatically detect when you are in close proximity to your car.

- Uses Objective-C on iOS and Go on a Raspberry Pi with Bluetooth Low Energy.
- Detects when your car is running, and stops 'ranging' to save battery life on
  your phone.
- iOS app uses Apple iBeacons to make sure the app is always running in the
  background when you approach your car, without you having to manually open
  it.
- Uses HMAC-SHA256 authentication for security.
