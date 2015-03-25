+++
author = "George Czabania"
date = "2015-02-09"
title = "Khaki"
type = "project"
link = "Github"

[commits]
  first = "2014-12-22"
  total = "55"

[links]
  Github = "https://github.com/stayradiated/khaki"
+++

Unlock your car just by approaching it! Uses Bluetooth LE on your iPhone to
automatically detect when you are in close proximity to your car.

- Uses Objective-C on iOS and Go on a Raspberry Pi with Bluetooth Low Energy.
- Detects when your car is running, and stops 'ranging' to save battery life on
  your phone.
- iOS app uses Apple iBeacons to make sure the app is always running in the
  background when you approach your car, without you having to manually open
  it.
- Uses HMAC-SHA256 authentication for security.
