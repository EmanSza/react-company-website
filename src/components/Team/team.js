import React, { useEffect, useMemo } from 'react';

import './team.css';



function Team() {
    const TEAM_MEMBERS = [
        {
            name: 'John Doe',
            title: 'Chief Executive Officer',
            image: require('../../images/people/ceo.jpg'),
            description: 'Guides company strategy and oversees all operations.',
        },
        {
            name: 'Jane Doe',
            title: 'Chief Operating Officer',
            image: require('../../images/people/coo.webp'),
            description: 'Manages daily operations and implements business strategies'
        },
        {
            name: 'John Smith',
            title: 'Chief Financial Officer',
            image: require('../../images/people/cfo.jpg'),
            description: 'Oversees financial planning and maintains company financial health'
        },
        {
            name: 'Bob Smith',
            title: 'Chief Technology Officer',
            image: require('../../images/people/cto.jpg'),
            description: 'Directs technological strategy and innovation initiatives.'
        }
    ]

  return (
    <div className="team" id='team-section'>
        <h2 className='team-title'>Our Team</h2>
        <div className='team-content'>
            {TEAM_MEMBERS.map((member, index) => {
                return (
                    <>
                        <div className='team-card'>
                        <p className='member-title'>{member.title}</p>
                            <div key={index} className='team-member' style={{ backgroundImage: `url(${member.image})`}}>
                                <div className='content-overlay'>
                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
  );
}

export default Team;
