import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Description,CustomForm, CustomFormInput, FormContainer, ImageModal } from './styles';

export function CustomModal (){
  return(
    <Dialog.Root defaultOpen>
    <Dialog.Trigger asChild>
      <button className="bg-gray-300">modal</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <Title >
          Titulo
        </Title>
        <Description >
          Digite nome e email para continuar
        </Description>
        <FormContainer>
        <CustomForm >  
          <CustomFormInput type="text" placeholder='nome'/>
          <CustomFormInput type="email" placeholder='email'/>
        </CustomForm>
        <ImageModal src="image-modal.jpg" />
        </FormContainer>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
    )
}
 
