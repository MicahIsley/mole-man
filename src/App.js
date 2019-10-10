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
import luigi from './assets/luigi.png';
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
import snake from './assets/snake.jpg';
import sonic from './assets/sonic.jpg';
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
  ],[
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
  ],[
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
  ]
];

var dates = ["Sept 11 2019", "Sept 18 2019", "Sept 25 2019", "Oct 9 2019"];

var micah = 0;
var tim = 0;
var doug = 0;
var zack = 0;
var betsy = 0;
var weeklyWins = [0,0,0,0,0];
var playerkos = [0,0,0,0,0];

var playerStats = [
 {  name: "Micah",
    mostPlayed: [{character: bowserjr, number: 6}, {character: incineroar, number: 4}, {character: iceclimbers, number: 3}],
    averagePlace: 2.31,
    mostWins: [bowserjr, 3]
  },
  { name: "Tim",
    mostPlayed: [{character: ness, number: 13}, {character: samus, number: 8}, {character: pacman, number: 4}],
    averagePlace: 2.25,
    mostWins: [ness, 3]
  },
  { name: "Doug",
    mostPlayed: [{character: samus, number: 4}, {character: luigi, number: 2}, {character: marth, number: 2}],
    averagePlace: 2.63,
    mostWins: [samus, 2]
  },
  { name: "Zack",
    mostPlayed: [{character: drmario, number: 5}, {character: corrin, number: 5}, {character: yoshi, number: 5}],
    averagePlace: 1.75,
    mostWins: [corrin, 3]
  },
  { name: "Betsy",
    mostPlayed: [{character: bowser, number: 1}, {character: villager, number: 1}],
    averagePlace: 1,
    mostWins: [bowser, 1]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      micah: 0,
      tim: 0,
      doug: 0,
      zack: 0,
      betsy: 0,
      weekly: false,
      overall: true,
      stats: false
    }
  this.goToWeekly = this.goToWeekly.bind(this);
  this.goToOverall = this.goToOverall.bind(this);
  this.goToStats = this.goToStats.bind(this);
  }
  componentDidMount(){
    for(var i=0; i < gameData.length; i++){
      if(gameData[i][0].name === "Micah"){
        micah ++;
      }else if(gameData[i][0].name === "Tim"){
        tim ++;
      }else if(gameData[i][0].name === "Doug"){
        doug ++;
      }else if(gameData[i][0].name === "Zack"){
        zack ++;
      }else if(gameData[i][0].name === "Betsy"){
        betsy ++;
      }
      for(var j=0; j< 4; j++){
        if(gameData[i][j].name === "Micah"){
          playerkos[0] = playerkos[0] + gameData[i][j].kos;
        }else if(gameData[i][j].name === "Tim"){
          playerkos[1] = playerkos[1] + gameData[i][j].kos;
        }else if(gameData[i][j].name === "Doug"){
          playerkos[2] = playerkos[2] + gameData[i][j].kos;
        }else if(gameData[i][j].name === "Zack"){
          playerkos[3] = playerkos[3] + gameData[i][j].kos;
        }else if(gameData[i][j].name === "Betsy"){
          playerkos[4] = playerkos[4] + gameData[i][j].kos;
        }
      }
    }
    this.setState({
      micah: micah,
      tim: tim,
      doug: doug,
      zack: zack,
      betsy: betsy
    });
  }
  goToWeekly(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    document.getElementById("Last Week").style.background = "darkblue";
    this.setState({
      weekly: true,
      overall: false,
      stats: false
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
      stats: false
    });
  }
  goToStats(){
    const x = document.getElementsByClassName("tab");
    for (var i=0; i < x.length; i ++ ){
      x[i].style.background="#0547ff";
    }
    document.getElementById("Individual").style.background = "darkblue";
    this.setState({
      weekly: false,
      overall: false,
      stats: true
    });
  }
  render(){
    return (
      <div className="App">
        <div className="row title">
          Super Smash Rankings
        </div>
        <div className="row RankingTabs">
          <Tab name="Overall" handleClick={this.goToOverall} />
          <Tab name="Last Week" handleClick={this.goToWeekly} />
          <Tab name="Individual" handleClick={this.goToStats} />
        </div>
        {this.state.weekly ? <Weekly micah={this.state.micah} tim={this.state.tim} doug={this.state.doug} zack={this.state.zack} /> : null }
        {this.state.overall ? <Overall betsy={this.state.betsy} micah={this.state.micah} tim={this.state.tim} doug={this.state.doug} zack={this.state.zack} /> : null }
        {this.state.stats ? <Stats /> : null }
      </div>
    );
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
  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    var overallWins = [this.props.micah, this.props.tim, this.props.doug, this.props.zack, this.props.betsy];
    const options = {
      title: {
        text: "Wins"
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
                    { label: "Micah",  y: overallWins[0], color: "#ffc233"  },
                    { label: "Tim", y: overallWins[1], color: "#9228de" },
                    { label: "Doug", y: overallWins[2], color: "#70d115"  },
                    { label: "Zack",  y: overallWins[3], color: "#ff78f1"  },
                    { label: "Betsy", y: overallWins[4], color: "red"}
                ]
       }]
   }
    return (
      <div className="overall">
        <div className="row">
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
      name: "Micah",
      mostPlayed: [],
      averagePlace: 0,
      mostWins: 0,
      totalKos: 0
    }
  this.nextName = this.nextName.bind(this);
  this.previousName = this.previousName.bind(this);
  this.listMostPlayed = this.listMostPlayed.bind(this);
  }
  componentDidMount() {
    this.setState({
      mostPlayed: playerStats[0].mostPlayed,
      averagePlace: playerStats[0].averagePlace,
      mostWins: playerStats[0].mostWins,
      totalKos: playerkos[0]
    });
  }
  listMostPlayed () {
    const numberOfMostPlayed = this.state.mostPlayed;
    console.log(numberOfMostPlayed);
    const listMostPlayed = numberOfMostPlayed.map((character, index) => {
      return <MostPlayed key={index} id={index} character={character.character} number={character.number} />
    }
    );
    return (
      <div>{listMostPlayed}</div>
    )
  }
  nextName() {
    var nameArray = ["Micah", "Tim", "Doug", "Zack", "Betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var newMostPlayed = [];
    var averagePlace = playerStats[nameIndex + 1].averagePlace;
    var mostWins = playerStats[nameIndex + 1].mostWins;
    for(var i = 0; i < playerStats[nameIndex + 1].mostPlayed.length; i ++){
      newMostPlayed.push(playerStats[nameIndex + 1].mostPlayed[i]);
    }
    if(nameIndex < nameArray.length - 1){
      var newName = nameIndex + 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: newMostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: playerkos[newName]
      });
    }
  }
  previousName() {
    var nameArray = ["Micah", "Tim", "Doug", "Zack", "Betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    var newMostPlayed = [];
    var averagePlace = playerStats[nameIndex - 1].averagePlace;
    var mostWins = playerStats[nameIndex - 1].mostWins;
    for(var i = 0; i < playerStats[nameIndex - 1].mostPlayed.length; i ++){
      newMostPlayed.push(playerStats[nameIndex - 1].mostPlayed[i]);
    }
    if(nameIndex > 0){
      console.log("nameIndex" + nameIndex);
      var newName = nameIndex - 1;
      this.setState({
        name: nameArray[newName],
        mostPlayed: newMostPlayed,
        averagePlace: averagePlace,
        mostWins: mostWins,
        totalKos: playerkos[newName]
      });
    }
  }
  render(){
    return (
      <div className="stats">
        <div className="row">
          <div className="col-xs-offset-4 col-xs-1"><span onClick={this.previousName} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
          <div className="col-xs-2" id="statsName">{this.state.name}</div>
          <div className="col-xs-1"><span onClick={this.nextName} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
        </div>
        <div className="row">
          <div className="col-xs-4 statsTitle">Most Played Character</div>
          <div className="col-xs-4 statsTitle">Average Finish</div>
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
      date: "Sept 11 2019",
      weeklyWins: [0,0,0,0,0]
    }
  this.nextDate = this.nextDate.bind(this);
  this.previousDate = this.previousDate.bind(this);
  }
  componentDidMount() {
    var newDate = this.state.date;
    for(var i=0; i < gameData.length; i++){
        if(gameData[i][0].name === "Micah" && gameData[i].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i].date === newDate){
          weeklyWins[3] ++;
        }else if(gameData[i][0].name === "Betsy" && gameData[i].date === newDate){
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
        if(gameData[i][0].name === "Micah" && gameData[i].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i].date === newDate){
          weeklyWins[3] ++;
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
        if(gameData[i][0].name === "Micah" && gameData[i].date === newDate){
          weeklyWins[0] ++;
        }else if(gameData[i][0].name === "Tim" && gameData[i].date === newDate){
          weeklyWins[1] ++;
        }else if(gameData[i][0].name === "Doug" && gameData[i].date === newDate){
          weeklyWins[2] ++;
        }else if(gameData[i][0].name === "Zack" && gameData[i].date === newDate){
          weeklyWins[3] ++;
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
        return <Game key={index} id={index} firstPlace={game[0].name} second={game[1].name} third={game[2].name} fourth={game[3].name} character1={game[0].character} character2={game[1].character} character3={game[2].character} character4={game[3].character} />
      }
    }
    );
    return (
      <div>{listGames}</div>
    )
  }
  render(){
    return (
      <div className="rankings">
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
    )
  }
}

class Game extends React.Component {
  render(){
    return (
      <div className="col-xs-12 col-md-6 gameRow">
        <div className="row">
          <div className="col-xs-2 gameNumber">{this.props.id}</div>
          <div className="displayBox col-xs-2">
            <div className="row">
              <img className="fighterIcon" src={this.props.character1} alt="character1" />
              <div className="col-xs-12 playerName">
                <div className="row">{this.props.firstPlace}</div>
                <div className="row place">1</div>
              </div>
            </div>
          </div>
          <div className="displayBox col-xs-2">
            <div className="row">
              <img className="fighterIcon" src={this.props.character2} alt="character2" />
              <div className="col-xs-12 playerName">
                <div className="row">{this.props.second}</div>
                <div className="row place">2</div>
              </div>
            </div>
          </div>
          <div className="displayBox col-xs-2">
            <div className="row">
              <img className="fighterIcon" src={this.props.character3} alt="character3" />
              <div className="col-xs-12 playerName">
                <div className="row">{this.props.third}</div>
                <div className="row place">3</div>
              </div>
            </div>
          </div>
          <div className="displayBox col-xs-2">
            <div className="row">
              <img className="fighterIcon" src={this.props.character4} alt="character4" />
              <div className="playerName">
                <div className="row">{this.props.fourth}</div>
                <div className="row place">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
