import React from 'react'

import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

type Props = {
  setEmail: (v: string) => void
  setPassword: (v: string) => void
}

type Account = {
  role: string
  email: string
  password: string
}

const accounts: Account[] = [
  {role: 'Pracownik', email: 'jan@kowalski.com', password: '123456'},
  {role: 'Pracodawca', email: 'anna@kowalska.com', password: '123456'},
]

const DemoAccountsModal = ({setEmail, setPassword}: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const setCredentials = React.useCallback(
    (a: Account) => {
      setEmail(a.email)
      setPassword(a.password)
      onClose()
    },
    [setEmail, setPassword, onClose]
  )

  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme="purple">
        Konta demonstracyjne
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Konta demonstracyjne</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              {accounts.map((a, i) => (
                <HStack key={i} justify="space-between">
                  <Stack spacing={0}>
                    <Text fontSize="xl">{a.role}</Text>
                    <Text>email: {a.email}</Text>
                    <Text>hasło: {a.password}</Text>
                  </Stack>
                  <Button onClick={() => setCredentials(a)}>Użyj</Button>
                </HStack>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DemoAccountsModal
