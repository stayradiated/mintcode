# GainClone Amplifier

I want to build an amplifier. Mainly because I need something to connect an
iPhone to a set of speakers.

**Warning**: This project requires working with mains supply voltages, which
can be lethal if you don't take the proper precautions.

My original idea was to use a LM386 IC and $20 worth of parts to make a 0.5W
amp powered using 12v, but now I'm thinking I need to make something with a bit
more oomph.

I discovered the gainclone amplifier, which appears to have been popular in
the DIY audio community.

## Power Supply

Pretty important. You don't want to just use any old power supply, because it
will likely introduce a humming sound.

Recommended reading: [Decible Dungeoun - Building a PSU](http://www.decdun.me.uk/gainclone_psu.html).

- **IEC power supply cable** (female). The same cable you would use to plug into a
  computer PSU or monitor. I have a bunch of these lying around.
- **IEC panel mount socket** (male). Going to get one with a built in switch
  and fuse so it's a bit safer to work with.
- **1.6AT Fuse**. Needs to work with 230v and has to be anti-surge to work with
  the transformer.
- **Toroidal Transformer**. This is one of the most expensive parts of the
  project. From what I've read it should support at least 120VA (not entirely
  sure what that means) and needs to work with 230v AC and output something
  between 20-38v AC.

## Bridge Rectifier

This converts AC to DC using a bunch of diodes in a clever pattern. I'm going
to go for the 'snubberized' version found on
[chipamp.com](http://chipamp.com/beta2/wp-content/uploads/ps-rev3-sch.png).

There are also going to be **two** bridge rectifiers, one for each channel, so
double the number of parts below.

Requires two sets of:

- 4x MUR860 Diodes
- 1x 2.2K ohm Resistor
- 1x 1 ohm Resistor
- 1x 10,000uF Capacitor
- 2x 0.1uF Capacitor

## Amplifier
