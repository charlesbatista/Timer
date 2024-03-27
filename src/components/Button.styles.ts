import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'danger' | 'success' | 'warning'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  success: 'green',
  warning: 'blue',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  color: white;

  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `
  }} */
`
