import React from 'react';
import './App.css';
import banjo from './assets/banjokazooie.jpg';
import bayonetta from './assets/bayonetta.jpg';
import bowser from './assets/bowser.jpg';
import bowserjr from './assets/bowserjr.jpg';
import byleth from './assets/byleth.jpg';
import captainfalcon from './assets/captainfalcon.jpg';
import chrom from './assets/chrom.jpg';
import cloud from './assets/cloud.jpg';
import corrin from './assets/corrin.jpg';
import daisy from './assets/daisy.jpg';
import darkpit from './assets/darkpit.jpg';
import darksamus from './assets/darksamus.jpg';
import diddykong from './assets/diddykong.jpg';
import donkeykong from './assets/donkeykong.jpg';
import drmario from './assets/drmario.jpg';
import duckhunt from './assets/duckhunt.jpg';
import empty from './assets/empty.png';
import falco from './assets/falco.jpg';
import fox from './assets/fox.jpg';
import gameandwatch from './assets/gameandwatch.jpg';
import ganondorf from './assets/ganondorf.jpg';
import greninja from './assets/greninja.jpg';
import hero from './assets/hero.jpg';
import iceclimbers from './assets/iceclimbers.jpg';
import ike from './assets/ike.jpg';
import incineroar from './assets/incineroar.jpg';
import inkling from './assets/inkling.jpg';
import isabell from './assets/isabell.jpg';
import jigglypuff from './assets/jigglypuff.jpg';
import joker from './assets/joker.jpg';
import ken from './assets/ken.jpg';
import kingdedede from './assets/kingdedede.jpg';
import kingkrool from './assets/kingkrool.jpg';
import kirby from './assets/kirby.jpg';
import link from './assets/link.jpg';
import littlemac from './assets/littlemac.jpg';
import lucario from './assets/lucario.jpg';
import lucas from './assets/lucas.jpg';
import lucina from './assets/lucina.jpg';
import luigi from './assets/luigi.jpg';
import mario from './assets/mario.jpg';
import marth from './assets/marth.jpg';
import megaman from './assets/megaman.jpg';
import metaknight from './assets/metaknight.jpg';
import mewtwo from './assets/mewtwo.jpg';
import miibrawler from './assets/miibrawler.jpg';
import miigunner from './assets/miigunner.jpg';
import miiswordfighter from './assets/miiswordfighter.jpg';
import ness from './assets/ness.jpg';
import olimar from './assets/olimar.jpg';
import pacman from './assets/pacman.jpg';
import palutena from './assets/palutena.jpg';
import peach from './assets/peach.jpg';
import pichu from './assets/pichu.jpg';
import pikachu from './assets/pikachu.jpg';
import pirahnaplant from './assets/pirahnaplant.jpg';
import pit from './assets/pit.jpg';
import pokemontrainer from './assets/pokemontrainer.jpg';
import richter from './assets/richter.jpg';
import ridley from './assets/ridley.jpg';
import rob from './assets/rob.jpg';
import robin from './assets/robin.jpg';
import rosalina from './assets/rosalina.jpg';
import roy from './assets/roy.jpg';
import ryu from './assets/ryu.jpg';
import samus from './assets/samus.jpg';
import sheik from './assets/sheik.jpg';
import shulk from './assets/shulk.jpg';
import simon from './assets/simon.jpg';
import smash from './assets/smash.png';
import snake from './assets/snake.jpg';
import sonic from './assets/sonic.jpg';
import terry from './assets/terry.png';
import toonlink from './assets/toonlink.jpg';
import unknown from './assets/unknown.jpg';
import villager from './assets/villager.jpg';
import wario from './assets/wario.jpg';
import wiifittrainer from './assets/wiifittrainer.png';
import wolf from './assets/wolf.jpg';
import yoshi from './assets/yoshi.jpg';
import younglink from './assets/younglink.jpg';
import zelda from './assets/zelda.jpg';
import zerosuitsamus from './assets/zerosuitsamus.jpg';
import CanvasJSReact from './assets/canvasjs.react';
import YouTube from 'react-youtube';
//var CanvasJSReact = require('./assets/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const gameData = [
   [
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "Tim", character: samus, kos: 0},
    {name: "Doug", character: sheik, kos: 0},
    {name: "Zack", character: hero, kos: 0},
    {stage: "Custom"},
    {date: "Sept 11 2019"}
  ],/*[
    {name: "Doug", character: banjo, kos: 0},
    {name: "Zack", character: banjo, kos: 0},
    {name: "Micah", character: ridley, kos: 0},
    {name: "Tim", character: unknown, kos: 0},
    {stage: "Custom"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Micah", character: donkeykong, kos: 0},
    {name: "Zack", character: hero, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Tim", character: unknown, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Tim", character: unknown, kos: 0},
    {name: "Micah", character: unknown, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Zack", character: unknown, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Tim", character: unknown, kos: 0},
    {name: "Micah", character: unknown, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Zack", character: unknown, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Zack", character: unknown, kos: 0},
    {name: "Micah", character: unknown, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Tim", character: unknown, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 11 2019"}
  ],*/[
    {name: "Zack", character: drmario, kos: 5},
    {name: "Tim", character: ness, kos: 4},
    {name: "Micah", character: peach, kos: 0},
    {name: "Doug", character: samus, kos: 1},
    {stage: "custom"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Doug", character: samus, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {stage: "Custom"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Doug", character: luigi, kos: 5},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Micah", character: incineroar, kos: 0},
    {stage: "Mario Maker"},
    {date: "Sept 11 2019"}
  ],[
    {name: "Tim", character: samus, kos: 6},
    {name: "Doug", character: kirby, kos: 2},
    {name: "Zack", character: drmario, kos: 0},
    {name: "Micah", character: incineroar, kos: 3},
    {stage: "Corneria"},
    {date: "Sept 11 2019"}
  ],/*[
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "Tim", character: samus, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Zack", character: unknown, kos: 0},
    {stage: "Spiral Mountain"},
    {date: "Sept 11 2019"}
  ],*/[
    {name: "Micah", character: banjo, kos: 4},
    {name: "Doug", character: captainfalcon, kos: 2},
    {name: "Tim", character: cloud, kos: 1},
    {name: " " , character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Micah", character: darkpit, kos: 0},
    {name: "Tim", character: pacman, kos: 0},
    {name: "Doug", character: zerosuitsamus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Betsy", character: bowser, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Doug", character: zerosuitsamus, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Micah", character: iceclimbers, kos: 4},
    {name: "Tim", character: samus, kos: 3},
    {name: "Doug", character: toonlink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Tim", character: samus, kos: 0},
    {name: "Micah", character: lucario, kos: 0},
    {name: "Doug", character: samus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: marth, kos: 0},
    {name: "Micah", character: miiswordfighter, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Sept 18 2019"}
  ],[
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Zack", character: kingdedede, kos: 4},
    {name: "Micah", character: incineroar, kos: 0},
    {name: "", character: empty},
    {stage: "Spiral Mountain"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: corrin, kos: 2},
    {name: "Tim", character: samus, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 0},
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "Tim", character: samus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Unknown"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "Tim", character: ness, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Paper Mario"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Zack", character: yoshi, kos: 2},
    {name: "Tim", character: ness, kos: 4},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Big Battlefield"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Zack", character: hero, kos: 6},
    {name: "Micah", character: peach, kos: 1},
    {name: "Tim", character: pacman, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: corrin, kos: 2},
    {name: "Micah", character: banjo, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kalos Pokemon League"},
    {date: "Sept 25 2019"}
  ],[
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "Doug", character: marth, kos: 4},
    {name: "Tim", character: ness, kos:2},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Doug", character: hero, kos: 4},
    {name: "Tim", character: ness, kos: 1},
    {name: "Micah", character: simon, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Doug", character: link, kos: 3},
    {name: "Micah", character: simon, kos: 2},
    {stage: "Rainbow Cruise"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 0},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: fox, kos: 0},
    {name: "Micah", character: bowserjr, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Tim", character: samus, kos: 2},
    {name: "Zack", character: kingdedede, kos: 4},
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Doug", character: kingkrool, kos: 1},
    {stage: "Tortimer Island"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Micah", character: banjo, kos: 3},
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Doug", character: donkeykong, kos: 2},
    {name: "Zack", character: roy, kos: 1},
    {stage: "Balloon Fight"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Doug", character: luigi, kos: 3},
    {name: "Zack", character: roy, kos: 1},
    {name: "Tim", character: darksamus, kos: 2},
    {stage: "Custom"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Doug", character: samus, kos: 1},
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: donkeykong, kos: 4},
    {stage: "Duck Hunt"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Betsy", character: villager, kos: 2},
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Custom"},
    {date: "Oct 9 2019"}
  ],[
    {name: "Zack", character: yoshi, kos: 0},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: pokemontrainer, kos: 0},
    {name: "Micah", character: incineroar, kos: 0},
    {stage: ""},
    {date: "Oct 9 2019"}
  ],[
    {name: "Zack", character: samus, kos: 2},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: ken, kos: 2},
    {name: "Doug", character: sheik, kos: 3},
    {stage: "Odessy"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Micah", character: ridley, kos: 4},
    {name: "Zack", character: samus, kos: 1},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Doug", character: ike, kos: 3},
    {stage: "Pokemon Stadium"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Zack", character: hero, kos: 4},
    {name: "Tim", character: daisy, kos: 2},
    {name: "Doug", character: younglink, kos: 5},
    {name: "Micah", character: wiifittrainer, kos: 0},
    {stage: "Town & City"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Zack", character: roy, kos: 0},
    {name: "Doug", character: marth, kos: 0},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "Tim", character: jigglypuff, kos: 0},
    {stage: "Onett"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Zack", character: roy, kos: 4},
    {name: "Tim", character: ness, kos: 3},
    {name: "Doug", character: samus, kos: 0},
    {stage: "Custom"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Doug", character: samus, kos: 4},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: drmario, kos: 0},
    {stage: "Magicant"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Doug", character: joker, kos: 5},
    {name: "Micah", character: peach, kos: 2},
    {name: "Zack", character: drmario, kos: 2},
    {name: "Tim", character: ness, kos: 2},
    {stage: "Mario Kart"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Micah", character: isabell, kos: 5},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: kirby, kos: 1},
    {stage: "Great Bay"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 5},
    {name: "Micah", character: ken, kos: 2},
    {name: "Doug", character: lucario, kos: 3},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Dream Land"},
    {date: "Oct 16 2019"}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: lucas, kos: 0},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Micah", character: zelda, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Super Happy Tree"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Micah", character: zelda, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "Tim", character: pacman, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Coliseum"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: simon, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Micah", character: incineroar, kos:0},
    {name: "Tim", character: donkeykong, kos:0},
    {name: "Zack", character: drmario, kos:0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Tim", character: samus, kos: 5},
    {name: "Zack", character: bowser, kos: 1},
    {name: "Micah", character: isabell, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Skyloft"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Tim", character: samus, kos: 2},
    {name: "Zack", character: bowser, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Luigi's Mansion"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 5},
    {name: "Tim", character: donkeykong, kos: 0},
    {name: "Micah", character: peach, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Zack", character: hero, kos: 2},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Micah", character: ken, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town and City"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Zack", character: hero, kos: 6},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Micah", character: ken, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Fourside"},
    {date: "Oct 23 2019"}
  ],[
    {name: "Micah", character: bowserjr , kos: 3},
    {name: "Doug", character: terry, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: "Dec 4 2019"}
  ],[
    {name: "Zack", character: roy, kos: 2},
    {name: "Micah", character: peach, kos: 1},
    {name: "Doug", character: hero, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: "Dec 4 2019"}
  ],[
    {name: "Betsy", character: bowser, kos: 4},
    {name: "Doug", character: joker, kos: 3},
    {name: "Zack", character: roy, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: "Dec 4 2019"}
  ],[
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: roy, kos: 3},
    {name: "Doug", character: diddykong, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Duck Hunt"},
    {date: "Dec 4 2019"}
  ],[
    {name: "Doug", character: samus, kos: 6},
    {name: "Zack", character: corrin, kos: 1},
    {name: "Micah", character: iceclimbers, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: "Dec 4 2019"}
  ],[
    {name: "Doug", character: samus, kos: 2},
    {name: "Tim", character: samus, kos: 5},
    {name: "Micah", character: ridley, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Lylat Cruise"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Doug", character: joker, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Hyrule Castle"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: kirby, kos: 4},
    {name: "Doug", character: captainfalcon, kos: 4},
    {name: "Micah", character: bowserjr, kos: 1},
    {stage: "Battlefield"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "Doug", character: roy, kos: 2},
    {stage: "Peach's Castle"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Micah", character: incineroar, kos: 8},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Doug", character: zerosuitsamus, kos: 1},
    {name: "Zack", character: ridley, kos: 1},
    {stage: "Duck Hunt"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: hero, kos: 5},
    {name: "Tim", character: pacman, kos: 1},
    {name: "Doug", character: pokemontrainer, kos: 1},
    {stage: "Battlefield"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Zack", character: hero, kos: 5},
    {name: "Doug", character: terry, kos: 1},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: luigi, kos: 2},
    {stage: "Battlefield"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "Micah", character: peach, kos: 2},
    {stage: "Skyloft"},
    {date: "Dec 18 2019"}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: roy, kos: 1},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: ""},
    {date: "Dec 18 2019"}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Doug", character: terry, kos: 4},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Tim", character: ness, kos: 0},
    {stage: "Pilot Wings"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Zack", character: kirby, kos: 5},
    {name: "Tim", character: pacman, kos: 4},
    {name: "Doug", character: joker, kos: 1},
    {name: "Micah", character: peach, kos: 1},
    {stage: "Final Destination"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Zack", character: kirby, kos: 6},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Tim", character: pacman, kos: 0},
    {stage: "Super Happy Tree"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Micah", character: iceclimbers, kos: 5},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Doug", character: luigi, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: samus, kos: 1},
    {name: "Doug", character: marth, kos: 5},
    {name: "Micah", character: simon, kos: 1},
    {stage: "Battlefield"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Micah", character: inkling, kos: 4},
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Doug", character: pirahnaplant, kos: 1},
    {stage: "Duck Hunt"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: toonlink, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Micah", character: zelda, kos: 2},
    {name: "Doug", character: donkeykong, kos: 5},
    {name: "Zack", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Super Mario Galaxy"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Zack", character: pokemontrainer, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium 2"},
    {date: "Jan 16 2020"}
  ],[
    {name: "Doug", character: samus, kos: 5},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Micah", character: terry, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Momento"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Micah", character: inkling, kos: 4},
    {name: "Zack", character: miibrawler, kos: 2},
    {name: "Doug", character: corrin, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium 2"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Micah", character: inkling, kos: 3},
    {name: "Doug", character: littlemac, kos: 4},
    {name: "Zack", character: miibrawler, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Micah", character: darkpit, kos: 5},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: rosalina, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Micah", character: mewtwo, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Corneria"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 5},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: younglink, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: luigi, kos: 2},
    {name: "Micah", character: simon, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Zack", character: hero, kos: 3},
    {name: "Doug", character: roy, kos: 4},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Doug", character: pokemontrainer, kos: 6},
    {name: "Micah", character: olimar, kos: 0},
    {name: "Zack", character: hero, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Betsy", character: villager, kos: 3},
    {name: "Doug", character: sonic, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: captainfalcon, kos: 4},
    {name: "Micah", character: incineroar, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Jan 22 2020"}
  ],[
    {name: "Doug", character: byleth, kos: 2},
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Micah", character: diddykong, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Midgar"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Doug", character: byleth, kos: 4},
    {name: "Micah", character: zelda, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Midgar"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Zack", character: byleth, kos: 5},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "Doug", character: littlemac, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Doug", character: captainfalcon, kos: 3},
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: byleth, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Doug", character: marth, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Zack", character: drmario, kos: 5},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: wiifittrainer, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Corneria"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 5},
    {name: "Doug", character: link, kos: 3},
    {name: "Zack", character: drmario, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Dream Land"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Doug", character: pokemontrainer, kos: 1},
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Delfino Plaza"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Doug", character: zerosuitsamus, kos: 0},
    {name: "Micah", character: peach, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Micah", character: byleth, kos: 5},
    {name: "Doug", character: joker, kos: 3},
    {name: "Zack", character: corrin, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Zack", character: hero, kos: 3},
    {name: "Micah", character: lucario, kos: 3},
    {name: "Doug", character: terry, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "3D Land"},
    {date: "Jan 30 2020"}
  ],[
    {name: "Doug", character: duckhunt, kos: 2},
    {name: "Zack", character: hero, kos: 5},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: inkling, kos: 2},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: banjo, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town and City"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: rob, kos: 3},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: simon, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: drmario, kos: 5},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Doug", character: byleth, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: pirahnaplant, kos: 3},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Zack", character: drmario, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Princess Peach's Castle"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Zack", character: samus, kos: 3},
    {name: "Doug", character: younglink, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Bridge of Eldin"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: byleth, kos: 4},
    {name: "Zack", character: samus, kos: 3},
    {name: "Doug", character: ike, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "New Donk City Hall"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: samus, kos: 5},
    {name: "Doug", character: roy, kos: 2},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: samus, kos: 2},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: miigunner, kos: 4},
    {name: "Doug", character: captainfalcon, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Garreg Mack Monestary"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 5},
    {name: "Micah", character: zelda, kos: 1},
    {name: "Doug", character: duckhunt, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Green Greens"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: duckhunt, kos: 3},
    {name: "Micah", character: zelda, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Zack", character: corrin, kos: 3},
    {name: "Doug", character: kirby, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Spiral Mountain"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Doug", character: ryu, kos: 1},
    {name: "Micah", character: pikachu, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Onett"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: luigi, kos: 2},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Big Battlefield"},
    {date: "Feb 5 2020"}
  ],[
    {name: "Tim", character: samus, kos: 1},
    {name: "Zack", character: drmario, kos: 3},
    {name: "Micah", character: sonic, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Norfair"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Micah", character: simon, kos: 1},
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: drmario, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroomy Kingdom"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Micah", character: byleth, kos: 5},
    {name: "Zack", character: samus, kos: 2},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Garreg Mack Monestary"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: cloud, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Port Town Aero Drive"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: cloud, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Green Greens"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Micah", character: peach, kos: 2},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Great Bay"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: kirby, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Zack", character: hero, kos: 1},
    {name: "Micah", character: lucario, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Feb 13 2020"}
  ],[
    {name: "Micah", character: zelda, kos: 4},
    {name: "Doug", character: joker, kos: 2},
    {name: "Tim", character: pacman, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town & City"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Micah", character: ridley, kos: 4},
    {name: "Doug", character: byleth, kos: 3},
    {name: "Tim", character: samus, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Lylat Cruise"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Doug", character: samus, kos: 2},
    {name: "Tim", character: samus, kos: 3},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Find Mii"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Micah", character: darkpit, kos: 4},
    {name: "Doug", character: marth, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Tim", character: darksamus, kos: 5},
    {name: "Doug", character: captainfalcon, kos: 1},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroom Kingdom"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Doug", character: link, kos: 3},
    {name: "Tim", character: ness, kos: 2},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Delfino Plaza"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Micah", character: simon, kos: 5},
    {name: "Tim", character: ness, kos: 2},
    {name: "Doug", character: younglink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: toonlink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Micah", character: donkeykong, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Doug", character: diddykong, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: "Feb 19 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 2},
    {name: "Zack", character: kingdedede, kos: 5},
    {name: "Tim", character: gameandwatch, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Tim", character: pacman, kos: 3},
    {name: "Zack", character: hero, kos: 1},
    {name: "Micah", character: byleth, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Micah", character: isabell, kos: 3},
    {name: "Tim", character: pacman, kos: 4},
    {name: "Zack", character: hero, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Spiral Mountain"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 0},
    {name: "Tim", character: darksamus, kos: 0},
    {name: "Micah", character: simon, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Pilot Wings"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Micah", character: mewtwo, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "New Donk City Hall"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Micah", character: incineroar, kos: 6},
    {name: "Zack", character: bowser, kos: 1},
    {name: "Tim", character: yoshi, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Yggdrasil's Altar"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Tim", character: pacman, kos: 1},
    {name: "Micah", character: pirahnaplant, kos: 4},
    {name: "Zack", character: corrin, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroom Kingdom II"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Zack", character: kirby, kos: 2},
    {name: "Tim", character: samus, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Circuit"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Betsy", character: lucas, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Zack", character: kirby, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Hyrule Castle"},
    {date: "Mar 4 2020"}
  ],[
    {name: "Zack", character: lucario, kos: 4},
    {name: "Micah", character: sonic, kos: 2},
    {name: "Doug", character: jigglypuff, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Doug", character: joker, kos: 4},
    {name: "Zack", character: mewtwo, kos: 1},
    {stage: "Norfair"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Micah", character: pirahnaplant, kos: 4},
    {name: "Zack", character: corrin, kos: 4},
    {name: "Tim", character: samus, kos: 2},
    {name: "Doug", character: captainfalcon, kos: 1},
    {stage: "Garden of Hope"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: samus, kos: 2},
    {name: "Doug", character: pokemontrainer, kos: 3},
    {name: "Micah", character: rosalina, kos: 2},
    {stage: "Jungle Japes"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Doug", character: byleth, kos: 3},
    {name: "Zack", character: marth, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Micah", character: ridley, kos: 3},
    {stage: "Smashville"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Zack", character: bayonetta, kos: 3},
    {name: "Micah", character: isabell, kos: 0},
    {stage: "Corneria"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Zack", character: toonlink, kos: 4},
    {name: "Doug", character: younglink, kos: 3},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Tim", character: darksamus, kos: 2},
    {stage: "Hyrule Castle"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Zack", character: snake, kos: 5},
    {name: "Micah", character: terry, kos: 2},
    {name: "Doug", character: luigi, kos: 0},
    {stage: "Green Greens"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Micah", character: incineroar, kos: 7},
    {name: "Zack", character: mario, kos: 0},
    {name: "Doug", character: sheik, kos: 0},
    {stage: "Reset Bomb Fortress"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Tim", character: miiswordfighter, kos: 4},
    {name: "Micah", character: incineroar, kos: 5},
    {name: "Zack", character: cloud, kos: 0},
    {name: "Doug", character: roy, kos: 2},
    {stage: "King of Fighters Stadium"},
    {date: "Mar 12 2020"}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Zack", character: shulk, kos: 4},
    {name: "Tim", character: gameandwatch, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Port Aero Town Drive"},
    {date: "Mar 12 2020"}
  ]

];

var dates = ["Sept 11 2019", "Sept 18 2019", "Sept 25 2019", "Oct 9 2019", "Oct 16 2019", "Oct 23 2019", "Dec 4 2019", "Dec 18 2019", "Jan 16 2020", "Jan 22 2020", "Jan 30 2020", "Feb 5 2020", "Feb 13 2020", "Feb 19 2020", "Mar 4 2020", "Mar 12 2020"];

var fourP19 = [0,0,0,0,0];
var threeP19 = [0,0,0,0,0];
var fourP20 = [0,0,0,0,0];
var threeP20 = [0,0,0,0,0];
var weeklyWins = [0,0,0,0,0];
var weeklyPlace = [0,0,0,0,0];
var weeklyKos = [0,0,0,0,0];
var weeklyGames = [0,0,0,0,0];
var weeklyAvg = [0,0,0,0,0];
var playerkos19 = [0,0,0,0,0];
var playerkos20 = [0,0,0,0,0];
var highKoGames19 = [0,0,0,0,0];
var highKoGames20 = [0,0,0,0,0];
var micahCharacters = [];
var timCharacters = [];
var dougCharacters = [];
var zackCharacters = [];
var betsyCharacters = [];
var micahCharacters19 = [];
var timCharacters19 = [];
var dougCharacters19 = [];
var zackCharacters19 = [];
var betsyCharacters19 = [];
var micahCharacters20 = [];
var timCharacters20 = [];
var dougCharacters20 = [];
var zackCharacters20 = [];
var betsyCharacters20 = [];
var mostPlayed = [];
var mostWins;
var averagePlace;
var highKoGames;
var totalKos;
var gamesPlayed19 = [0,0,0,0,0];
var gamesPlayed20 = [0,0,0,0,0];
var gamePlace19 = [0,0,0,0,0];
var gamePlace20 = [0,0,0,0,0];
var fighterStatsMicah = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsTim = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsDoug = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsZack = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsBetsy = {games: 0, wins: 0, place: 0, kos: 0};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threeP19: [0,0,0,0,0],
      fourP19: [0,0,0,0,0],
      threeP20: [0,0,0,0,0],
      fourP20: [0,0,0,0,0],
      weekly: true,
      overall: false,
      stats: false,
      videos: false,
      fighters: false
    }
  this.goToWeekly = this.goToWeekly.bind(this);
  this.goToOverall = this.goToOverall.bind(this);
  this.goToStats = this.goToStats.bind(this);
  this.goToVideos = this.goToVideos.bind(this);
  this.goToFighters = this.goToFighters.bind(this);
  }
  componentDidMount(){
    for(var i=0; i < gameData.length; i++){
        var gameDate = gameData[i][5].date;
        var year = gameDate.split(/[ ,]+/)[2];
        if(gameData[i][3].character === empty){
            if(gameData[i][0].name === "Micah"){
                if(year === "2019"){
                    threeP19[0] ++;
                }else{
                    threeP20[0] ++;
                }
            }else if(gameData[i][0].name === "Tim"){
                if(year === "2019"){
                    threeP19[1] ++;
                }else{
                    threeP20[1] ++;
                }
            }else if(gameData[i][0].name === "Doug"){
                if(year === "2019"){
                    threeP19[2] ++;
                }else{
                    threeP20[2] ++;
                }
            }else if(gameData[i][0].name === "Zack"){
                if(year === "2019"){
                    threeP19[3] ++;
                }else{
                    threeP20[3] ++;
                }
            }else if(gameData[i][0].name === "Betsy"){
                if(year === "2019"){
                    threeP19[4] ++;
                }else{
                    threeP20[4] ++;
                }
            }
        }else{
            if(gameData[i][0].name === "Micah"){
                if(year === "2019"){
                    fourP19[0] ++;
                }else{
                    fourP20[0] ++;
                }
            }else if(gameData[i][0].name === "Tim"){
                if(year === "2019"){
                    fourP19[1] ++;
                }else{
                    fourP20[1] ++;
                }
            }else if(gameData[i][0].name === "Doug"){
                if(year === "2019"){
                    fourP19[2] ++;
                }else{
                    fourP20[2] ++;
                }
            }else if(gameData[i][0].name === "Zack"){
                if(year === "2019"){
                    fourP19[3] ++;
                }else{
                    fourP20[3] ++;
                }
            }else if(gameData[i][0].name === "Betsy"){
                if(year === "2019"){
                    fourP19[4] ++;
                }else{
                    fourP20[4] ++;
                }
            }
        }
      for(var j=0; j< 4; j++){
        if(gameData[i][j].name === "Micah"){
            var existingCharacter = false;
            for(var k=0; k < micahCharacters.length; k++){
                if(micahCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(micahCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                    micahCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    micahCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    micahCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = micahCharacters.findIndex(x => x.character === gameData[i][j].character);
                micahCharacters[a].number ++;
                micahCharacters[a].kos = micahCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === "2019"){
                gamesPlayed19[0] ++;
                gamePlace19[0] = gamePlace19[0] + (j + 1);
                playerkos19[0] = playerkos19[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames19[0] ++;
                }else{}
                var existingCharacter19 = false;
                for(var k=0; k < micahCharacters19.length; k++){
                    if(micahCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(micahCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharacters19[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        micahCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        micahCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = micahCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    micahCharacters19[a].number ++;
                    micahCharacters19[a].kos = micahCharacters19[a].kos + gameData[i][j].kos;
                }
            }else{
                gamesPlayed20[0] ++;
                gamePlace20[0] = gamePlace20[0] + (j + 1);
                playerkos20[0] = playerkos20[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames20[0] ++;
                }else{}
                var existingCharacter20 = false;
                for(var k=0; k < micahCharacters20.length; k++){
                    if(micahCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(micahCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharacters20[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        micahCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        micahCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = micahCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    micahCharacters20[a].number ++;
                    micahCharacters20[a].kos = micahCharacters20[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "Tim"){
          var existingCharacter = false;
            for(var k=0; k < timCharacters.length; k++){
                if(timCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(timCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                    timCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    timCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    timCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = timCharacters.findIndex(x => x.character === gameData[i][j].character);
                timCharacters[a].number ++;
                timCharacters[a].kos = timCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === "2019"){
                gamesPlayed19[1] ++;
                gamePlace19[1] = gamePlace19[1] + (j + 1);
                playerkos19[1] = playerkos19[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames19[1] ++;
                }else{}
                var existingCharacter19 = false;
                for(var k=0; k < timCharacters19.length; k++){
                    if(timCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(timCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharacters19[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        timCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        timCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = timCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    timCharacters19[a].number ++;
                    timCharacters19[a].kos = timCharacters19[a].kos + gameData[i][j].kos;
                }
            }else{
                gamesPlayed20[1] ++;
                gamePlace20[1] = gamePlace20[1] + (j + 1);
                playerkos20[1] = playerkos20[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames20[1] ++;
                }else{}
                var existingCharacter20 = false;
                for(var k=0; k < timCharacters20.length; k++){
                    if(timCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(timCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharacters20[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        timCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        timCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = timCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    timCharacters20[a].number ++;
                    timCharacters20[a].kos = timCharacters20[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "Doug"){
          var existingCharacter = false;
            for(var k=0; k < dougCharacters.length; k++){
                if(dougCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(dougCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                    dougCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    dougCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    dougCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = dougCharacters.findIndex(x => x.character === gameData[i][j].character);
                dougCharacters[a].number ++;
                dougCharacters[a].kos = dougCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === "2019"){
                gamesPlayed19[2] ++;
                gamePlace19[2] = gamePlace19[2] + (j + 1);
                playerkos19[2] = playerkos19[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames19[2] ++;
                }else{}
                var existingCharacter19 = false;
                for(var k=0; k < dougCharacters19.length; k++){
                    if(dougCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(dougCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharacters19[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        dougCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        dougCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = dougCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    dougCharacters19[a].number ++;
                    dougCharacters19[a].kos = dougCharacters19[a].kos + gameData[i][j].kos;
                }
            }else{
                gamesPlayed20[2] ++;
                gamePlace20[2] = gamePlace20[2] + (j + 1);
                playerkos20[2] = playerkos20[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames20[2] ++;
                }else{}
                var existingCharacter20 = false;
                for(var k=0; k < dougCharacters20.length; k++){
                    if(dougCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(dougCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharacters20[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        dougCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        dougCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = dougCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    dougCharacters20[a].number ++;
                    dougCharacters20[a].kos = dougCharacters20[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "Zack"){
          var existingCharacter = false;
            for(var k=0; k < zackCharacters.length; k++){
                if(zackCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(zackCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                    zackCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    zackCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    zackCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = zackCharacters.findIndex(x => x.character === gameData[i][j].character);
                zackCharacters[a].number ++;
                zackCharacters[a].kos = zackCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === "2019"){
                gamesPlayed19[3] ++;
                gamePlace19[3] = gamePlace19[3] + (j + 1);
                playerkos19[3] = playerkos19[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames19[3] ++;
                }else{}
                var existingCharacter19 = false;
                for(var k=0; k < zackCharacters19.length; k++){
                    if(zackCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(zackCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharacters19[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        zackCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        zackCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = zackCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    zackCharacters19[a].number ++;
                    zackCharacters19[a].kos = zackCharacters19[a].kos + gameData[i][j].kos;
                }
            }else{
                gamesPlayed20[3] ++;
                gamePlace20[3] = gamePlace20[3] + (j + 1);
                playerkos20[3] = playerkos20[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames20[3] ++;
                }else{}
                var existingCharacter20 = false;
                for(var k=0; k < zackCharacters20.length; k++){
                    if(zackCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(zackCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharacters20[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        zackCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        zackCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = zackCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    zackCharacters20[a].number ++;
                    zackCharacters20[a].kos = zackCharacters20[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "Betsy"){
          var existingCharacter = false;
            for(var k=0; k < betsyCharacters.length; k++){
                if(betsyCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(betsyCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                    betsyCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    betsyCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    betsyCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = betsyCharacters.findIndex(x => x.character === gameData[i][j].character);
                betsyCharacters[a].number ++;
                betsyCharacters[a].kos = betsyCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === "2019"){
                gamesPlayed19[4] ++;
                gamePlace19[4] = gamePlace19[4] + (j + 1);
                playerkos19[4] = playerkos19[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames19[4] ++;
                }else{}
                var existingCharacter19 = false;
                for(var k=0; k < betsyCharacters19.length; k++){
                    if(betsyCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(betsyCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharacters19[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        betsyCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        betsyCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = betsyCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    betsyCharacters19[a].number ++;
                    betsyCharacters19[a].kos = betsyCharacters19[a].kos + gameData[i][j].kos;
                }
            }else{
                gamesPlayed20[4] ++;
                gamePlace20[4] = gamePlace20[4] + (j + 1);
                playerkos20[4] = playerkos20[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4){
                  highKoGames20[4] ++;
                }else{}
                var existingCharacter20 = false;
                for(var k=0; k < betsyCharacters20.length; k++){
                    if(betsyCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(betsyCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharacters20[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        betsyCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        betsyCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = betsyCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    betsyCharacters20[a].number ++;
                    betsyCharacters20[a].kos = betsyCharacters20[a].kos + gameData[i][j].kos;
                }
            }
        }
      }
    }
    var playerStatsArrays = [micahCharacters, micahCharacters19, micahCharacters20, timCharacters, timCharacters19, timCharacters20, dougCharacters, dougCharacters19, dougCharacters20, zackCharacters, zackCharacters19, zackCharacters20, betsyCharacters, betsyCharacters19, betsyCharacters20];
    for(var i=0; i<playerStatsArrays.length; i++){
        for(var j=0; j<playerStatsArrays[i].length; j++){
            var avgKos = (playerStatsArrays[i][j].kos/playerStatsArrays[i][j].number).toFixed(2);
            playerStatsArrays[i][j].kos = avgKos;
        }
    }
    this.setState({
      threeP19: [threeP19[0], threeP19[1], threeP19[2], threeP19[3], threeP19[4]],
      fourP19: [fourP19[0], fourP19[1], fourP19[2], fourP19[3], fourP19[4]],
      threeP20: [threeP20[0], threeP20[1], threeP20[2], threeP20[3], threeP20[4]],
      fourP20: [fourP20[0], fourP20[1], fourP20[2], fourP20[3], fourP20[4]]
    });
  }
  goToWeekly(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    document.getElementById("Weekly").style.background = "darkblue";
    this.setState({
      weekly: true,
      overall: false,
      stats: false,
      videos: false,
      fighters: false
    });

  }
  goToOverall(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    document.getElementById("Overall").style.background = "darkblue";
    this.setState({
      weekly: false,
      overall: true,
      stats: false,
      videos: false,
      fighters: false
    });
  }
  goToStats(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    document.getElementById("Stats").style.background = "darkblue";
    this.setState({
      weekly: false,
      overall: false,
      stats: true,
      videos: false,
      fighters: false
    });
  }
  goToVideos(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    this.setState({
      weekly: false,
      overall: false,
      stats: false,
      videos: true,
      fighters: false
    });
  }
  goToFighters(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    this.setState({
      weekly: false,
      overall: false,
      stats: false,
      videos: false,
      fighters: true
    });
  }
  render(){
    return (
      <div className="container-fluid App">
        <div className="row title">
          <img src={smash} alt="logo" id="smashLogo" onClick={this.goToVideos} />
          Super Smash Rankings
        </div>
        <div className="row RankingTabs">
          <Tab name="Overall" handleClick={this.goToOverall} />
          <Tab name="Weekly" handleClick={this.goToWeekly} />
          <Tab name="Stats" handleClick={this.goToStats} />
          <Tab name="Fighters" handleClick={this.goToFighters} />
        </div>
        {this.state.weekly ? <Weekly /> : null }
        {this.state.overall ? <Overall threeP19={this.state.threeP19} fourP19={this.state.fourP19} threeP20={this.state.threeP20} fourP20={this.state.fourP20} betsy={this.state.betsy} /> : null }
        {this.state.stats ? <Stats /> : null }
        {this.state.videos ? <Highlights /> : null }
        {this.state.fighters ? <Fighters /> : null }
      </div>
    );
  }
}

class Highlights extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <div>Highlights</div>
          </div>
          <div className="row">
            <iframe src='https://www.youtube.com/embed/G-oVNDaCN5s'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              height="300"
              width="500"
            />
          </div>
          <div className="row">
            <iframe src='https://www.youtube.com/embed/ClMwEsnz0fc'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              height="300"
              width="500"
            />
          </div>
          <div className="row">
            <iframe src='https://www.youtube.com/embed/kGVfhXYA9Vw'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              height="300"
              width="500"
            />
          </div>
        </div>
      </div>
    )
  }
}

class Tab extends React.Component {
  render(){
    return (
      <div className="col-xs-3 tab" id={this.props.name} onClick={this.props.handleClick}>{this.props.name}</div>
    )
  }
}

class Overall extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            graphName: null,
            graphStats: [],
            graphYear: "Overall"
        }
    this.changeGraphClick = this.changeGraphClick.bind(this);
    this.changeYearClick = this.changeYearClick.bind(this);
    }
  componentDidMount(){
    var graphStats = [this.props.threeP19[0] + this.props.fourP19[0] + this.props.threeP20[0] + this.props.fourP20[0], this.props.threeP19[1] + this.props.fourP19[1] + this.props.threeP20[1] + this.props.fourP20[1], this.props.threeP19[2] + this.props.fourP19[2] + this.props.threeP20[2] + this.props.fourP20[2], this.props.threeP19[3] + this.props.fourP19[3] + this.props.threeP20[3] + this.props.fourP20[3], this.props.threeP19[4] + this.props.fourP19[4] + this.props.threeP20[4] + this.props.fourP20[4]];
    this.setState({
        graphName: "Overall Wins",
        graphStats: graphStats
    });
  }
  changeGraphClick(){
    var graphStats;
    var graphName;
    if(this.state.graphName === "Overall Wins"){
        if(this.state.graphYear === "Overall"){
            graphStats = [this.props.threeP19[0] + this.props.threeP20[0], this.props.threeP19[1] + this.props.threeP20[1], this.props.threeP19[2] + this.props.threeP20[2], this.props.threeP19[3] + this.props.threeP20[3], this.props.threeP19[4] + this.props.threeP20[4]];
        }else if(this.state.graphYear === "2019"){
            graphStats = [this.props.threeP19[0], this.props.threeP19[1], this.props.threeP19[2], this.props.threeP19[3], this.props.threeP19[4]]; 
        }else if(this.state.graphYear === "2020"){
            graphStats = [this.props.threeP20[0], this.props.threeP20[1], this.props.threeP20[2], this.props.threeP20[3], this.props.threeP20[4]];
        }
        graphName = "3-Player Wins";
    }else if(this.state.graphName === "3-Player Wins"){
        if(this.state.graphYear === "Overall"){
            graphStats = [this.props.fourP19[0] + this.props.fourP20[0], this.props.fourP19[1] + this.props.fourP20[1], this.props.fourP19[2] + this.props.fourP20[2], this.props.fourP19[3] + this.props.fourP20[3], this.props.fourP19[4] + this.props.fourP20[4]];
        }else if(this.state.graphYear === "2019"){
            graphStats = [this.props.fourP19[0], this.props.fourP19[1], this.props.fourP19[2], this.props.fourP19[3], this.props.fourP19[4]];
        }else if(this.state.graphYear === "2020"){
            graphStats = [this.props.fourP20[0], this.props.fourP20[1], this.props.fourP20[2], this.props.fourP20[3], this.props.fourP20[4]];
        }
        graphName = "4-Player Wins";
    }else if(this.state.graphName === "4-Player Wins"){
        if(this.state.graphYear === "Overall"){
            graphStats = [playerkos19[0] + playerkos20[0], playerkos19[1] + playerkos20[1], playerkos19[2] + playerkos20[2], playerkos19[3] + playerkos20[3], playerkos19[4] + playerkos20[4]];
        }else if(this.state.graphYear === "2019"){
            graphStats = [playerkos19[0], playerkos19[1], playerkos19[2], playerkos19[3], playerkos19[4]];
        }else if(this.state.graphYear === "2020"){
            graphStats = [playerkos20[0], playerkos20[1], playerkos20[2], playerkos20[3], playerkos20[4]];
        }
        graphName = "Total Kos"
    }else if(this.state.graphName === "Total Kos"){
        if(this.state.graphYear === "Overall"){
            graphStats = [this.props.threeP19[0] + this.props.fourP19[0] + this.props.threeP20[0] + this.props.fourP20[0], this.props.threeP19[1] + this.props.fourP19[1] + this.props.threeP20[1] + this.props.fourP20[1], this.props.threeP19[2] + this.props.fourP19[2] + this.props.threeP20[2] + this.props.fourP20[2], this.props.threeP19[3] + this.props.fourP19[3] + this.props.threeP20[3] + this.props.fourP20[3], this.props.threeP19[4] + this.props.fourP19[4] + this.props.threeP20[4] + this.props.fourP20[4]];
        }else if(this.state.graphYear === "2019"){
            graphStats = [this.props.threeP19[0] + this.props.fourP19[0], this.props.threeP19[1] + this.props.fourP19[1], this.props.threeP19[2] + this.props.fourP19[2], this.props.threeP19[3] + this.props.fourP19[3], this.props.threeP19[4] + this.props.fourP19[4]];
        }else if(this.state.graphYear === "2020"){
            graphStats = [this.props.threeP20[0] + this.props.fourP20[0], this.props.threeP20[1] + this.props.fourP20[1], this.props.threeP20[2] + this.props.fourP20[2], this.props.threeP20[3] + this.props.fourP20[3], this.props.threeP20[4] + this.props.fourP20[4]];
        }
        graphName = "Overall Wins";
    }
    this.setState({
        graphName: graphName,
        graphStats: graphStats
    });
  }
  changeYearClick(){
    var graphStats;
    var graphYear;
    if(this.state.graphYear === "Overall"){
        if(this.state.graphName === "Overall Wins"){
            graphStats = [this.props.threeP19[0] + this.props.fourP19[0], this.props.threeP19[1] + this.props.fourP19[1], this.props.threeP19[2] + this.props.fourP19[2], this.props.threeP19[3] + this.props.fourP19[3], this.props.threeP19[4] + this.props.fourP19[4]];
        }else if(this.state.graphName === "3-Player Wins"){
            graphStats = [this.props.threeP19[0], this.props.threeP19[1], this.props.threeP19[2], this.props.threeP19[3], this.props.threeP19[4]];
        }else if(this.state.graphName === "4-Player Wins"){
            graphStats = [this.props.fourP19[0], this.props.fourP19[1], this.props.fourP19[2], this.props.fourP19[3], this.props.fourP19[4]];
        }else if(this.state.graphName === "Total Kos"){
            graphStats = [playerkos19[0], playerkos19[1], playerkos19[2], playerkos19[3], playerkos19[4]];
        }
        graphYear = "2019";
    }else if(this.state.graphYear === "2019"){
        if(this.state.graphName === "Overall Wins"){
            graphStats = [this.props.threeP20[0] + this.props.fourP20[0], this.props.threeP20[1] + this.props.fourP20[1], this.props.threeP20[2] + this.props.fourP20[2], this.props.threeP20[3] + this.props.fourP20[3], this.props.threeP20[4] + this.props.fourP20[4]];
        }else if(this.state.graphName === "3-Player Wins"){
            graphStats = [this.props.threeP20[0], this.props.threeP20[1], this.props.threeP20[2], this.props.threeP20[3], this.props.threeP20[4]];
        }else if(this.state.graphName === "4-Player Wins"){
            graphStats = [this.props.fourP20[0], this.props.fourP20[1], this.props.fourP20[2], this.props.fourP20[3], this.props.fourP20[4]];
        }else if(this.state.graphName === "Total Kos"){
            graphStats = [playerkos20[0], playerkos20[1], playerkos20[2], playerkos20[3], playerkos20[4]];
        }
        graphYear = "2020";
    }else if(this.state.graphYear === "2020"){
        if(this.state.graphName === "Overall Wins"){
            graphStats = [this.props.threeP19[0] + this.props.fourP19[0] + this.props.threeP20[0] + this.props.fourP20[0], this.props.threeP19[1] + this.props.fourP19[1] + this.props.threeP20[1] + this.props.fourP20[1], this.props.threeP19[2] + this.props.fourP19[2] + this.props.threeP20[2] + this.props.fourP20[2], this.props.threeP19[3] + this.props.fourP19[3] + this.props.threeP20[3] + this.props.fourP20[3], this.props.threeP19[4] + this.props.fourP19[4] + this.props.threeP20[4] + this.props.fourP20[4]];
        }else if(this.state.graphName === "3-Player Wins"){
            graphStats = [this.props.threeP19[0] + this.props.threeP20[0], this.props.threeP19[1] + this.props.threeP20[1], this.props.threeP19[2] + this.props.threeP20[2], this.props.threeP19[3] + this.props.threeP20[3], this.props.threeP19[4] + this.props.threeP20[4]];
        }else if(this.state.graphName === "4-Player Wins"){
            graphStats = [this.props.fourP19[0] + this.props.fourP20[0], this.props.fourP19[1] + this.props.fourP20[1], this.props.fourP19[2] + this.props.fourP20[2], this.props.fourP19[3] + this.props.fourP20[3], this.props.fourP19[4] + this.props.fourP20[4]];
        }else if(this.state.graphName === "Total Kos"){
            graphStats = [playerkos19[0] + playerkos20[0], playerkos19[1] + playerkos20[1], playerkos19[2] + playerkos20[2], playerkos19[3] + playerkos20[3], playerkos19[4] + playerkos20[4]];
        }
        graphYear = "Overall"
    }
    this.setState({
        graphYear: graphYear,
        graphStats: graphStats
    });
  }
  render(){
    const options = {
      title: {
        text: this.state.graphName
      },
      axisY:{
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function(){
          return " ";
        }
      },
      backgroundColor: "white",
      data: [{        
                type: "column",
                dataPoints: [
                    { label: "Micah",  y: this.state.graphStats[0], color: "#ffc233"  },
                    { label: "Tim", y: this.state.graphStats[1], color: "#9228de" },
                    { label: "Doug", y: this.state.graphStats[2], color: "#70d115"  },
                    { label: "Zack",  y: this.state.graphStats[3], color: "#ff78f1"  },
                    { label: "Betsy", y: this.state.graphStats[4], color: "red"}
                ]
       }]
   }
    return (
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-6 col-md-offset-4 col-md-4" id="changeGraph" onClick={this.changeGraphClick}>Change Graph</div>
                <div className="col-xs-6 col-md-offset-2 col-md-2 changeYear" onClick={this.changeYearClick}>{this.state.graphYear}</div>
            </div>
            <div className="row overall">
                <div className="col-xs-12">
                    <CanvasJSChart options = {options} />
                </div>
            </div>
        </div>
    )
  }
}

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "micah",
      mostPlayed: [],
      averagePlace: 0,
      mostWins: [],
      totalKos: [],
      highKoGames: 0,
      year: "Overall"
    }
  this.nextName = this.nextName.bind(this);
  this.previousName = this.previousName.bind(this);
  this.listMostPlayed = this.listMostPlayed.bind(this);
  this.changeStatsYear = this.changeStatsYear.bind(this);
  }
  componentDidMount() {
    mostPlayed = [];
    mostWins = [];
    totalKos = [];
    micahCharacters.sort(function(a, b){
        if(a.number < b.number) { return 1; }
        if(a.number > b.number) { return -1; }
        return 0;
    });
    for(var i=0; i<3; i++){
        mostPlayed.push(micahCharacters[i]);
    }
    micahCharacters.sort(function(a, b){
        if(a.wins < b.wins) { return 1; }
        if(a.wins > b.wins) { return -1; }
        return 0;
    });
    for(var i=0; i<3; i++){
        mostWins.push(micahCharacters[i]);
    }
    micahCharacters.sort(function(a, b){
        if(a.kos < b.kos) { return 1; }
        if(a.kos > b.kos) { return -1; }
        return 0;
    });
    for(var i=0; i<3; i++){
        totalKos.push(micahCharacters[i]);
    }
    averagePlace = ((gamePlace19[0] + gamePlace20[0])/(gamesPlayed19[0] + gamesPlayed20[0])).toFixed(2);
    highKoGames = highKoGames19[0] + highKoGames20[0];
    this.setState({
      mostPlayed: mostPlayed,
      averagePlace: averagePlace,
      mostWins: mostWins,
      totalKos: totalKos,
      highKoGames: highKoGames
    });
  }
  listMostPlayed() {
    const numberOfMostPlayed = this.state.mostPlayed;
    console.log("listmostplayed");
    console.log(numberOfMostPlayed);
    const listMostPlayed = numberOfMostPlayed.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.number} />
    });
    return (
      <div>{listMostPlayed}</div>
    )
  }
  listMostWins() {
    const numberOfMostWins = this.state.mostWins;
    const listMostWins = numberOfMostWins.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.wins} />
    });
    return (
      <div>{listMostWins}</div>
    )
  }
  listMostKos() {
    const numberOfMostKos = this.state.totalKos;
    const listMostKos = numberOfMostKos.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.kos} />
    });
    return (
      <div>{listMostKos}</div>
    )
  }
  changeStatsYear() {
    console.log(betsyCharacters);
    var statsYear;
    mostPlayed = [];
    mostWins = [];
    totalKos = [];
    var playerCharacters = eval(this.state.name + "Characters");
    var playerCharacters19 = eval(this.state.name + "Characters19");
    var playerCharacters20 = eval(this.state.name + "Characters20");
    var playerNumber;
    if(this.state.name === "micah"){
        playerNumber = 0;
    }else if(this.state.name === "tim"){
        playerNumber = 1;
    }else if(this.state.name === "doug"){
        playerNumber = 2;
    }else if(this.state.name === "zack"){
        playerNumber = 3;
    }else if(this.state.name === "betsy"){
        playerNumber = 4;
    }
    if(this.state.year === "Overall"){
        statsYear = "2019";
        playerCharacters19.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters19[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerCharacters19[i]);
            }
        }
        playerCharacters19.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
                return 0;
            });
        for(var i=0; i<3; i++){
            if(playerCharacters19[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerCharacters19[i]);
            }
        }
        playerCharacters19.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerCharacters19[i]);
            }
        }
        averagePlace = (gamePlace19[playerNumber]/gamesPlayed19[playerNumber]).toFixed(2);
        highKoGames = highKoGames19[playerNumber]; 
    }else if(this.state.year === "2019"){
        statsYear = "2020";
        playerCharacters20.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters20[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerCharacters20[i]);
            }
        }
        playerCharacters20.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
                return 0;
            });
        for(var i=0; i<3; i++){
            if(playerCharacters20[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerCharacters20[i]);
            }
        }
        playerCharacters20.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerCharacters20[i]);
            }
        }
        averagePlace = (gamePlace20[playerNumber]/gamesPlayed20[playerNumber]).toFixed(2);
        highKoGames = highKoGames20[playerNumber];
    }else if(this.state.year === "2020"){
        statsYear = "Overall";
        playerCharacters.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerCharacters[i]);
            }
        }
        playerCharacters.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
                return 0;
            });
        for(var i=0; i<3; i++){
            if(playerCharacters[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerCharacters[i]);
            }
        }
        playerCharacters.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerCharacters[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerCharacters[i]);
            }
        }
        averagePlace = ((gamePlace19[playerNumber] + gamePlace20[playerNumber])/(gamesPlayed19[playerNumber] + gamesPlayed20[playerNumber])).toFixed(2);
        highKoGames = highKoGames19[playerNumber] + highKoGames20[playerNumber];
    }
    this.setState({
        year: statsYear,
        mostPlayed: mostPlayed,
        mostWins: mostWins,
        averagePlace: averagePlace,
        highKoGames: highKoGames,
        totalKos: totalKos
    });
  }
  nextName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var playerArray = eval(nameArray[nameIndex + 1] + "Characters");
    var playerArray19 = eval(nameArray[nameIndex + 1] + "Characters19");
    var playerArray20 = eval(nameArray[nameIndex + 1] + "Characters20");
    mostPlayed = [];
    mostWins = [];
    totalKos = [];
    if(this.state.year === "Overall"){
        playerArray.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray[i]);
            }
        }
        playerArray.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray[i]);
            }
        }
        playerArray.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray[i]);
            }
        }
        averagePlace = ((gamePlace19[nameIndex + 1] + gamePlace20[nameIndex + 1])/(gamesPlayed19[nameIndex + 1] + gamesPlayed20[nameIndex + 1])).toFixed(2);
        highKoGames = highKoGames19[nameIndex + 1] + highKoGames20[nameIndex + 1];
    }else if(this.state.year === "2019"){
        playerArray19.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray19[i]);
            }
        }
        playerArray19.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray19[i]);
            }
        }
        playerArray19.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray19[i]);
            }
        }
        averagePlace = (gamePlace19[nameIndex + 1]/gamesPlayed19[nameIndex + 1]).toFixed(2);
        highKoGames = highKoGames19[nameIndex + 1];
    }else if(this.state.year === "2020"){
        playerArray20.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray20[i]);
            }
        }
        playerArray20.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray20[i]);
            }
        }
        playerArray20.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray20[i]);
            }
        }
        averagePlace = (gamePlace20[nameIndex + 1]/gamesPlayed20[nameIndex + 1]).toFixed(2);
        highKoGames = highKoGames20[nameIndex + 1];
    }
    if(nameIndex < nameArray.length - 1){
      var newName = nameIndex + 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: totalKos,
        highKoGames: highKoGames
      });
    }
  }
  previousName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var playerArray = eval(nameArray[nameIndex - 1] + "Characters");
    var playerArray19 = eval(nameArray[nameIndex - 1] + "Characters19");
    var playerArray20 = eval(nameArray[nameIndex - 1] + "Characters20");
    mostPlayed = [];
    mostWins = [];
    totalKos = [];
    if(this.state.year === "Overall"){
        playerArray.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray[i]);
            }
        }
        playerArray.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray[i]);
            }
        }
        playerArray.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray[i]);
            }
        }
        averagePlace = ((gamePlace19[nameIndex - 1] + gamePlace20[nameIndex - 1])/(gamesPlayed19[nameIndex - 1] + gamesPlayed20[nameIndex - 1])).toFixed(2);
        highKoGames = highKoGames19[nameIndex - 1] + highKoGames20[nameIndex - 1];
    }else if(this.state.year === "2019"){
        playerArray19.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray19[i]);
            }
        }
        playerArray19.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray19[i]);
            }
        }
        playerArray19.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray19[i]);
            }
        }
        averagePlace = (gamePlace19[nameIndex - 1]/gamesPlayed19[nameIndex - 1]).toFixed(2);
        highKoGames = highKoGames19[nameIndex - 1];
    }else if(this.state.year === "2020"){
        playerArray20.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                mostPlayed.push({character: empty, number: null});
            }else{
                mostPlayed.push(playerArray20[i]);
            }
        }
        playerArray20.sort(function(a, b){
            if(a.wins < b.wins) { return 1; }
            if(a.wins > b.wins) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                mostWins.push({character: empty, number: null});
            }else{
                mostWins.push(playerArray20[i]);
            }
        }
        playerArray20.sort(function(a, b){
            if(a.kos < b.kos) { return 1; }
            if(a.kos > b.kos) { return -1; }
            return 0;
        });
        for(var i=0; i<3; i++){
            if(playerArray20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                totalKos.push(playerArray20[i]);
            }
        }
        averagePlace = (gamePlace20[nameIndex - 1]/gamesPlayed20[nameIndex - 1]).toFixed(2);
        highKoGames = highKoGames20[nameIndex - 1];
    }
    if(nameIndex > 0){
      var newName = nameIndex - 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: totalKos,
        highKoGames: highKoGames
      });
    }
  }
  render(){
    return (
      <div className="row stats">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-offset-3 col-xs-1"><span onClick={this.previousName} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
            <div className="col-xs-4" id="statsName">{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</div>
            <div className="col-xs-1"><span onClick={this.nextName} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
            <div className="col-xs-6 col-md-offset-1 col-md-2 changeYear" onClick={this.changeStatsYear}>{this.state.year}</div>
          </div>
          <div className="row" id="averagePlaceTitle">
            <div className="col-xs-offset-4 col-xs-2">Average Place</div>
            <div className="col-xs-2">{this.state.averagePlace}</div>
          </div>
          <div className="row">
            <div className="col-xs-4 statsTitle">Most Played Characters</div>
            <div className="col-xs-4 statsTitle">Average Kos</div>
            <div className="col-xs-4 statsTitle">Most Wins</div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              {this.listMostPlayed()}
            </div>
            <div className="col-xs-4">
                {this.listMostKos()}
            </div>
            <div className="col-xs-4" id="mostWinsNumber">
              {this.listMostWins()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class MostPlayed extends React.Component {
  render() {
    var icon;
    var number;
    if(this.props.id === 0){
      icon = "firstIcon";
      number = "firstNumber";
    }else if(this.props.id === 1){
      icon = "secondIcon";
      number = "secondNumber";
    }else if(this.props.id === 2){
      icon = "thirdIcon";
      number = "thirdNumber";
    }
    return (
      <div className="row">
        <div className="col-xs-9 col-md-10">
          <img  className="statsFighterIcon" id={icon} src={this.props.character} alt="mostplayed" />
        </div>
        <div className="col-xs-2 mostPlayedNum" id={number}>{this.props.number}</div>
      </div>
    )
  }
}

class Weekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "Mar 12 2020",
      weeklyWins: [0,0,0,0,0],
      weeklyKos: [0,0,0,0,0],
      weeklyAvg: [0,0,0,0,0]
    }
  this.nextDate = this.nextDate.bind(this);
  this.previousDate = this.previousDate.bind(this);
  }
  componentDidMount() {
    var newDate = this.state.date;
    weeklyWins = [0,0,0,0,0];
    weeklyKos = [0,0,0,0,0];
    weeklyGames = [0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0];
    for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date === newDate){
          weeklyWins[4] ++;
        }
    }
    for(var i=0; i < 5; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
      date: newDate,
      weeklyWins: weeklyWins,
      weeklyAvg: weeklyAvg,
      weeklyKos: weeklyKos
    });
  }
  previousDate(){
    weeklyWins = [0,0,0,0,0];
    weeklyKos = [0,0,0,0,0];
    weeklyGames = [0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex > 0){
      var newDate = dates[dateIndex - 1];
      for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date === newDate){
          weeklyWins[4] ++;
        }
    }
    for(var i=0; i < 5; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
        date: newDate,
        weeklyWins: weeklyWins,
        weeklyAvg: weeklyAvg,
        weeklyKos: weeklyKos
    });
    }
  }
  nextDate(){
    weeklyWins = [0,0,0,0,0];
    weeklyKos = [0,0,0,0,0];
    weeklyGames = [0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex < dates.length - 1){
      var newDate = dates[dateIndex + 1];
      for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date === newDate){
          weeklyWins[4] ++;
        }
      }
    for(var i=0; i < 5; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
      date: newDate,
      weeklyWins: weeklyWins,
      weeklyAvg: weeklyAvg,
      weeklyKos: weeklyKos
    });
    }
  }
  listGames () {
    const numberOfGames = gameData;
    const listGames = numberOfGames.map((game, index) => {
      if(game[5].date === this.state.date) {
        return <Game key={index} id={index} firstPlace={game[0].name} second={game[1].name} third={game[2].name} fourth={game[3].name} character1={game[0].character} character2={game[1].character} character3={game[2].character} character4={game[3].character} firstKos={game[0].kos} secondKos={game[1].kos} thirdKos={game[2].kos} fourthKos={game[3].kos} stage={game[4].stage} />
      }
    }
    );
    return (
      <div>{listGames}</div>
    )
  }
  render(){
    return (
      <div className="row rankings">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-offset-1 col-xs-1 col-md-offset-4 col-md-1"><span onClick={this.previousDate} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
            <div className="col-xs-8 col-md-2" id="weeklyDate">{this.state.date}</div>
            <div className="col-xs-1 col-md-1"><span onClick={this.nextDate} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
          </div>
          <div className="row">
            <div className="col-xs-3 col-md-offset-2 col-md-2 weeklyName">Micah</div>
            <div className="col-xs-3 col-md-2 weeklyName">Tim</div>
            <div className="col-xs-3 col-md-2 weeklyName">Doug</div>
            <div className="col-xs-3 col-md-2 weeklyName">Zack</div>
          </div>
          <div className="row">
            <div className="col-md-2 weeklyName">Wins</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyWins[0]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyWins[1]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyWins[2]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyWins[3]}</div>
          </div>
          <div className="row">
            <div className="col-md-2 weeklyName">Avg Place</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyAvg[0]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyAvg[1]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyAvg[2]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyAvg[3]}</div>
          </div>
          <div className="row">
            <div className="col-md-2 weeklyName">Avg Kos</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyKos[0]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyKos[1]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyKos[2]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">{this.state.weeklyKos[3]}</div>
          </div>
          <div className="row">
            {this.listGames()}
          </div>
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fourPlayers: false,
      gameStats: false
    }
  this.openGameStats = this.openGameStats.bind(this);
  }
  componentDidMount(){
    if(this.props.character4 === empty){
      this.setState({
        fourPlayers: false
      });
    }else{
      this.setState({
        fourPlayers:true
      });
    }
  }
  openGameStats(){
    if(this.state.gameStats === false){
      this.setState({
        gameStats: true
      });
    }else{
      this.setState({
        gameStats: false
      });
    }
  }
  render(){
    return (
      <div className="col-xs-12 col-md-offset-1 col-md-9 gameRow">
        <div className="gameUnderline row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2 col-md-offset-1 col-md-1 gameNumber">{this.props.id + 1}</div>
              <GamePlayer character={this.props.character1} place={this.props.firstPlace} />
              <GamePlayer character={this.props.character2} place={this.props.second} />
              <GamePlayer character={this.props.character3} place={this.props.third} />
              {this.state.fourPlayers ? <GamePlayer character={this.props.character4} place={this.props.fourth} /> : null }
              <div className="col-xs-1"><span className="downArrow glyphicon glyphicon-chevron-down" onClick={this.openGameStats}></span></div>
            </div>
            {this.state.gameStats ? <GameStatsRow fourPlayers={this.state.fourPlayers} firstKos={this.props.firstKos} secondKos={this.props.secondKos} thirdKos={this.props.thirdKos} fourthKos={this.props.fourthKos} stage={this.props.stage} /> : null }
          </div>
        </div>
      </div>
    )
  }
}

class GameStatsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fourPlayers: false
    }
  }
  componentDidMount(){
    if(this.props.fourPlayers === false){
      this.setState({
        fourPlayers: false
      });
    }else{
      this.setState({
        fourPlayers: true
      });
    }
  }
  render() {
    return (
      <div className="gameStatsRow row">
        <div className="col-xs-1 col-md-offset-1 col-md-1 koTitle">KOs</div>
        <GameStatsKos numKos={this.props.firstKos} />
        <GameStatsKos numKos={this.props.secondKos} />
        <GameStatsKos numKos={this.props.thirdKos} />
        {this.state.fourPlayers ? <GameStatsKos numKos={this.props.fourthKos} /> : null }
        <div className="col-xs-2 stageName">{this.props.stage}</div>
      </div>
    )
  }
}

class GameStatsKos extends React.Component {
  render() {
    return (
      <div className="numKos col-xs-2">{this.props.numKos}</div>
    )
  }
}

class GamePlayer extends React.Component {
  render() {
    return (
      <div className="displayBox col-xs-2">
        <div className="row">
          <img className={`fighterIcon ${this.props.place}`}  src={this.props.character} alt="character1" />
          <div className="col-xs-12 playerName">
            <div className="row">{this.props.place}</div>
          </div>
        </div>
      </div>
    )
  }
}

class Fighters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fighterStats: [fighterStatsMicah, fighterStatsTim, fighterStatsDoug, fighterStatsZack, fighterStatsBetsy],
          fighterName: " ",
          fighterImage: empty
        }
    this.findFighterData = this.findFighterData.bind(this);
    }   
    findFighterData(){
        fighterStatsMicah = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsTim = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsDoug = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsZack = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsBetsy = {games: 0, wins: 0, place: 0, kos: 0};
        var fighter = (document.getElementById("fighterName").value).replace(/\s/g, '').toLowerCase();
        var fighterImage;
        for(var i=0; i < gameData.length; i++){
            for(var j=0; j< 4; j++){
                var imageString = gameData[i][j].character.toString();
                var splitString = imageString.split("/");
                var splitAgain = splitString[3].split(".");
                var splitName = splitAgain[0];
                if(splitName === fighter){
                    var playerFighterArray = eval("fighterStats" + gameData[i][j].name);
                    fighterImage = gameData[i][j].character;
                    playerFighterArray.games ++;
                    if(j === 0){
                        playerFighterArray.wins ++;
                    }else{}
                    playerFighterArray.place = playerFighterArray.place + (j+1);
                    playerFighterArray.kos = playerFighterArray.kos + gameData[i][j].kos;
                }else{}
            }
        }
        var fighterData = [fighterStatsMicah, fighterStatsTim, fighterStatsDoug, fighterStatsZack, fighterStatsBetsy];
        for(var i=0; i<5; i++){
            var averagePlace = (fighterData[i].place/fighterData[i].games).toFixed(2);
            var averageKos = (fighterData[i].kos/fighterData[i].games).toFixed(2);
            if(fighterData[i].games === 0){
                averagePlace = 0;
                averageKos = 0;
            }
            fighterData[i].place = averagePlace;
            fighterData[i].kos = averageKos;
        }
        this.setState({
            fighterName: fighter,
            fighterStats: fighterData,
            fighterImage: fighterImage
        }, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row" id="mainFighterStatsTitle">Fighter Stats</div>
                    <div className="row">
                        <div className="col-xs-offset-4 col-xs-4">
                            <input type="text" id="fighterName"></input>
                        </div>
                        <div className="col-xs-2" id="selectButton" onClick={this.findFighterData}>Select</div>
                    </div>
                    <div className="row">
                        <img src={this.state.fighterImage} id="fighterImage" />
                    </div>
                    <div class="row">
                        <div className="col-xs-offset-2 col-xs-2 fighterStatsTitle">Games Played</div>
                        <div className="col-xs-2 fighterStatsTitle">Wins</div>
                        <div className="col-xs-2 fighterStatsTitle">Average Place</div>
                        <div className="col-xs-2 fighterStatsTitle">Kos Per Game</div>
                    </div>
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">Micah</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[0].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[0].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[0].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[0].kos}</div>
                    </div>
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">Tim</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[1].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[1].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[1].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[1].kos}</div>
                    </div>
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">Doug</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[2].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[2].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[2].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[2].kos}</div>
                    </div>
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">Zack</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[3].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[3].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[3].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[3].kos}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 fighterStatsPlayer">Betsy</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].kos}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
