import {
  Container,
  Code,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import "./App.css";

const App = () => {
  return (
    <>
      <Container maxW="1500px" bg="blue.900" color="white">
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Start
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Code>
                r_drawtracers "1";viewmodel_presetpos "3"; hud_showtargetid "1";
                hud_scaling "1"; fps_max "500"; cl_autohelp "0"; cl_showfps "1";
              </Code>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Crosshair
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Code> CSGO-SZLXx-25PxR-Yyftb-dVwjT-fxwPB</Code>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Viewmodel
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Code>
                viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0;
                viewmodel_offset_z -1.5; viewmodel_presetpos 3; cl_usenewbob
                false; cl_usenewbob 0;
              </Code>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Binds
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Code>
                cl_crosshair_recoil "0"; cl_crosshair_drawoutline "0";
                cl_crosshair_outlinethickness "1"; cl_crosshairusealpha "1";
                cl_crosshair_t "0"; cl_crosshairgap_useweaponvalue "0";
                cl_crosshair_dynamic_splitdist "7"; cl_fixedcrosshairgap "3";
                cl_crosshair_dynamic_splitalpha_innermod "1";
                cl_crosshair_dynamic_splitalpha_outermod "0.5";
              </Code>
              <Code m={2}>
                alias "+jumpaction" "+jump;"; <br /> alias "+throwaction"
                "-attack; <br />
                -attack2"; alias "-jumpaction" "-jump"; <br /> bind "j"
                "+jumpaction;+throwaction;"
              </Code>
              <Code m={2}>
                bind "c" "+duck"; <br /> bind "mwheeldown" "+jump"; <br /> bind
                "mwheelup" "+lookatweapon"; <br />
                bind "mouse4" "+voicerecord";
                <br /> bind "f" "slot7"; <br />
                bind "v" "slot8"; <br />
                bind "ctrl" "slot10"; <br /> bind "space" "slot6" <br />
              </Code>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Hud
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Code m={2}>
                cl_hud_color "4"; cl_hud_radar_scale "0.910000";
                cl_radar_always_centered "1"; cl_radar_icon_scale_min
                "0.500000"; cl_radar_scale "0.4"; cl_radar_rotate "1";
              </Code>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
};
export default App;
