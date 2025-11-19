import React, { useState } from "react";
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
  Tag,
  SimpleGrid,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import "./App.css";

const InfoStat = ({ label, value }) => (
  <VStack
    spacing={1}
    p={4}
    bg="rgba(23, 24, 28, 0.65)"
    border="1px solid #2F2A3B"
    borderRadius="lg"
  >
    <Text fontSize="sm" color="#9CA3AF" textTransform="uppercase" letterSpacing="0.1em">
      {label}
    </Text>
    <Text fontSize="2xl" fontWeight="bold" color="#F8FAFC">
      {value}
    </Text>
  </VStack>
);

const CopyableCode = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopy = async () => {
    try {
      const textToCopy = children.toString().replace(/<br \/>/g, "\n");
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
    <Box position="relative" my={3}>
      <Flex justify="flex-end" mb={2}>
        <Button
          size="sm"
          onClick={handleCopy}
          leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
          colorScheme="purple"
          variant={isCopied ? "solid" : "outline"}
        >
          {isCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
      <Code display="block" whiteSpace="pre-wrap" p={4} borderRadius="lg" w="100%">
        {children}
      </Code>
    </Box>
  );
};

const configSections = [
  {
    id: "start",
    title: "Startup",
    description: "Essential launch and gameplay baseline settings for a smooth experience.",
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
mm_dedicated_search_maxping "40";`,
  },
  {
    id: "crosshair",
    title: "Crosshair Share Codes",
    description: "Import-ready share codes for my two favorite crosshair variants.",
    content: ["CSGO-Spb4T-sZiy9-kv2wX-t6fDc-LGZML", "CSGO-NKxya-JNpRw-wtaGC-Dzpyq-QomHB"],
  },
  {
    id: "viewmodel",
    title: "Viewmodel",
    description: "Minimal obstruction while keeping hands aligned with the sightline.",
    content:
      "viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0; viewmodel_offset_z -1.5; viewmodel_presetpos 3; cl_usenewbob false; cl_usenewbob 0;",
  },
  {
    id: "binds",
    title: "Key Binds & Crosshair Micro Adjustments",
    description: "Movement cleaning binds, util wheel, comms, and recoil-friendly crosshair defaults.",
    content: [
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
bind "mouse3" "player_ping";`,
    ],
  },
  {
    id: "hud",
    title: "HUD & Radar",
    description: "Radar zoom, icon scale, and HUD coloring for rapid reads.",
    content:
      'cl_hud_color "4"; cl_hud_radar_scale "0.910000"; cl_radar_always_centered "1"; cl_radar_icon_scale_min "0.500000"; cl_radar_scale "0.4"; cl_radar_rotate "1";',
  },
];

const quickStats = [
  { label: "Tick Ready", value: "128" },
  { label: "Refresh", value: "360 Hz" },
  { label: "DPI", value: "1600" },
  { label: "eDPI", value: "1040" },
];

const resourceLinks = [
  { label: "HS DM", url: "https://cybershoke.net/ru/cs2/servers/hsdm" },
  { label: "Utility Lineups", url: "https://www.cs2util.com" },
  { label: "CS2 Tactics", url: "https://www.youtube.com/@CS2Tactics" },
  { label: "Gold CS Nades", url: "https://www.youtube.com/@goldcsnades" },
];

const SectionCard = ({ section }) => (
  <AccordionItem border="none" bg="rgba(15, 15, 20, 0.65)" borderRadius="lg" mb={4} boxShadow="0 0 30px rgba(7, 6, 16, 0.35)">
    <h2>
      <AccordionButton px={5} py={4} _expanded={{ bg: "rgba(120, 119, 198, 0.12)", color: "#F8FAFC" }} borderRadius="lg">
        <Box as="span" flex="1" textAlign="left">
          <Text fontWeight="bold" fontSize="lg">
            {section.title}
          </Text>
          {section.description && (
            <Text fontSize="sm" color="#A5B4FC" mt={1}>
              {section.description}
            </Text>
          )}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={6} px={5} pt={2}>
      {Array.isArray(section.content) ? (
        section.content.map((contentItem, idx) => (
          <CopyableCode key={`${section.id}-${idx}`}>{contentItem}</CopyableCode>
        ))
      ) : (
        <CopyableCode>{section.content}</CopyableCode>
      )}
    </AccordionPanel>
  </AccordionItem>
);

const App = () => {
  return (
    <Box minH="100vh" bg="#05060A" color="#E0E7FF" pb={12}>
      <Box className="hero" px={{ base: 4, md: 8 }} py={12}>
        <Container maxW="1100px" p={0}>
          <Flex direction={{ base: "column", md: "row" }} align="flex-start" gap={8}>
            <Box flex="2">
              <Tag size="lg" variant="subtle" bg="rgba(244, 114, 182, 0.18)" color="#F472B6" mb={6}>
                CS2 Performance Stack
              </Tag>
              <Heading as="h1" size="2xl" color="#F8FAFC" lineHeight={1.1} mb={4}>
                maddyS Config Hub
              </Heading>
              <Text fontSize="lg" color="#CBD5F5" mb={6}>
                A single source of truth for my live Counter-Strike 2 setup. Copy, tweak, and deploy the exact binds,
                crosshair share codes, HUD tuning, and warmup resources I use daily.
              </Text>
              <HStack spacing={4} wrap="wrap">
                <Button colorScheme="purple" size="lg">
                  Download Autoexec
                </Button>
                <Button variant="ghost" color="#F472B6" _hover={{ color: "white", bg: "rgba(244, 114, 182, 0.2)" }}>
                  View Changelog
                </Button>
              </HStack>
            </Box>
            <Box flex="1" minW="250px">
              <SimpleGrid columns={{ base: 2, md: 2 }} spacing={4}>
                {quickStats.map((stat) => (
                  <InfoStat key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW="1100px" mt={-16}>
        <Box bg="rgba(13, 14, 20, 0.95)" borderRadius="2xl" p={{ base: 4, md: 8 }} boxShadow="2xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" gap={4} mb={8}>
            <Heading as="h2" size="lg" color="#E0E7FF">
              Config Library
            </Heading>
            <Divider borderColor="rgba(148, 163, 184, 0.3)" flex="1" />
            <Text color="#94A3B8" fontSize="sm">
              Updated: {new Date().toLocaleDateString()}
            </Text>
          </Flex>
          <Accordion allowMultiple>
            {configSections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </Accordion>
        </Box>

        <Box mt={12} bg="rgba(15, 15, 20, 0.9)" borderRadius="2xl" p={{ base: 4, md: 8 }} boxShadow="2xl">
          <Heading as="h3" size="md" color="#F8FAFC" mb={4}>
            Training Ground
          </Heading>
          <Text color="#A5B4FC" mb={4}>
            Quick links to the routines and creators I rotate through when dialing in aim or new utility.
          </Text>
          <Flex wrap="wrap" gap={3}>
            {resourceLinks.map((resource) => (
              <Button
                key={resource.url}
                as="a"
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                colorScheme="purple"
                size="sm"
              >
                {resource.label}
              </Button>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
