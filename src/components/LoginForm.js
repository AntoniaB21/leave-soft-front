import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function LoginForm() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
            required
            label="Email"
            placeholder="myemail@email.com"
            {...form.getInputProps('email')}
        />
        console.log('form login');
        <TextInput
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
        />

        <Checkbox
            mt="md"
            label="I agree to sell my privacy to this corporation"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Button type="submit">Submit</Button>
    </form>
  );
}