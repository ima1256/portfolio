import { forwardRef } from 'react';
import Socials from './Socials';
import { Typography, Stack } from '@mui/material';
import { InlineLogo } from '../Header/SiteIcon';
import { useSkills } from 'PortfolioHooks';
import { Logo } from '../Header/SiteIcon';

const TextSide = forwardRef(({ sx }, ref) => {
  const skills = useSkills();

  const SkillLogo = ({ skill }) => {
    return <InlineLogo url={skills?.all[skill]?.logoUrl} />;
  };

  return (
    <Stack
      ref={ref}
      sx={[
        {
          p: 3,
          maxWidth: { xs: '100%', md: '800px' },
          width: '100%',
          margin: '0 auto',
        },
        sx,
      ]}
      direction="column"
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.4em',
          lineHeight: 1.8,
          color: 'text.secondary',
          textAlign: 'center',
        }}
      >
        As a Full Stack Developer, I specialize in creating responsive,
        user-friendly web apps using technologies like React
        <SkillLogo skill="react" />, Node.js <SkillLogo skill="nodejs" />, and
        MongoDB <SkillLogo skill="mongodb" />. I focus on building scalable
        front-end interfaces and robust back-end systems{' '}
        <SkillLogo skill="backend" />, ensuring clean, maintainable code. I also
        leverage agile methodologies and modern dev tools to deliver efficient,
        high-quality solutions.
      </Typography>

      {/* <Logo url="/fullStackDev.png" height={400} /> */}

      <Socials fontSize="30px" />
    </Stack>
  );
});

export default TextSide;
