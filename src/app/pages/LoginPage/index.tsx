/**
 *
 * LoginPage
 *
 */
 import React, { memo, useEffect } from 'react';
 import styled from 'styled-components/macro';
 import { TextInput, PasswordInput, Button, Title, Center } from '@mantine/core';
 import { useForm } from '@mantine/hooks';
 import { useLoginPageSlice } from './slice';
 import { useDispatch, useSelector } from 'react-redux';
 import { selectLoginPage } from './slice/selectors';
 import { selectGlobal } from 'app/slice/selectors';
 import { RouteComponentProps } from 'react-router';
import { Logo } from 'app/components/Logo/Loadable';
 
 interface Props extends RouteComponentProps<any> {}
 
 export const LoginPage = memo((props: Props) => {
   const { actions } = useLoginPageSlice();
   const dispatch = useDispatch();
   const { loading } = useSelector(selectLoginPage);
   const { user } = useSelector(selectGlobal);
 
   useEffect(() => {
     if (user) {
       props.history.push('/');
     }
 
   }, [user]);
 
   const form = useForm({
     initialValues: {
       email: '',
       password: '',
     },
 
     validationRules: {
       email: value => /^\S+@\S+$/.test(value),
     },
   });
 
   const handleSubmit = async (values: typeof form['values']) => {
      dispatch(actions.signInRequest(values));
   };
 
   return (
     <Div>
       <FormWrapper>
         <Center>
           <Logo/>
         </Center>
         <Center>
           <Title order={2}>Login</Title>
         </Center>
         <form onSubmit={form.onSubmit(handleSubmit)}>
           <TextInput
             required
             label="Email"
             placeholder="your@email.com"
             {...form.getInputProps('email')}
           />
           <PasswordInput
             placeholder="Password"
             label="Password"
             required
             {...form.getInputProps('password')}
           />
           <Center>
             <Button
               sx={{
                 marginTop: '15px',
               }}
               type="submit"
               loading={loading}
             >
               Login
             </Button>
           </Center>
         </form>
       </FormWrapper>
     </Div>
   );
 });
 
 const Div = styled.div`
   padding: 50px;
 `;
 
 const FormWrapper = styled.div`
   width: 70%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 `;
 