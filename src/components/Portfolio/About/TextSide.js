import { forwardRef, useEffect } from 'react';
import Socials from './Socials';
import { Typography, Stack } from '@mui/material';
import { Logo, InlineLogo } from '../Header/SiteIcon';
import { useSelector } from 'react-redux';
import { selectSkillLogo } from '../../../features/data/selectors';

const TextSide = forwardRef(({ sx }, ref) => {
  const SkillLogo = ({ skill }) => {
    const logoUrl = useSelector(selectSkillLogo(skill));
    const loading = useSelector((state) => state.data.loading);
    return loading || !logoUrl ? null : <InlineLogo url={logoUrl} />;
  };

  return (
    <Stack
      ref={ref}
      sx={[{}, sx]}
      direction="column"
      spacing={2} // Added spacing between text elements
      alignItems="center" // Center text inside the stack
      className="justify-center"
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          color: 'text.secondary',
          textAlign: 'center',
          maxWidth: '600px',
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

      <Socials />
    </Stack>
  );
});

export default TextSide;
