This blog post is a living documentation of my Wanhao Duplicator 6 / Monoprice Maker Ultimate printer. 

- [printer.cfg](https://github.com/kushagharahi/wanhao-d6-config/blob/main/printer.cfg) --  Klipper config
  - Bltouch support
  - 10x10 mesh height map calibration
  - Force move Z without homing
- [petg-superslicer-config.ini](https://github.com/kushagharahi/wanhao-d6-config/blob/main/petg-superslicer-config.ini) -- PETG settings for SuperSlicer
  - Features a prime line after heating from 05, 30 -> 05, 170 -> 07, 170 -> 07, 30
    - This eliminates the need for skirts or brims!

If you wish to use these configs as a starting point for your Wanhao D6, you may want to consider the modifcations I've made. Without mods, the Wanhao D6 is basically unusable (in my opinion)


Mods:
- OEM enclosure
- Microswiss all metal hotend and slotted heat sink
- Triangle Labs direct drive extruder (mounted with Bondtech machined metal mount and Bondtech PCB holder)
  - Replaced the extruder motor with a pancake motor to prevent build area loss
  -  42x42x23mm, 1.8 deg. step angle (200 steps/rev), 1A/3.5ohms/4.1V, 13Ncm
- BLTouch
  - Mount: [is on my github wanhao-d6-config repo (bltouch_mount.stl)](https://github.com/kushagharahi/wanhao-d6-config/blob/main/parts/bltouch_mount.stl) 
    - Model: [nik101968](cults3d.com/en/users/nik101968/3d-models) / [Cults3D](https://cults3d.com/en/3d-model/tool/wanhao-duplicator-6-d6-bltouch-support) / CC BY
  - wired to both the z limit connector and analog connector. Power is from the analog connector pins 2 and 3, servo signal is z limit pin 1, and limit function moved to analog pin 1.
  - Wiring diagram: ![Wiring diagram](~posts/wanhao_d6_config/bltouch-wiring.png) ([taken from dot bob](https://www.thingiverse.com/thing:2483813))
- Left and right hand mounted 24v 4010 radial fans wired in parallel into PCB fan slot (no build area loss!)
  - Left mount: https://www.thingiverse.com/thing:4802449
  - Right mount [is on my github wanhao-d6-config repo (fan_R_holder.stl)](https://github.com/kushagharahi/wanhao-d6-config/blob/main/parts/fan_R-holder.stl) -- credit to tqzr from above thingiverse link for sending me the step file
    - ![fan holder stl](~posts/wanhao_d6_config/fan_r_holder.png)
- Silicone boot for hotend -- important to avoid cooling down the hotend and prevent errors: https://www.thingiverse.com/thing:2216683 
- Wire management clip for the direct drive mount
  - https://www.thingiverse.com/thing:3762718
- Mirror on top of build plate (removed the buildtak the printer came with)


Non functional (ish) mods:
- Feet to allow airflow: https://www.thingiverse.com/thing:1580480 
- Hole plugs to prevent filament/crap from going to the electronics section: https://www.thingiverse.com/thing:2872888
- Steam valve knob: https://www.thingiverse.com/thing:3152876 
- Custom crimped 16 pin dumont cable to replace the flat 16 pin IDE cable

Useful links:
- Mobo PCB overview: https://3dprint.wiki/reprap/wanhao/duplicator6/major_components/motherboard
- Gantry alignment and case modification for holes to be able to remove rods without having to disassemble the whole gantry: https://othermod.com/turn-a-monoprice-maker-ultimate-or-wanhao-duplicator-6-into-an-ultimaker-2/
- General printer tuning: https://ellis3dp.com/Print-Tuning-Guide/articles/index_tuning.html

![hot end top](~posts/wanhao_d6_config/hotend_top.png)
![hot end bottom](~posts/wanhao_d6_config/hotend_bottom.png)

If you have any questions, feel free to [open an issue](https://github.com/kushagharahi/wanhao-d6-config/issues) and I will do my best to help out!