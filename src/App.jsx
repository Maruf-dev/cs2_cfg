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
  Text,
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
    content: `r_drawtracers "1";
viewmodel_presetpos "3";
hud_showtargetid "1";
hud_scaling "1";
fps_max "999";
cl_autohelp "0";
cl_showfps "1";
snd_roundend_volume "0.000000";
snd_roundstart_volume "0.000000";
snd_mvp_volume "0.3";
snd_menumusic_volume "0.000000";
snd_deathcamera_volume "0.000000";
sensitivity "0.65";
mm_dedicated_search_maxping "40";`
  },
  {
    id: "crosshair",
    title: "Crosshair",
    content: [
      "CSGO-SZLXx-25PxR-Yyftb-dVwjT-fxwPB",
      "CSGO-NKxya-JNpRw-wtaGC-Dzpyq-QomHB"
    ],
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
      // Crosshair settings
      `cl_crosshair_recoil "0";
cl_crosshair_drawoutline "0";
cl_crosshair_outlinethickness "1";
cl_crosshairusealpha "1";
cl_crosshair_t "0";
cl_crosshairgap_useweaponvalue "0";
cl_crosshair_dynamic_splitdist "7";
cl_fixedcrosshairgap "3";
cl_crosshair_dynamic_splitalpha_innermod "1";
cl_crosshair_dynamic_splitalpha_outermod "0.5";`,

      // Key binds
      `bind "c" "+duck";
bind "mwheeldown" "+jump";
bind "mouse4" "+voicerecord";
bind "f" "slot7";
bind "v" "slot8";
bind "ctrl" "slot10";
bind "space" "slot6";
bind "\\" "noclip";
bind "=" "say ¯\\_(ツ)_/¯";
bind "o" "say now ᴘʟᴀʏɪɴɢ: Who asked (Feat: Nobody) ⚪ ◄◄⠀⏯⠀►►";
bind "p" "say Choose your excuse: 1.Lags | 2.New mouse | 3.Low FPS | 4.Low team | 5.Hacker | 6.Lucker | 7.Smurf | 8.Hitbox | 9.Tickrate";
bind "s" "+back;r_cleardecals";
bind "z" "radio";
bind "mouse3" "player_ping";`
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
    <Box minH="100vh" bg="#181A1B" fontFamily="'Fira Mono', 'Consolas', 'Menlo', monospace">
      {/* Header Bar */}
      <Flex align="center" bg="#111" px={6} py={3} borderBottom="2px solid #00FF99" mb={2} boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" color="#00FF99" letterSpacing="2px">maddyS- Config</Text>
        <Box flex="1" />
        <Text fontSize="sm" color="#888" fontWeight="bold">Chill my boy!</Text>
      </Flex>
      <Container maxW="900px" bg="#23272A" color="#E0E0E0" p={4} borderRadius="md" boxShadow="lg" mt={4}>
        <Accordion allowMultiple>
          {configSections.map((section) => (
            <AccordionItem key={section.id} borderColor="#333" borderRadius="sm">
              <h2>
                <AccordionButton px={3} py={2} _expanded={{ bg: "#222", color: "#00FF99" }} _hover={{ bg: "#222" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                    {section.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} pt={1} px={3}>
                {Array.isArray(section.content) ? (
                  section.content.map((contentItem, idx) => (
                    <CopyableCode key={`${section.id}-${idx}`}>{contentItem}</CopyableCode>
                  ))
                ) : (
                  <CopyableCode>{section.content}</CopyableCode>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default App;