import React from 'react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import TeamMember from './TeamMember';
import { teamMembers } from '../../../data/team';
import styles from './TeamSection.module.css';

interface TeamSectionProps {
  showTitle?: boolean;
  title?: string;
  maxMembers?: number;
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  showTitle = true,
  title = "Meet Our Team",
  maxMembers = 6
}) => {
  const membersToShow = teamMembers.slice(0, maxMembers);

  return (
    <section className={styles.teamSection}>
      <Container>
        {showTitle && (
          <SectionTitle centered>
            {title}
          </SectionTitle>
        )}
        
        <div className={styles.teamDescription}>
          <p>
            Our interdisciplinary team combines expertise in climate science, agricultural meteorology, 
            crop production, and extension education to support New York farmers with practical, 
            science-based solutions for climate adaptation.
          </p>
        </div>
        
        <div className={styles.teamGrid}>
          {membersToShow.map((member) => (
            <TeamMember 
              key={member.id} 
              member={member} 
            />
          ))}
        </div>
        
        {teamMembers.length > maxMembers && (
          <div className={styles.viewAllContainer}>
            <button 
              className={styles.viewAllButton}
              onClick={() => console.log('Navigate to full team page')}
            >
              View Full Team
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default TeamSection;