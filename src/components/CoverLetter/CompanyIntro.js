import { Stack } from '@mui/material';
import CoverLetter from './CoverLetter';
import MainTitle from 'components/Portfolio/About/MainTitle';
import VideoWithControls from 'components/Portfolio/About/VideoWithControls';
import { usePlaceholder } from 'PortfolioHooks';
import { useJobApplication } from 'PortfolioHooks';
import Socials from 'components/Portfolio/About/Socials';
import { Animation } from 'components/Portfolio/extra/AnimatedSection';
import { PageBackground } from 'components/Test/PageBackground';
import PortfolioButton from './PortfolioButton';
import Footer from 'components/Portfolio/Footer';

const CompanyIntro = ({
  applicationId = 'c320869b-10cd-4969-83b9-26ca15459c66',
}) => {
  const placeholder = usePlaceholder();

  const application = useJobApplication(applicationId);

  return (
    <Stack
      spacing={0}
      className="relative w-full justify-center items-center overflow-hidden"
    >
      <PageBackground />

      <Stack
        // sx={{ padding: 7 }}
        // spacing={7}
        direction={'column'}
        className="items-center p-9 gap-9"
      >
        <Animation
          id="animation-title"
          name="Slide Down"
          waitForAnimation="dataAndMediaLoaded"
        >
          <MainTitle text={application.title} />
        </Animation>

        <Animation
          id="animation-video"
          name="Fade In Only"
          waitForAnimation="animation-title"
        >
          <VideoWithControls
            videoHeight="70vh"
            aspectRatio=""
            borderRadius={'20px'}
            video={application.video}
          />
        </Animation>

        <PortfolioButton sx={{ fontSize: '20px' }} />

        <CoverLetter application={application} className="w-[65%]" />
        {/* <Socials className="pb-7" fontSize="30px" /> */}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default CompanyIntro;
