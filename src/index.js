'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import scrollTo from './modules/scrollTo';
import slider from './modules/slider';
import changePhotoTeam from './modules/changePhotoTeam';
import calculator from './modules/calculator';
import validateFormInputs from './modules/validateFormInputs';
import sendForm from './modules/sendForm';

//Timer
countTimer('10 may 2020');
//Menu
toggleMenu();
//Popup
togglePopUp();
//Tabs
tabs();
//Animation
scrollTo();
//Slider
slider();
//Our taem
changePhotoTeam();
//Calculator
calculator(100);
//Validate form inputs
validateFormInputs();
//Send form
sendForm();