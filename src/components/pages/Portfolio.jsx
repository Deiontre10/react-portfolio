import React from 'react';
import Project from './ProjectCard';
import sellout from '../../images/sellout.png';
import melum from '../../images/melum.png';
import noteTaker from '../../images/note-taker.png';
import techHive from '../../images/tech-hive.png';
import employeeHive from '../../images/employee-hive.png';

const projects = [
    {
        id: 0,
        title: 'Sellout',
        image: sellout,
        repo: 'https://github.com/ZoeRorvig/market-application',
        deployed: 'https://dry-tor-88754.herokuapp.com/',
    },
    {
        id: 1,
        title: 'Melum',
        image: melum,
        repo: 'https://github.com/nalim89/music-player-app',
        deployed: 'https://fierce-caverns-99507.herokuapp.com/',
    },
    {
        id: 2,
        title: 'Note Taker',
        image: noteTaker,
        repo: 'https://github.com/Deiontre10/note-taker',
        deployed: 'https://sleepy-basin-96950.herokuapp.com/',
    },
    {
        id: 3,
        title: 'Tech Hive',
        image: techHive,
        repo: 'https://github.com/Deiontre10/tech-hive',
        deployed: 'https://protected-island-47579.herokuapp.com/',
    },
    {
        id: 4,
        title: 'Employee Hive',
        image: employeeHive,
        repo: 'https://github.com/Deiontre10/employee-hive',
        deployed: 'https://watch.screencastify.com/v/aNCMKI8thlfn6wAAa110',
    },
];

export default function Portfolio() {
    return (
        <div className='pages'>
            <h2>Portfolio</h2>

            <Project projects={projects} />
        </div>
    );
}