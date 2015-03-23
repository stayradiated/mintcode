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

![All the parts meticulously laid out](/assets/lm3886/ready-for-soldering.jpg)
![](/assets/lm3886/finished-soldering-2.jpg)

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


## Bonus Shot

![](/assets/lm3886/assembly.jpg)


## Preamplifier
