import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect } from 'react';
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const Key=({play,sound,setBeat})=>{
  const handleKey=(event)=>{
    if(event.keyCode===sound.keyCode){
      play(sound.keyCode);
      setBeat(sound.id);
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown",handleKey)
    setBeat("")
    
  }, []);
  return (<button className=' drum-pad btn  p-4  my-2 btn-light border-dark border-2 fw-bold mx-2 col-3' id="drum-pad" onClick={()=>play(sound.keyCode)}>
  <audio className="clip" id={sound.keyCode} src={sound.url}/>
  {sound.keyTrigger}
</button>)
}
const Keyboard=({play,note,setBeat})=>{
return note.map(sound=><Key play={play} sound={sound} setBeat={setBeat}/>);
}
const Control=({changeSoundGroup,name})=>{
 return (<div className='control'>
    <button className='btn btn-light border-warning border-5  fw-bold mt-5 mx-5' onClick={changeSoundGroup}>change sound</button>
    <div className='bg-light rounded-pill text-center fw-bold p-2 my-1'>{name}</div>
 </div>);
}
const Display=({name,beat})=>{
return (<div className='bg-light rounded-pill text-center fw-bold p-2 '>{beat}</div>);

}

const App=()=>{
  const [note, setNote] = React.useState(bankOne);
  const [name,setName]= React.useState("DRUM");
  const [beat,setBeat]=React.useState("");
  const play =(keyCode)=>{
    
    const audio=document.getElementById(keyCode);
    audio.currentTime=0;
    audio.play();
  }
  
  const changeSoundGroup=()=>{
    if(note===bankOne){
      setNote(bankTwo)
      setName("PIANO")
    }
    else{
        setNote(bankOne)
        setName("DRUM")
    }
    }
  return (<div className='container    w-50 h-50  bg-warning  rounded' id="drum-machine">
    <Keyboard play={play} note={note} setBeat={setBeat}/>
    <div id="display">
    <Control changeSoundGroup={changeSoundGroup} name={name}/>
    <Display  beat={beat} />
    </div>

  </div>);
}


export default App;
