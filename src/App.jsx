import { Container } from "@chakra-ui/react";
import { Code, Stack, Text } from "@chakra-ui/react";
import "./App.css";

const App = () => {
  return (
    <>
      <Container maxW="" bg="blue.900" color="white">
        <Stack direction="column">
          <Text fontSize="2xl">Start </Text>
          <Code>
            r_drawtracers "1"; hud_showtargetid "1"; hud_scaling "1"; fps_max
            "500"; cl_autohelp "0"; cl_showfps "1";
          </Code>

          <Text fontSize="2xl">Cross hair</Text>
          <Code> CSGO-SZLXx-25PxR-Yyftb-dVwjT-fxwPB</Code>

          <Text fontSize="2xl">Viewmodel</Text>

          <Code>
            viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0;
            viewmodel_offset_z -1.5; viewmodel_presetpos 3; cl_usenewbob false;
            cl_usenewbob 0;
          </Code>
          <Text fontSize="2xl">Binds</Text>
          <Code>
            alias "+jumpaction" "+jump;"; alias "+throwaction" "-attack;
            -attack2"; alias "-jumpaction" "-jump"; bind "j"
            "+jumpaction;+throwaction;"
          </Code>
          <Code>
            bind "c" "+duck"; bind "mwheeldown" "+jump"; bind "mwheelup" "+lookatweapon";
          </Code>

          <Text fontSize="2xl">Hud</Text>
          <Code> cl_hud_color "4";
cl_hud_radar_scale "0.910000";
cl_radar_always_centered "1";
cl_radar_icon_scale_min "0.500000";
cl_radar_scale "0.4";
cl_radar_rotate "1";</Code>

        </Stack>
      </Container>
    </>
  );
};
export default App;
