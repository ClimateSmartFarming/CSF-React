import React from 'react';
import type { TeamMember as TeamMemberType } from '../../../data/team';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const handleClick = () => {
    if (member.email) {
      window.location.href = `mailto:${member.email}`;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const initials = member.name
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <div 
      className={styles.teamMember}
      onClick={member.email ? handleClick : undefined}
      onKeyDown={member.email ? handleKeyDown : undefined}
      tabIndex={member.email ? 0 : undefined}
      role={member.email ? "button" : undefined}
      aria-label={member.email ? `Contact ${member.name}` : undefined}
    >
      <div className={styles.teamPhoto}>
        {member.photo ? (
          <img 
            src={member.photo} 
            alt={`${member.name} headshot`}
            className={styles.photoImage}
          />
        ) : (
          <div className={styles.photoPlaceholder}>
            <span className={styles.initials} aria-hidden="true">
              {initials}
            </span>
          </div>
        )}
      </div>
      
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>
          {member.name}
        </h3>
        
        <p className={styles.memberRole}>
          {member.role}
        </p>
        
        {member.email && (
          <div className={styles.contactInfo}>
            <span className={styles.emailIcon} aria-hidden="true">✉</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;