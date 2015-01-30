+++
date = "2012-12-20"
title = "Experiences with the Ubuntu Software Center"
author = "Jono Cooper"
+++

The Ubuntu Software Center was around before the Mac App Store and the Windows Store but still isn't as good as either of them. The idea is to make it easy for developers to distribute apps and make it easy for consumers to purchase apps. Sadly the implementation doesn't live up to the idea and while many of the problems are issues with the store, some plague desktop Linux in general.

## Discovery
It should be easy to find things in an online marketplace - easier than a real store. It should also be easy to browse and discover new things. The iOS app store gets a lot of criticism for this as it only has a few methods for discovery. It's not great but it's still possible to discover new apps. Unfortunately the Ubuntu Software Center is even worse. The only means of discovery are a banner on the main page and a new apps section. There are no editor picks or charts - it's hard to find anything you're not looking for.

## Design
The Ubuntu Software Center's user experience leaves a lot to be desired. I'm not going to complain too much about the visual style as it's something that is seen throughout Ubuntu e.g the [Ubuntu One Control Panel](http://www.omgubuntu.co.uk/2012/02/login-screen-software-center-ubuntu-one-changes-land-in-ubuntu-12-04). The experience is ruined by silly little things such as free apps having a "buy" button. It would take less than five minutes to fix and it would help improve the user experience.

![Buy Now Bug](http://files.mintco.de/site/images/softwarecenterbug.png)

Some of the design mistakes include:

- Selling ebooks as apps (installs a PDF)
- Making technical packages available
- Requiring your login password to install packages
- Blurry App Icons (not the developers fault)
- Not handling system updates

I think the biggest problem is having all the software from the standard repositories available. Software repositories are great, but only for technical packages. Who cares if there are 57,000 packages. The software center should be a place for high quality software. If a developer wants exposure, they'll have to submit it themselves. Missing icons and descriptions don't look great for the store.

System updates are currently handled through a separate application and should be unified into the software center. The biggest problem with system updates however is that **the average user does not care about the separate technical packages**. Combining updates for the OS means less things break and normal apps can be updated agnostically.

## Developers
Six months ago, Canonical held the [Ubuntu App Showdown](http://developer.ubuntu.com/2012/06/announcing-the-ubuntu-app-showdown-contest/) hoping to attract developers to Ubuntu as a platform. The contest was to create an app in three weeks from scratch and the winner would take home some prizes. George and I entered the competition not expecting anything but ended up taking [first place](http://developer.ubuntu.com/2012/08/announcing-the-ubuntu-app-showdown-winners/). While we're happy with the result, it was an interesting ride.

Some apps from the Showdown still haven't even been approved. The only reason why our app was approved quickly was because it won the competition. There shouldn't be any reason why proprietary apps are put through faster than open source apps. It's just stupid.

Packaging on Linux is terrible. It's time consuming, there's a bunch of different formats and different versions of the same distribution will require different packages. Just make it easy to package an Ubuntu app.

## How can this be fixed?
The Ubuntu Software Center isn't great but it's reasonably simple to fix.

- Hire some user experience designers
- Make sure the developers listen to the designers
- Fix the approval process (I've heard this is already being done)
- Fix packaging

Apple, Valve, Amazon and others have all created great user experiences and as a result, people enjoy shopping at their online marketplaces. Having an excellent user experience will encourage more purchasing and will bring more users and developers to Ubuntu.
