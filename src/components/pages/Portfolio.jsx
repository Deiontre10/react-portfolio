import React from 'react';
import Project from './ProjectCard';
import sellout from '../../images/sellout.png';

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
        image: 'http://via.placeholder.com/640x360',
        repo: 'https://github.com/nalim89/music-player-app',
        deployed: 'https://fierce-caverns-99507.herokuapp.com/',
    },
    {
        id: 2,
        title: 'Socy',
        image: 'http://via.placeholder.com/640x360',
        repo: 'https://github.com/Deiontre10/socy-mongo-api',
        deployed: 'https://drive.google.com/file/d/115ugZgdog9n1-4UF9OwRQSwOFrUHD4UU/view',
    },
    {
        id: 3,
        title: 'Note Taker',
        image: 'http://via.placeholder.com/640x360',
        repo: 'https://github.com/Deiontre10/note-taker',
        deployed: 'https://sleepy-basin-96950.herokuapp.com/',
    },
    {
        id: 4,
        title: 'Tech Hive',
        image: 'http://via.placeholder.com/640x360',
        repo: 'https://github.com/Deiontre10/tech-hive',
        deployed: 'https://protected-island-47579.herokuapp.com/',
    },
    {
        id: 5,
        title: 'Employee Hive',
        image: 'http://via.placeholder.com/640x360',
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