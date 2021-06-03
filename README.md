# Pomodoro Timer

## Project setup

Follow the instructions below to get this project up and running on your own machine:

Run `npm i`

To run the tests, you can run the following command: 

`npm test`

You can run the application using the following command:

`npm start`

To stop the server from running, you can press `Ctrl + C`

## Project Description 

The Pomodoro technique is a time-management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer that Cirillo used as a university student.

## Quick-start : Usage Overview

- Set the focus duration (default to 25 minutes, no less than 5 or more than 60).
- Set the break duration (default to 5 minutes, no less than 1 or more than 15).
- When the user clicks the "play" button, the timer starts.
- When the focus time expires, an alarm plays and then the break timer starts.
- When the break time expires, the alarm plays again and then the focus timer starts.

## Detailed instructions for use

### Initial Screen

The initial screen lets the user set the length of the focus and break and break sessions.

< Initial Screen img >

The "stop" button is disabled on the initial screen because the user has not yet started the timer.

When the user clicks the "play" button, the timer will always start a new focus session.

### Active Session Screen
After the user clicks the "play" button, the buttons to change the focus and break duration are disabled, and the session timer appears.

< Active Session Screen img>

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

### Paused Session Screen

If the user clicks the "pause" button, "paused" appears below the time remaining.

< Paused Session Screen img >

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

### Stopping a session

Stopping a session returns the application to the initial screen and the user is able to change the focus and break duration.

Clicking the "play" button will always start a new focus session.

## Technology

### Built with:

- This application uses Bootstrap 4 for styling and Open-Iconic icons for icons.
- React; Created with create-react-app


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.
