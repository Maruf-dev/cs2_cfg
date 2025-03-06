import React, { useState } from 'react';
import {
  Container,
  Code,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  useToast,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import "./App.css";

// Reusable component for code blocks with copy functionality
const CopyableCode = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopy = async () => {
    try {
      // Strip out any <br /> tags and replace with actual line breaks
      const textToCopy = children.toString().replace(/<br \/>/g, '\n');
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      toast({
        title: "Copied to clipboard",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box position="relative" my={2}>
      <Flex justify="flex-end" mb={1}>
        <Button
          size="sm"
          onClick={handleCopy}
          leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
          colorScheme={isCopied ? "green" : "blue"}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
      <Code
        display="block"
        whiteSpace="pre-wrap"
        p={3}
        borderRadius="md"
        w="100%"
      >
        {children}
      </Code>
    </Box>
  );
};

// Data structure for organized config sections
const configSections = [
  {
    id: "chill",
    title: "Chill",
    content: "https://youtube.com/playlist?list=PLvM8g9_dsD_iat2TRMVMjai0lwrOgUc7i&si=0_H-JKVQMd7x-uf1"
  },
  {
    id: "start",
    title: "Start",
    content: "r_drawtracers \"1\";viewmodel_presetpos \"3\"; hud_showtargetid \"1\"; hud_scaling \"1\"; fps_max \"500\"; cl_autohelp \"0\"; cl_showfps \"1\";"
  },
  {
    id: "crosshair",
    title: "Crosshair",
    content: "CSGO-SZLXx-25PxR-Yyftb-dVwjT-fxwPB"
  },
  {
    id: "viewmodel",
    title: "Viewmodel",
    content: "viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0; viewmodel_offset_z -1.5; viewmodel_presetpos 3; cl_usenewbob false; cl_usenewbob 0;"
  },
  {
    id: "binds",
    title: "Binds",
    content: [
      "cl_crosshair_recoil \"0\"; cl_crosshair_drawoutline \"0\"; cl_crosshair_outlinethickness \"1\"; cl_crosshairusealpha \"1\"; cl_crosshair_t \"0\"; cl_crosshairgap_useweaponvalue \"0\"; cl_crosshair_dynamic_splitdist \"7\"; cl_fixedcrosshairgap \"3\"; cl_crosshair_dynamic_splitalpha_innermod \"1\"; cl_crosshair_dynamic_splitalpha_outermod \"0.5\";",
      "bind \"c\" \"+duck\";\nbind \"mwheeldown\" \"+jump\";\nbind \"mwheelup\" \"+lookatweapon\";\nbind \"mouse4\" \"+voicerecord\";\nbind \"f\" \"slot7\";\nbind \"v\" \"slot8\";\nbind \"ctrl\" \"slot10\";\nbind \"space\" \"slot6\""
    ]
  },
  {
    id: "hud",
    title: "Hud",
    content: "cl_hud_color \"4\"; cl_hud_radar_scale \"0.910000\"; cl_radar_always_centered \"1\"; cl_radar_icon_scale_min \"0.500000\"; cl_radar_scale \"0.4\"; cl_radar_rotate \"1\";"
  }
];

const App = () => {
  return (
    <Container maxW="1500px" bg="blue.900" color="white" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>maddyS- Config</Heading>

      <Accordion allowMultiple>
        {configSections.map((section) => (
          <AccordionItem key={section.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  {section.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Array.isArray(section.content) ? (
                section.content.map((contentItem, idx) => (
                  <CopyableCode key={`${section.id}-${idx}`}>
                    {contentItem}
                  </CopyableCode>
                ))
              ) : (
                <CopyableCode>{section.content}</CopyableCode>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default App;