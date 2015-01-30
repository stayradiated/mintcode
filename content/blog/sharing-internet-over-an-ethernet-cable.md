+++
date = "2013-06-07"
title = "Sharing Internet over an Ethernet Cable"
author = "Jono Cooper"
+++

A few days ago, the phone jack for the modem stopped working and I had to move it to another part of the house. However our desktop doesn't have a wireless card so I dug out an old netbook with an Ethernet jack to use as a temporary solution.

Start by connecting to the wireless network on the computer and using an ethernet cable to connect both devices. The device requiring a network connection won't require any special configuration besides using DHCP but there's a few easy steps required for the other.

## Windows

1. Open the **Network and Sharing Center** and click on **Change Adapter Setting** in the sidebar.
2. Right click on **Local Area Connection** and select **Properties**
![LAN Properties](http://files.mintco.de/site/images/lanproperties_windows.jpg)
3. Select **Internet Protocol Version 4 (TCP/IPv4)** and select **Properties**.
4. Select **Use the following IP Address** and use something such as **192.168.0.1**. Use **255.255.255.0** as the subnet and leave the rest blank.
5. When you're back at the network connections window, right click the **Wireless Network Connection** and select **Properties**.
![Wireless LAN Properties](http://files.mintco.de/site/images/wlanproperties_windows.jpg)
6. Switch to the **Sharing** tab and tick **Allow other network users to connect through this computers internet connection**. Select **Local Area Connection** as the adapter.
7. Hit **ok**, **close** and you're done!

## OS X
1. Open **System Preferences &rarr; Sharing**.
2. Select **Internet Sharing** and choose the interfaces you would like to share on (My Mac does not have an Ethernet jack).
![Internet Sharing Mac](http://files.mintco.de/site/images/internetsharing_mac.png)
3. Tick the checkbox and you're done!

## Ubuntu

1. Click the wireless icon and select **Edit Connections** in the dropdown.
2. Select your Ethernet interface and click **Edit**.
![Connections Window](http://files.mintco.de/site/images/networkconnections_ubuntu.png)
3. Head over to the **IPv4 Settings** tab and change the method to **Shared to other computers**.
![Ethernet Options Dialog](http://files.mintco.de/site/images/sharednetwork_ubuntu.png)
4. Hit **save** and you're done!

---

The only problem with these methods are that the device requiring Internet won't appear on the network which will make services such as file and printer sharing unavailable. I can't imagine that this would be would be particularly good for your power bill either. Besides these minor drawbacks, this is an easy and quick way to share an Internet connection.
