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
//var CanvasJSReact = require('./assets/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const gameData = [
   {
    0: {name: "Micah", character: bowserjr},
    1: {name: "Tim", character: samus},
    2: {name: "Doug", character: sheik},
    3: {name: "Zack", character: hero},
    stage: "Custom",
    date: "Sept 11 2019"
  },{
    0: {name: "Doug", character: banjo},
    1: {name: "Zack", character: banjo},
    2: {name: "Micah", character: ridley},
    3: {name: "Tim", character: unknown},
    stage: "Custom",
    date: "Sept 11 2019"
  },{
    0: {name: "Micah", character: donkeykong},
    1: {name: "Zack", character: hero},
    2: {name: "Micah", character: unknown},
    3: {name: "Tim", character: unknown},
    stage: "Battlefield",
    date: "Sept 11 2019"
  },{
    0: {name: "Tim", character: samus},
    1: {name: "Micah", character: ness},
    2: {name: "Doug", character: link},
    3: {name: "Zack", character: hero},
    stage: "Battlefield",
    date: "Sept 11 2019"
  },{
    0: {name: "Tim", character: bowserjr},
    1: {name: "Micah", character: ness},
    2: {name: "Doug", character: link},
    3: {name: "Zack", character: hero},
    stage: "Battlefield",
    date: "Sept 11 2019"
  },{
    0: {name: "Zack", character: unknown},
    1: {name: "Micah", character: unknown},
    2: {name: "Doug", character: unknown},
    3: {name: "Tim", character: unknown},
    stage: "Battlefield",
    date: "Sept 11 2019"
  },{
    0: {name: "Zack", character: drmario},
    1: {name: "Tim", character: ness},
    2: {name: "Micah", character: peach},
    3: {name: "Doug", character: samus},
    stage: "custom",
    date: "Sept 11 2019"
  },{
    0: {name: "doug", character: samus},
    1: {name: "Tim", character: ness},
    2: {name: "Zack", character: drmario},
    3: {name: "Micah", character: peach},
    stage: "Custom",
    date: "Sept 11 2019"
  },{
    0: {name: "Doug", character: luigi},
    1: {name: "Zack", character: drmario},
    2: {name: "Tim", character: ness},
    3: {name: "Micah", character: incineroar},
    stage: "Mario Maker",
    date: "Sept 11 2019"
  },{
    0: {name: "Tim", character: samus},
    1: {name: "Doug", character: kirby},
    2: {name: "Zack", character: drmario},
    3: {name: "Micah", character: incineroar},
    stage: "Corneria",
    date: "Sept 11 2019"
  },{
    0: {name: "Micah", character: bowserjr},
    1: {name: "Tim", character: samus},
    2: {name: "Doug", character: unknown},
    3: {name: "Zack", character: unknown},
    stage: "Spiral Mountain",
    date: "Sept 11 2019"
  },{
    0: {name: "Micah", character: banjo},
    1: {name: "Doug", character: captainfalcon},
    2: {name: "Tim", character: cloud},
    3: {name: " " , character: empty},
    stage: "Custom",
    date: "Sept 18 2019"
  },{
    0: {name: "Micah", character: darkpit},
    1: {name: "Tim", character: pacman},
    2: {name: "Doug", character: zerosuitsamus},
    3: {name: "", character: empty},
    stage: "Peach's Castle",
    date: "Sept 18 2019"
  },{
    0: {name: "Betsy", character: bowser},
    1: {name: "Tim", character: pacman},
    2: {name: "Doug", character: zerosuitsamus},
    3: {name: "", character: empty},
    stage: "Battlefield",
    date: "Sept 18 2019"
  },{
    0: {name: "Micah", character: iceclimbers},
    1: {name: "Tim", character: samus},
    2: {name: "Doug", character: toonlink},
    3: {name: "", character: empty},
    stage: "Battlefield",
    date: "Sept 18 2019"
  },{
    0: {name: "Tim", character: samus},
    1: {name: "Micah", character: lucario},
    2: {name: "Doug", character: samus},
    3: {name: "", character: empty},
    stage: "Battlefield",
    date: "Sept 18 2019"
  },{
    0: {name: "Tim", character: ness},
    1: {name: "Doug", character: marth},
    2: {name: "Micah", character: miiswordfighter},
    3: {name: "", character: empty},
    stage: "Battlefield",
    date: "Sept 18 2019"
  }
];

var dates = ["Sept 11 2019", "Sept 18 2019", "Sept 25 2019"];

var micah = 0;
var tim = 0;
var doug = 0;
var zack = 0;
var weeklyWins = [0,0,0,0];

var playerStats = [
  micah: {
    mostPlayed: "",
    averagePlace: "",
    mostWins: "",
    kos: 0
  },
  tim: {
    mostPlayed: "",
    averagePlace: "",
    mostWins: "",
    kos: 0
  },
  doug: {
    mostPlayed: "",
    averagePlace: "",
    mostWins: "",
    kos: 0
  },
  zack: {
    mostPlayed: "",
    averagePlace: "",
    mostWins: "",
    kos: 0
  },
  besty: {
    mostPlayed: "",
    averagePlace: "",
    mostWins: "",
    kos: 0
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
      }
    }
    this.setState({
      micah: micah,
      tim: tim,
      doug: doug,
      zack: zack
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
        {this.state.overall ? <Overall micah={this.state.micah} tim={this.state.tim} doug={this.state.doug} zack={this.state.zack} /> : null }
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
    var overallWins = [this.props.micah, this.props.tim, this.props.doug, this.props.zack];
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
                    { label: "Zack",  y: overallWins[3], color: "#ff78f1"  }
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
      mostPlayed: bowserjr
    }
  this.nextName = this.nextName.bind(this);
  this.previousName = this.previousName.bind(this);
  }
  componentDidMount(){
    for(var i=0; i < gameData.length; i++){

    }
  }
  nextName() {
    var nameArray = ["Micah", "Tim", "Doug", "Zack", "Betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    if(nameIndex < nameArray.length - 1){
      var newName = nameIndex + 1;
      this.setState({
        name: nameArray[newName]
      });
    }
  }
  previousName() {
    var nameArray = ["Micah", "Tim", "Doug", "Zack", "Betsy"];
    var nameIndex = nameArray.indexOf(this.state.name);
    if(nameIndex > 0){
      console.log("nameIndex" + nameIndex);
      var newName = nameIndex - 1;
      console.log("newName" + newName);
      this.setState({
        name: nameArray[newName]
      });
    }
  }
  render(){
    return (
      <div className="stats">
        <div>Stats Page</div>
        <div className="row">
          <div className="col-xs-offset-4 col-xs-1"><span onClick={this.previousName} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
          <div className="col-xs-2" id="statsName">{this.state.name}</div>
          <div className="col-xs-1"><span onClick={this.nextName} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
        </div>
        <div className="row">
          <div className="col-xs-3">Most Played Character</div>
          <div className="col-xs-3">Average Finish</div>
          <div className="col-xs-3">Most wins</div>
          <div className="col-xs-3">KO'S</div>
        </div>
        <div className="row">
          <div className="col-xs-3"><img className="fighterIcon" src={this.state.mostPlayed} alt="mostPlayed" /></div>
        </div>
      </div>
    )
  }
}

class Weekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "Sept 11 2019",
      weeklyWins: [0,0,0,0]
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
      if(game.date === this.state.date) {
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
          <div className="col-xs-offset-4 col-xs-1"><span onClick={this.previousDate} className="arrowButton glyphicon glyphicon-chevron-left" /></div>
          <div className="col-xs-2" id="weeklyDate">{this.state.date}</div>
          <div className="col-xs-1"><span onClick={this.nextDate} className="arrowButton glyphicon glyphicon-chevron-right" /></div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2 weeklyName">Micah: {this.state.weeklyWins[0]}</div>
          <div className="col-xs-2 weeklyName">Tim: {this.state.weeklyWins[1]}</div>
          <div className="col-xs-2 weeklyName">Doug: {this.state.weeklyWins[2]}</div>
          <div className="col-xs-2 weeklyName">Zack: {this.state.weeklyWins[3]}</div>
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
      <div className="col-xs-6">
        <div className="row">
          <div className="gameNumber col-xs-2">{this.props.id + 1}</div>
          <div className="displayBox col-xs-2"><div className="row">{this.props.firstPlace}</div><div className="row"><img className="fighterIcon" src={this.props.character1} alt="character1" /><div className="place">1</div></div> </div>
          <div className="displayBox col-xs-2"><div className="row">{this.props.second}</div><div className="row"><img className="fighterIcon" src={this.props.character2} alt="character2" /><div className="place">1</div></div> </div>
          <div className="displayBox col-xs-2"><div className="row">{this.props.third}</div><div className="row"><img className="fighterIcon" src={this.props.character3} alt="character3" /><div className="place">1</div></div> </div>
          <div className="displayBox col-xs-2"><div className="row">{this.props.fourth}</div><div className="row"><img className="fighterIcon" src={this.props.character4} alt="character4" /><div className="place">1</div></div> </div>
        </div>
      </div>
    )
  }
}

export default App;
