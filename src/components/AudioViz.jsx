import React, { useEffect, useRef, useState } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';

import audio from '../assets/vidimus_stellam.wav';

const AudioViz = () => {
  return (
    <SpectrumVisualizer
        audio={audio}
        theme={SpectrumVisualizerTheme.line}
        colors={['white']}
        iconsColor="white"
        backgroundColor="transparent"
        showMainActionIcon
        showLoaderIcon
        mirror={true}
        radius={20}
        barWidth={5}
        highFrequency={8000}
        onEvent={(e) => console.log(e)}
    />      
  )
}

export default AudioViz