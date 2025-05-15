import { forwardRef, useRef } from 'react';
import Socials from './Socials';
import { Typography, Stack, Card } from '@mui/material';
import { InlineLogo } from '../Header/SiteIcon';
import { useSkills } from 'PortfolioHooks';
import { Logo } from '../Header/SiteIcon';
import { BotIcon } from 'components/icons/Icons';
import Card1 from '../Projects/Effects/Card1';

const TextSide = ({ sx }) => {
  const skills = useSkills();

  const ref = useRef(null);

  const SkillLogo = ({ skill }) => {
    return <InlineLogo url={skills?.all[skill]?.logoUrl} />;
  };

  return (
    // <Card1>
    <Stack
      ref={ref}
      sx={{
        maxWidth: { xs: '100%', md: '800px' },
        width: '100%',
        margin: '0px auto',
        ...sx,
      }}
      direction="column"
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Card1>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.4em',
            lineHeight: 1.8,
            color: 'text.secondary',
            textAlign: 'center',
            paddingY: 2,
            paddingX: 3,
          }}
          // className="border border-dashed bg-white p-4 rounded-xl"
        >
          As a Full Stack Developer, I specialize in creating responsive,
          user-friendly web apps using technologies like React
          <SkillLogo skill="react" />, Node.js <SkillLogo skill="nodejs" />, and
          MongoDB <SkillLogo skill="mongodb" />. I focus on building scalable
          front-end interfaces and robust back-end systems{' '}
          <SkillLogo skill="backend" />, ensuring clean, maintainable code. I
          also leverage agile methodologies and modern dev tools to deliver
          efficient, high-quality solutions.
        </Typography>
      </Card1>
      <div className="py-4">
        {/* <div className="cursor-pointer border border-dashed bg-white p-2 rounded-xl"> */}
        <BotIcon />
        {/* </div> */}
      </div>

      {/* <div className="border border-dashed bg-white p-2 rounded-xl"> */}
      <Socials fontSize="30px" />
      {/* </div> */}
    </Stack>
    //{' '}
    // </Card1>
  );
};

export default TextSide;
