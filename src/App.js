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
import terry from './assets/terry.jpg';
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
    {date: new Date(2019,8,11)}
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
    {date: new Date(2019,8,11)}
  ],[
    {name: "Doug", character: samus, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {stage: "Custom"},
    {date: new Date(2019,8,11)}
  ],[
    {name: "Doug", character: luigi, kos: 5},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Micah", character: incineroar, kos: 0},
    {stage: "Mario Maker"},
    {date: new Date(2019,8,11)}
  ],[
    {name: "Tim", character: samus, kos: 6},
    {name: "Doug", character: kirby, kos: 2},
    {name: "Zack", character: drmario, kos: 0},
    {name: "Micah", character: incineroar, kos: 3},
    {stage: "Corneria"},
    {date: new Date(2019,8,11)}
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
    {date: new Date(2019,8,18)}
  ],[
    {name: "Micah", character: darkpit, kos: 0},
    {name: "Tim", character: pacman, kos: 0},
    {name: "Doug", character: zerosuitsamus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: new Date(2019,8,18)}
  ],[
    {name: "Betsy", character: bowser, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Doug", character: zerosuitsamus, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2019,8,18)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 4},
    {name: "Tim", character: samus, kos: 3},
    {name: "Doug", character: toonlink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2019,8,18)}
  ],[
    {name: "Tim", character: samus, kos: 0},
    {name: "Micah", character: lucario, kos: 0},
    {name: "Doug", character: samus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2019,8,18)}
  ],[
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: marth, kos: 0},
    {name: "Micah", character: miiswordfighter, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2019,8,18)}
  ],[
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Zack", character: kingdedede, kos: 4},
    {name: "Micah", character: incineroar, kos: 0},
    {name: "", character: empty},
    {stage: "Spiral Mountain"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: corrin, kos: 2},
    {name: "Tim", character: samus, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Zack", character: corrin, kos: 0},
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "Tim", character: samus, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Unknown"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "Tim", character: ness, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Paper Mario"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Zack", character: yoshi, kos: 2},
    {name: "Tim", character: ness, kos: 4},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Big Battlefield"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Zack", character: hero, kos: 6},
    {name: "Micah", character: peach, kos: 1},
    {name: "Tim", character: pacman, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: corrin, kos: 2},
    {name: "Micah", character: banjo, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kalos Pokemon League"},
    {date: new Date(2019,8,25)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "Doug", character: marth, kos: 4},
    {name: "Tim", character: ness, kos:2},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Doug", character: hero, kos: 4},
    {name: "Tim", character: ness, kos: 1},
    {name: "Micah", character: simon, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Doug", character: link, kos: 3},
    {name: "Micah", character: simon, kos: 2},
    {stage: "Rainbow Cruise"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Zack", character: corrin, kos: 0},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: fox, kos: 0},
    {name: "Micah", character: bowserjr, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Tim", character: samus, kos: 2},
    {name: "Zack", character: kingdedede, kos: 4},
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Doug", character: kingkrool, kos: 1},
    {stage: "Tortimer Island"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Micah", character: banjo, kos: 3},
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Doug", character: donkeykong, kos: 2},
    {name: "Zack", character: roy, kos: 1},
    {stage: "Balloon Fight"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Doug", character: luigi, kos: 3},
    {name: "Zack", character: roy, kos: 1},
    {name: "Tim", character: darksamus, kos: 2},
    {stage: "Custom"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Doug", character: samus, kos: 1},
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: donkeykong, kos: 4},
    {stage: "Duck Hunt"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Betsy", character: villager, kos: 2},
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Custom"},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Zack", character: yoshi, kos: 0},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: pokemontrainer, kos: 0},
    {name: "Micah", character: incineroar, kos: 0},
    {stage: ""},
    {date: new Date(2019,9,9)}
  ],[
    {name: "Zack", character: samus, kos: 2},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: ken, kos: 2},
    {name: "Doug", character: sheik, kos: 3},
    {stage: "Odessy"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Micah", character: ridley, kos: 4},
    {name: "Zack", character: samus, kos: 1},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Doug", character: ike, kos: 3},
    {stage: "Pokemon Stadium"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Zack", character: hero, kos: 4},
    {name: "Tim", character: daisy, kos: 2},
    {name: "Doug", character: younglink, kos: 5},
    {name: "Micah", character: wiifittrainer, kos: 0},
    {stage: "Town & City"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Zack", character: roy, kos: 0},
    {name: "Doug", character: marth, kos: 0},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "Tim", character: jigglypuff, kos: 0},
    {stage: "Onett"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Zack", character: roy, kos: 4},
    {name: "Tim", character: ness, kos: 3},
    {name: "Doug", character: samus, kos: 0},
    {stage: "Custom"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Doug", character: samus, kos: 4},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: drmario, kos: 0},
    {stage: "Magicant"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Doug", character: joker, kos: 5},
    {name: "Micah", character: peach, kos: 2},
    {name: "Zack", character: drmario, kos: 2},
    {name: "Tim", character: ness, kos: 2},
    {stage: "Mario Kart"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Micah", character: isabell, kos: 5},
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: ness, kos: 0},
    {name: "Doug", character: kirby, kos: 1},
    {stage: "Great Bay"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Zack", character: corrin, kos: 5},
    {name: "Micah", character: ken, kos: 2},
    {name: "Doug", character: lucario, kos: 3},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Dream Land"},
    {date: new Date(2019,9,16)}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: lucas, kos: 0},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Micah", character: zelda, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Super Happy Tree"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Micah", character: zelda, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "Tim", character: pacman, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Coliseum"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Zack", character: drmario, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: simon, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Micah", character: incineroar, kos:0},
    {name: "Tim", character: donkeykong, kos:0},
    {name: "Zack", character: drmario, kos:0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Tim", character: samus, kos: 5},
    {name: "Zack", character: bowser, kos: 1},
    {name: "Micah", character: isabell, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Skyloft"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Tim", character: samus, kos: 2},
    {name: "Zack", character: bowser, kos: 4},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Luigi's Mansion"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Zack", character: corrin, kos: 5},
    {name: "Tim", character: donkeykong, kos: 0},
    {name: "Micah", character: peach, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Zack", character: hero, kos: 2},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Micah", character: ken, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town and City"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Zack", character: hero, kos: 6},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Micah", character: ken, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Fourside"},
    {date: new Date(2019,9,23)}
  ],[
    {name: "Micah", character: bowserjr , kos: 3},
    {name: "Doug", character: terry, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: new Date(2019,11,4)}
  ],[
    {name: "Zack", character: roy, kos: 2},
    {name: "Micah", character: peach, kos: 1},
    {name: "Doug", character: hero, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: new Date(2019,11,4)}
  ],[
    {name: "Betsy", character: bowser, kos: 4},
    {name: "Doug", character: joker, kos: 3},
    {name: "Zack", character: roy, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: new Date(2019,11,4)}
  ],[
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: roy, kos: 3},
    {name: "Doug", character: diddykong, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Duck Hunt"},
    {date: new Date(2019,11,4)}
  ],[
    {name: "Doug", character: samus, kos: 6},
    {name: "Zack", character: corrin, kos: 1},
    {name: "Micah", character: iceclimbers, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: new Date(2019,11,4)}
  ],[
    {name: "Doug", character: samus, kos: 2},
    {name: "Tim", character: samus, kos: 5},
    {name: "Micah", character: ridley, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Lylat Cruise"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Doug", character: joker, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Hyrule Castle"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: kirby, kos: 4},
    {name: "Doug", character: captainfalcon, kos: 4},
    {name: "Micah", character: bowserjr, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "Doug", character: roy, kos: 2},
    {stage: "Peach's Castle"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Micah", character: incineroar, kos: 8},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Doug", character: zerosuitsamus, kos: 1},
    {name: "Zack", character: ridley, kos: 1},
    {stage: "Duck Hunt"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: hero, kos: 5},
    {name: "Tim", character: pacman, kos: 1},
    {name: "Doug", character: pokemontrainer, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Zack", character: hero, kos: 5},
    {name: "Doug", character: terry, kos: 1},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: luigi, kos: 2},
    {stage: "Battlefield"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Zack", character: yoshi, kos: 1},
    {name: "Micah", character: peach, kos: 2},
    {stage: "Skyloft"},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: roy, kos: 1},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: ""},
    {date: new Date(2019,11,18)}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Doug", character: terry, kos: 4},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Tim", character: ness, kos: 0},
    {stage: "Pilot Wings"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Zack", character: kirby, kos: 5},
    {name: "Tim", character: pacman, kos: 4},
    {name: "Doug", character: joker, kos: 1},
    {name: "Micah", character: peach, kos: 1},
    {stage: "Final Destination"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Zack", character: kirby, kos: 6},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Tim", character: pacman, kos: 0},
    {stage: "Super Happy Tree"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 5},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "Doug", character: luigi, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: samus, kos: 1},
    {name: "Doug", character: marth, kos: 5},
    {name: "Micah", character: simon, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Micah", character: inkling, kos: 4},
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Doug", character: pirahnaplant, kos: 1},
    {stage: "Duck Hunt"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: toonlink, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Micah", character: zelda, kos: 2},
    {name: "Doug", character: donkeykong, kos: 5},
    {name: "Zack", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Super Mario Galaxy"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Zack", character: pokemontrainer, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium 2"},
    {date: new Date(2020,0,16)}
  ],[
    {name: "Doug", character: samus, kos: 5},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Micah", character: terry, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Momento"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Micah", character: inkling, kos: 4},
    {name: "Zack", character: miibrawler, kos: 2},
    {name: "Doug", character: corrin, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium 2"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Micah", character: inkling, kos: 3},
    {name: "Doug", character: littlemac, kos: 4},
    {name: "Zack", character: miibrawler, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Micah", character: darkpit, kos: 5},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: rosalina, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Micah", character: mewtwo, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Corneria"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 5},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: younglink, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: luigi, kos: 2},
    {name: "Micah", character: simon, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Zack", character: hero, kos: 3},
    {name: "Doug", character: roy, kos: 4},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Doug", character: pokemontrainer, kos: 6},
    {name: "Micah", character: olimar, kos: 0},
    {name: "Zack", character: hero, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Betsy", character: villager, kos: 3},
    {name: "Doug", character: sonic, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Yoshi's Island"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: captainfalcon, kos: 4},
    {name: "Micah", character: incineroar, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,0,22)}
  ],[
    {name: "Doug", character: byleth, kos: 2},
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Micah", character: diddykong, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Midgar"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Doug", character: byleth, kos: 4},
    {name: "Micah", character: zelda, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Midgar"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Zack", character: byleth, kos: 5},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "Doug", character: littlemac, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Peach's Castle"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Doug", character: captainfalcon, kos: 3},
    {name: "Micah", character: incineroar, kos: 4},
    {name: "Zack", character: byleth, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Doug", character: marth, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Zack", character: drmario, kos: 5},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: wiifittrainer, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Corneria"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 5},
    {name: "Doug", character: link, kos: 3},
    {name: "Zack", character: drmario, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Dream Land"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Doug", character: pokemontrainer, kos: 1},
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Delfino Plaza"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Doug", character: zerosuitsamus, kos: 0},
    {name: "Micah", character: peach, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Micah", character: byleth, kos: 5},
    {name: "Doug", character: joker, kos: 3},
    {name: "Zack", character: corrin, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Zack", character: hero, kos: 3},
    {name: "Micah", character: lucario, kos: 3},
    {name: "Doug", character: terry, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "3D Land"},
    {date: new Date(2020,0,30)}
  ],[
    {name: "Doug", character: duckhunt, kos: 2},
    {name: "Zack", character: hero, kos: 5},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: inkling, kos: 2},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: banjo, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town and City"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: rob, kos: 3},
    {name: "Zack", character: hero, kos: 4},
    {name: "Doug", character: simon, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Jungle"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: drmario, kos: 5},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Doug", character: byleth, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: pirahnaplant, kos: 3},
    {name: "Doug", character: younglink, kos: 4},
    {name: "Zack", character: drmario, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Princess Peach's Castle"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Zack", character: samus, kos: 3},
    {name: "Doug", character: younglink, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Bridge of Eldin"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: byleth, kos: 4},
    {name: "Zack", character: samus, kos: 3},
    {name: "Doug", character: ike, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "New Donk City Hall"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: samus, kos: 5},
    {name: "Doug", character: roy, kos: 2},
    {name: "Micah", character: iceclimbers, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Galaxy"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: samus, kos: 2},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: miigunner, kos: 4},
    {name: "Doug", character: captainfalcon, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Garreg Mack Monestary"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: miigunner, kos: 5},
    {name: "Micah", character: zelda, kos: 1},
    {name: "Doug", character: duckhunt, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Green Greens"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Doug", character: duckhunt, kos: 3},
    {name: "Micah", character: zelda, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Zack", character: corrin, kos: 3},
    {name: "Doug", character: kirby, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Spiral Mountain"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Doug", character: ryu, kos: 1},
    {name: "Micah", character: pikachu, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Onett"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: luigi, kos: 2},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Big Battlefield"},
    {date: new Date(2020,1,5)}
  ],[
    {name: "Tim", character: samus, kos: 1},
    {name: "Zack", character: drmario, kos: 3},
    {name: "Micah", character: sonic, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "Norfair"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Micah", character: simon, kos: 1},
    {name: "Tim", character: samus, kos: 3},
    {name: "Zack", character: drmario, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroomy Kingdom"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Micah", character: byleth, kos: 5},
    {name: "Zack", character: samus, kos: 2},
    {name: "Tim", character: darksamus, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Garreg Mack Monestary"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Zack", character: miigunner, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: cloud, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Port Town Aero Drive"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: cloud, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Green Greens"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Micah", character: peach, kos: 2},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Great Bay"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: kirby, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Zack", character: hero, kos: 1},
    {name: "Micah", character: lucario, kos: 4},
    {name: "Tim", character: pacman, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,1,13)}
  ],[
    {name: "Micah", character: zelda, kos: 4},
    {name: "Doug", character: joker, kos: 2},
    {name: "Tim", character: pacman, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Town & City"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Micah", character: ridley, kos: 4},
    {name: "Doug", character: byleth, kos: 3},
    {name: "Tim", character: samus, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Lylat Cruise"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Doug", character: samus, kos: 2},
    {name: "Tim", character: samus, kos: 3},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Find Mii"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Micah", character: darkpit, kos: 4},
    {name: "Doug", character: marth, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Tim", character: darksamus, kos: 5},
    {name: "Doug", character: captainfalcon, kos: 1},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroom Kingdom"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Doug", character: link, kos: 3},
    {name: "Tim", character: ness, kos: 2},
    {name: "Micah", character: peach, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Delfino Plaza"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Micah", character: simon, kos: 5},
    {name: "Tim", character: ness, kos: 2},
    {name: "Doug", character: younglink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: toonlink, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Micah", character: donkeykong, kos: 4},
    {name: "Tim", character: ness, kos: 2},
    {name: "Doug", character: diddykong, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Final Destination"},
    {date: new Date(2020,1,19)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 2},
    {name: "Zack", character: kingdedede, kos: 5},
    {name: "Tim", character: gameandwatch, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Tim", character: pacman, kos: 3},
    {name: "Zack", character: hero, kos: 1},
    {name: "Micah", character: byleth, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Micah", character: isabell, kos: 3},
    {name: "Tim", character: pacman, kos: 4},
    {name: "Zack", character: hero, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Spiral Mountain"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Zack", character: miigunner, kos: 0},
    {name: "Tim", character: darksamus, kos: 0},
    {name: "Micah", character: simon, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Pilot Wings"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Micah", character: mewtwo, kos: 4},
    {name: "", character: empty, kos: 0},
    {stage: "New Donk City Hall"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Micah", character: incineroar, kos: 6},
    {name: "Zack", character: bowser, kos: 1},
    {name: "Tim", character: yoshi, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Yggdrasil's Altar"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Tim", character: pacman, kos: 1},
    {name: "Micah", character: pirahnaplant, kos: 4},
    {name: "Zack", character: corrin, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mushroom Kingdom II"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Zack", character: kirby, kos: 2},
    {name: "Tim", character: samus, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Mario Circuit"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Betsy", character: lucas, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Zack", character: kirby, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,2,4)}
  ],[
    {name: "Zack", character: lucario, kos: 4},
    {name: "Micah", character: sonic, kos: 2},
    {name: "Doug", character: jigglypuff, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Doug", character: joker, kos: 4},
    {name: "Zack", character: mewtwo, kos: 1},
    {stage: "Norfair"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Micah", character: pirahnaplant, kos: 4},
    {name: "Zack", character: corrin, kos: 4},
    {name: "Tim", character: samus, kos: 2},
    {name: "Doug", character: captainfalcon, kos: 1},
    {stage: "Garden of Hope"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Zack", character: yoshi, kos: 4},
    {name: "Tim", character: samus, kos: 2},
    {name: "Doug", character: pokemontrainer, kos: 3},
    {name: "Micah", character: rosalina, kos: 2},
    {stage: "Jungle Japes"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Doug", character: byleth, kos: 3},
    {name: "Zack", character: marth, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Micah", character: ridley, kos: 3},
    {stage: "Smashville"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: zerosuitsamus, kos: 4},
    {name: "Zack", character: bayonetta, kos: 3},
    {name: "Micah", character: isabell, kos: 0},
    {stage: "Corneria"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Zack", character: toonlink, kos: 4},
    {name: "Doug", character: younglink, kos: 3},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Tim", character: darksamus, kos: 2},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Zack", character: snake, kos: 5},
    {name: "Micah", character: terry, kos: 2},
    {name: "Doug", character: luigi, kos: 0},
    {stage: "Green Greens"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Micah", character: incineroar, kos: 7},
    {name: "Zack", character: mario, kos: 0},
    {name: "Doug", character: sheik, kos: 0},
    {stage: "Reset Bomb Fortress"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Tim", character: miiswordfighter, kos: 4},
    {name: "Micah", character: incineroar, kos: 5},
    {name: "Zack", character: cloud, kos: 0},
    {name: "Doug", character: roy, kos: 2},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Zack", character: shulk, kos: 4},
    {name: "Tim", character: gameandwatch, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Port Aero Town Drive"},
    {date: new Date(2020,2,12)}
  ],[
    {name: "Micah", character: peach, kos: 3},
    {name: "Zack", character: snake, kos: 3},
    {name: "Tim", character: pacman, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Micah", character: isabell, kos: 3},
    {name: "Zack", character: miibrawler, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Zack", character: miibrawler, kos: 5},
    {name: "Micah", character: sonic, kos: 2},
    {name: "Tim", character: yoshi, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Tortimer Island"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Micah", character: incineroar, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Zack", character: wario, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Green Hill Zone"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 5},
    {name: "Zack", character: wario, kos: 3},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "James", character: gameandwatch, kos: 0},
    {stage: "Gerudo Valley"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Zack", character: wario, kos: 4},
    {name: "Tim", character: ness, kos: 4},
    {name: "James", character: megaman, kos: 1},
    {name: "Micah", character: ridley, kos: 2},
    {stage: "Kalos Pokemon League"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Tim", character: pacman, kos: 3},
    {name: "James", character: duckhunt, kos: 2},
    {name: "Zack", character: hero, kos: 4},
    {name: "Micah", character: bowserjr, kos: 2},
    {stage: "Corneria"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Zack", character: hero, kos: 7},
    {name: "Micah", character: terry, kos: 3},
    {name: "Tim", character: pacman, kos: 1},
    {name: "James", character: drmario, kos: 0},
    {stage: "Green Greens"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Tim", character: ness, kos: 6},
    {name: "Zack", character: snake, kos: 3},
    {name: "James", character: miiswordfighter, kos: 2},
    {name: "Micah", character: iceclimbers, kos: 0},
    {stage: "Kongo Jungle"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Tim", character: samus, kos: 9},
    {name: "Zack", character: snake, kos: 1},
    {name: "James", character: gameandwatch, kos: 0},
    {name: "Micah", character: lucario, kos: 1},
    {stage: "Hanenbow"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Micah", character: inkling, kos: 3},
    {name: "Zack", character: snake, kos: 2},
    {name: "James", character: littlemac, kos: 4},
    {name: "Tim", character: miigunner, kos: 1},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Zack", character: miigunner, kos: 5},
    {name: "Micah", character: byleth, kos: 2},
    {name: "James", character: mario, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Pokemon Stadium"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Zack", character: miigunner, kos: 5},
    {name: "Micah", character: peach, kos: 2},
    {name: "James", character: megaman, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: new Date(2020,2,18)}
  ],[
    {name: "Micah", character: peach, kos: 4},
    {name: "Doug", character: byleth, kos: 2},
    {name: "Tim", character: ness, kos: 4},
    {name: "Zack", character: richter, kos: 1},
    {stage: "Jungle Japes"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Tim", character: ness, kos: 4},
    {name: "Doug", character: ryu, kos: 2},
    {name: "Micah", character: isabell, kos: 4},
    {name: "Zack", character: richter, kos: 1},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "Tim", character: samus, kos: 2},
    {name: "Craig", character: donkeykong, kos: 2},
    {name: "Doug", character: joker, kos: 2},
    {stage: "Mushroom Kingdom U"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 6},
    {name: "Tim", character: samus, kos: 2},
    {name: "Zack", character: kingdedede, kos: 1},
    {name: "Craig", character: donkeykong, kos: 2},
    {stage: "Find Mii"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Tim", character: pacman, kos: 5},
    {name: "Zack", character: kingdedede, kos: 3},
    {name: "Doug", character: younglink, kos: 0},
    {name: "Micah", character: incineroar, kos: 3},
    {stage: "Yohsi's Island(Melee)"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Zack", character: miigunner, kos: 2},
    {name: "Craig", character: ganondorf, kos: 4},
    {name: "Doug", character: samus, kos: 4},
    {name: "Micah", character: bowserjr, kos: 1},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Zack", character: hero, kos: 4},
    {name: "Craig", character: link, kos: 4},
    {name: "Micah", character: darkpit, kos: 3},
    {name: "Tim", character: pacman, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Craig", character: donkeykong, kos: 4},
    {name: "Zack", character: kirby, kos: 2},
    {stage: "Big Battlefield"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Zack", character: kirby, kos: 4},
    {name: "Micah", character: banjo, kos: 4},
    {name: "Craig", character: donkeykong, kos: 1},
    {name: "Tim", character: darksamus, kos: 2},
    {stage: "Peach's Castle"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Craig", character: pikachu, kos: 5},
    {name: "Tim", character: rob, kos: 1},
    {name: "Micah", character: roy, kos: 2},
    {name: "Zack", character: richter, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Betsy", character: pokemontrainer, kos: 3},
    {name: "Craig", character: pikachu, kos: 5},
    {name: "Zack", character: wario, kos: 1},
    {name: "Tim", character: drmario, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Betsy", character: duckhunt, kos: 3},
    {name: "Craig", character: pikachu, kos: 2},
    {name: "Zack", character: wario, kos: 5},
    {name: "Tim", character: jigglypuff, kos: 0},
    {stage: "Yggdrasil's Altar"},
    {date: new Date(2020,2,26)}
  ],[
    {name: "Micah", character: zelda, kos: 4},
    {name: "Tim", character: samus, kos: 2},
    {name: "Craig", character: donkeykong, kos: 2},
    {name: "Zack", character: bowser, kos: 3},
    {stage: "Battlefield"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Micah", character: terry, kos: 3},
    {name: "Zack", character: bowser, kos: 2},
    {name: "Tim", character: samus, kos: 2},
    {name: "Craig", character: link, kos: 3},
    {stage: "Smashville"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Craig", character: pikachu, kos: 4},
    {name: "Zack", character: bowser, kos: 5},
    {name: "Micah", character: ike, kos: 1},
    {name: "Tim", character: samus, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Tim", character: miiswordfighter, kos: 2},
    {name: "Micah", character: isabell, kos: 4},
    {name: "Craig", character: gameandwatch, kos: 2},
    {name: "Zack", character: wario, kos: 3},
    {stage: "Battlefield"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Tim", character: pacman, kos: 4},
    {name: "Craig", character: byleth, kos: 3},
    {name: "Zack", character: wario, kos: 2},
    {name: "Micah", character: incineroar, kos: 2},
    {stage: "Delfino Plaza"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Craig", character: ganondorf, kos: 8},
    {name: "Micah", character: peach, kos: 3},
    {name: "Zack", character: miigunner, kos: 0},
    {name: "Tim", character: pacman, kos: 0},
    {stage: "Pokemon Stadium 2"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Craig", character: ganondorf, kos: 7},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Tim", character: darksamus, kos: 1},
    {stage: "Green Greens"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Betsy", character: villager, kos: 4},
    {name: "Craig", character: kirby, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: littlemac, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Zack", character: pirahnaplant, kos: 5},
    {name: "Craig", character: kirby, kos: 4},
    {name: "Micah", character: darkpit, kos: 1},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Gerudo Valley"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Zack", character: kirby, kos: 4},
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Craig", character: kirby, kos: 3},
    {name: "Tim", character: pacman, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Zack", character: bowser, kos: 6},
    {name: "Micah", character: zelda, kos: 2},
    {name: "Craig", character: pikachu, kos: 2},
    {name: "Tim", character: darksamus, kos: 1},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,3,2)}
  ],[
    {name: "Micah", character: bowserjr, kos: 5},
    {name: "Nick", character: mario, kos: 0},
    {name: "Zack", character: kirby, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Smashville"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Zack", character: kirby, kos: 6},
    {name: "Tim", character: samus, kos: 2},
    {name: "Nick", character: sonic, kos: 2},
    {name: "Micah", character: roy, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Nick", character: samus, kos: 4},
    {name: "Micah", character: peach, kos: 3},
    {name: "Zack", character: kirby, kos: 1},
    {name: "Tim", character: samus, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Zack", character: bowser, kos: 5},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: peach, kos: 3},
    {name: "Nick", character: samus, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Zack", character: pokemontrainer, kos: 5},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: peach, kos: 1},
    {name: "Nick", character: mario, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 7},
    {name: "Tim", character: miiswordfighter, kos: 0},
    {name: "Nick", character: mario, kos: 4},
    {name: "Zack", character: pokemontrainer, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Micah", character: wiifittrainer, kos: 4},
    {name: "Tim", character: darksamus, kos: 4},
    {name: "Zack", character: pokemontrainer, kos: 1},
    {name: "Nick", character: marth, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Betsy", character: villager, kos: 3},
    {name: "Nick", character: lucario, kos: 4},
    {name: "Zack", character: pokemontrainer, kos: 2},
    {name: "Tim", character: darksamus, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Zack", character: yoshi, kos: 3},
    {name: "Micah", character: isabell, kos: 4},
    {name: "Nick", character: lucario, kos: 4},
    {name: "Tim", character: yoshi, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Tim", character: miigunner, kos: 3},
    {name: "Micah", character: rob, kos: 3},
    {name: "Zack", character: yoshi, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Tim", character: miiswordfighter, kos: 5},
    {name: "Betsy", character: miiswordfighter, kos: 2},
    {name: "Zack", character: wario, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,8)}
  ],[
    {name: "Zack", character: kirby, kos: 5},
    {name: "Tim", character: ness, kos: 5},
    {name: "Doug", character: megaman, kos: 0},
    {name: "Micah", character: wolf, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Zack", character: yoshi, kos: 5},
    {name: "Tim", character: pacman, kos: 4},
    {name: "Doug", character: shulk, kos: 2},
    {name: "Micah", character: wiifittrainer, kos: 0},
    {stage: "Princess Peach's Castle"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Zack", character: samus, kos: 4},
    {name: "Doug", character: samus, kos: 3},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Tim", character: snake, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Zack", character: kingdedede, kos: 7},
    {name: "Tim", character: ness, kos: 1},
    {name: "Micah", character: peach, kos: 2},
    {name: "Doug", character: greninja, kos: 0},
    {stage: "Dream Land"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Tim", character: samus, kos: 3},
    {name: "Micah", character: bowserjr, kos: 2},
    {name: "Zack", character: bowser, kos: 4},
    {name: "Doug", character: zerosuitsamus, kos: 1},
    {stage: "Delfino Plaza"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Tim", character: miigunner, kos: 2},
    {name: "Doug", character: rob, kos: 3},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Zack", character: drmario, kos: 3},
    {stage: "Yggdrasil's Altar"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Micah", character: zelda, kos: 5},
    {name: "Doug", character: lucina, kos: 3},
    {name: "Tim", character: miiswordfighter, kos: 1},
    {name: "Zack", character: hero, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Betsy", character: link, kos: 3},
    {name: "Doug", character: byleth, kos: 6},
    {name: "Tim", character: pacman, kos: 1},
    {name: "Zack", character: hero, kos: 1},
    {stage: "Battlefield"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Doug", character: pit, kos: 1},
    {name: "Micah", character: iceclimbers, kos: 1},
    {name: "Tim", character: miiswordfighter, kos: 5},
    {name: "Zack", character: hero, kos: 4},
    {stage: "Duck Hunt"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Zack", character: hero, kos: 5},
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Micah", character: terry, kos: 3},
    {name: "Doug", character: incineroar, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,15)}
  ],[
    {name: "Zack", character: samus, kos: 3},
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Doug", character: pokemontrainer, kos: 0},
    {name: "Tim", character: ness, kos: 1},
    {stage: "Mushroom Kingdom"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Tim", character: ness, kos: 3},
    {name: "Zack", character: samus, kos: 2},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "Doug", character: pokemontrainer, kos: 2},
    {stage: "Pokemon Stadium 2"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Micah", character: peach, kos: 3},
    {name: "Zack", character: hero, kos: 0},
    {name: "Tim", character: ness, kos: 5},
    {name: "Final Destination", character: empty, kos: 0},
    {stage: ""},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Tim", character: samus, kos: 4},
    {name: "Micah", character: metaknight, kos: 3},
    {name: "Zack", character: miigunner, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Dream Land"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Tim", character: pacman, kos: 2},
    {name: "Craig", character: ganondorf, kos: 3},
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Zack", character: kingdedede, kos: 4},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Craig", character: kirby, kos: 5},
    {name: "Micah", character: zelda, kos: 3},
    {name: "Zack", character: miigunner, kos: 2},
    {name: "Tim", character: miigunner, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Zack", character: hero, kos: 3},
    {name: "Craig", character: pikachu, kos: 4},
    {name: "Tim", character: miiswordfighter, kos: 1},
    {name: "Micah", character: simon, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Micah", character: simon, kos: 2},
    {name: "Zack", character: hero, kos: 2},
    {name: "Craig", character: link, kos: 3},
    {name: "Tim", character: miiswordfighter, kos: 4},
    {stage: "Temple"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Micah", character: bowserjr, kos: 5},
    {name: "Zack", character: hero, kos: 1},
    {name: "Tim", character: ness, kos: 2},
    {name: "Craig", character: donkeykong, kos: 2},
    {stage: "Spiral Mountain"},
    {date: new Date(2020,3,22)}
  ],[
    {name: "Tim", character: lucina, kos: 2},
    {name: "Zack", character: hero, kos: 3},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Kongo Falls"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: hero, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: iceclimbers, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Pilotwings"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: bowser, kos: 6},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: bowserjr, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Tim", character: darksamus, kos: 3},
    {name: "Zack", character: samus, kos: 4},
    {name: "Micah", character: terry, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Fourside"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: samus, kos: 4},
    {name: "Tim", character: miigunner, kos: 2},
    {name: "Micah", character: wiifittrainer, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Great Plateau Tower"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: miigunner, kos: 3},
    {name: "Micah", character: incineroar, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Dream Land"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: miigunner, kos: 2},
    {name: "Tim", character: ness, kos: 4},
    {name: "Micah", character: ridley, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Great Bay"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: inkling, kos: 3},
    {name: "Tim", character: captainfalcon, kos: 5},
    {name: "Micah", character: pichu, kos: 0},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: kingdedede, kos: 5},
    {name: "Micah", character: darkpit, kos: 1},
    {name: "Tim", character: miiswordfighter, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Tim", character: miiswordfighter, kos: 5},
    {name: "Betsy", character: banjo, kos: 0},
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Corneria"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Micah", character: zelda, kos: 3},
    {name: "Tim", character: miiswordfighter, kos: 3},
    {name: "Zack", character: wario, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Kalos Pokemon Stadium"},
    {date: new Date(2020,3,29)}
  ],[
    {name: "Zack", character: banjo, kos: 3},
    {name: "Tim", character: darksamus, kos: 2},
    {name: "Micah", character: wolf, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Fountain of Dreams"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Micah", character: darkpit, kos: 4},
    {name: "Zack", character: samus, kos: 3},
    {name: "Tim", character: pacman, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "3D Land"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Zack", character: miibrawler, kos: 3},
    {name: "Micah", character: zelda, kos: 4},
    {name: "Tim", character: miiswordfighter, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Craig", character: link, kos: 4},
    {name: "Micah", character: wiifittrainer, kos: 3},
    {name: "Tim", character: miigunner, kos: 1},
    {name: "Zack", character: miibrawler, kos: 3},
    {stage: "Moray Towers"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Doug", character: samus, kos: 5},
    {name: "Craig", character: kirby, kos: 2},
    {name: "Tim", character: pacman, kos: 3},
    {name: "Micah", character: fox, kos: 1},
    {stage: "Kongo Jungle"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Zack", character: corrin, kos: 3},
    {name: "Tim", character: ness, kos: 3},
    {name: "Doug", character: luigi, kos: 2},
    {name: "Craig", character: pikachu, kos: 3},
    {stage: "Battlefield"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Doug", character: younglink, kos: 4},
    {name: "Tim", character: pacman, kos: 1},
    {name: "Micah", character: bowserjr, kos: 4},
    {name: "Zack", character: hero, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Craig", character: ganondorf, kos: 7},
    {name: "Tim", character: samus, kos: 1},
    {name: "Micah", character: incineroar, kos: 1},
    {name: "Doug", character: joker, kos: 2},
    {stage: "King of Fighters Stadium"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Zack", character: kirby, kos: 5},
    {name: "Tim", character: ness, kos: 2},
    {name: "Craig", character: gameandwatch, kos: 3},
    {name: "Micah", character: pirahnaplant, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Doug", character: byleth, kos: 3},
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Hyrule Castle"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Zack", character: hero, kos: 4},
    {name: "Micah", character: mewtwo, kos: 2},
    {name: "Doug", character: roy, kos: 2},
    {name: "", character: empty, kos: 0},
    {stage: "Rainbow Cruise"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Micah", character: terry, kos: 4},
    {name: "Zack", character: bowser, kos: 3},
    {name: "Doug", character: captainfalcon, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Lylat Cruise"},
    {date: new Date(2020,4,7)}
  ],[
    {name: "Zack", character: ganondorf, kos: 3},
    {name: "Tim", character: ridley, kos: 2},
    {name: "Micah", character: bowserjr, kos: 3},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: iceclimbers, kos: 3},
    {name: "Zack", character: drmario, kos: 2},
    {name: "Doug", character: ridley, kos: 1},
    {name: "Tim", character: ridley, kos: 4},
    {stage: "Skyloft"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: darkpit, kos: 4},
    {name: "Tim", character: pacman, kos: 1},
    {name: "Zack", character: lucas, kos: 3},
    {name: "Doug", character: ganondorf, kos: 3},
    {stage: "Spear Pillar"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Tim", character: ness, kos: 5},
    {name: "Zack", character: lucas, kos: 3},
    {name: "Micah", character: jigglypuff, kos: 2},
    {name: "Doug", character: jigglypuff, kos: 1},
    {stage: "Mario Kart"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Zack", character: samus, kos: 4},
    {name: "Micah", character: isabell, kos: 3},
    {name: "Doug", character: younglink, kos: 3},
    {name: "Tim", character: miigunner, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: donkeykong, kos: 2},
    {name: "Zack", character: miiswordfighter, kos: 4},
    {name: "Doug", character: inkling, kos: 2},
    {name: "Tim", character: miiswordfighter, kos: 3},
    {stage: "Brinstar"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Doug", character: pikachu, kos: 2},
    {name: "Zack", character: corrin, kos: 4},
    {name: "Tim", character: pacman, kos: 2},
    {name: "Micah", character: byleth, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: incineroar, kos: 2},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: kirby, kos: 3},
    {name: "Doug", character: incineroar, kos: 2},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Zack", character: kirby, kos: 7},
    {name: "Tim", character: ness, kos: 1},
    {name: "Doug", character: rob, kos: 2},
    {name: "Micah", character: incineroar, kos: 1},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: zelda, kos: 6},
    {name: "Doug", character: marth, kos: 1},
    {name: "Tim", character: ness, kos: 2},
    {name: "Zack", character: miibrawler, kos: 1},
    {stage: "Mute City SNES"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Micah", character: peach, kos: 3},
    {name: "Zack", character: miibrawler, kos: 4},
    {name: "Doug", character: sheik, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Great Bay"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Zack", character: kingdedede, kos: 2},
    {name: "Micah", character: simon, kos: 5},
    {name: "Doug", character: daisy, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Custom"},
    {date: new Date(2020,4,13)}
  ],[
    {name: "Zack", character: corrin, kos: 4},
    {name: "Doug", character: falco, kos: 3},
    {name: "Micah", character: shulk, kos: 1},
    {name: "", character: empty, kos: 0},
    {stage: "Battlefield"},
    {date: new Date(2020,4,13)}
  ]
];
var dates = [new Date(2019,8,11).getTime(), new Date(2019,8,18).getTime(), new Date(2019,8,25).getTime(), new Date(2019,9,9).getTime(), new Date(2019,9,16).getTime(), new Date(2019,9,23).getTime(), new Date(2019,11,4).getTime(), new Date(2019,11,18).getTime(), new Date(2020,0,16).getTime(), new Date(2020,0,22).getTime(), new Date(2020,0,30).getTime(), new Date(2020,1,5).getTime(), new Date(2020,1,13).getTime(), new Date(2020,1,19).getTime(), new Date(2020,2,4).getTime(), new Date(2020,2,12).getTime(), new Date(2020,2,18).getTime(), new Date(2020,2,26).getTime(), new Date(2020,3,2).getTime(), new Date(2020,3,8).getTime(), new Date(2020,3,15).getTime(), new Date(2020,3,22).getTime(), new Date(2020,3,29).getTime(), new Date(2020,4,7).getTime(), new Date(2020,4,13).getTime()];
var ultimateFighters = [{name: banjo, number: 0},{name: bayonetta, number: 0},{name: bowser, number: 0},{name: bowserjr, number: 0},{name: byleth, number: 0},{name: captainfalcon, number: 0},{name: chrom, number: 0},{name: cloud, number: 0},{name: corrin, number: 0},{name: daisy, number: 0},{name: darkpit, number: 0},{name: darksamus, number: 0},{name: diddykong, number: 0},{name: donkeykong, number: 0},{name: drmario, number: 0},{name: duckhunt, number: 0},{name: falco, number: 0},{name: fox, number: 0},{name: gameandwatch, number: 0},{name: ganondorf, number: 0},{name: greninja, number: 0},{name: hero, number: 0},{name: iceclimbers, number: 0},{name: ike, number: 0},{name: incineroar, number: 0},{name: inkling, number: 0},{name: isabell, number: 0},{name: jigglypuff, number: 0},{name: joker, number: 0},{name: ken, number: 0},{name: kingdedede, number: 0},{name: kingkrool, number: 0},{name: kirby, number: 0},{name: link, number: 0},{name: littlemac, number: 0},{name: lucario, number: 0},{name: lucas, number: 0},{name: lucina, number: 0},{name: luigi, number: 0},{name: mario, number: 0},{name: marth, number: 0},{name: megaman, number: 0},{name: metaknight, number: 0},{name: mewtwo, number: 0},{name: miibrawler, number: 0},{name: miigunner, number: 0},{name: miiswordfighter, number: 0},{name: ness, number: 0},{name: olimar, number: 0},{name: pacman, number: 0},{name: palutena, number: 0},{name: peach, number: 0},{name: pichu, number: 0},{name: pikachu, number: 0},{name: pirahnaplant, number: 0},{name: pit, number: 0},{name: pokemontrainer, number: 0},{name: richter, number: 0},{name: ridley, number: 0},{name: rob, number: 0},{name: robin, number: 0},{name: rosalina, number: 0},{name: roy, number: 0},{name: ryu, number: 0},{name: samus, number: 0},{name: sheik, number: 0},{name: shulk, number: 0},{name: simon, number: 0},{name: snake, number: 0},{name: sonic, number: 0},{name: terry, number: 0},{name: toonlink, number: 0},{name: villager, number: 0},{name: wario, number: 0},{name: wiifittrainer, number: 0},{name: wolf, number: 0},{name: yoshi, number: 0},{name: younglink, number: 0},{name: zelda, number: 0},{name: zerosuitsamus, number: 0}];
var ultimateFighters19 = [{name: banjo, number: 0},{name: bayonetta, number: 0},{name: bowser, number: 0},{name: bowserjr, number: 0},{name: byleth, number: 0},{name: captainfalcon, number: 0},{name: chrom, number: 0},{name: cloud, number: 0},{name: corrin, number: 0},{name: daisy, number: 0},{name: darkpit, number: 0},{name: darksamus, number: 0},{name: diddykong, number: 0},{name: donkeykong, number: 0},{name: drmario, number: 0},{name: duckhunt, number: 0},{name: falco, number: 0},{name: fox, number: 0},{name: gameandwatch, number: 0},{name: ganondorf, number: 0},{name: greninja, number: 0},{name: hero, number: 0},{name: iceclimbers, number: 0},{name: ike, number: 0},{name: incineroar, number: 0},{name: inkling, number: 0},{name: isabell, number: 0},{name: jigglypuff, number: 0},{name: joker, number: 0},{name: ken, number: 0},{name: kingdedede, number: 0},{name: kingkrool, number: 0},{name: kirby, number: 0},{name: link, number: 0},{name: littlemac, number: 0},{name: lucario, number: 0},{name: lucas, number: 0},{name: lucina, number: 0},{name: luigi, number: 0},{name: mario, number: 0},{name: marth, number: 0},{name: megaman, number: 0},{name: metaknight, number: 0},{name: mewtwo, number: 0},{name: miibrawler, number: 0},{name: miigunner, number: 0},{name: miiswordfighter, number: 0},{name: ness, number: 0},{name: olimar, number: 0},{name: pacman, number: 0},{name: palutena, number: 0},{name: peach, number: 0},{name: pichu, number: 0},{name: pikachu, number: 0},{name: pirahnaplant, number: 0},{name: pit, number: 0},{name: pokemontrainer, number: 0},{name: richter, number: 0},{name: ridley, number: 0},{name: rob, number: 0},{name: robin, number: 0},{name: rosalina, number: 0},{name: roy, number: 0},{name: ryu, number: 0},{name: samus, number: 0},{name: sheik, number: 0},{name: shulk, number: 0},{name: simon, number: 0},{name: snake, number: 0},{name: sonic, number: 0},{name: terry, number: 0},{name: toonlink, number: 0},{name: villager, number: 0},{name: wario, number: 0},{name: wiifittrainer, number: 0},{name: wolf, number: 0},{name: yoshi, number: 0},{name: younglink, number: 0},{name: zelda, number: 0},{name: zerosuitsamus, number: 0}];
var ultimateFighters20 = [{name: banjo, number: 0},{name: bayonetta, number: 0},{name: bowser, number: 0},{name: bowserjr, number: 0},{name: byleth, number: 0},{name: captainfalcon, number: 0},{name: chrom, number: 0},{name: cloud, number: 0},{name: corrin, number: 0},{name: daisy, number: 0},{name: darkpit, number: 0},{name: darksamus, number: 0},{name: diddykong, number: 0},{name: donkeykong, number: 0},{name: drmario, number: 0},{name: duckhunt, number: 0},{name: falco, number: 0},{name: fox, number: 0},{name: gameandwatch, number: 0},{name: ganondorf, number: 0},{name: greninja, number: 0},{name: hero, number: 0},{name: iceclimbers, number: 0},{name: ike, number: 0},{name: incineroar, number: 0},{name: inkling, number: 0},{name: isabell, number: 0},{name: jigglypuff, number: 0},{name: joker, number: 0},{name: ken, number: 0},{name: kingdedede, number: 0},{name: kingkrool, number: 0},{name: kirby, number: 0},{name: link, number: 0},{name: littlemac, number: 0},{name: lucario, number: 0},{name: lucas, number: 0},{name: lucina, number: 0},{name: luigi, number: 0},{name: mario, number: 0},{name: marth, number: 0},{name: megaman, number: 0},{name: metaknight, number: 0},{name: mewtwo, number: 0},{name: miibrawler, number: 0},{name: miigunner, number: 0},{name: miiswordfighter, number: 0},{name: ness, number: 0},{name: olimar, number: 0},{name: pacman, number: 0},{name: palutena, number: 0},{name: peach, number: 0},{name: pichu, number: 0},{name: pikachu, number: 0},{name: pirahnaplant, number: 0},{name: pit, number: 0},{name: pokemontrainer, number: 0},{name: richter, number: 0},{name: ridley, number: 0},{name: rob, number: 0},{name: robin, number: 0},{name: rosalina, number: 0},{name: roy, number: 0},{name: ryu, number: 0},{name: samus, number: 0},{name: sheik, number: 0},{name: shulk, number: 0},{name: simon, number: 0},{name: snake, number: 0},{name: sonic, number: 0},{name: terry, number: 0},{name: toonlink, number: 0},{name: villager, number: 0},{name: wario, number: 0},{name: wiifittrainer, number: 0},{name: wolf, number: 0},{name: yoshi, number: 0},{name: younglink, number: 0},{name: zelda, number: 0},{name: zerosuitsamus, number: 0}];
var seasonArray = ["Summer", "Winter", "Spring", "Fall"]
var fourP19 = [0,0,0,0,0,0,0];
var fourP19Spring = [0,0,0,0,0,0,0];
var fourP19Summer = [0,0,0,0,0,0,0];
var fourP19Fall = [0,0,0,0,0,0,0];
var fourP19Winter = [0,0,0,0,0,0,0];
var threeP19 = [0,0,0,0,0,0,0];
var threeP19Spring = [0,0,0,0,0,0,0];
var threeP19Summer = [0,0,0,0,0,0,0];
var threeP19Fall = [0,0,0,0,0,0,0];
var threeP19Winter = [0,0,0,0,0,0,0];
var fourP20Spring = [0,0,0,0,0,0,0];
var fourP20Summer = [0,0,0,0,0,0,0];
var fourP20Fall = [0,0,0,0,0,0,0];
var fourP20Winter = [0,0,0,0,0,0,0];
var fourP20 = [0,0,0,0,0,0,0];
var threeP20 = [0,0,0,0,0,0,0];
var threeP20Spring = [0,0,0,0,0,0,0];
var threeP20Fall = [0,0,0,0,0,0,0];
var threeP20Summer = [0,0,0,0,0,0,0];
var threeP20Winter = [0,0,0,0,0,0,0];
var weeklyWins = [0,0,0,0,0,0,0];
var weeklyPlace = [0,0,0,0,0,0,0];
var weeklyKos = [0,0,0,0,0,0,0];
var weeklyGames = [0,0,0,0,0,0,0];
var weeklyAvg = [0,0,0,0,0,0,0];
var weeklyPoints = [0,0,0,0,0,0,0];
var weeklyNegative = [0,0,0,0,0,0,0];
var playerkos19 = [0,0,0,0,0,0,0];
var playerkos19Summer = [0,0,0,0,0,0,0];
var playerkos19Spring = [0,0,0,0,0,0,0];
var playerkos19Winter = [0,0,0,0,0,0,0];
var playerkos19Fall = [0,0,0,0,0,0,0];
var playerkos20 = [0,0,0,0,0,0,0];
var playerkos20Summer = [0,0,0,0,0,0,0];
var playerkos20Spring = [0,0,0,0,0,0,0];
var playerkos20Winter = [0,0,0,0,0,0,0];
var playerkos20Fall = [0,0,0,0,0,0,0];
var highKoGames19 = [0,0,0,0,0,0,0];
var highKoGames20 = [0,0,0,0,0,0,0];
var gamePoints19 = [0,0,0,0,0,0,0];
var gamePoints19Summer = [0,0,0,0,0,0,0];
var gamePoints19Spring = [0,0,0,0,0,0,0];
var gamePoints19Winter = [0,0,0,0,0,0,0];
var gamePoints19Fall = [0,0,0,0,0,0,0];
var gamePoints20 = [0,0,0,0,0,0,0];
var gamePoints20Summer = [0,0,0,0,0,0,0];
var gamePoints20Fall = [0,0,0,0,0,0,0];
var gamePoints20Winter = [0,0,0,0,0,0,0];
var gamePoints20Spring = [0,0,0,0,0,0,0];
var gameNegative19 = [0,0,0,0,0,0,0];
var gameNegative19Summer = [0,0,0,0,0,0,0];
var gameNegative19Spring = [0,0,0,0,0,0,0];
var gameNegative19Winter = [0,0,0,0,0,0,0];
var gameNegative19Fall = [0,0,0,0,0,0,0];
var gameNegative20 = [0,0,0,0,0,0,0];
var gameNegative20Summer = [0,0,0,0,0,0,0];
var gameNegative20Spring = [0,0,0,0,0,0,0];
var gameNegative20Winter = [0,0,0,0,0,0,0];
var gameNegative20Fall = [0,0,0,0,0,0,0];
var micahCharacters = [];
var timCharacters = [];
var dougCharacters = [];
var zackCharacters = [];
var betsyCharacters = [];
var jamesCharacters = [];
var craigCharacters = [];
var micahCharacters19 = [];
var timCharacters19 = [];
var dougCharacters19 = [];
var zackCharacters19 = [];
var betsyCharacters19 = [];
var jamesCharacters19 = [];
var craigCharacters19 = [];
var micahCharacters19Summer = [];
var timCharacters19Summer = [];
var dougCharacters19Summer = [];
var zackCharacters19Summer = [];
var betsyCharacters19Summer = [];
var jamesCharacters19Summer = [];
var craigCharacters19Summer = [];
var micahCharacters19Spring = [];
var timCharacters19Spring = [];
var dougCharacters19Spring = [];
var zackCharacters19Spring = [];
var betsyCharacters19Spring = [];
var jamesCharacters19Spring = [];
var craigCharacters19Spring = [];
var micahCharacters19Fall = [];
var timCharacters19Fall = [];
var dougCharacters19Fall = [];
var zackCharacters19Fall = [];
var betsyCharacters19Fall = [];
var jamesCharacters19Fall = [];
var craigCharacters19Fall = [];
var micahCharacters19Winter = [];
var timCharacters19Winter = [];
var dougCharacters19Winter = [];
var zackCharacters19Winter = [];
var betsyCharacters19Winter = [];
var jamesCharacters19Winter = [];
var craigCharacters19Winter = [];
var micahCharacters20 = [];
var timCharacters20 = [];
var dougCharacters20 = [];
var zackCharacters20 = [];
var betsyCharacters20 = [];
var jamesCharacters20 = [];
var craigCharacters20 = [];
var micahCharacters20Summer = [];
var timCharacters20Summer = [];
var dougCharacters20Summer = [];
var zackCharacters20Summer = [];
var betsyCharacters20Summer = [];
var jamesCharacters20Summer = [];
var craigCharacters20Summer = [];
var micahCharacters20Spring = [];
var timCharacters20Spring = [];
var dougCharacters20Spring = [];
var zackCharacters20Spring = [];
var betsyCharacters20Spring = [];
var jamesCharacters20Spring = [];
var craigCharacters20Spring = [];
var micahCharacters20Fall = [];
var timCharacters20Fall = [];
var dougCharacters20Fall = [];
var zackCharacters20Fall = [];
var betsyCharacters20Fall = [];
var jamesCharacters20Fall = [];
var craigCharacters20Fall = [];
var micahCharacters20Winter = [];
var timCharacters20Winter = [];
var dougCharacters20Winter = [];
var zackCharacters20Winter = [];
var betsyCharacters20Winter = [];
var jamesCharacters20Winter = [];
var craigCharacters20Winter = [];
var mostPlayed = [];
var mostWins;
var averagePlace;
var highKoGames;
var totalKos;
var gamesPlayed;
var gamesPlayed19 = [0,0,0,0,0,0,0];
var gamesPlayed19Summer = [0,0,0,0,0,0,0];
var gamesPlayed19Spring = [0,0,0,0,0,0,0];
var gamesPlayed19Winter = [0,0,0,0,0,0,0];
var gamesPlayed19Fall = [0,0,0,0,0,0,0];
var gamesPlayed20 = [0,0,0,0,0,0,0];
var gamesPlayed20Summer = [0,0,0,0,0,0,0];
var gamesPlayed20Spring = [0,0,0,0,0,0,0];
var gamesPlayed20Winter = [0,0,0,0,0,0,0];
var gamesPlayed20Fall = [0,0,0,0,0,0,0];
var gamePlace19 = [0,0,0,0,0,0,0];
var gamePlace19Summer = [0,0,0,0,0,0,0];
var gamePlace19Spring = [0,0,0,0,0,0,0];
var gamePlace19Fall = [0,0,0,0,0,0,0];
var gamePlace19Winter = [0,0,0,0,0,0,0];
var gamePlace20 = [0,0,0,0,0,0,0];
var gamePlace20Summer = [0,0,0,0,0,0,0];
var gamePlace20Spring = [0,0,0,0,0,0,0];
var gamePlace20Winter = [0,0,0,0,0,0,0];
var gamePlace20Fall = [0,0,0,0,0,0,0];
var fighterStatsMicah = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsTim = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsDoug = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsZack = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsBetsy = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsJames = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsCraig = {games: 0, wins: 0, place: 0, kos: 0};
var fighterStatsNick = {games: 0, wins: 0, place: 0, kos: 0};
var playerList = ["Micah", "Tim", "Doug", "Zack", "Betsy", "James", "Craig"];
var graphPlaceMicah = [];
var graphPlaceTim = [];
var graphPlaceDoug = [];
var graphPlaceZack = [];
var graphPlaceBetsy = [];
var graphPlaceJames = [];
var graphPlaceCraig = [];
var graphKosMicah = [];
var graphKosTim = [];
var graphKosDoug = [];
var graphKosZack = [];
var graphKosBetsy = [];
var graphKosJames = [];
var graphKosCraig = [];
var graphWinsMicah = [];
var graphWinsTim = [];
var graphWinsDoug = [];
var graphWinsZack = [];
var graphWinsBetsy = [];
var graphWinsJames = [];
var graphWinsCraig = [];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threeP19: [0,0,0,0,0,0,0],
      fourP19: [0,0,0,0,0,0,0],
      threeP20: [0,0,0,0,0,0,0],
      fourP20: [0,0,0,0,0,0,0],
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
  this.goToGraphs = this.goToGraphs.bind(this);
  }
  componentDidMount(){
    for(var i=0; i < gameData.length; i++){
        var gameDate = gameData[i][5].date;
        var year = gameDate.getFullYear();
        var season;
        if(gameDate.getMonth() < 3){
            season = "Winter";
        }else if(gameDate.getMonth() >= 3 && gameDate.getMonth() < 6){
            season = "Spring";
        }else if(gameDate.getMonth() >=6 && gameDate.getMonth() < 9){
            season = "Summer";
        }else{
            season = "Fall";
        }
        if(gameData[i][3].character === empty){
            if(gameData[i][0].name === "Micah"){
                if(year === 2019){
                    threeP19[0] ++;
                    if(season === "Winter"){
                        threeP19Winter[0] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[0] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[0] ++;
                    }else{
                        threeP19Fall[0] ++;
                    }
                }else{
                    threeP20[0] ++;
                    if(season === "Winter"){
                        threeP20Winter[0] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[0] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[0] ++;
                    }else{
                        threeP20Fall[0] ++;
                    }
                }
            }else if(gameData[i][0].name === "Tim"){
                if(year === 2019){
                    threeP19[1] ++;
                    if(season === "Winter"){
                        threeP19Winter[1] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[1] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[1] ++;
                    }else{
                        threeP19Fall[1] ++;
                    }
                }else{
                    threeP20[1] ++;
                    if(season === "Winter"){
                        threeP20Winter[1] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[1] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[1] ++;
                    }else{
                        threeP20Fall[1] ++;
                    }
                }
            }else if(gameData[i][0].name === "Doug"){
                if(year === 2019){
                    threeP19[2] ++;
                    if(season === "Winter"){
                        threeP19Winter[2] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[2] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[2] ++;
                    }else{
                        threeP19Fall[2] ++;
                    }
                }else{
                    threeP20[2] ++;
                    if(season === "Winter"){
                        threeP20Winter[2] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[2] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[2] ++;
                    }else{
                        threeP20Fall[2] ++;
                    }
                }
            }else if(gameData[i][0].name === "Zack"){
                if(year === 2019){
                    threeP19[3] ++;
                    if(season === "Winter"){
                        threeP19Winter[3] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[3] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[3] ++;
                    }else{
                        threeP19Fall[3] ++;
                    }
                }else{
                    threeP20[3] ++;
                    if(season === "Winter"){
                        threeP20Winter[3] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[3] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[3] ++;
                    }else{
                        threeP20Fall[3] ++;
                    }
                }
            }else if(gameData[i][0].name === "Betsy"){
                if(year === 2019){
                    threeP19[4] ++;
                    if(season === "Winter"){
                        threeP19Winter[4] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[4] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[4] ++;
                    }else{
                        threeP19Fall[4] ++;
                    }
                }else{
                    threeP20[4] ++;
                    if(season === "Winter"){
                        threeP20Winter[4] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[4] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[4] ++;
                    }else{
                        threeP20Fall[4] ++;
                    }
                }
            }else if(gameData[i][0].name === "James"){
                if(year === 2019){
                    threeP19[5] ++;
                    if(season === "Winter"){
                        threeP19Winter[5] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[5] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[5] ++;
                    }else{
                        threeP19Fall[5] ++;
                    }
                }else{
                    threeP20[5] ++;
                    if(season === "Winter"){
                        threeP20Winter[5] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[5] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[5] ++;
                    }else{
                        threeP20Fall[5] ++;
                    }
                }
            }else if(gameData[i][0].name === "Craig"){
                if(year === 2019){
                    threeP19[6] ++;
                    if(season === "Winter"){
                        threeP19Winter[6] ++;
                    }else if(season === "Spring"){
                        threeP19Spring[6] ++;
                    }else if(season === "Summer"){
                        threeP19Summer[6] ++;
                    }else{
                        threeP19Fall[6] ++;
                    }
                }else{
                    threeP20[6] ++;
                    if(season === "Winter"){
                        threeP20Winter[6] ++;
                    }else if(season === "Spring"){
                        threeP20Spring[6] ++;
                    }else if(season === "Summer"){
                        threeP20Summer[6] ++;
                    }else{
                        threeP20Fall[6] ++;
                    }
                }
            }
        }else{
            if(gameData[i][0].name === "Micah"){
                if(year === 2019){
                    fourP19[0] ++;
                    if(season === "Winter"){
                        fourP19Winter[0] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[0] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[0] ++;
                    }else{
                        fourP19Fall[0] ++;
                    }
                }else{
                    fourP20[0] ++;
                    if(season === "Winter"){
                        fourP20Winter[0] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[0] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[0] ++;
                    }else{
                        fourP20Fall[0] ++;
                    }
                }
            }else if(gameData[i][0].name === "Tim"){
                if(year === 2019){
                    fourP19[1] ++;
                    if(season === "Winter"){
                        fourP19Winter[1] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[1] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[1] ++;
                    }else{
                        fourP19Fall[1] ++;
                    }
                }else{
                    fourP20[1] ++;
                    if(season === "Winter"){
                        fourP20Winter[1] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[1] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[1] ++;
                    }else{
                        fourP20Fall[1] ++;
                    }
                }
            }else if(gameData[i][0].name === "Doug"){
                if(year === 2019){
                    fourP19[2] ++;
                    if(season === "Winter"){
                        fourP19Winter[2] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[2] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[2] ++;
                    }else{
                        fourP19Fall[2] ++;
                    }
                }else{
                    fourP20[2] ++;
                    if(season === "Winter"){
                        fourP20Winter[2] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[2] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[2] ++;
                    }else{
                        fourP20Fall[2] ++;
                    }
                }
            }else if(gameData[i][0].name === "Zack"){
                if(year === 2019){
                    fourP19[3] ++;
                    if(season === "Winter"){
                        fourP19Winter[3] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[3] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[3] ++;
                    }else{
                        fourP19Fall[3] ++;
                    }
                }else{
                    fourP20[3] ++;
                    if(season === "Winter"){
                        fourP20Winter[3] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[3] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[3] ++;
                    }else{
                        fourP20Fall[3] ++;
                    }
                }
            }else if(gameData[i][0].name === "Betsy"){
                if(year === 2019){
                    fourP19[4] ++;
                    if(season === "Winter"){
                        fourP19Winter[4] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[4] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[4] ++;
                    }else{
                        fourP19Fall[4] ++;
                    }
                }else{
                    fourP20[4] ++;
                    if(season === "Winter"){
                        fourP20Winter[4] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[4] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[4] ++;
                    }else{
                        fourP20Fall[4] ++;
                    }
                }
            }else if(gameData[i][0].name === "James"){
                if(year === 2019){
                    fourP19[5] ++;
                    if(season === "Winter"){
                        fourP19Winter[5] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[5] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[5] ++;
                    }else{
                        fourP19Fall[5] ++;
                    }
                }else{
                    fourP20[5] ++;
                    if(season === "Winter"){
                        fourP20Winter[5] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[5] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[5] ++;
                    }else{
                        fourP20Fall[5] ++;
                    }
                }
            }else if(gameData[i][0].name === "Craig"){
                if(year === 2019){
                    fourP19[6] ++;
                    if(season === "Winter"){
                        fourP19Winter[6] ++;
                    }else if(season === "Spring"){
                        fourP19Spring[6] ++;
                    }else if(season === "Summer"){
                        fourP19Summer[6] ++;
                    }else{
                        fourP19Fall[6] ++;
                    }
                }else{
                    fourP20[6] ++;
                    if(season === "Winter"){
                        fourP20Winter[6] ++;
                    }else if(season === "Spring"){
                        fourP20Spring[6] ++;
                    }else if(season === "Summer"){
                        fourP20Summer[6] ++;
                    }else{
                        fourP20Fall[6] ++;
                    }
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
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[0] ++;
                gamesPlayed19[0] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[0] = gamesPlaceSeason[0] + (j + 1);
                gamePlace19[0] = gamePlace19[0] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[0] = gamePoints19[0] + 6;
                        gamePointsSeason[0] = gamePointsSeason[0] + 6;
                        gameNegative19[0] = gameNegative19[0] + 2;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 2;
                    }else if(j === 1){
                        gamePoints19[0] = gamePoints19[0] + 3;
                        gamePointsSeason[0] = gamePointsSeason[0] + 3;
                    }else{
                        gameNegative19[0] = gameNegative19[0] - 2;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[0] = gamePoints19[0] + 8;
                        gamePointsSeason[0] = gamePointsSeason[0] + 8;
                        gameNegative19[0] = gameNegative19[0] + 3;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 3;
                    }else if(j === 1){
                        gamePoints19[0] = gamePoints19[0] + 4;
                        gamePointsSeason[0] = gamePointsSeason[0] + 4;
                        gameNegative19[0] = gameNegative19[0] + 1;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 1;
                    }else if(j === 2){
                        gamePoints19[0] = gamePoints19[0] + 1;
                        gamePointsSeason[0] = gamePointsSeason[0] + 1;
                        gameNegative19[0] = gameNegative19[0] - 1;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 1;
                    }else{
                        gameNegative19[0] = gameNegative19[0] - 3;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[0] = playerkosSeason[0] + gameData[i][j].kos;
                playerkos19[0] = playerkos19[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[0] ++;
                  gamePoints19[0] = gamePoints19[0] + 1;
                  gamePointsSeason[0] = gamePointsSeason[0] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[0] = gamePoints19[0] + 2;
                    gamePointsSeason[0] = gamePointsSeason[0] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[0] = gamePoints19[0] + 3;
                    gamePointsSeason[0] = gamePointsSeason[0] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var micahCharactersSeason = eval("micahCharacters19" + season);
                for(var k=0; k < micahCharacters19.length; k++){
                    if(micahCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(micahCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < micahCharactersSeason.length; k++){
                    if(micahCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(micahCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        micahCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        micahCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = micahCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    micahCharactersSeason[a].number ++;
                    micahCharactersSeason[a].kos = micahCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[0] ++;
                gamesPlayed20[0] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[0] = gamesPlaceSeason[0] + (j + 1);
                gamePlace20[0] = gamePlace20[0] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[0] = gamePoints20[0] + 6;
                        gamePointsSeason[0] = gamePointsSeason[0] + 6;
                        gameNegative20[0] = gameNegative20[0] + 2;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 2;
                    }else if(j === 1){
                        gamePoints20[0] = gamePoints20[0] + 3;
                        gamePointsSeason[0] = gamePointsSeason[0] + 3;
                    }else{
                        gameNegative20[0] = gameNegative20[0] - 2;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[0] = gamePoints20[0] + 8;
                        gamePointsSeason[0] = gamePointsSeason[0] + 8;
                        gameNegative20[0] = gameNegative20[0] + 3;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 3;
                    }else if(j === 1){
                        gamePoints20[0] = gamePoints20[0] + 4;
                        gamePointsSeason[0] = gamePointsSeason[0] + 4;
                        gameNegative20[0] = gameNegative20[0] + 1;
                        gameNegativeSeason[0] = gameNegativeSeason[0] + 1;
                    }else if(j === 2){
                        gamePoints20[0] = gamePoints20[0] + 1;
                        gamePointsSeason[0] = gamePointsSeason[0] + 1;
                        gameNegative20[0] = gameNegative20[0] - 1;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 1;
                    }else{
                        gameNegative20[0] = gameNegative20[0] - 3;
                        gameNegativeSeason[0] = gameNegativeSeason[0] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[0] = playerkosSeason[0] + gameData[i][j].kos;
                playerkos20[0] = playerkos20[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[0] ++;
                  gamePoints20[0] = gamePoints20[0] + 1;
                  gamePointsSeason[0] = gamePointsSeason[0] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[0] = gamePoints20[0] + 2;
                    gamePointsSeason[0] = gamePointsSeason[0] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[0] = gamePoints20[0] + 3;
                    gamePointsSeason[0] = gamePointsSeason[0] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var micahCharactersSeason = eval("micahCharacters20" + season);
                for(var k=0; k < micahCharacters20.length; k++){
                    if(micahCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(micahCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < micahCharactersSeason.length; k++){
                    if(micahCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(micahCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Micah"){
                        micahCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        micahCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        micahCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = micahCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    micahCharactersSeason[a].number ++;
                    micahCharactersSeason[a].kos = micahCharactersSeason[a].kos + gameData[i][j].kos;
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
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[1] ++;
                gamesPlayed19[1] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[1] = gamesPlaceSeason[1] + (j + 1);
                gamePlace19[1] = gamePlace19[1] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[1] = gamePoints19[1] + 6;
                        gamePointsSeason[1] = gamePointsSeason[1] + 6;
                        gameNegative19[1] = gameNegative19[1] + 2;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 2;
                    }else if(j === 1){
                        gamePoints19[1] = gamePoints19[1] + 3;
                        gamePointsSeason[1] = gamePointsSeason[1] + 3;
                    }else{
                        gameNegative19[1] = gameNegative19[1] - 2;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[1] = gamePoints19[1] + 8;
                        gamePointsSeason[1] = gamePointsSeason[1] + 8;
                        gameNegative19[1] = gameNegative19[1] + 3;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 3;
                    }else if(j === 1){
                        gamePoints19[1] = gamePoints19[1] + 4;
                        gamePointsSeason[1] = gamePointsSeason[1] + 4;
                        gameNegative19[1] = gameNegative19[1] + 1;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 1;
                    }else if(j === 2){
                        gamePoints19[1] = gamePoints19[1] + 1;
                        gamePointsSeason[1] = gamePointsSeason[1] + 1;
                        gameNegative19[1] = gameNegative19[1] - 1;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 1;
                    }else{
                        gameNegative19[1] = gameNegative19[1] - 3;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[1] = playerkosSeason[1] + gameData[i][j].kos;
                playerkos19[1] = playerkos19[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[1] ++;
                  gamePoints19[1] = gamePoints19[1] + 1;
                  gamePointsSeason[1] = gamePointsSeason[1] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[1] = gamePoints19[1] + 2;
                    gamePointsSeason[1] = gamePointsSeason[1] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[1] = gamePoints19[1] + 3;
                    gamePointsSeason[1] = gamePointsSeason[1] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var timCharactersSeason = eval("timCharacters19" + season);
                for(var k=0; k < timCharacters19.length; k++){
                    if(timCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(timCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < timCharactersSeason.length; k++){
                    if(timCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(timCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        timCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        timCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = timCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    timCharactersSeason[a].number ++;
                    timCharactersSeason[a].kos = timCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[1] ++;
                gamesPlayed20[1] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[1] = gamesPlaceSeason[1] + (j + 1);
                gamePlace20[1] = gamePlace20[1] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[1] = gamePoints20[1] + 6;
                        gamePointsSeason[1] = gamePointsSeason[1] + 6;
                        gameNegative20[1] = gameNegative20[1] + 2;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 2;
                    }else if(j === 1){
                        gamePoints20[1] = gamePoints20[1] + 3;
                        gamePointsSeason[1] = gamePointsSeason[1] + 3;
                    }else{
                        gameNegative20[1] = gameNegative20[1] - 2;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[1] = gamePoints20[1] + 8;
                        gamePointsSeason[1] = gamePointsSeason[1] + 8;
                        gameNegative20[1] = gameNegative20[1] + 3;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 3;
                    }else if(j === 1){
                        gamePoints20[1] = gamePoints20[1] + 4;
                        gamePointsSeason[1] = gamePointsSeason[1] + 4;
                        gameNegative20[1] = gameNegative20[1] + 1;
                        gameNegativeSeason[1] = gameNegativeSeason[1] + 1;
                    }else if(j === 2){
                        gamePoints20[1] = gamePoints20[1] + 1;
                        gamePointsSeason[1] = gamePointsSeason[1] + 1;
                        gameNegative20[1] = gameNegative20[1] - 1;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 1;
                    }else{
                        gameNegative20[1] = gameNegative20[1] - 3;
                        gameNegativeSeason[1] = gameNegativeSeason[1] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[1] = playerkosSeason[1] + gameData[i][j].kos;
                playerkos20[1] = playerkos20[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[1] ++;
                  gamePoints20[1] = gamePoints20[1] + 1;
                  gamePointsSeason[1] = gamePointsSeason[1] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[1] = gamePoints20[1] + 2;
                    gamePointsSeason[1] = gamePointsSeason[1] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[1] = gamePoints20[1] + 3;
                    gamePointsSeason[1] = gamePointsSeason[1] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var timCharactersSeason = eval("timCharacters20" + season);
                for(var k=0; k < timCharacters20.length; k++){
                    if(timCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(timCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < timCharactersSeason.length; k++){
                    if(timCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(timCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Tim"){
                        timCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        timCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        timCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = timCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    timCharactersSeason[a].number ++;
                    timCharactersSeason[a].kos = timCharactersSeason[a].kos + gameData[i][j].kos;
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
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[2] ++;
                gamesPlayed19[2] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[2] = gamesPlaceSeason[2] + (j + 1);
                gamePlace19[2] = gamePlace19[2] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[2] = gamePoints19[2] + 6;
                        gamePointsSeason[2] = gamePointsSeason[2] + 6;
                        gameNegative19[2] = gameNegative19[2] + 2;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 2;
                    }else if(j === 1){
                        gamePoints19[2] = gamePoints19[2] + 3;
                        gamePointsSeason[2] = gamePointsSeason[2] + 3;
                    }else{
                        gameNegative19[2] = gameNegative19[2] - 2;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[2] = gamePoints19[2] + 8;
                        gamePointsSeason[2] = gamePointsSeason[2] + 8;
                        gameNegative19[2] = gameNegative19[2] + 3;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 3;
                    }else if(j === 1){
                        gamePoints19[2] = gamePoints19[2] + 4;
                        gamePointsSeason[2] = gamePointsSeason[2] + 4;
                        gameNegative19[2] = gameNegative19[2] + 1;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 1;
                    }else if(j === 2){
                        gamePoints19[2] = gamePoints19[2] + 1;
                        gamePointsSeason[2] = gamePointsSeason[2] + 1;
                        gameNegative19[2] = gameNegative19[2] - 1;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 1;
                    }else{
                        gameNegative19[2] = gameNegative19[2] - 3;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[2] = playerkosSeason[2] + gameData[i][j].kos;
                playerkos19[2] = playerkos19[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[2] ++;
                  gamePoints19[2] = gamePoints19[2] + 1;
                  gamePointsSeason[2] = gamePointsSeason[2] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[2] = gamePoints19[2] + 2;
                    gamePointsSeason[2] = gamePointsSeason[2] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[2] = gamePoints19[2] + 3;
                    gamePointsSeason[2] = gamePointsSeason[2] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var dougCharactersSeason = eval("dougCharacters19" + season);
                for(var k=0; k < dougCharacters19.length; k++){
                    if(dougCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(dougCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < dougCharactersSeason.length; k++){
                    if(dougCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(dougCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        dougCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        dougCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = dougCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    dougCharactersSeason[a].number ++;
                    dougCharactersSeason[a].kos = dougCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[2] ++;
                gamesPlayed20[2] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[2] = gamesPlaceSeason[2] + (j + 1);
                gamePlace20[2] = gamePlace20[2] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[2] = gamePoints20[2] + 6;
                        gamePointsSeason[2] = gamePointsSeason[2] + 6;
                        gameNegative20[2] = gameNegative20[2] + 2;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 2;
                    }else if(j === 1){
                        gamePoints20[2] = gamePoints20[2] + 3;
                        gamePointsSeason[2] = gamePointsSeason[2] + 3;
                    }else{
                        gameNegative20[2] = gameNegative20[2] - 2;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[2] = gamePoints20[2] + 8;
                        gamePointsSeason[2] = gamePointsSeason[2] + 8;
                        gameNegative20[2] = gameNegative20[2] + 3;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 3;
                    }else if(j === 1){
                        gamePoints20[2] = gamePoints20[2] + 4;
                        gamePointsSeason[2] = gamePointsSeason[2] + 4;
                        gameNegative20[2] = gameNegative20[2] + 1;
                        gameNegativeSeason[2] = gameNegativeSeason[2] + 1;
                    }else if(j === 2){
                        gamePoints20[2] = gamePoints20[2] + 1;
                        gamePointsSeason[2] = gamePointsSeason[2] + 1;
                        gameNegative20[2] = gameNegative20[2] - 1;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 1;
                    }else{
                        gameNegative20[2] = gameNegative20[2] - 3;
                        gameNegativeSeason[2] = gameNegativeSeason[2] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[2] = playerkosSeason[2] + gameData[i][j].kos;
                playerkos20[2] = playerkos20[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[2] ++;
                  gamePoints20[2] = gamePoints20[2] + 1;
                  gamePointsSeason[2] = gamePointsSeason[2] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[2] = gamePoints20[2] + 2;
                    gamePointsSeason[2] = gamePointsSeason[2] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[2] = gamePoints20[2] + 3;
                    gamePointsSeason[2] = gamePointsSeason[2] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var dougCharactersSeason = eval("dougCharacters20" + season);
                for(var k=0; k < dougCharacters20.length; k++){
                    if(dougCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(dougCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < dougCharactersSeason.length; k++){
                    if(dougCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(dougCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Doug"){
                        dougCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        dougCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        dougCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = dougCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    dougCharactersSeason[a].number ++;
                    dougCharactersSeason[a].kos = dougCharactersSeason[a].kos + gameData[i][j].kos;
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
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[3] ++;
                gamesPlayed19[3] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[3] = gamesPlaceSeason[3] + (j + 1);
                gamePlace19[3] = gamePlace19[3] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[3] = gamePoints19[3] + 6;
                        gamePointsSeason[3] = gamePointsSeason[3] + 6;
                        gameNegative19[3] = gameNegative19[3] + 2;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 2;
                    }else if(j === 1){
                        gamePoints19[3] = gamePoints19[3] + 3;
                        gamePointsSeason[3] = gamePointsSeason[3] + 3;
                    }else{
                        gameNegative19[3] = gameNegative19[3] - 2;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[3] = gamePoints19[3] + 8;
                        gamePointsSeason[3] = gamePointsSeason[3] + 8;
                        gameNegative19[3] = gameNegative19[3] + 3;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 3;
                    }else if(j === 1){
                        gamePoints19[3] = gamePoints19[3] + 4;
                        gamePointsSeason[3] = gamePointsSeason[3] + 4;
                        gameNegative19[3] = gameNegative19[3] + 1;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 1;
                    }else if(j === 2){
                        gamePoints19[3] = gamePoints19[3] + 1;
                        gamePointsSeason[3] = gamePointsSeason[3] + 1;
                        gameNegative19[3] = gameNegative19[3] - 1;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 1;
                    }else{
                        gameNegative19[3] = gameNegative19[3] - 3;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[3] = playerkosSeason[3] + gameData[i][j].kos;
                playerkos19[3] = playerkos19[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[3] ++;
                  gamePoints19[3] = gamePoints19[3] + 1;
                  gamePointsSeason[3] = gamePointsSeason[3] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[3] = gamePoints19[3] + 2;
                    gamePointsSeason[3] = gamePointsSeason[3] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[3] = gamePoints19[3] + 3;
                    gamePointsSeason[3] = gamePointsSeason[3] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var zackCharactersSeason = eval("zackCharacters19" + season);
                for(var k=0; k < zackCharacters19.length; k++){
                    if(zackCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(zackCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < zackCharactersSeason.length; k++){
                    if(zackCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(zackCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        zackCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        zackCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = zackCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    zackCharactersSeason[a].number ++;
                    zackCharactersSeason[a].kos = zackCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[3] ++;
                gamesPlayed20[3] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[3] = gamesPlaceSeason[3] + (j + 1);
                gamePlace20[3] = gamePlace20[3] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[3] = gamePoints20[3] + 6;
                        gamePointsSeason[3] = gamePointsSeason[3] + 6;
                        gameNegative20[3] = gameNegative20[3] + 2;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 2;
                    }else if(j === 1){
                        gamePoints20[3] = gamePoints20[3] + 3;
                        gamePointsSeason[3] = gamePointsSeason[3] + 3;
                    }else{
                        gameNegative20[3] = gameNegative20[3] - 2;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[3] = gamePoints20[3] + 8;
                        gamePointsSeason[3] = gamePointsSeason[3] + 8;
                        gameNegative20[3] = gameNegative20[3] + 3;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 3;
                    }else if(j === 1){
                        gamePoints20[3] = gamePoints20[3] + 4;
                        gamePointsSeason[3] = gamePointsSeason[3] + 4;
                        gameNegative20[3] = gameNegative20[3] + 1;
                        gameNegativeSeason[3] = gameNegativeSeason[3] + 1;
                    }else if(j === 2){
                        gamePoints20[3] = gamePoints20[3] + 1;
                        gamePointsSeason[3] = gamePointsSeason[3] + 1;
                        gameNegative20[3] = gameNegative20[3] - 1;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 1;
                    }else{
                        gameNegative20[3] = gameNegative20[3] - 3;
                        gameNegativeSeason[3] = gameNegativeSeason[3] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[3] = playerkosSeason[3] + gameData[i][j].kos;
                playerkos20[3] = playerkos20[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[3] ++;
                  gamePoints20[3] = gamePoints20[3] + 1;
                  gamePointsSeason[3] = gamePointsSeason[3] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[3] = gamePoints20[3] + 2;
                    gamePointsSeason[3] = gamePointsSeason[3] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[3] = gamePoints20[3] + 3;
                    gamePointsSeason[3] = gamePointsSeason[3] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var zackCharactersSeason = eval("zackCharacters20" + season);
                for(var k=0; k < zackCharacters20.length; k++){
                    if(zackCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(zackCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < zackCharactersSeason.length; k++){
                    if(zackCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(zackCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Zack"){
                        zackCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        zackCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        zackCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = zackCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    zackCharactersSeason[a].number ++;
                    zackCharactersSeason[a].kos = zackCharactersSeason[a].kos + gameData[i][j].kos;
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
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[4] ++;
                gamesPlayed19[4] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[4] = gamesPlaceSeason[4] + (j + 1);
                gamePlace19[4] = gamePlace19[4] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[4] = gamePoints19[4] + 6;
                        gamePointsSeason[4] = gamePointsSeason[4] + 6;
                        gameNegative19[4] = gameNegative19[4] + 2;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 2;
                    }else if(j === 1){
                        gamePoints19[4] = gamePoints19[4] + 3;
                        gamePointsSeason[4] = gamePointsSeason[4] + 3;
                    }else{
                        gameNegative19[4] = gameNegative19[4] - 2;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[4] = gamePoints19[4] + 8;
                        gamePointsSeason[4] = gamePointsSeason[4] + 8;
                        gameNegative19[4] = gameNegative19[4] + 3;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 3;
                    }else if(j === 1){
                        gamePoints19[4] = gamePoints19[4] + 4;
                        gamePointsSeason[4] = gamePointsSeason[4] + 4;
                        gameNegative19[4] = gameNegative19[4] + 1;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 1;
                    }else if(j === 2){
                        gamePoints19[4] = gamePoints19[4] + 1;
                        gamePointsSeason[4] = gamePointsSeason[4] + 1;
                        gameNegative19[4] = gameNegative19[4] - 1;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 1;
                    }else{
                        gameNegative19[4] = gameNegative19[4] - 3;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[4] = playerkosSeason[4] + gameData[i][j].kos;
                playerkos19[4] = playerkos19[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[4] ++;
                  gamePoints19[4] = gamePoints19[4] + 1;
                  gamePointsSeason[4] = gamePointsSeason[4] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[4] = gamePoints19[4] + 2;
                    gamePointsSeason[4] = gamePointsSeason[4] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[4] = gamePoints19[4] + 3;
                    gamePointsSeason[4] = gamePointsSeason[4] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var betsyCharactersSeason = eval("betsyCharacters19" + season);
                for(var k=0; k < betsyCharacters19.length; k++){
                    if(betsyCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(betsyCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < betsyCharactersSeason.length; k++){
                    if(betsyCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(betsyCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        betsyCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        betsyCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = betsyCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    betsyCharactersSeason[a].number ++;
                    betsyCharactersSeason[a].kos = betsyCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[4] ++;
                gamesPlayed20[4] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[4] = gamesPlaceSeason[4] + (j + 1);
                gamePlace20[4] = gamePlace20[4] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[4] = gamePoints20[4] + 6;
                        gamePointsSeason[4] = gamePointsSeason[4] + 6;
                        gameNegative20[4] = gameNegative20[4] + 2;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 2;
                    }else if(j === 1){
                        gamePoints20[4] = gamePoints20[4] + 3;
                        gamePointsSeason[4] = gamePointsSeason[4] + 3;
                    }else{
                        gameNegative20[4] = gameNegative20[4] - 2;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[4] = gamePoints20[4] + 8;
                        gamePointsSeason[4] = gamePointsSeason[4] + 8;
                        gameNegative20[4] = gameNegative20[4] + 3;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 3;
                    }else if(j === 1){
                        gamePoints20[4] = gamePoints20[4] + 4;
                        gamePointsSeason[4] = gamePointsSeason[4] + 4;
                        gameNegative20[4] = gameNegative20[4] + 1;
                        gameNegativeSeason[4] = gameNegativeSeason[4] + 1;
                    }else if(j === 2){
                        gamePoints20[4] = gamePoints20[4] + 1;
                        gamePointsSeason[4] = gamePointsSeason[4] + 1;
                        gameNegative20[4] = gameNegative20[4] - 1;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 1;
                    }else{
                        gameNegative20[4] = gameNegative20[4] - 3;
                        gameNegativeSeason[4] = gameNegativeSeason[4] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[4] = playerkosSeason[4] + gameData[i][j].kos;
                playerkos20[4] = playerkos20[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[4] ++;
                  gamePoints20[4] = gamePoints20[4] + 1;
                  gamePointsSeason[4] = gamePointsSeason[4] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[4] = gamePoints20[4] + 2;
                    gamePointsSeason[4] = gamePointsSeason[4] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[4] = gamePoints20[4] + 3;
                    gamePointsSeason[4] = gamePointsSeason[4] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var betsyCharactersSeason = eval("betsyCharacters20" + season);
                for(var k=0; k < betsyCharacters20.length; k++){
                    if(betsyCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(betsyCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < betsyCharactersSeason.length; k++){
                    if(betsyCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(betsyCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Betsy"){
                        betsyCharactersSeason[k].wins ++;
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
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        betsyCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        betsyCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = betsyCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    betsyCharactersSeason[a].number ++;
                    betsyCharactersSeason[a].kos = betsyCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "James"){
          var existingCharacter = false;
            for(var k=0; k < jamesCharacters.length; k++){
                if(jamesCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(jamesCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "James"){
                    jamesCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    jamesCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    jamesCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = jamesCharacters.findIndex(x => x.character === gameData[i][j].character);
                jamesCharacters[a].number ++;
                jamesCharacters[a].kos = jamesCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[5] ++;
                gamesPlayed19[5] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[5] = gamesPlaceSeason[5] + (j + 1);
                gamePlace19[5] = gamePlace19[5] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[5] = gamePoints19[5] + 6;
                        gamePointsSeason[5] = gamePointsSeason[5] + 6;
                        gameNegative19[5] = gameNegative19[5] + 2;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 2;
                    }else if(j === 1){
                        gamePoints19[5] = gamePoints19[5] + 3;
                        gamePointsSeason[5] = gamePointsSeason[5] + 3;
                    }else{
                        gameNegative19[5] = gameNegative19[5] - 2;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[5] = gamePoints19[5] + 8;
                        gamePointsSeason[5] = gamePointsSeason[5] + 8;
                        gameNegative19[5] = gameNegative19[5] + 3;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 3;
                    }else if(j === 1){
                        gamePoints19[5] = gamePoints19[5] + 4;
                        gamePointsSeason[5] = gamePointsSeason[5] + 4;
                        gameNegative19[5] = gameNegative19[5] + 1;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 1;
                    }else if(j === 2){
                        gamePoints19[5] = gamePoints19[5] + 1;
                        gamePointsSeason[5] = gamePointsSeason[5] + 1;
                        gameNegative19[5] = gameNegative19[5] - 1;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 1;
                    }else{
                        gameNegative19[5] = gameNegative19[5] - 3;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[5] = playerkosSeason[5] + gameData[i][j].kos;
                playerkos19[5] = playerkos19[5] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[5] ++;
                  gamePoints19[5] = gamePoints19[5] + 1;
                  gamePointsSeason[5] = gamePointsSeason[5] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[5] = gamePoints19[5] + 2;
                    gamePointsSeason[5] = gamePointsSeason[5] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[5] = gamePoints19[5] + 3;
                    gamePointsSeason[5] = gamePointsSeason[5] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var jamesCharactersSeason = eval("jamesCharacters19" + season);
                for(var k=0; k < jamesCharacters19.length; k++){
                    if(jamesCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(jamesCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "James"){
                        jamesCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < jamesCharactersSeason.length; k++){
                    if(jamesCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(jamesCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "James"){
                        jamesCharactersSeason[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        jamesCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        jamesCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = jamesCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    jamesCharacters19[a].number ++;
                    jamesCharacters19[a].kos = jamesCharacters19[a].kos + gameData[i][j].kos;
                }
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        jamesCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        jamesCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = jamesCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    jamesCharactersSeason[a].number ++;
                    jamesCharactersSeason[a].kos = jamesCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[5] ++;
                gamesPlayed20[5] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[5] = gamesPlaceSeason[5] + (j + 1);
                gamePlace20[5] = gamePlace20[5] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[5] = gamePoints20[5] + 6;
                        gamePointsSeason[5] = gamePointsSeason[5] + 6;
                        gameNegative20[5] = gameNegative20[5] + 2;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 2;
                    }else if(j === 1){
                        gamePoints20[5] = gamePoints20[5] + 3;
                        gamePointsSeason[5] = gamePointsSeason[5] + 3;
                    }else{
                        gameNegative20[5] = gameNegative20[5] - 2;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[5] = gamePoints20[5] + 8;
                        gamePointsSeason[5] = gamePointsSeason[5] + 8;
                        gameNegative20[5] = gameNegative20[5] + 3;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 3;
                    }else if(j === 1){
                        gamePoints20[5] = gamePoints20[5] + 4;
                        gamePointsSeason[5] = gamePointsSeason[5] + 4;
                        gameNegative20[5] = gameNegative20[5] + 1;
                        gameNegativeSeason[5] = gameNegativeSeason[5] + 1;
                    }else if(j === 2){
                        gamePoints20[5] = gamePoints20[5] + 1;
                        gamePointsSeason[5] = gamePointsSeason[5] + 1;
                        gameNegative20[5] = gameNegative20[5] - 1;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 1;
                    }else{
                        gameNegative20[5] = gameNegative20[5] - 3;
                        gameNegativeSeason[5] = gameNegativeSeason[5] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[5] = playerkosSeason[5] + gameData[i][j].kos;
                playerkos20[5] = playerkos20[5] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[5] ++;
                  gamePoints20[5] = gamePoints20[5] + 1;
                  gamePointsSeason[5] = gamePointsSeason[5] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[5] = gamePoints20[5] + 2;
                    gamePointsSeason[5] = gamePointsSeason[5] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[5] = gamePoints20[5] + 3;
                    gamePointsSeason[5] = gamePointsSeason[5] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var jamesCharactersSeason = eval("jamesCharacters20" + season);
                for(var k=0; k < jamesCharacters20.length; k++){
                    if(jamesCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(jamesCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "james"){
                        jamesCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < jamesCharactersSeason.length; k++){
                    if(jamesCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(jamesCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "james"){
                        jamesCharactersSeason[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        jamesCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        jamesCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = jamesCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    jamesCharacters20[a].number ++;
                    jamesCharacters20[a].kos = jamesCharacters20[a].kos + gameData[i][j].kos;
                }
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        jamesCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        jamesCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = jamesCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    jamesCharactersSeason[a].number ++;
                    jamesCharactersSeason[a].kos = jamesCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }
        }else if(gameData[i][j].name === "Craig"){
          var existingCharacter = false;
            for(var k=0; k < craigCharacters.length; k++){
                if(craigCharacters[k].character === gameData[i][j].character){
                    existingCharacter = true;
                }else{}
                if(craigCharacters[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                    craigCharacters[k].wins ++;
                }else{}
            }
            if(existingCharacter === false){
                if(gameData[i][j].character === gameData[i][0].character){
                    craigCharacters.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                }else{
                    craigCharacters.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                }
            }else{
                var a = craigCharacters.findIndex(x => x.character === gameData[i][j].character);
                craigCharacters[a].number ++;
                craigCharacters[a].kos = craigCharacters[a].kos + gameData[i][j].kos;
            }
            if(year === 2019){
                var gamesPlayedSeason = eval("gamesPlayed19" + season);
                gamesPlayedSeason[6] ++;
                gamesPlayed19[6] ++;
                var gamesPlaceSeason = eval("gamePlace19" + season);
                gamesPlaceSeason[6] = gamesPlaceSeason[6] + (j + 1);
                gamePlace19[6] = gamePlace19[6] + (j + 1);
                var gamePointsSeason = eval("gamePoints19" + season);
                var gameNegativeSeason = eval("gameNegative19" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints19[6] = gamePoints19[6] + 6;
                        gamePointsSeason[6] = gamePointsSeason[6] + 6;
                        gameNegative19[6] = gameNegative19[6] + 2;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 2;
                    }else if(j === 1){
                        gamePoints19[6] = gamePoints19[6] + 3;
                        gamePointsSeason[6] = gamePointsSeason[6] + 3;
                    }else{
                        gameNegative19[6] = gameNegative19[6] - 2;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints19[6] = gamePoints19[6] + 8;
                        gamePointsSeason[6] = gamePointsSeason[6] + 8;
                        gameNegative19[6] = gameNegative19[6] + 3;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 3;
                    }else if(j === 1){
                        gamePoints19[6] = gamePoints19[6] + 4;
                        gamePointsSeason[6] = gamePointsSeason[6] + 4;
                        gameNegative19[6] = gameNegative19[6] + 1;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 1;
                    }else if(j === 2){
                        gamePoints19[6] = gamePoints19[6] + 1;
                        gamePointsSeason[6] = gamePointsSeason[6] + 1;
                        gameNegative19[6] = gameNegative19[6] - 1;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 1;
                    }else{
                        gameNegative19[6] = gameNegative19[6] - 3;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos19" + season);
                playerkosSeason[6] = playerkosSeason[6] + gameData[i][j].kos;
                playerkos19[6] = playerkos19[6] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames19[6] ++;
                  gamePoints19[6] = gamePoints19[6] + 1;
                  gamePointsSeason[6] = gamePointsSeason[6] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints19[6] = gamePoints19[6] + 2;
                    gamePointsSeason[6] = gamePointsSeason[6] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints19[6] = gamePoints19[6] + 3;
                    gamePointsSeason[6] = gamePointsSeason[6] + 3;
                }
                var existingCharacter19 = false;
                for(var k=0; k < craigCharacters19.length; k++){
                    if(craigCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(craigCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                        craigCharacters19[k].wins ++;
                    }else{}
                }
                var existingCharacterSeason = false;
                var existingCharacter19 = false;
                var craigCharactersSeason = eval("craigCharacters19" + season);
                for(var k=0; k < craigCharacters19.length; k++){
                    if(craigCharacters19[k].character === gameData[i][j].character){
                        existingCharacter19 = true;
                    }else{}
                    if(craigCharacters19[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                        craigCharacters19[k].wins ++;
                    }else{}
                }
                for(var k=0; k < craigCharactersSeason.length; k++){
                    if(craigCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(craigCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                        craigCharactersSeason[k].wins ++;
                    }else{}
                }
                if(existingCharacter19 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        craigCharacters19.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        craigCharacters19.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = craigCharacters19.findIndex(x => x.character === gameData[i][j].character);
                    craigCharacters19[a].number ++;
                    craigCharacters19[a].kos = craigCharacters19[a].kos + gameData[i][j].kos;
                }
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        craigCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        craigCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = craigCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    craigCharactersSeason[a].number ++;
                    craigCharactersSeason[a].kos = craigCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }else{
                var gamesPlayedSeason = eval("gamesPlayed20" + season);
                gamesPlayedSeason[6] ++;
                gamesPlayed20[6] ++;
                var gamesPlaceSeason = eval("gamePlace20" + season);
                gamesPlaceSeason[6] = gamesPlaceSeason[6] + (j + 1);
                gamePlace20[6] = gamePlace20[6] + (j + 1);
                var gamePointsSeason = eval("gamePoints20" + season);
                var gameNegativeSeason = eval("gameNegative20" + season);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        gamePoints20[6] = gamePoints20[6] + 6;
                        gamePointsSeason[6] = gamePointsSeason[6] + 6;
                        gameNegative20[6] = gameNegative20[6] + 2;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 2;
                    }else if(j === 1){
                        gamePoints20[6] = gamePoints20[6] + 3;
                        gamePointsSeason[6] = gamePointsSeason[6] + 3;
                    }else{
                        gameNegative20[6] = gameNegative20[6] - 2;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 2;
                    }
                }else{
                    if(j === 0){
                        gamePoints20[6] = gamePoints20[6] + 8;
                        gamePointsSeason[6] = gamePointsSeason[6] + 8;
                        gameNegative20[6] = gameNegative20[6] + 3;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 3;
                    }else if(j === 1){
                        gamePoints20[6] = gamePoints20[6] + 4;
                        gamePointsSeason[6] = gamePointsSeason[6] + 4;
                        gameNegative20[6] = gameNegative20[6] + 1;
                        gameNegativeSeason[6] = gameNegativeSeason[6] + 1;
                    }else if(j === 2){
                        gamePoints20[6] = gamePoints20[6] + 1;
                        gamePointsSeason[6] = gamePointsSeason[6] + 1;
                        gameNegative20[6] = gameNegative20[6] - 1;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 1;
                    }else{
                        gameNegative20[6] = gameNegative20[6] - 3;
                        gameNegativeSeason[6] = gameNegativeSeason[6] - 3;
                    }
                }
                var playerkosSeason = eval("playerkos20" + season);
                playerkosSeason[6] = playerkosSeason[6] + gameData[i][j].kos;
                playerkos20[6] = playerkos20[6] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                  highKoGames20[6] ++;
                  gamePoints20[6] = gamePoints20[6] + 1;
                  gamePointsSeason[6] = gamePointsSeason[6] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    gamePoints20[6] = gamePoints20[6] + 2;
                    gamePointsSeason[6] = gamePointsSeason[6] + 2;
                }else if(gameData[i][j].kos >= 9){
                    gamePoints20[6] = gamePoints20[6] + 3;
                    gamePointsSeason[6] = gamePointsSeason[6] + 3;
                }
                var existingCharacterSeason = false;
                var existingCharacter20 = false;
                var craigCharactersSeason = eval("craigCharacters20" + season);
                for(var k=0; k < craigCharacters20.length; k++){
                    if(craigCharacters20[k].character === gameData[i][j].character){
                        existingCharacter20 = true;
                    }else{}
                    if(craigCharacters20[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                        craigCharacters20[k].wins ++;
                    }else{}
                }
                for(var k=0; k < craigCharactersSeason.length; k++){
                    if(craigCharactersSeason[k].character === gameData[i][j].character){
                        existingCharacterSeason = true;
                    }else{}
                    if(craigCharactersSeason[k].character === gameData[i][0].character && gameData[i][0].name === "Craig"){
                        craigCharactersSeason[k].wins ++;
                    }else{}
                }
                if(existingCharacter20 === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        craigCharacters20.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        craigCharacters20.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = craigCharacters20.findIndex(x => x.character === gameData[i][j].character);
                    craigCharacters20[a].number ++;
                    craigCharacters20[a].kos = craigCharacters20[a].kos + gameData[i][j].kos;
                }
                if(existingCharacterSeason === false){
                    if(gameData[i][j].character === gameData[i][0].character){
                        craigCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 1, kos: gameData[i][j].kos});
                    }else{
                        craigCharactersSeason.push({character: gameData[i][j].character, number: 1, wins: 0, kos: gameData[i][j].kos});
                    }
                }else{
                    var a = craigCharactersSeason.findIndex(x => x.character === gameData[i][j].character);
                    craigCharactersSeason[a].number ++;
                    craigCharactersSeason[a].kos = craigCharactersSeason[a].kos + gameData[i][j].kos;
                }
            }
        }
        for(var k = 0; k<ultimateFighters.length; k++){
            if(ultimateFighters[k].name === gameData[i][j].character){
                if(year === 2019){
                    ultimateFighters19[k].number ++;
                    ultimateFighters[k].number ++;
                }else if(year === 2020){
                    ultimateFighters20[k].number ++;
                    ultimateFighters[k].number ++;
                }
            }else{}
        }
      }
    }
    var playerStatsArrays = [micahCharacters, micahCharacters19, micahCharacters20, timCharacters, timCharacters19, timCharacters20, dougCharacters, dougCharacters19, dougCharacters20, zackCharacters, zackCharacters19, zackCharacters20, betsyCharacters, betsyCharacters19, betsyCharacters20, jamesCharacters, jamesCharacters19, jamesCharacters20, craigCharacters, craigCharacters19, craigCharacters20];
    for(var i=0; i<playerStatsArrays.length; i++){
        for(var j=0; j<playerStatsArrays[i].length; j++){
            var avgKos = (playerStatsArrays[i][j].kos/playerStatsArrays[i][j].number).toFixed(2);
            playerStatsArrays[i][j].kos = avgKos;
        }
    }
    this.setState({
      threeP19: [threeP19[0], threeP19[1], threeP19[2], threeP19[3], threeP19[4], threeP19[5], threeP19[6]],
      fourP19: [fourP19[0], fourP19[1], fourP19[2], fourP19[3], fourP19[4], fourP19[5], fourP19[6]],
      threeP20: [threeP20[0], threeP20[1], threeP20[2], threeP20[3], threeP20[4], threeP20[5], threeP20[6]],
      fourP20: [fourP20[0], fourP20[1], fourP20[2], fourP20[3], fourP20[4], fourP20[5], fourP20[6]]
    });
    console.log("Spring 20");
    console.log(gamePlace20Spring);
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
      fighters: false,
      graphs: false
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
      fighters: false,
      graphs: false
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
      fighters: false,
      graphs: false
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
      fighters: false,
      graphs: false
    });
  }
  goToGraphs(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    this.setState({
      weekly: false,
      overall: false,
      stats: false,
      videos: false,
      fighters: false,
      graphs: true
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
      fighters: true,
      graphs: false
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
          <Tab name="Graphs" handleClick={this.goToGraphs} />
          <Tab name="Weekly" handleClick={this.goToWeekly} />
          <Tab name="Stats" handleClick={this.goToStats} />
          <Tab name="Fighters" handleClick={this.goToFighters} />
        </div>
        {this.state.weekly ? <Weekly /> : null }
        {this.state.overall ? <Overall threeP19={this.state.threeP19} fourP19={this.state.fourP19} threeP20={this.state.threeP20} fourP20={this.state.fourP20} betsy={this.state.betsy} /> : null }
        {this.state.stats ? <Stats /> : null }
        {this.state.videos ? <Highlights /> : null }
        {this.state.fighters ? <Fighters /> : null }
        {this.state.graphs ? <Graphs /> : null }
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
      <div className="col-xs-2 tab" id={this.props.name} onClick={this.props.handleClick}>{this.props.name}</div>
    )
  }
}

class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          avgPlaceMicah: null,
          avgPlaceTim: [],
          avgPlaceDoug: [],
          avgPlaceZack: [],
          avgPlaceBetsy: [],
          avgPlaceJames: [],
          avgPlaceCraig: [],
          title: "Average Place"
        }
    this.changeGraph = this.changeGraph.bind(this);
    }
    componentDidMount(){
        for(var i=0; i<dates.length; i++){
            weeklyKos = [0,0,0,0,0,0,0];
            weeklyGames = [0,0,0,0,0,0,0];
            weeklyPlace = [0,0,0,0,0,0,0];
            weeklyAvg = [0,0,0,0,0,0,0];
            weeklyWins = [0,0,0,0,0,0,0];
            for(var j=0; j < gameData.length; j++){
                for(var k=0; k < 4; k++){
                    if(gameData[j][k].name === "Micah" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[0] = weeklyKos[0] + gameData[j][k].kos;
                        weeklyGames[0] ++;
                        weeklyPlace[0] = weeklyPlace[0] + (k + 1);
                        if(gameData[j][0].name === "Micah"){
                            weeklyWins[0] ++;
                        }else{}
                    }else if(gameData[j][k].name === "Tim" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[1] = weeklyKos[1] + gameData[j][k].kos;
                        weeklyGames[1] ++;
                        weeklyPlace[1] = weeklyPlace[1] + (k + 1);
                        if(gameData[j][0].name === "Tim"){
                            weeklyWins[1] ++;
                        }else{}
                    }else if(gameData[j][k].name === "Doug" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[2] = weeklyKos[2] + gameData[j][k].kos;
                        weeklyGames[2] ++;
                        weeklyPlace[2] = weeklyPlace[2] + (k + 1);
                        if(gameData[j][0].name === "Doug"){
                            weeklyWins[2] ++;
                        }else{}
                    }else if(gameData[j][k].name === "Zack" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[3] = weeklyKos[3] + gameData[j][k].kos;
                        weeklyGames[3] ++;
                        weeklyPlace[3] = weeklyPlace[3] + (k + 1);
                        if(gameData[j][0].name === "Zack"){
                            weeklyWins[3] ++;
                        }else{}
                    }else if(gameData[j][k].name === "Betsy" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[4] = weeklyKos[4] + gameData[j][k].kos;
                        weeklyGames[4] ++;
                        weeklyPlace[4] = weeklyPlace[4] + (k + 1);
                        if(gameData[j][0].name === "Betsy"){
                            weeklyWins[4] ++;
                        }else{}
                    }else if(gameData[j][k].name === "James" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[5] = weeklyKos[5] + gameData[j][k].kos;
                        weeklyGames[5] ++;
                        weeklyPlace[5] = weeklyPlace[5] + (k + 1);
                        if(gameData[j][0].name === "James"){
                            weeklyWins[5] ++;
                        }else{}
                    }else if(gameData[j][k].name === "Craig" && gameData[j][5].date.getTime() === dates[i]){
                        weeklyKos[6] = weeklyKos[6] + gameData[j][k].kos;
                        weeklyGames[6] ++;
                        weeklyPlace[6] = weeklyPlace[6] + (k + 1);
                        if(gameData[j][0].name === "Craig"){
                            weeklyWins[6] ++;
                        }else{}
                    }
                }
            }
            for(var j=0; j < 7; j++){
                if(weeklyGames[j] > 0){
                    weeklyAvg[j] = parseFloat((weeklyPlace[j]/weeklyGames[j]).toFixed(2));
                    weeklyKos[j] = parseFloat((weeklyKos[j]/weeklyGames[j]).toFixed(2));
                    weeklyWins[j] = ((weeklyWins[j]/weeklyGames[j]).toFixed(2)) * 100;
                }else{}
            }
            var micahDataPoint = {x: new Date(dates[i]), y: weeklyAvg[0]};
            var micahDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[0]};
            var micahDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[0]};
            if(weeklyAvg[0] > 0){
                graphPlaceMicah.push(micahDataPoint);
                graphKosMicah.push(micahDataPoint2);
                graphWinsMicah.push(micahDataPoint3);
            }else{}
            var timDataPoint = {x: new Date(dates[i]) , y: weeklyAvg[1]};
            var timDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[1]};
            var timDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[1]};
            if(weeklyAvg[1] > 0){
                graphPlaceTim.push(timDataPoint);
                graphKosTim.push(timDataPoint2);
                graphWinsTim.push(timDataPoint3);
            }else{}
            var dougDataPoint = {y: weeklyAvg[2], x: new Date(dates[i]) };
            var dougDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[2]};
            var dougDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[2]};
            if(weeklyAvg[2] > 0){
                graphPlaceDoug.push(dougDataPoint);
                graphKosDoug.push(dougDataPoint2);
                graphWinsDoug.push(dougDataPoint3);
            }else{}
            var zackDataPoint = {y: weeklyAvg[3], x: new Date(dates[i]) };
            var zackDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[3]};
            var zackDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[3]};
            if(weeklyAvg[3] > 0){
                graphPlaceZack.push(zackDataPoint);
                graphKosZack.push(zackDataPoint2);
                graphWinsZack.push(zackDataPoint3);
            }else{}
            var betsyDataPoint = {y: weeklyAvg[4], x: new Date(dates[i]) };
            var betsyDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[4]};
            var betsyDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[4]};
            if(weeklyAvg[4] > 0){
                graphPlaceBetsy.push(betsyDataPoint);
                graphKosBetsy.push(betsyDataPoint2);
                graphWinsBetsy.push(betsyDataPoint3);
            }else{}
            var jamesDataPoint = {y: weeklyAvg[5], x: new Date(dates[i]) };
            var jamesDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[5]};
            var jamesDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[5]};
            if(weeklyAvg[5] > 0){
                graphPlaceJames.push(jamesDataPoint);
                graphKosJames.push(jamesDataPoint2);
                graphWinsJames.push(jamesDataPoint3);
            }else{}
            var craigDataPoint = {y: weeklyAvg[6], x: new Date(dates[i]) };
            var craigDataPoint2 = {x: new Date(dates[i]), y: weeklyKos[6]};
            var craigDataPoint3 = {x: new Date(dates[i]), y: weeklyWins[6]};
            if(weeklyAvg[6] > 0){
                graphPlaceCraig.push(craigDataPoint);
                graphKosCraig.push(craigDataPoint2);
                graphWinsCraig.push(craigDataPoint3);
            }else{}
        }
        this.setState({
            avgPlaceMicah: graphPlaceMicah,
            avgPlaceTim: graphPlaceTim,
            avgPlaceDoug: graphPlaceDoug,
            avgPlaceZack: graphPlaceZack,
            avgPlaceBetsy: graphPlaceBetsy,
            avgPlaceJames: graphPlaceJames,
            avgPlaceCraig: graphPlaceCraig
        });
    }
    changeGraph(){
        if(this.state.title === "Average Place"){
            this.setState({
                avgPlaceMicah: graphKosMicah,
                avgPlaceTim: graphKosTim,
                avgPlaceDoug: graphKosDoug,
                avgPlaceZack: graphKosZack,
                avgPlaceBetsy: graphKosBetsy,
                avgPlaceJames: graphKosJames,
                avgPlaceCraig: graphKosCraig,
                title: "Average Kos"
            })
        }else if(this.state.title === "Average Kos"){
            this.setState({
                avgPlaceMicah: graphWinsMicah,
                avgPlaceTim: graphWinsTim,
                avgPlaceDoug: graphWinsDoug,
                avgPlaceZack: graphWinsZack,
                avgPlaceBetsy: graphWinsBetsy,
                avgPlaceJames: graphWinsJames,
                avgPlaceCraig: graphWinsCraig,
                title: "Win Percentage"
            });
        }else if(this.state.title === "Win Percentage"){
            this.setState({
                avgPlaceMicah: graphPlaceMicah,
                avgPlaceTim: graphPlaceTim,
                avgPlaceDoug: graphPlaceDoug,
                avgPlaceZack: graphPlaceZack,
                avgPlaceBetsy: graphPlaceBetsy,
                avgPlaceJames: graphPlaceJames,
                avgPlaceCraig: graphPlaceCraig,
                title: "Average Place"
            });
        }
    }
    render(){
        const options = {
            animationEnabled: true,
            title:{
                text: this.state.title
            },
            axisX: {
                title: "Date",
                includeZero: false,
                valueFormatString: "DD MMM,YY"
            },
            axisY: {
                title: this.state.title,
                includeZero: false,
                valueFormatString: "#.##",
            },
            legend:{
                cursor: "pointer",
                fontSize: 16,
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }

                    e.chart.render();
                }
            },
            toolTip:{
                shared: true
            },
            data: [{
                name: "Micah",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceMicah
            },{
                name: "Tim",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceTim
            },{
                name: "Doug",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceDoug
            },{
                name: "Zack",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceZack
            },{
                name: "Betsy",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceBetsy
            },{
                name: "James",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceJames
            },{
                name: "Craig",
                type: "spline",
                showInLegend: true,
                dataPoints: this.state.avgPlaceCraig
            }]
        }
        return(
            <div className="row">
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-2 changeYear" onClick={this.changeGraph}>Change Graph</div>
                    </div>
                    <div className="row">
                        <div id="chartContainer">
                            <CanvasJSChart options = {options}
                                /* onRef = {ref => this.chart = ref} */
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Overall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          topKos: [0,0,0,0,0,0,0],
          topPlace: [0,0,0,0,0,0,0],
          topPoints: [],
          topNegative: [],
          topPlayed: [],
          year: "20",
          season: "Overall"
        }
    this.changeOverallYear = this.changeOverallYear.bind(this);
    this.changeOverallSeason = this.changeOverallSeason.bind(this);
    }
    componentDidMount(){
        var topKos19 = [];
        var topKos20 = [];
        var topKosOverall = [];
        var topPlace19 = [];
        var topPlace20 = [];
        var topPlaceOverall = [];
        var topPoints20 = [];
        var topNegative20 = [];
        for(var i=0; i<playerkos19.length; i++){
            topKos19[i] = {name: playerList[i], number: (playerkos19[i]/gamesPlayed19[i]).toFixed(2)};
            topKos20[i] = {name: playerList[i], number: (playerkos20[i]/gamesPlayed20[i]).toFixed(2)};
            topKosOverall[i] = {name: playerList[i], number: ((playerkos19[i] + playerkos20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2)};
            topPlace19[i] = {name: playerList[i], number: (gamePlace19[i]/gamesPlayed19[i]).toFixed(2)};
            topPlace20[i] = {name: playerList[i], number: (gamePlace20[i]/gamesPlayed20[i]).toFixed(2)};
            topPlaceOverall[i] = {name: playerList[i], number: ((gamePlace19[i] + gamePlace20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2)};
            topPoints20[i] = {name: playerList[i], number: (gamePoints20[i]/gamesPlayed20[i]).toFixed(2)};
            topNegative20[i] = {name: playerList[i], number: gameNegative20[i]};
        }
        this.setState({
            topKos: topKos20,
            topPlace: topPlace20,
            topPlayed: ultimateFighters20,
            topPoints: topPoints20,
            topNegative: topNegative20
        });
    }
    changeOverallYear(){
        var yearArray = ["19", "20", "Overall"];
        var a = yearArray.findIndex(x => x === this.state.year);
        if(a === 2){
            a = -1;
        }
        var newYear = yearArray[a + 1];
        var topKos = [];
        var topPlace = [];
        var topPlayed = [];
        var topPoints = [];
        var topNegative = [];
        if(newYear === "19"){
            topPlayed = ultimateFighters19;
        }else if(newYear === "20"){
            topPlayed = ultimateFighters20;
        }else{
            topPlayed = ultimateFighters;
        }
        if(this.state.season === "Overall"){
            if(newYear === "Overall"){
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: ((playerkos19[i] + playerkos20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: ((gamePlace19[i] + gamePlace20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: ((gamePoints19[i] + gamePoints20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: gameNegative19[i] + gameNegative20[i], place: 0};
                }
            }else{
                var koStat = eval("playerkos" + newYear);
                var placeStat = eval("gamePlace" + newYear);
                var pointStat = eval("gamePoints" + newYear);
                var negStat = eval("gameNegative" + newYear);
                var playedStat = eval("gamesPlayed" + newYear);
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: (koStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: (placeStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: (pointStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat[i], place: 0};
                }
            }
        }else{
            if(newYear === "Overall"){
                var koStat19 = eval("playerkos" + "19" + this.state.season);
                var placeStat19 = eval("gamePlace" + "19" + this.state.season);
                var pointStat19 = eval("gamePoints" + "19" + this.state.season);
                var negStat19 = eval("gameNegative" + "19" + this.state.season);
                var playedStat19 = eval("gamesPlayed" + "19" + this.state.season);
                var koStat20 = eval("playerkos" + "20" + this.state.season);
                var placeStat20 = eval("gamePlace" + "20" + this.state.season);
                var pointStat20 = eval("gamePoints" + "20" + this.state.season);
                var negStat20 = eval("gameNegative" + "20" + this.state.season);
                var playedStat20 = eval("gamesPlayed" + "20" + this.state.season);
                console.log("overall Spring");
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: ((koStat19[i] + koStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: ((placeStat19[i] + placeStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: ((pointStat19[i] + pointStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat19[i] + negStat20[i], place: 0};
                }
            }else{
                var koStat = eval("playerkos" + newYear + this.state.season);
                var placeStat = eval("gamePlace" + newYear + this.state.season);
                var pointStat = eval("gamePoints" + newYear + this.state.season);
                var negStat = eval("gameNegative" + newYear + this.state.season);
                var playedStat = eval("gamesPlayed" + newYear + this.state.season);
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: (koStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: (placeStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: (pointStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat[i], place: 0};
                }
            }
        }
        this.setState({
            year: newYear,
            topKos: topKos,
            topPlace: topPlace,
            topPlayed: topPlayed,
            topPoints: topPoints,
            topNegative: topNegative
        });
    }
    changeOverallSeason(){
        var overallSeasonArray = ["Spring", "Summer", "Fall", "Winter", "Overall"];
        var a = overallSeasonArray.findIndex(x => x === this.state.season);
        if(a === 4){
            a = -1;
        }
        var newSeason = overallSeasonArray[a + 1];
        var topKos = [];
        var topPlace = [];
        var topPlayed = [];
        var topPoints = [];
        var topNegative = [];
        if(this.state.year === "Overall"){
            if(newSeason === "Overall"){
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: ((playerkos19[i] + playerkos20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: ((gamePlace19[i] + gamePlace20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: ((gamePoints19[i] + gamePoints20[i])/(gamesPlayed19[i] + gamesPlayed20[i])).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: gameNegative19[i] + gameNegative20[i], place: 0};
                }
            }else{
                var koStat19 = eval("playerkos" + "19" + newSeason);
                var placeStat19 = eval("gamePlace" + "19" + newSeason);
                var pointStat19 = eval("gamePoints" + "19" + newSeason);
                var negStat19 = eval("gameNegative" + "19" + newSeason);
                var playedStat19 = eval("gamesPlayed" + "19" + newSeason);
                var koStat20 = eval("playerkos" + "20" + newSeason);
                var placeStat20 = eval("gamePlace" + "20" + newSeason);
                var pointStat20 = eval("gamePoints" + "20" + newSeason);
                var negStat20 = eval("gameNegative" + "20" + newSeason);
                var playedStat20 = eval("gamesPlayed" + "20" + newSeason);
                console.log("overall Spring");
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: ((koStat19[i] + koStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: ((placeStat19[i] + placeStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: ((pointStat19[i] + pointStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat19[i] + negStat20[i], place: 0};
                }
            }
        }else{
            if(newSeason === "Overall"){
                var koStat19 = eval("playerkos" + "19");
                var placeStat19 = eval("gamePlace" + "19");
                var pointStat19 = eval("gamePoints" + "19");
                var negStat19 = eval("gameNegative" + "19");
                var playedStat19 = eval("gamesPlayed" + "19");
                var koStat20 = eval("playerkos" + "20");
                var placeStat20 = eval("gamePlace" + "20");
                var pointStat20 = eval("gamePoints" + "20");
                var negStat20 = eval("gameNegative" + "20");
                var playedStat20 = eval("gamesPlayed" + "20");
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: ((koStat19[i] + koStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: ((placeStat19[i] + placeStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: ((pointStat19[i] + pointStat20[i])/(playedStat19[i] + playedStat20[i])).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat19[i] + negStat20[i], place: 0};
                }
            }else{
                var koStat = eval("playerkos" + this.state.year + newSeason);
                var placeStat = eval("gamePlace" + this.state.year + newSeason);
                var pointStat = eval("gamePoints" + this.state.year + newSeason);
                var negStat = eval("gameNegative" + this.state.year + newSeason);
                var playedStat = eval("gamesPlayed" + this.state.year + newSeason);
                for(var i=0; i<playerkos19.length; i++){
                    topKos[i] = {name: playerList[i], number: (koStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPlace[i] = {name: playerList[i], number: (placeStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topPoints[i] = {name: playerList[i], number: (pointStat[i]/playedStat[i]).toFixed(2), place: 0};
                    topNegative[i] = {name: playerList[i], number: negStat[i], place: 0};
                }
            }
        }
        this.setState({
            season: newSeason,
            topKos: topKos,
            topPlace: topPlace,
            topPoints: topPoints,
            topNegative: topNegative
        });
    }
    listTopKos() {
        const numberOfTopKos = this.state.topKos;
        numberOfTopKos.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        var place = 1;
        for(var i=0; i<numberOfTopKos.length; i++){
            if(numberOfTopKos[i].number > 0){
                numberOfTopKos[i].place = place;
                place ++;
            }else{}
        }
        const listTopKos = numberOfTopKos.map((player, index) => {
            if(player.number > 0) {
                return <TopList key={index} id={index} name={player.name} number={player.number} place={player.place} />
            }
        });
        return (
          <div className="col-xs-12">{listTopKos}</div>
        )
    }
    listTopPlace() {
        const numberOfTopPlace = this.state.topPlace;
        numberOfTopPlace.sort(function(a, b){
            if(a.number < b.number) { return -1; }
            if(a.number > b.number) { return 1; }
            return 0;
        });
        var place = 1;
        for(var i=0; i<numberOfTopPlace.length; i++){
            if(numberOfTopPlace[i].number > 0){
                numberOfTopPlace[i].place = place;
                place ++;
            }else{}
        }
        const listTopPlace = numberOfTopPlace.map((player, index) => {
            if(player.number > 0) {
                return <TopList key={index} id={index} name={player.name} number={player.number} place={player.place} />
            }
        });
        return (
          <div className="col-xs-12">{listTopPlace}</div>
        )
    }
    listTopPoints() {
        const numberOfTopPoints = this.state.topPoints;
        numberOfTopPoints.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        var place = 1;
        for(var i=0; i<numberOfTopPoints.length; i++){
            if(numberOfTopPoints[i].number > 0){
                numberOfTopPoints[i].place = place;
                place ++;
            }else{}
        }
        const listTopPoints = numberOfTopPoints.map((player, index) => {
            if(player.number > 0) {
                return <TopList key={index} id={index} name={player.name} number={player.number} place={player.place} />
            }
        });
        return (
          <div className="col-xs-12">{listTopPoints}</div>
        )
    }
    listTopNegative() {
        const numberOfTopNegative = this.state.topNegative;
        numberOfTopNegative.sort(function(a, b){
            return b.number - a.number;
        });
        var place = 1;
        for(var i=0; i<numberOfTopNegative.length; i++){
            numberOfTopNegative[i].place = place;
            place ++;
        }
        const listTopNegative = numberOfTopNegative.map((player, index) => {
            return <TopList key={index} id={index} name={player.name} number={player.number} place={player.place} />
        });
        return (
          <div className="col-xs-12">{listTopNegative}</div>
        )
    }
    listTopPlayed() {
        const numberOfTopPlayed = this.state.topPlayed;
        numberOfTopPlayed.sort(function(a, b){
            if(a.number < b.number) { return 1; }
            if(a.number > b.number) { return -1; }
            return 0;
        });
        var topTenPlayed = numberOfTopPlayed.slice(0,10);
        const listTopPlayed = topTenPlayed.map((player, index) => {
          return <TopPlayed key={index} id={index} name={player.name} number={player.number} />
        });
        return (
          <div className="col-xs-12 topPlayedCol">{listTopPlayed}</div>
        )
    }
    listLeastPlayed() {
        const numberOfLeastPlayed = this.state.topPlayed;
        numberOfLeastPlayed.sort(function(a, b){
            if(a.number < b.number) { return -1; }
            if(a.number > b.number) { return 1; }
            return 0;
        });
        var topTenPlayed = numberOfLeastPlayed.slice(0,15);
        const listLeastPlayed = topTenPlayed.map((player, index) => {
            if(player.number === 0){
                return <TopPlayed key={index} id={index} name={player.name} number={player.number} />
            }
        });
        return (
          <div className="col-xs-12 topPlayedCol">{listLeastPlayed}</div>
        )
    }
    render(){
     return (
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-offset-4 col-xs-4 overallTitle">Overall Rankings</div>
                <div className="col-xs-2 changeSeason" onClick={this.changeOverallSeason}>{this.state.season}</div>
                <div className="col-xs-2 changeYear" onClick={this.changeOverallYear}>{this.state.year}</div>
            </div>
            <div className="row">
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Top Place</div>
                    <div className="row">
                        {this.listTopPlace()}
                    </div>
                </div>
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Top Points</div>
                    <div className="row">
                        {this.listTopPoints()}
                    </div>
                </div>
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Top Negative</div>
                    <div className="row">
                        {this.listTopNegative()}
                    </div>
                </div>
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Top Kos</div>
                    <div className="row">
                        {this.listTopKos()}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Most Played</div>
                    <div className="row">
                        {this.listTopPlayed()}
                    </div>
                </div>
                <div className="col-xs-3 overallCol">
                    <div className="row overallTitle">Unplayed</div>
                    <div className="row">
                        {this.listLeastPlayed()}
                    </div>
                </div>
            </div>
        </div>
     )
    }
}

class TopList extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="overallData" id={this.props.id + "TopList"}>{this.props.place}. {this.props.name}  {this.props.number}</div>
            </div>
        )
    }
}

class TopPlayed extends React.Component {
    render(){
        return (
            <div className="row">
                <img src={this.props.name} alt="topPlayed" className="col-xs-8 topPlayedImage" /><div className="col-xs-4 overallData" id={this.props.id + "TopList"}>{this.props.number}</div>
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
      year: "Overall",
      gamesPlayed: 0
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
    for(var i=0; i < micahCharacters.length; i++){
        if(micahCharacters[i].number < 3){
            console.log("not enough games");
        }else{
            totalKos.push(micahCharacters[i]);
        }
        if(totalKos.length === 3){
            break;
        }else{}
    }
    averagePlace = ((gamePlace19[0] + gamePlace20[0])/(gamesPlayed19[0] + gamesPlayed20[0])).toFixed(2);
    highKoGames = highKoGames19[0] + highKoGames20[0];
    gamesPlayed = gamesPlayed19[0] + gamesPlayed20[0];
    this.setState({
      mostPlayed: mostPlayed,
      averagePlace: averagePlace,
      mostWins: mostWins,
      totalKos: totalKos,
      highKoGames: highKoGames,
      gamesPlayed: gamesPlayed
    });
  }
  listMostPlayed() {
    const numberOfMostPlayed = this.state.mostPlayed;
    const listMostPlayed = numberOfMostPlayed.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.number} />
    });
    return (
      <div className="col-xs-4">{listMostPlayed}</div>
    )
  }
  listMostWins() {
    const numberOfMostWins = this.state.mostWins;
    const listMostWins = numberOfMostWins.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.wins} />
    });
    return (
      <div className="col-xs-4">{listMostWins}</div>
    )
  }
  listMostKos() {
    const numberOfMostKos = this.state.totalKos;
    const listMostKos = numberOfMostKos.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.kos} />
    });
    return (
      <div className="col-xs-4">{listMostKos}</div>
    )
  }
  changeStatsYear() {
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
    }else if(this.state.name === "james"){
        playerNumber = 5;
    }else if(this.state.name === "craig"){
        playerNumber = 6;
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
        for(var i=0; i<playerCharacters19.length; i++){
            if(playerCharacters19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerCharacters19[i].number < 3){
                }else{
                    totalKos.push(playerCharacters19[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace19[playerNumber]/gamesPlayed19[playerNumber]).toFixed(2);
        highKoGames = highKoGames19[playerNumber];
        gamesPlayed = gamesPlayed19[playerNumber];
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
        for(var i=0; i<playerCharacters20.length; i++){
            if(playerCharacters20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerCharacters20[i].number < 3){

                }else{
                    totalKos.push(playerCharacters20[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace20[playerNumber]/gamesPlayed20[playerNumber]).toFixed(2);
        highKoGames = highKoGames20[playerNumber];
        gamesPlayed = gamesPlayed20[playerNumber];
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
        for(var i=0; i<playerCharacters.length; i++){
            if(playerCharacters[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerCharacters[i].number < 3){

                }else{
                    totalKos.push(playerCharacters[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = ((gamePlace19[playerNumber] + gamePlace20[playerNumber])/(gamesPlayed19[playerNumber] + gamesPlayed20[playerNumber])).toFixed(2);
        highKoGames = highKoGames19[playerNumber] + highKoGames20[playerNumber];
        gamesPlayed = gamesPlayed19[playerNumber] + gamesPlayed20[playerNumber];
    }
    this.setState({
        year: statsYear,
        mostPlayed: mostPlayed,
        mostWins: mostWins,
        averagePlace: averagePlace,
        highKoGames: highKoGames,
        totalKos: totalKos,
        gamesPlayed: gamesPlayed
    });
  }
  nextName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy", "james", "craig"];
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
        for(var i=0; i<playerArray.length; i++){
            if(playerArray[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray[i].number < 3){

                }else{
                    totalKos.push(playerArray[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = ((gamePlace19[nameIndex + 1] + gamePlace20[nameIndex + 1])/(gamesPlayed19[nameIndex + 1] + gamesPlayed20[nameIndex + 1])).toFixed(2);
        highKoGames = highKoGames19[nameIndex + 1] + highKoGames20[nameIndex + 1];
        gamesPlayed = gamesPlayed19[nameIndex + 1] + gamesPlayed20[nameIndex + 1];
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
        for(var i=0; i<playerArray19.length; i++){
            if(playerArray19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray19[i].number < 3){

                }else{
                    totalKos.push(playerArray19[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace19[nameIndex + 1]/gamesPlayed19[nameIndex + 1]).toFixed(2);
        highKoGames = highKoGames19[nameIndex + 1];
        gamesPlayed = gamesPlayed19[nameIndex + 1];
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
        for(var i=0; i<playerArray20.length; i++){
            if(playerArray20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray20[i].number < 3){

                }else{
                    totalKos.push(playerArray20[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace20[nameIndex + 1]/gamesPlayed20[nameIndex + 1]).toFixed(2);
        highKoGames = highKoGames20[nameIndex + 1];
        gamesPlayed = gamesPlayed20[nameIndex + 1];
    }
    if(nameIndex < nameArray.length - 1){
      var newName = nameIndex + 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: totalKos,
        highKoGames: highKoGames,
        gamesPlayed: gamesPlayed
      });
    }
  }
  previousName() {
    var nameArray = ["micah", "tim", "doug", "zack", "betsy", "james", "craig"];
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
        for(var i=0; i<playerArray.length; i++){
            if(playerArray[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray[i].number < 3){

                }else{
                    totalKos.push(playerArray[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = ((gamePlace19[nameIndex - 1] + gamePlace20[nameIndex - 1])/(gamesPlayed19[nameIndex - 1] + gamesPlayed20[nameIndex - 1])).toFixed(2);
        highKoGames = highKoGames19[nameIndex - 1] + highKoGames20[nameIndex - 1];
        gamesPlayed = gamesPlayed19[nameIndex - 1] + gamesPlayed20[nameIndex - 1];
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
        for(var i=0; i<playerArray19.length; i++){
            if(playerArray19[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray19[i].number < 3){

                }else{
                    totalKos.push(playerArray19[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace19[nameIndex - 1]/gamesPlayed19[nameIndex - 1]).toFixed(2);
        highKoGames = highKoGames19[nameIndex - 1];
        gamesPlayed = gamesPlayed19[nameIndex - 1];
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
        for(var i=0; i<playerArray20.length; i++){
            if(playerArray20[i] === undefined){
                totalKos.push({character: empty, number: null});
            }else{
                if(playerArray20[i].number < 3){

                }else{
                    totalKos.push(playerArray20[i]);
                }
            }
            if(totalKos.length === 3){
                break;
            }else{}
        }
        averagePlace = (gamePlace20[nameIndex - 1]/gamesPlayed20[nameIndex - 1]).toFixed(2);
        highKoGames = highKoGames20[nameIndex - 1];
        gamesPlayed = gamesPlayed20[nameIndex - 1];
    }
    if(nameIndex > 0){
      var newName = nameIndex - 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: mostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: totalKos,
        highKoGames: highKoGames,
        gamesPlayed: gamesPlayed
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
            <div className="col-xs-2">Total Games</div>
            <div className="col-xs-2">{this.state.gamesPlayed}</div>
            <div className="col-xs-2">Average Place</div>
            <div className="col-xs-2">{this.state.averagePlace}</div>
          </div>
          <div className="row">
            <div className="col-xs-4 statsTitle">Most Played Fighters</div>
            <div className="col-xs-4 statsTitle">Average Kos</div>
            <div className="col-xs-4 statsTitle">Most Wins</div>
          </div>
          <div className="row">
            {this.listMostPlayed()}
            {this.listMostKos()}
            {this.listMostWins()}
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
        <div className="col-xs-9 col-md-7">
          <img  className="statsFighterIcon" id={icon} src={this.props.character} alt="mostplayed" />
        </div>
        <div className="col-xs-2 col-md-3 mostPlayedNum" id={number}>{this.props.number}</div>
      </div>
    )
  }
}

class Weekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2020,4,13),
      weeklyWins: [0,0,0,0,0,0,0],
      weeklyKos: [0,0,0,0,0,0,0],
      weeklyAvg: [0,0,0,0,0,0,0],
      weeklyPoints: [0,0,0,0,0,0,0],
      weeklyNegative: [0,0,0,0,0,0,0]
    }
  this.nextDate = this.nextDate.bind(this);
  this.previousDate = this.previousDate.bind(this);
  }
  componentDidMount() {
    console.log(gamesPlayed19Fall);
    var newDate = this.state.date.getTime();
    weeklyWins = [0,0,0,0,0,0,0];
    weeklyKos = [0,0,0,0,0,0,0];
    weeklyGames = [0,0,0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0,0,0];
    weeklyPoints = [0,0,0,0,0,0,0];
    weeklyNegative = [0,0,0,0,0,0,0];
    for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[0] = weeklyPoints[0] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[0] = weeklyPoints[0] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[0] = weeklyPoints[0] + 3;
                }
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 6;
                        weeklyNegative[0] = weeklyNegative[0] + 2;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 3;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 8;
                        weeklyNegative[0] = weeklyNegative[0] + 3;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 4;
                        weeklyNegative[0] = weeklyNegative[0] + 1;
                    }else if(j === 2){
                        weeklyPoints[0] = weeklyPoints[0] + 1;
                        weeklyNegative[0] = weeklyNegative[0] - 1;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[1] = weeklyPoints[1] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[1] = weeklyPoints[1] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[1] = weeklyPoints[1] + 3;
                }
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 6;
                        weeklyNegative[1] = weeklyNegative[1] + 2;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 3;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 8;
                        weeklyNegative[1] = weeklyNegative[1] + 3;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 4;
                        weeklyNegative[1] = weeklyNegative[1] + 1;
                    }else if(j === 2){
                        weeklyPoints[1] = weeklyPoints[1] + 1;
                        weeklyNegative[1] = weeklyNegative[1] - 1;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[2] = weeklyPoints[2] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[2] = weeklyPoints[2] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[2] = weeklyPoints[2] + 3;
                }
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 6;
                        weeklyNegative[2] = weeklyNegative[2] + 2;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 3;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 8;
                        weeklyNegative[2] = weeklyNegative[2] + 3;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 4;
                        weeklyNegative[2] = weeklyNegative[2] + 1;
                    }else if(j === 2){
                        weeklyPoints[2] = weeklyPoints[2] + 1;
                        weeklyNegative[2] = weeklyNegative[2] - 1;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[3] = weeklyPoints[3] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[3] = weeklyPoints[3] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[3] = weeklyPoints[3] + 3;
                }
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 6;
                        weeklyNegative[3] = weeklyNegative[3] + 2;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 3;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 8;
                        weeklyNegative[3] = weeklyNegative[3] + 3;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 4;
                        weeklyNegative[3] = weeklyNegative[3] + 1;
                    }else if(j === 2){
                        weeklyPoints[3] = weeklyPoints[3] + 1;
                        weeklyNegative[3] = weeklyNegative[3] - 1;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[4] = weeklyPoints[4] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[4] = weeklyPoints[4] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[4] = weeklyPoints[4] + 3;
                }
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 6;
                        weeklyNegative[4] = weeklyNegative[4] + 2;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 3;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 8;
                        weeklyNegative[4] = weeklyNegative[4] + 3;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 4;
                        weeklyNegative[4] = weeklyNegative[4] + 1;
                    }else if(j === 2){
                        weeklyPoints[4] = weeklyPoints[4] + 1;
                        weeklyNegative[4] = weeklyNegative[4] - 1;
                    }else{
                        weeklyNegative[4] = weeklyNegative[4] - 3;
                    }
                }
            }else if(gameData[i][j].name === "James" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[5] = weeklyKos[5] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[5] = weeklyPoints[5] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[5] = weeklyPoints[5] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[5] = weeklyPoints[5] + 3;
                }
                weeklyGames[5] ++;
                weeklyPlace[5] = weeklyPlace[5] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 6;
                        weeklyNegative[5] = weeklyNegative[5] + 2;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 3;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 8;
                        weeklyNegative[5] = weeklyNegative[5] + 3;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 4;
                        weeklyNegative[5] = weeklyNegative[5] + 1;
                    }else if(j === 2){
                        weeklyPoints[5] = weeklyPoints[5] + 1;
                        weeklyNegative[5] = weeklyNegative[5] - 1;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Craig" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[6] = weeklyKos[6] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[6] = weeklyPoints[6] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[6] = weeklyPoints[6] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[6] = weeklyPoints[6] + 3;
                }
                weeklyGames[6] ++;
                weeklyPlace[6] = weeklyPlace[6] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 6;
                        weeklyNegative[6] = weeklyNegative[6] + 2;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 3;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 8;
                        weeklyNegative[6] = weeklyNegative[6] + 3;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 4;
                        weeklyNegative[6] = weeklyNegative[6] + 1;
                    }else if(j === 2){
                        weeklyPoints[6] = weeklyPoints[6] + 1;
                        weeklyNegative[6] = weeklyNegative[6] - 1;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 3;
                    }
                }
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[4] ++;
        }else if(gameData[i][0].name === "James" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[5] ++;
        }else if(gameData[i][0].name === "Craig" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[6] ++;
        }
    }
    for(var i=0; i < 7; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
            weeklyPoints[i] = (weeklyPoints[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
      date: newDate,
      weeklyWins: weeklyWins,
      weeklyAvg: weeklyAvg,
      weeklyKos: weeklyKos,
      weeklyPoints: weeklyPoints,
      weeklyNegative: weeklyNegative
    });
  }
  previousDate(){
    weeklyWins = [0,0,0,0,0,0,0];
    weeklyKos = [0,0,0,0,0,0,0];
    weeklyGames = [0,0,0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0,0,0];
    weeklyPoints = [0,0,0,0,0,0,0];
    weeklyNegative = [0,0,0,0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex > 0){
      var newDate = dates[dateIndex - 1];
      for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[0] = weeklyPoints[0] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[0] = weeklyPoints[0] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[0] = weeklyPoints[0] + 3;
                }
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 6;
                        weeklyNegative[0] = weeklyNegative[0] + 2;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 3;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 8;
                        weeklyNegative[0] = weeklyNegative[0] + 3;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 4;
                        weeklyNegative[0] = weeklyNegative[0] + 1;
                    }else if(j === 2){
                        weeklyPoints[0] = weeklyPoints[0] + 1;
                        weeklyNegative[0] = weeklyNegative[0] - 1;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[1] = weeklyPoints[1] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[1] = weeklyPoints[1] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[1] = weeklyPoints[1] + 3;
                }
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 6;
                        weeklyNegative[1] = weeklyNegative[1] + 2;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 3;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 8;
                        weeklyNegative[1] = weeklyNegative[1] + 3;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 4;
                        weeklyNegative[1] = weeklyNegative[1] + 1;
                    }else if(j === 2){
                        weeklyPoints[1] = weeklyPoints[1] + 1;
                        weeklyNegative[1] = weeklyNegative[1] - 1;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[2] = weeklyPoints[2] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[2] = weeklyPoints[2] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[2] = weeklyPoints[2] + 3;
                }
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 6;
                        weeklyNegative[2] = weeklyNegative[2] + 2;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 3;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 8;
                        weeklyNegative[2] = weeklyNegative[2] + 3;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 4;
                        weeklyNegative[2] = weeklyNegative[2] + 1;
                    }else if(j === 2){
                        weeklyPoints[2] = weeklyPoints[2] + 1;
                        weeklyNegative[2] = weeklyNegative[2] - 1;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[3] = weeklyPoints[3] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[3] = weeklyPoints[3] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[3] = weeklyPoints[3] + 3;
                }
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 6;
                        weeklyNegative[3] = weeklyNegative[3] + 2;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 3;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 8;
                        weeklyNegative[3] = weeklyNegative[3] + 3;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 4;
                        weeklyNegative[3] = weeklyNegative[3] + 1;
                    }else if(j === 2){
                        weeklyPoints[3] = weeklyPoints[3] + 1;
                        weeklyNegative[3] = weeklyNegative[3] - 1;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[4] = weeklyPoints[4] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[4] = weeklyPoints[4] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[4] = weeklyPoints[4] + 3;
                }
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 6;
                        weeklyNegative[4] = weeklyNegative[4] + 2;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 3;
                    }else{
                        weeklyNegative[4] = weeklyNegative[4] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 8;
                        weeklyNegative[4] = weeklyNegative[4] + 3;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 4;
                        weeklyNegative[4] = weeklyNegative[4] + 1;
                    }else if(j === 2){
                        weeklyPoints[4] = weeklyPoints[4] + 1;
                        weeklyNegative[4] = weeklyNegative[4] - 1;
                    }else{
                        weeklyNegative[4] = weeklyNegative[4] - 3;
                    }
                }
            }else if(gameData[i][j].name === "James" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[5] = weeklyKos[5] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[5] = weeklyPoints[5] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[5] = weeklyPoints[5] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[5] = weeklyPoints[5] + 3;
                }
                weeklyGames[5] ++;
                weeklyPlace[5] = weeklyPlace[5] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 6;
                        weeklyNegative[5] = weeklyNegative[5] + 2;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 3;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 8;
                        weeklyNegative[5] = weeklyNegative[5] + 3;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 4;
                        weeklyNegative[5] = weeklyNegative[5] + 1;
                    }else if(j === 2){
                        weeklyPoints[5] = weeklyPoints[5] + 1;
                        weeklyNegative[5] = weeklyNegative[5] - 1;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Craig" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[6] = weeklyKos[6] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[6] = weeklyPoints[6] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[6] = weeklyPoints[6] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[6] = weeklyPoints[6] + 3;
                }
                weeklyGames[6] ++;
                weeklyPlace[6] = weeklyPlace[6] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 6;
                        weeklyNegative[6] = weeklyNegative[6] + 2;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 3;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 8;
                        weeklyNegative[6] = weeklyNegative[6] + 3;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 4;
                        weeklyNegative[6] = weeklyNegative[6] + 1;
                    }else if(j === 2){
                        weeklyPoints[6] = weeklyPoints[6] + 1;
                        weeklyNegative[6] = weeklyNegative[6] - 1;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 3;
                    }
                }
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[4] ++;
        }else if(gameData[i][0].name === "James" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[5] ++;
        }else if(gameData[i][0].name === "Craig" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[6] ++;
        }
    }
    for(var i=0; i < 7; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
            weeklyPoints[i] = (weeklyPoints[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
        date: newDate,
        weeklyWins: weeklyWins,
        weeklyAvg: weeklyAvg,
        weeklyKos: weeklyKos,
        weeklyPoints: weeklyPoints,
        weeklyNegative: weeklyNegative
    });
    }
  }
  nextDate(){
    weeklyWins = [0,0,0,0,0,0,0];
    weeklyKos = [0,0,0,0,0,0,0];
    weeklyGames = [0,0,0,0,0,0,0];
    weeklyPlace = [0,0,0,0,0,0,0];
    weeklyAvg = [0,0,0,0,0,0,0];
    weeklyPoints = [0,0,0,0,0,0,0];
    weeklyNegative = [0,0,0,0,0,0,0];
    var dateIndex = dates.indexOf(this.state.date);
    if(dateIndex < dates.length - 1){
      var newDate = dates[dateIndex + 1];
      for(var i=0; i < gameData.length; i++){
        for(var j=0; j < 4; j++){
            if(gameData[i][j].name === "Micah" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[0] = weeklyKos[0] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[0] = weeklyPoints[0] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[0] = weeklyPoints[0] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[0] = weeklyPoints[0] + 3;
                }
                weeklyGames[0] ++;
                weeklyPlace[0] = weeklyPlace[0] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 6;
                        weeklyNegative[0] = weeklyNegative[0] + 2;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 3;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[0] = weeklyPoints[0] + 8;
                        weeklyNegative[0] = weeklyNegative[0] + 3;
                    }else if(j === 1){
                        weeklyPoints[0] = weeklyPoints[0] + 4;
                        weeklyNegative[0] = weeklyNegative[0] + 1;
                    }else if(j === 2){
                        weeklyPoints[0] = weeklyPoints[0] + 1;
                        weeklyNegative[0] = weeklyNegative[0] - 1;
                    }else{
                        weeklyNegative[0] = weeklyNegative[0] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Tim" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[1] = weeklyKos[1] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[1] = weeklyPoints[1] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[1] = weeklyPoints[1] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[1] = weeklyPoints[1] + 3;
                }
                weeklyGames[1] ++;
                weeklyPlace[1] = weeklyPlace[1] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 6;
                        weeklyNegative[1] = weeklyNegative[1] + 2;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 3;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[1] = weeklyPoints[1] + 8;
                        weeklyNegative[1] = weeklyNegative[1] + 3;
                    }else if(j === 1){
                        weeklyPoints[1] = weeklyPoints[1] + 4;
                        weeklyNegative[1] = weeklyNegative[1] + 1;
                    }else if(j === 2){
                        weeklyPoints[1] = weeklyPoints[1] + 1;
                        weeklyNegative[1] = weeklyNegative[1] - 1;
                    }else{
                        weeklyNegative[1] = weeklyNegative[1] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Doug" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[2] = weeklyKos[2] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[2] = weeklyPoints[2] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[2] = weeklyPoints[2] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[2] = weeklyPoints[2] + 3;
                }
                weeklyGames[2] ++;
                weeklyPlace[2] = weeklyPlace[2] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 6;
                        weeklyNegative[2] = weeklyNegative[2] + 2;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 3;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[2] = weeklyPoints[2] + 8;
                        weeklyNegative[2] = weeklyNegative[2] + 3;
                    }else if(j === 1){
                        weeklyPoints[2] = weeklyPoints[2] + 4;
                        weeklyNegative[2] = weeklyNegative[2] + 1;
                    }else if(j === 2){
                        weeklyPoints[2] = weeklyPoints[2] + 1;
                        weeklyNegative[2] = weeklyNegative[2] - 1;
                    }else{
                        weeklyNegative[2] = weeklyNegative[2] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Zack" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[3] = weeklyKos[3] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[3] = weeklyPoints[3] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[3] = weeklyPoints[3] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[3] = weeklyPoints[3] + 3;
                }
                weeklyGames[3] ++;
                weeklyPlace[3] = weeklyPlace[3] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 6;
                        weeklyNegative[3] = weeklyNegative[3] + 2;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 3;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[3] = weeklyPoints[3] + 8;
                        weeklyNegative[3] = weeklyNegative[3] + 3;
                    }else if(j === 1){
                        weeklyPoints[3] = weeklyPoints[3] + 4;
                        weeklyNegative[3] = weeklyNegative[3] + 1;
                    }else if(j === 2){
                        weeklyPoints[3] = weeklyPoints[3] + 1;
                        weeklyNegative[3] = weeklyNegative[3] - 1;
                    }else{
                        weeklyNegative[3] = weeklyNegative[3] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[4] = weeklyKos[4] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[4] = weeklyPoints[4] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[4] = weeklyPoints[4] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[4] = weeklyPoints[4] + 3;
                }
                weeklyGames[4] ++;
                weeklyPlace[4] = weeklyPlace[4] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 6;
                        weeklyNegative[4] = weeklyNegative[4] + 2;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 3;
                    }else{
                        weeklyNegative[4] = weeklyNegative[4] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[4] = weeklyPoints[4] + 8;
                        weeklyNegative[4] = weeklyNegative[4] + 3;
                    }else if(j === 1){
                        weeklyPoints[4] = weeklyPoints[4] + 4;
                        weeklyNegative[4] = weeklyNegative[4] + 1;
                    }else if(j === 2){
                        weeklyPoints[4] = weeklyPoints[4] + 1;
                        weeklyNegative[4] = weeklyNegative[4] - 1;
                    }else{
                        weeklyNegative[4] = weeklyNegative[4] - 3;
                    }
                }
            }else if(gameData[i][j].name === "James" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[5] = weeklyKos[5] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[5] = weeklyPoints[5] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[5] = weeklyPoints[5] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[5] = weeklyPoints[5] + 3;
                }
                weeklyGames[5] ++;
                weeklyPlace[5] = weeklyPlace[5] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 6;
                        weeklyNegative[5] = weeklyNegative[5] + 2;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 3;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[5] = weeklyPoints[5] + 8;
                        weeklyNegative[5] = weeklyNegative[5] + 3;
                    }else if(j === 1){
                        weeklyPoints[5] = weeklyPoints[5] + 4;
                        weeklyNegative[5] = weeklyNegative[5] + 1;
                    }else if(j === 2){
                        weeklyPoints[5] = weeklyPoints[5] + 1;
                        weeklyNegative[5] = weeklyNegative[5] - 1;
                    }else{
                        weeklyNegative[5] = weeklyNegative[5] - 3;
                    }
                }
            }else if(gameData[i][j].name === "Craig" && gameData[i][5].date.getTime() === newDate){
                weeklyKos[6] = weeklyKos[6] + gameData[i][j].kos;
                if(gameData[i][j].kos >= 4 && gameData[i][j].kos < 6){
                    weeklyPoints[6] = weeklyPoints[6] + 1;
                }else if(gameData[i][j].kos >= 6 && gameData[i][j].kos < 9){
                    weeklyPoints[6] = weeklyPoints[6] + 2;
                }else if(gameData[i][j].kos >= 9){
                    weeklyPoints[6] = weeklyPoints[6] + 3;
                }
                weeklyGames[6] ++;
                weeklyPlace[6] = weeklyPlace[6] + (j + 1);
                if(gameData[i][3].character === empty){
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 6;
                        weeklyNegative[6] = weeklyNegative[6] + 2;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 3;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 2;
                    }
                }else{
                    if(j === 0){
                        weeklyPoints[6] = weeklyPoints[6] + 8;
                        weeklyNegative[6] = weeklyNegative[6] + 3;
                    }else if(j === 1){
                        weeklyPoints[6] = weeklyPoints[6] + 4;
                        weeklyNegative[6] = weeklyNegative[6] + 1;
                    }else if(j === 2){
                        weeklyPoints[6] = weeklyPoints[6] + 1;
                        weeklyNegative[6] = weeklyNegative[6] - 1;
                    }else{
                        weeklyNegative[6] = weeklyNegative[6] - 3;
                    }
                }
            }
        }
        if(gameData[i][0].name === "Micah" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[4] ++;
        }else if(gameData[i][0].name === "James" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[5] ++;
        }else if(gameData[i][0].name === "Craig" && gameData[i][5].date.getTime() === newDate){
          weeklyWins[6] ++;
        }
      }
    for(var i=0; i < 7; i++){
        if(weeklyGames[i] > 0){
            weeklyAvg[i] = (weeklyPlace[i]/weeklyGames[i]).toFixed(2);
            weeklyKos[i] = (weeklyKos[i]/weeklyGames[i]).toFixed(2);
            weeklyPoints[i] = (weeklyPoints[i]/weeklyGames[i]).toFixed(2);
        }else{}
    }
    this.setState({
      date: newDate,
      weeklyWins: weeklyWins,
      weeklyAvg: weeklyAvg,
      weeklyKos: weeklyKos,
      weeklyPoints: weeklyPoints,
      weeklyNegative: weeklyNegative
    });
    }
  }
  listGames () {
    var date = this.state.date;
    const numberOfGames = gameData;
    const listGames = numberOfGames.map((game, index) => {
      if(game[5].date.getTime() === date) {
        return <Game key={index} id={index} firstPlace={game[0].name} second={game[1].name} third={game[2].name} fourth={game[3].name} character1={game[0].character} character2={game[1].character} character3={game[2].character} character4={game[3].character} firstKos={game[0].kos} secondKos={game[1].kos} thirdKos={game[2].kos} fourthKos={game[3].kos} stage={game[4].stage} />
      }
    }
    );
    return (
      <div>{listGames}</div>
    )
  }
  render(){
    var displayDate = new Date(this.state.date).toString();
    var splitDate = displayDate.split(" ");
    var finalDate = splitDate[1] + " " + splitDate[2] + " " + splitDate[3];
    return (
      <div className="row rankings">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-offset-1 col-xs-1 col-md-offset-4 col-md-1"><span onClick={this.previousDate} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
            <div className="col-xs-8 col-md-2" id="weeklyDate">{finalDate}</div>
            <div className="col-xs-1 col-md-1"><span onClick={this.nextDate} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
          </div>
          <div className="row">
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-offset-3 col-md-1 weeklyName">Micah</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">Tim</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">Doug</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">Zack</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">James</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">Craig</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">Betsy</div> : null}
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-2 weeklyName">Wins</div>
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[0]}</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[1]}</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[2]}</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[3]}</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[5]}</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[6]}</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyWins[4]}</div> : null}
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-2 weeklyName">Avg Place</div>
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[0]}</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[1]}</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[2]}</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[3]}</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[5]}</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[6]}</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyAvg[4]}</div> : null}
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-2 weeklyName">Avg Points</div>
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[0]}</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[1]}</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[2]}</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[3]}</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[5]}</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[6]}</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyPoints[4]}</div> : null}
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-2 weeklyName">Avg Kos</div>
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[0]}</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[1]}</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[2]}</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[3]}</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[5]}</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[6]}</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyKos[4]}</div> : null}
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-2 weeklyName">Negatives</div>
            {this.state.weeklyAvg[0] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[0]}</div> : null}
            {this.state.weeklyAvg[1] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[1]}</div> : null}
            {this.state.weeklyAvg[2] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[2]}</div> : null}
            {this.state.weeklyAvg[3] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[3]}</div> : null}
            {this.state.weeklyAvg[5] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[5]}</div> : null}
            {this.state.weeklyAvg[6] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[6]}</div> : null}
            {this.state.weeklyAvg[4] ? <div className="col-xs-1 col-md-1 weeklyName">{this.state.weeklyNegative[4]}</div> : null}
          </div>
          <div className="row" id="listGamesRow">
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
          fighterStats: [fighterStatsMicah, fighterStatsTim, fighterStatsDoug, fighterStatsZack, fighterStatsBetsy, fighterStatsJames, fighterStatsCraig],
          fighterName: " ",
          fighterImage: smash
        }
    this.findFighterData = this.findFighterData.bind(this);
    }   
    findFighterData(fighter){
        fighterStatsMicah = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsTim = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsDoug = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsZack = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsBetsy = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsJames = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsCraig = {games: 0, wins: 0, place: 0, kos: 0};
        fighterStatsNick = {games: 0, wins: 0, place: 0, kos: 0};
        var fighter = fighter;
        var fighterImage = fighter;
        for(var i=0; i < gameData.length; i++){
            for(var j=0; j< 4; j++){
                if(gameData[i][j].character === fighter){
                    var playerFighterArray = eval("fighterStats" + gameData[i][j].name);
                    playerFighterArray.games ++;
                    if(j === 0){
                        playerFighterArray.wins ++;
                    }else{}
                    playerFighterArray.place = playerFighterArray.place + (j+1);
                    playerFighterArray.kos = playerFighterArray.kos + gameData[i][j].kos;
                }else{}
            }
        }
        var fighterData = [fighterStatsMicah, fighterStatsTim, fighterStatsDoug, fighterStatsZack, fighterStatsBetsy, fighterStatsJames, fighterStatsCraig];
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
    listFighters(){
        const numberOfFighters = ultimateFighters;
        const listFighters = numberOfFighters.map((fighter, index) => {
            return <UltimateFighter key={index} id={index} fighter={fighter.name} click={this.findFighterData} />
        });
        return (
          <div className="row" id="fighterList">{listFighters}</div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row" id="mainFighterStatsTitle">Fighter Stats</div>
                    {this.listFighters()}
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
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">Betsy</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[4].kos}</div>
                    </div>
                    <div className="row playerRow">
                        <div className="col-xs-2 fighterStatsPlayer">James</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[5].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[5].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[5].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[5].kos}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 fighterStatsPlayer">Craig</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[6].games}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[6].wins}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[6].place}</div>
                        <div className="col-xs-2 statsNumber">{this.state.fighterStats[6].kos}</div>
                    </div>
                </div>
            </div>
        )
    }
}

class UltimateFighter extends React.Component {
    render(){
        return(
            <img src={this.props.fighter} alt="fighter" onClick={() => {this.props.click(this.props.fighter)}} className="ultimateFighterIcon" />
        )
    }
}

export default App;
