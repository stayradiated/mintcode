+++
title = "LM3886 Chip Amplifier"
author = "George Czabania"
date = "2015-03-05"
image = "/assets/lm3886/thumb.jpg"
+++

# Building a Chip Amplifier

In preparation to this project, I built a [LM380 chip
amp](/projects/lm380-stereo-amp/), which was cheaper and easier and makes for a
good weekend project.

---

**Project Goal**

I want to build an amplifier. Mainly because I need something to connect an
iPhone to a set of speakers.

**Warning**: This project requires working with mains supply voltages, which
can be lethal if you don't take the proper precautions.

My original idea was to use a LM386 IC and $20 worth of parts to make a 0.5W
amp powered using 12v, but now I'm thinking I need to make something with a bit
more oomph.

Then I discovered the gainclone amplifier, which appears to be quite popular in
the DIY audio community.

After researching different circuits and variations, I settled on the kitset
from [chipamp.com](http://chipamp.com). I chose the [Non-Inverting LM3886
stereo
kit](http://chipamp.com/product/non-inverting-lm3886-stereo-amplifier-kit/),
which included a 'snubberized' power supply board, and was also on special.

However, the kit supplys only the parts for the power supply board and
the two amplifiers. There is still quite a lot you need to do.

## The Chipamp Kit

[![All the parts meticulously laid
out](/assets/lm3886/parts-layout.jpg)](/assets/lm3886/full/parts-layout.jpg)

### The Full Bridge Rectifier

This converts AC to DC using a bunch of diodes in a clever pattern. I'm going
to go for the 'snubberized' version.

The circuit is based on one developed by Carlos Machado, which allows it drive
more difficult loads without adversly affecting the midrange and top end sound.
[More information here](http://www.decdun.me.uk/gainclonesnub.html).

There are two identical circuits, each with a full bridge rectifiers. The dual
circuits are for the left and right audio channels.

![](http://chipamp.com/beta2/wp-content/uploads/ps-rev3-sch.png)

Parts list (included with kit):

    2x 10000 uF 50v Panasonic TS Capacitors (35mm x 30mm low profile)
    4x 0.1 uf film caps
    8x MUR860 On Semiconductor Diodes
    2x 2.2 kohm 2w metal film resistors
    2x 1 ohm 2w metal film resistors
    1x blue LED
    1x 1N4004 diode
    1x 10 kohm 0.5w compact metal film resistor
    1x 10 uF Panasonic FC Capacitors

[![](/assets/lm3886/finished-chip-amps.jpg)](/assets/lm3886/full/finished-chip-amps.jpg)

### Amplifier

Parts list (included with kit):

    2x LM3886TF
    4x 22 kohm 0.5w compact metal film resistors
    2x 10 kohm 0.5w compact metal film resistors
    2x 1 kohm 0.5w compact metal film resistors
    2x 680 ohm 0.5w compact metal film resistors
    2x 2.7 ohm 2w metal film resistors
    6x 100 uf 50v Panasonic FC
    2x 47 uf 50v Panasonic FC
    6x 0.1 uf film caps

## The Power Supply

This is pretty important. You don't want to just use any old power supply,
because it will likely introduce a humming sound to audio output. I decided to
use a toroidal transformer.

[225VA 2x25V AC Toroidal
Transformer](http://nz.rs-online.com/web/p/toroidal-transformers/2238178/)

Recommended reading: [Decible Dungeoun - Building a
PSU](http://www.decdun.me.uk/gainclone_psu.html).

**Required Components**

- **IEC C13 power supply cable**. The same cable you would use to plug into a
  computer or monitor. I happen have a bunch of these lying around.
- **IEC C14 panel mount socket**. I chose to get one with a built in switch
  and fuse so it's a bit safer to work with.
- **2AT Fuse**. Needs to work with 230v and has to be anti-surge to work with
  the transformer.
- **Toroidal Transformer**. This is one of the most expensive parts of the
  project. From what I've read it should support at least 120VA (not entirely
  sure what that means) and needs to work with 230v AC and output something
  between 20-38v AC.

[![](/assets/lm3886/iec-socket.jpg)](/assets/lm3886/full/iec-socket.jpg)

## Preamplifier

[![](/assets/lm3886/preamp-7.jpg)](/assets/lm3886/full/preamp-7.jpg)
[![](/assets/lm3886/preamp-5.jpg)](/assets/lm3886/full/preamp-5.jpg)
[![](/assets/lm3886/preamp-6.jpg)](/assets/lm3886/full/preamp-6.jpg)
[![](/assets/lm3886/preamp-1.jpg)](/assets/lm3886/full/preamp-1.jpg)
[![](/assets/lm3886/preamp-2.jpg)](/assets/lm3886/full/preamp-2.jpg)
[![](/assets/lm3886/preamp-3.jpg)](/assets/lm3886/full/preamp-3.jpg)
[![](/assets/lm3886/controls.jpg)](/assets/lm3886/full/controls.jpg)
[![](/assets/lm3886/preamp-4.jpg)](/assets/lm3886/full/preamp-4.jpg)

## Preamplifier Power

[![](/assets/lm3886/regulator-1.jpg)](/assets/lm3886/full/regulator-1.jpg)
[![](/assets/lm3886/regulator-2.jpg)](/assets/lm3886/full/regulator-2.jpg)
[![](/assets/lm3886/regulator-3.jpg)](/assets/lm3886/full/regulator-3.jpg)
[![](/assets/lm3886/regulator-4.jpg)](/assets/lm3886/full/regulator-4.jpg)

## Trying it out

[![](/assets/lm3886/before-box.jpg)](/assets/lm3886/full/before-box.jpg)
[![](/assets/lm3886/table-1.jpg)](/assets/lm3886/full/table-1.jpg)
[![](/assets/lm3886/table-2.jpg)](/assets/lm3886/full/table-2.jpg)

## The Box

[![](/assets/lm3886/cutting-box-4.jpg)](/assets/lm3886/full/cutting-box-4.jpg)
[![](/assets/lm3886/cutting-box-5.jpg)](/assets/lm3886/full/cutting-box-5.jpg)
[![](/assets/lm3886/cutting-box-6.jpg)](/assets/lm3886/full/cutting-box-6.jpg)
[![](/assets/lm3886/cutting-box-3.jpg)](/assets/lm3886/full/cutting-box-3.jpg)
[![](/assets/lm3886/cutting-box-1.jpg)](/assets/lm3886/full/cutting-box-1.jpg)
[![](/assets/lm3886/cutting-box-2.jpg)](/assets/lm3886/full/cutting-box-2.jpg)
[![](/assets/lm3886/drilling-1.jpg)](/assets/lm3886/full/drilling-1.jpg)
[![](/assets/lm3886/drilling-2.jpg)](/assets/lm3886/full/drilling-2.jpg)
[![](/assets/lm3886/drilling-4.jpg)](/assets/lm3886/full/drilling-4.jpg)
[![](/assets/lm3886/painting-1.jpg)](/assets/lm3886/full/painting-1.jpg)
[![](/assets/lm3886/drilling-3.jpg)](/assets/lm3886/full/drilling-3.jpg)

## Installing Components in Box

[![](/assets/lm3886/table-3.jpg)](/assets/lm3886/full/table-3.jpg)
[![](/assets/lm3886/inputs.jpg)](/assets/lm3886/full/inputs.jpg)
[![](/assets/lm3886/box-mounts.jpg)](/assets/lm3886/full/box-mounts.jpg)
[![](/assets/lm3886/without-lid.jpg)](/assets/lm3886/full/without-lid.jpg)
[![](/assets/lm3886/fitting-components.jpg)](/assets/lm3886/full/fitting-components.jpg)
[![](/assets/lm3886/with-lid.jpg)](/assets/lm3886/full/with-lid.jpg)

## Complete

[![](/assets/lm3886/complete.jpg)](/assets/lm3886/full/complete.jpg)

## Bonus Shots

[![](/assets/lm3886/lego-1.jpg)](/assets/lm3886/full/lego-1.jpg)
[![](/assets/lm3886/lego-2.jpg)](/assets/lm3886/full/lego-2.jpg)
