import React from 'react'

export default function Resume() {
    return (
        <div className='container'>
            <div className='row d-flex p-5'>
                <button
                    id="resumeBtn"
                    type='button'
                    className='btn btn-primary btn-lg col-8 m-auto'
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://docs.google.com/document/d/1eHyY7Xqzf3LsNILOvIFOl9cz7zs0cz8m/edit?usp=sharing&ouid=103194257262294768611&rtpof=true&sd=true');
                    }}>
                    Download My Resume
                </button>
            </div>
        </div>
    )
}