<CFlex
        minH='100vh'
        align='center'
        justify='center'
        bg=useColorModeValue('gray.50', 'gray.800')>
        <CStack spacing=8 mx='auto' maxW='lg' py=12 px=6>
          <CStack align='center'>
            <CHeading fontSize='4xl'>Sign in to your account</CHeading>
            <Text fontSize='lg' color='gray.600'>
              to enjoy all of our cool <CLink color='blue.400'>features</CLink> ✌️
            </Text>
          </CStack>
          <CBox
            rounded='lg'
            bg=useColorModeValue('white', 'gray.700')
            boxShadow='lg'
            p=8>
            <CStack spacing=4>
              <CFormControl id="email">
                <CFormLabel>Email address</CFormLabel>
                <Input type="email" />
              </CFormControl>
              <CFormControl id="password">
                <CFormLabel>Password</CFormLabel>
                <Input type="password" />
              </CFormControl>
              <CStack spacing=10>
                <CStack
                  direction= base: 'column', sm: 'row' 
                  align='start'
                  justify='space-between'>
                  <Checkbox>Remember me</Checkbox>
                  <CLink color='blue.400'>Forgot password?</CLink>
                </CStack>
                <CButton
                  bg='blue.400'
                  color='white'
                  _hover=
                    bg: 'blue.500',
                  >
                  Sign in
                </CButton>
              </CStack>
            </CStack>
          </CBox>
        </CStack>
      </CFlex>