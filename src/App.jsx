import { Container } from '@chakra-ui/react'
import { Code, Stack, Text} from '@chakra-ui/react'
import './App.css'

 const App = () => {

  return(<>
    <Container maxW='' bg='blue.900' color='white'>
      <Stack direction='column'>
      <Text fontSize='2xl'>Cross hair</Text>
      <Code> CSGO-SZLXx-25PxR-Yyftb-dVwjT-fxwPB


      </Code>

      <Text fontSize='2xl'>
        Viewmodel
      </Text>

        <Code>
        viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0; viewmodel_offset_z -1.5; viewmodel_presetpos 3; cl_usenewbob false;
        </Code>

      </Stack>
  </Container>

    </>)
}
export default App;