import React from 'react';
import './App.css';
import banjo from './assets/banjokazooie.jpg';
import bayonetta from './assets/bayonetta.jpg';
import bowser from './assets/bowser.jpg';
import bowserjr from './assets/bowserjr.jpg';
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
import wiifittrainer from './assets/wiifittrainer.jpg';
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
  ],[
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "Tim", character: samus, kos: 0},
    {name: "Doug", character: unknown, kos: 0},
    {name: "Zack", character: unknown, kos: 0},
    {stage: "Spiral Mountain"},
    {date: "Sept 11 2019"}
  ],[
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
  ]

];

var dates = ["Sept 11 2019", "Sept 18 2019", "Sept 25 2019", "Oct 9 2019", "Oct 16 2019", "Oct 23 2019", "Dec 4 2019", "Dec 18 2019", "Jan 16 2020"];

var fourP = [0,0,0,0,0];
var threeP = [0,0,0,0,0];
var weeklyWins = [0,0,0,0,0];
var playerkos = [0,0,0,0,0];
var highKoGames = [0,0,0,0,0];
var micahCharacters = [];
var timCharacters = [];
var dougCharacters = [];
var zackCharacters = [];
var betsyCharacters = [];
var mostPlayed = [];
var mostWins;

var playerStats2019 = [
 {  name: "Micah",
    mostPlayed: [{character: bowserjr, number: 10}, {character: incineroar, number: 8}, {character: peach, number: 8}],
    averagePlace: 2.33,
    mostWins: [incineroar, 4]
  },
  { name: "Tim",
    mostPlayed: [{character: ness, number: 23}, {character: samus, number: 12}, {character: pacman, number: 10}],
    averagePlace: 2.23,
    mostWins: [ness, 7] 
  },
  { name: "Doug",
    mostPlayed: [{character: samus, number: 8}, {character: zerosuitsamus, number: 3}, {character: younglink, number: 3}],
    averagePlace: 2.66,
    mostWins: [samus, 4] 
  },
  { name: "Zack",
    mostPlayed: [{character: drmario, number: 10}, {character: yoshi, number: 9}, {character: hero, number: 8}],
    averagePlace: 1.87,
    mostWins: [hero, 5] 
  },
  { name: "Betsy",
    mostPlayed: [{character: bowser, number: 2}, {character: villager, number: 1}],
    averagePlace: 1,
    mostWins: [bowser, 2] 
  }
];

var playerStats2020 = [
  { name: "Micah",
    mostPlayed: [{character: inkling, number: 1}, {character: terry, number: 1}, {character: wiifittrainer, number: 1}],
    averagePlace: 2.11,
    mostWins: [inkling, 1]
  },
  { name: "Tim",
    mostPlayed: [{character: pacman, number: 2}, {character: samus, number: 2}, {character: darksamus, number: 1}],
    averagePlace: 2.67,
    mostWins: [] 
  },
  { name: "Doug",
    mostPlayed: [{character: zerosuitsamus, number: 1}, {character: donkeykong, number: 1}, {character: marth, number: 1}],
    averagePlace: 2.67,
    mostWins: [] 
  },
  { name: "Zack",
    mostPlayed: [{character: kirby, number: 2}, {character: yoshi, number: 2}, {character: pokemontrainer, number: 1}],
    averagePlace: 1.88,
    mostWins: [kirby, 2] 
  },
  { name: "Betsy",
    mostPlayed: [],
    averagePlace: 0,
    mostWins: [] 
  }
];

var playerStatsOverall = [
  { name: "Micah",
    mostPlayed: [{character: bowserjr, number: 11}, {character: incineroar, number: 9}, {character: peach, number: 9}],
    averagePlace: 2.33,
    mostWins: [incineroar, 4]
  },
  { name: "Tim",
    mostPlayed: [{character: ness, number: 24}, {character: samus, number: 14}, {character: pacman, number: 12}],
    averagePlace: 2.23,
    mostWins: [ness, 7] 
  },
  { name: "Doug",
    mostPlayed: [{character: samus, number: 9}, {character: zerosuitsamus, number: 4}, {character: joker, number: 4}],
    averagePlace: 2.66,
    mostWins: [samus, 4] 
  },
  { name: "Zack",
    mostPlayed: [{character: yoshi, number: 11}, {character: drmario, number: 10}, {character: hero, number: 9}],
    averagePlace: 1.87,
    mostWins: [corrin, 6] 
  },
  { name: "Betsy",
    mostPlayed: [{character: bowser, number: 2}, {character: villager, number: 1}],
    averagePlace: 1,
    mostWins: [bowser, 2] 
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threeP: [0,0,0,0,0],
      fourP: [0,0,0,0,0],
      weekly: true,
      overall: false,
      stats: false,
      videos: false
    }
  this.goToWeekly = this.goToWeekly.bind(this);
  this.goToOverall = this.goToOverall.bind(this);
  this.goToStats = this.goToStats.bind(this);
  this.goToVideos = this.goToVideos.bind(this);
  }
  componentDidMount(){
    for(var i=0; i < gameData.length; i++){
        if(gameData[i][3].character === empty){
            if(gameData[i][0].name === "Micah"){
                threeP[0] ++;
            }else if(gameData[i][0].name === "Tim"){
                threeP[1] ++;
            }else if(gameData[i][0].name === "Doug"){
                threeP[2] ++;
            }else if(gameData[i][0].name === "Zack"){
                threeP[3] ++;
            }else if(gameData[i][0].name === "Betsy"){
                threeP[4] ++;
            }
        }else{
            if(gameData[i][0].name === "Micah"){
                fourP[0] ++;
            }else if(gameData[i][0].name === "Tim"){
                fourP[1] ++;
            }else if(gameData[i][0].name === "Doug"){
                fourP[2] ++;
            }else if(gameData[i][0].name === "Zack"){
                fourP[3] ++;
            }else if(gameData[i][0].name === "Betsy"){
                fourP[4] ++;
            }
        }
      for(var j=0; j< 4; j++){
        if(gameData[i][j].name === "Micah"){
            var existingCharacter = false;
            for(var k=0; k < micahCharacters.length; k++){
                if(micahCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
            }
            if(existingCharacter === false){
                micahCharacters.push({character: gameData[i][j].character, number: 1});
            }else{
                var a = micahCharacters.findIndex(x => x.character === gameData[i][j].character);
                micahCharacters[a].number ++;
            }
            playerkos[0] = playerkos[0] + gameData[i][j].kos;
            if(gameData[i][j].kos >= 4){
              highKoGames[0] ++;
            }else{}
        }else if(gameData[i][j].name === "Tim"){
          var existingCharacter = false;
            for(var k=0; k < timCharacters.length; k++){
                if(timCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
            }
            if(existingCharacter === false){
                timCharacters.push({character: gameData[i][j].character, number: 1});
            }else{
                var a = timCharacters.findIndex(x => x.character === gameData[i][j].character);
                timCharacters[a].number ++;
            }
          playerkos[1] = playerkos[1] + gameData[i][j].kos;
          if(gameData[i][j].kos >= 4){
            highKoGames[1] ++;
          }else{}
        }else if(gameData[i][j].name === "Doug"){
          var existingCharacter = false;
            for(var k=0; k < dougCharacters.length; k++){
                if(dougCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
            }
            if(existingCharacter === false){
                dougCharacters.push({character: gameData[i][j].character, number: 1});
            }else{
                var a = dougCharacters.findIndex(x => x.character === gameData[i][j].character);
                dougCharacters[a].number ++;
            }
          playerkos[2] = playerkos[2] + gameData[i][j].kos;
          if(gameData[i][j].kos >= 4){
            highKoGames[2] ++;
          }else{}
        }else if(gameData[i][j].name === "Zack"){
          var existingCharacter = false;
            for(var k=0; k < zackCharacters.length; k++){
                if(zackCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
            }
            if(existingCharacter === false){
                zackCharacters.push({character: gameData[i][j].character, number: 1});
            }else{
                var a = zackCharacters.findIndex(x => x.character === gameData[i][j].character);
                zackCharacters[a].number ++;
            }
          playerkos[3] = playerkos[3] + gameData[i][j].kos;
          if(gameData[i][j].kos >= 4){
            highKoGames[3] ++;
          }else{}
        }else if(gameData[i][j].name === "Betsy"){
          var existingCharacter = false;
            for(var k=0; k < betsyCharacters.length; k++){
                if(betsyCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
            }
            if(existingCharacter === false){
                betsyCharacters.push({character: gameData[i][j].character, number: 1});
            }else{
                var a = betsyCharacters.findIndex(x => x.character === gameData[i][j].character);
                betsyCharacters[a].number ++;
            }
          playerkos[4] = playerkos[4] + gameData[i][j].kos;
          if(gameData[i][j].kos >= 4){
            highKoGames[4] ++;
          }else{}
        }
      }
    }
    this.setState({
      threeP: [threeP[0], threeP[1], threeP[2], threeP[3], threeP[4]],
      fourP: [fourP[0], fourP[1], fourP[2], fourP[3], fourP[4]]
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
      videos: false
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
      videos: false
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
      videos: false
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
      videos: true
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
        </div>
        {this.state.weekly ? <Weekly /> : null }
        {this.state.overall ? <Overall threeP={this.state.threeP} fourP={this.state.fourP} betsy={this.state.betsy} /> : null }
        {this.state.stats ? <Stats /> : null }
        {this.state.videos ? <Highlights /> : null }
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
            graphStats: []
        }
    this.changeGraphClick = this.changeGraphClick.bind(this);
    }
  componentDidMount(){
    console.log(this.props);
    var graphStats = [this.props.threeP[0] + this.props.fourP[0], this.props.threeP[1] + this.props.fourP[1], this.props.threeP[2] + this.props.fourP[2], this.props.threeP[3] + this.props.fourP[3], this.props.threeP[4] + this.props.fourP[4]];
    this.setState({
        graphName: "Overall Wins",
        graphStats: graphStats
    });
    console.log(this.state.graphStats);
  }
  changeGraphClick(){
    var graphStats;
    var graphName;
    if(this.state.graphName === "Overall Wins"){
        graphStats = [this.props.threeP[0], this.props.threeP[1], this.props.threeP[2], this.props.threeP[3], this.props.threeP[4]];
        graphName = "3-Player Wins";
    }else if(this.state.graphName === "3-Player Wins"){
        graphStats = [this.props.fourP[0], this.props.fourP[1], this.props.fourP[2], this.props.fourP[3], this.props.fourP[4]];
        graphName = "4-Player Wins";
    }else if(this.state.graphName === "4-Player Wins"){
        graphStats = [this.props.threeP[0] + this.props.fourP[0], this.props.threeP[1] + this.props.fourP[1], this.props.threeP[2] + this.props.fourP[2], this.props.threeP[3] + this.props.fourP[3], this.props.threeP[4] + this.props.fourP[4]];
        graphName = "Overall Wins"
    }
    this.setState({
        graphName: graphName,
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
                <div className="col-xs-offset-4 col-xs-4" id="changeGraph" onClick={this.changeGraphClick}>Change Graph</div>
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
      mostWins: 0,
      totalKos: 0,
      highKoGames: 0
    }
  this.nextName = this.nextName.bind(this);
  this.previousName = this.previousName.bind(this);
  this.listMostPlayed = this.listMostPlayed.bind(this);
  }
  componentDidMount() {
    micahCharacters.sort(function(a, b){
        if(a.number < b.number) { return 1; }
        if(a.number > b.number) { return -1; }
        return 0;
    });
    for(var i=0; i<3; i++){
        mostPlayed.push(micahCharacters[i]);
    }
    this.setState({
      mostPlayed: mostPlayed,
      averagePlace: playerStats2019[0].averagePlace,
      mostWins: playerStats2019[0].mostWins,
      totalKos: playerkos[0],
      highKoGames: highKoGames[0]
    });
  }
  listMostPlayed () {
    const numberOfMostPlayed = this.state.mostPlayed;
    const listMostPlayed = numberOfMostPlayed.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.number} />
    }
    );
    return (
      <div>{listMostPlayed}</div>
    )
  }
  nextName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var averagePlace = playerStats2019[nameIndex + 1].averagePlace;
    var mostWins = playerStats2019[nameIndex + 1].mostWins;
    var playerArray = eval(nameArray[nameIndex + 1] + "Characters");
    playerArray.sort(function(a, b){
        if(a.number < b.number) { return 1; }
        if(a.number > b.number) { return -1; }
        return 0;
    });
    mostPlayed = [];
    for(var i=0; i<3; i++){
        if(playerArray[i] === undefined){
            mostPlayed.push({character: empty, number: null});
        }else{
            mostPlayed.push(playerArray[i]);
        }
    }
    if(nameIndex < nameArray.length - 1){
      var newName = nameIndex + 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: playerkos[newName],
        highKoGames: highKoGames[newName]
      });
    }
  }
  previousName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var averagePlace = playerStats2019[nameIndex - 1].averagePlace;
    var mostWins = playerStats2019[nameIndex - 1].mostWins;
    var playerArray = eval(nameArray[nameIndex - 1] + "Characters");
    playerArray.sort(function(a, b){
        if(a.number < b.number) { return 1; }
        if(a.number > b.number) { return -1; }
        return 0;
    });
    mostPlayed = [];
    for(var i=0; i<3; i++){
        if(playerArray[i] === undefined){
            mostPlayed.push({character: empty, number: null});
        }else{
            mostPlayed.push(playerArray[i]);
        }
    }
    if(nameIndex > 0){
      console.log("nameIndex" + nameIndex);
      var newName = nameIndex - 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: playerkos[newName],
        highKoGames: highKoGames[newName]
      });
    }
  }
  render(){
    return (
      <div className="row stats">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-offset-3 col-xs-1"><span onClick={this.previousName} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
            <div className="col-xs-4" id="statsName">{this.state.name}</div>
            <div className="col-xs-1"><span onClick={this.nextName} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
          </div>
          <div className="row">
            <div className="col-xs-4 statsTitle">Most Played Characters</div>
            <div className="col-xs-4 statsTitle">Average Place</div>
            <div className="col-xs-4 statsTitle">Most Wins</div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              {this.listMostPlayed()}
            </div>
            <div className="col-xs-4">
              <div className="row" id="averageNumber">{this.state.averagePlace}</div>
              <div className="row statsTitle">Total Kos</div>
              <div className="row" id="totalKos">{this.state.totalKos}</div>
              <div className="row statsTitle">4+ KO Games</div>
              <div className="row" id="averageKos">{this.state.highKoGames}</div>
            </div>
            <div className="col-xs-4" id="mostWinsNumber">
              <div className="row">
                <img className="statsFighterIcon" src={this.state.mostWins[0]} alt="mostWins" />
              </div>
              <div className="row">
                {this.state.mostWins[1]}
              </div>
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
      date: "Jan 16 2020",
      weeklyWins: [0,0,0,0,0]
    }
  this.nextDate = this.nextDate.bind(this);
  this.previousDate = this.previousDate.bind(this);
  }
  componentDidMount() {
    var newDate = this.state.date;
    for(var i=0; i < gameData.length; i++){
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
    this.setState({
      weeklyWins: weeklyWins
    })
  }
  previousDate(){
    weeklyWins = [0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex > 0){
      var newDate = dates[dateIndex - 1];
      for(var i=0; i < gameData.length; i++){
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
      this.setState({
        date: newDate,
        weeklyWins: weeklyWins
      });
    }
  }
  nextDate(){
    weeklyWins = [0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex < dates.length - 1){
      var newDate = dates[dateIndex + 1];
      for(var i=0; i < gameData.length; i++){
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
      this.setState({
        date: newDate,
        weeklyWins: weeklyWins
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
            <div className="col-xs-3 col-md-2 col-md-offset-2 weeklyName">Micah: {this.state.weeklyWins[0]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">Tim: {this.state.weeklyWins[1]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">Doug: {this.state.weeklyWins[2]}</div>
            <div className="col-xs-3 col-md-2 weeklyName">Zack: {this.state.weeklyWins[3]}</div>
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
    console.log(this.state.gameStats);
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

export default App;
